const Hero = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
      <h3>{props.text}</h3>
      <img alt={props.text} src={props.img}></img>
    </>
  );
};

export default Hero;
