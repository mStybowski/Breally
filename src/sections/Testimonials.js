import quotationMark from "../assets/quotation-mark.svg";
import "./Testimonials.css";

const Testimonials = (props) => {
  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-content">
        <img src={quotationMark} alt="quotation mark" />
        <p className="testimonials-text">{props.text}</p>
        <p className="author">{props.author}</p>
      </div>
    </div>
  );
};

export default Testimonials;
