import Link from "next/link";
import { AnimationContainer } from "../../core/AnimationContainer";
import { BlogItemPreview } from "../../core/BlogItemPreview";
import { ButtonTextM } from "../../core/Button";
import { blogPosts } from "../../utils/content";

export const Blog = ({ heading = "Blog" }) => {
  return (
    <section className="flex flex-col items-center gap-16  pb-40 text-black-txt">
      <div className="flex w-full justify-between">
        <AnimationContainer>
          <h2 className=" text-center font-heading text-[2.5rem] leading-tight tracking-tight  sm:text-5xl md:text-left lg:text-6xl 2xl:text-7xl ">
            {heading}
          </h2>
        </AnimationContainer>
        <AnimationContainer className="flex items-center justify-center">
          <Link href="/blog">
            <a>
              <ButtonTextM>All Articles</ButtonTextM>
            </a>
          </Link>
        </AnimationContainer>
      </div>
      <AnimationContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map(
          (el, i) =>
            i <= 2 && (
              <BlogItemPreview
                img={el.img}
                title={el.title}
                txt={el.summary}
                categories={el.categories}
                id={el.id}
                key={i}
              />
            )
        )}
      </AnimationContainer>
    </section>
  );
};
