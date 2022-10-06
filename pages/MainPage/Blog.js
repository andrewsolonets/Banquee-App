import { BlogItemPreview } from "../../components/BlogItemPreview";
import { ButtonTextM } from "../../components/Button";
import { blogPosts } from "../../utils/content";

export const Blog = ({ heading = "Blog" }) => {
  return (
    <section className="flex flex-col items-center gap-16  pb-40 text-black-txt">
      <div className="flex w-full justify-between">
        <h2 className=" text-center font-heading text-[2.5rem] leading-tight tracking-tight  sm:text-5xl md:text-left lg:text-6xl 2xl:text-7xl ">
          {heading}
        </h2>
        <ButtonTextM>All Articles</ButtonTextM>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  );
};
