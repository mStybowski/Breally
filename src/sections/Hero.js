const Hero = (props) => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <h1>{props.text}</h1>
        <img alt={props.text} src={props.img}></img>
      </div>
    </div>
  );
};

export default Hero;
