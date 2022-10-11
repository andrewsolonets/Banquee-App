import { AnimationContainer } from "../../components/AnimationContainer";
import { MainBlog } from "./MainBlog";

const BlogPage = () => {
  return (
    <div>
      <AnimationContainer className="w-full py-24 text-center">
        <h2 className="font-heading text-6xl leading-tight tracking-tight">
          Blog
        </h2>
      </AnimationContainer>
      <MainBlog />
    </div>
  );
};

export default BlogPage;
