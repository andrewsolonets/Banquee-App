import Link from "next/link";
import { AnimationContainer } from "../../components/AnimationContainer";
import { BlogItemPreview } from "../../components/BlogItemPreview";
import { CategoriesList } from "../../components/CategoriesList";
import { blogPosts } from "../../utils/content";

export const MainBlog = () => {
  return (
    <section className="flex flex-col  items-start gap-16 px-5 pb-20 md:px-20  2xl:px-60">
      <CategoriesList />
      <AnimationContainer className="grid grid-cols-1 gap-8 sm:grid-cols-2  lg:grid-cols-3">
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
      </AnimationContainer>
    </section>
  );
};
