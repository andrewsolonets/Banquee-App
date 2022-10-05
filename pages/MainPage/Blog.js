import { BlogItemPreview } from "../../components/BlogItemPreview";
import { ButtonTextM } from "../../components/Button";
import { blogPosts } from "../../utils/content";

export const Blog = ({ heading = "Blog" }) => {
  return (
    <section className="flex flex-col items-center gap-16  pb-40 text-black-txt">
      <div className="flex w-full justify-between">
        <h2 className="font-heading text-6xl leading-tight tracking-tight ">
          {heading}
        </h2>
        <ButtonTextM>All Articles</ButtonTextM>
      </div>
      <div className="flex w-full items-start gap-8">
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
