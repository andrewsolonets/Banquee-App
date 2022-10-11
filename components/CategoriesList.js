import Link from "next/link";
import { useRouter } from "next/router";
import { blogPosts } from "../utils/content";

export const CategoriesList = () => {
  const router = useRouter();
  let setCategories = new Set();

  blogPosts.map((el, i) => {
    el.categories.forEach((el) => setCategories.add(el));
  });
  let categories = Array.from(setCategories);
  return (
    <div className="flex gap-2">
      <Link href="/blog">
        <a
          className={`flex justify-center rounded-md py-2  px-3 ${
            router.pathname === "/blog"
              ? "bg-black-txt text-white"
              : "bg-white-bgMuted"
          }  font-medium capitalize`}
        >
          All
        </a>
      </Link>
      {categories.map((el, i) => (
        <Link href={`/blog/categories/${el}`} key={i}>
          <a
            className={`rounded-md  px-3 ${
              router?.query?.category === el
                ? "bg-black-txt text-white"
                : "bg-white-bgMuted"
            } flex justify-center py-2 font-medium capitalize`}
          >
            {el}
          </a>
        </Link>
      ))}
    </div>
  );
};
