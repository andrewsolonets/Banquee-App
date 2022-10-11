import { useRouter } from "next/router";
import { Link } from "react-scroll";
import { AnimationContainer } from "../../../../core/AnimationContainer";
import { BlogItemPreview } from "../../../../core/BlogItemPreview";
import { CategoriesList } from "../../../../components/CategoriesList";
import { blogPosts } from "../../../../utils/content";

const CategoryBlog = ({ filteredPosts }) => {
  return (
    <section className="flex flex-col  items-start gap-16 px-5 pb-20 md:px-20  2xl:px-60">
      <CategoriesList />
      <AnimationContainer className="grid grid-cols-1 gap-8 sm:grid-cols-2  lg:grid-cols-3">
        {filteredPosts.map((el, i) => (
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

export const getStaticPaths = async () => {
  let setCategories = new Set();
  blogPosts.map((el, i) => {
    el.categories.forEach((el) => setCategories.add(el));
  });
  return {
    fallback: "blocking",
    paths: Array.from(setCategories).map((category) => ({
      params: { category: category },
    })),
  };
};

export const getStaticProps = async (context) => {
  const categoryName = context.params.category;

  const filteredPosts = blogPosts.filter((el) =>
    el.categories.includes(categoryName)
  );

  return {
    props: {
      filteredPosts,
    },
  };
};
export default CategoryBlog;
