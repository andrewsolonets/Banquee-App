import { BlogItemPreview } from "../../components/BlogItemPreview";
import { blogPosts, blogPreviews } from "../../utils/content";
import Link from "next/link";

export const MainBlog = () => {
  return (
    <section className="flex flex-col  items-start gap-16 px-5 pb-20 md:px-20  2xl:px-60">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2  lg:grid-cols-3">
        {blogPosts.map((el, i) => (
          <BlogItemPreview
            img={el.img}
            title={el.title}
            txt={el.summary}
            categories={el.categories}
            id={el.id}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};
