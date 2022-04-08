// import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import auth from "../auth";

import Hero from "./sections/Hero";
import Newsletter from "./sections/Newsletter";
import Testimonials from "./sections/Testimonials";

const Page = ({ id: pageId }) => {
  const { credentials } = auth;
  const Authorization = `Basic ${new Buffer.from(credentials).toString(
    "base64"
  )}`;

  const [sectionsObj, setSectionObj] = useState(null);

  useEffect(() => {
    fetch(`https://adchitects-cms.herokuapp.com/page/${pageId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((body) => setSectionObj(body));
  }, []);

  const pageComponents = sectionsObj
    ? sectionsObj.sections.map((sectionObject) => {
        const sectionType = sectionObject.type;
        let sectionComponent;
        switch (sectionType) {
          case "hero":
            sectionComponent = <Hero key={sectionType} {...sectionObject} />;
            break;
          case "testimonial":
            sectionComponent = (
              <Testimonials key={sectionType} {...sectionObject} />
            );
            break;
          case "newsletter":
            sectionComponent = (
              <Newsletter key={sectionType} {...sectionObject} />
            );
            break;
          default:
            null;
        }
        return sectionComponent;
      })
    : null;

  return <>{pageComponents}</>;
};

export default Page;
