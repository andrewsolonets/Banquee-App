import { BlogItemPreview } from "../../components/BlogItemPreview";
import { ButtonTextM } from "../../components/Button";
import image from "../../assets/image.png";
import { blogPreviews } from "../../utils/content";

export const Blog = () => {
  return (
    <section className="flex flex-col items-center gap-16 border-y border-grey px-40 py-40 text-black-txt 2xl:px-60">
      <div className="flex w-full justify-between">
        <h2 className="font-heading text-6xl leading-tight tracking-tight ">
          Blog
        </h2>
        <ButtonTextM>All Articles</ButtonTextM>
      </div>
      <div className="flex w-full items-start gap-8">
        {blogPreviews.map((el, i) => (
          <BlogItemPreview
            img={el.img}
            title={el.title}
            txt={el.txt}
            categories={el.categories}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};
