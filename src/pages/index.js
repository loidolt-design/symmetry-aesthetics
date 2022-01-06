import Layout from "../components/Layout/Layout";
import SliderOne from "../components/Sections/Slider/SliderOne";
import sliderData from "../data/slider/sliderData.json";
import CategoriesTwo from "../components/Sections/Categories/CategoriesTwo";
import categoriesTwodata from "../data/categories/categoryTwo.json";
import IntroductionOne from "../components/Sections/Introduction/IntroductionOne";
import introductionOneData from "../data/introduction/introductionOne.json";
import IntroductionTwo from "../components/Sections/Introduction/IntroductionTwo";
import introductionTwoData from "../data/introduction/introductionTwo.json";
import TestimonialOne from "../components/Sections/Testimonial/TestimonialOne";
import testimonialOneData from "../data/testimonial/data.json";
import TeamOne from "../components/Sections/Team/TeamOne";
import teamOneData from "../data/team/teamOne.json";
import CTAOne from "../components/Sections/CallToAction/CTAOne";

export default function homepage() {
  return (
    <Layout title="Symmetry Aesthetics">
      <SliderOne data={sliderData} className="-style-5" />
      <CategoriesTwo data={categoriesTwodata} />
      <IntroductionOne data={introductionOneData} />
      <IntroductionTwo data={introductionTwoData} />
      <TeamOne data={teamOneData} />
      <TestimonialOne data={testimonialOneData} />
      <CTAOne />
    </Layout>
  );
}
