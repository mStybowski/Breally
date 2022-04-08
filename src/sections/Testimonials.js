const Testimonials = (props) => {
  return (
    <>
      <h1>Testimonials</h1>
      <h3>{props.text}</h3>
      <p>author: {props.author}</p>
    </>
  );
};

export default Testimonials;
