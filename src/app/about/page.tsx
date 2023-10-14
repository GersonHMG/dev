import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import Testimonials from "@/partials/Testimonials";
import CallToAction from "@/partials/CallToAction";
import Script from 'next/script';


const About = () => {
  const data: RegularPage = getListPage("about/_index.md");
  const testimonial = getListPage("sections/caracteristicas.md");
  const callToAction = getListPage("sections/call-to-action.md");

  const { frontmatter, content } = data;
  const { title, meta_title, description, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <CallToAction data={callToAction} />
      <Testimonials data={testimonial} />
    </>
  );
};

export default About;
