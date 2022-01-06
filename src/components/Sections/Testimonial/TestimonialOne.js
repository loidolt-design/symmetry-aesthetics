import SectionTitleOne from "../SectionTitle/SectionTitleOne";
import TestimonialSlider from "./Elements/TestimonialSlider";

export default function TestimonialOne({ data, style }) {
  return (
    <div className="testimonial" style={style}>
      <div className="container">
        <SectionTitleOne align="center">
          Happy Clients
        </SectionTitleOne>
        <TestimonialSlider data={data} showArrows />
      </div>
    </div>
  );
}
