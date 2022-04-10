import { useState, useEffect } from "react";
import { initialFetch } from "./InitialFetch";

import Hero from "./sections/Hero";
import Newsletter from "./sections/Newsletter";
import Testimonials from "./sections/Testimonials";

const Page = ({ id: pageId }) => {
  const [sectionsObj, setSectionObj] = useState(null);

  useEffect(() => {
    initialFetch(`page/${pageId}`)
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
