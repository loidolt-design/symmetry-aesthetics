import Layout from "../components/Layout/Layout";
import { Breadcrumb, BreadcrumbItem } from "../components/Other/Breadcrumb";
import IntroductionOne from "../components/Sections/Introduction/IntroductionOne";
import introductionOneData from "../data/introduction/introductionOne.json";
import TeamOne from "../components/Sections/Team/TeamOne";
import teamOneData from "../data/team/teamOne.json";
import InstagramOne from "../components/Sections/Instagram/InstagramOne";

export default function () {
  return (
    <Layout title="About us">
      <Breadcrumb title="About us">
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="About us" current />
      </Breadcrumb>
      <IntroductionOne data={introductionOneData} />
      <TeamOne data={teamOneData} />
      <InstagramOne />
    </Layout>
  );
}
