import Home01 from "./Home01";
import Home02 from "./Home02";
import AboutUs from "./AboutUs";
import AboutDetails from "./AboutDetails";
import AboutTeam from "./AboutTeam";
import AboutCarres from "./AboutCarres";
import Services from "./Services";
import ServiceDetail from "./ServiceDetail";
import Projects from "./Projects";
import ProjectFullWidth from "./ProjectFullWidth";
import ProjectDetail from "./ProjectDetail";
import Testimonial from "./Testimonial";
import PricePage from "./PricePage";
import Blog from "./Blog";
import BlogSingle from "./BlogSingle";
import Contact01 from "./Contact01";
import Contact02 from "./Contact02";

const routes = [
  { path: "/", component: Home02 },
  { path: "/home-02", component: Home01 },
  { path: "/about-us", component: AboutUs },
  { path: "/about-detail", component: AboutDetails },
  { path: "/about-team", component: AboutTeam },
  { path: "/careers", component: AboutCarres },
  { path: "/services", component: Services },
  { path: "/services-detail-:id", component: ServiceDetail },
  { path: "/machineries", component: Projects },
  { path: "/products", component: ProjectFullWidth },
  { path: "/project-detail", component: ProjectDetail },
  { path: "/page-testimonial", component: Testimonial },
  { path: "/page-pricing", component: PricePage },
  { path: "/blog", component: Blog },
  { path: "/blog-single", component: BlogSingle },
  { path: "/contact-01", component: Contact01 },
  { path: "/contact-02", component: Contact02 },
];

export default routes;
