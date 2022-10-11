import { useRouter } from "next/router";
import { Link } from "react-scroll";
import { blogPosts } from "../utils/content";

export const CategoriesList = () => {
  const router = useRouter();
  console.log(router.query?.category);
  let setCategories = new Set();
  blogPosts.map((el, i) => {
    el.categories.forEach((el) => setCategories.add(el));
  });
  return (
    <div className="flex gap-2">
      {Array.from(setCategories).map((el, i) => (
        <Link href={`/blog/categories/${el}`} key={i}>
          <a
            className={`rounded-md  px-3 ${
              router?.query?.category === el
                ? "bg-black-txt text-white"
                : "bg-white-bgMuted"
            } py-1 font-medium capitalize`}
          >
            {el}
          </a>
        </Link>
      ))}
    </div>
  );
};
