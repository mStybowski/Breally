import { useParams } from "react-router-dom";

const SomePage = () => {
  const { id } = useParams();

  return (
    <>
      <h1>somePage!</h1>
      <h2>{id}</h2>
    </>
  );
};

export default SomePage;
