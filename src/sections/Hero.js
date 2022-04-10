import "./Hero.css";

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="half-flex">
          <h1 className="hero-text">{props.text}</h1>
        </div>
        <div className="half-flex">
          <img alt={props.text} src={props.img}></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
