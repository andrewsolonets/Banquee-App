import { useRouter } from "next/router";
import { blogPosts } from "../../../utils/content";
import Image from "next/image";
import { BadgeL, BadgeS } from "../../../components/Badge";
import TwitterIcon from "../../../assets/TwitterIcon";
import FacebookIcon from "../../../assets/FacebookIcon";
import InstaIcon from "../../../assets/InstaIcon";
import { ShareSection } from "../../../components/Share";
import { Blog } from "../../MainPage/Blog";

const BlogPost = ({ blogPostData }) => {
  const router = useRouter();
  console.log(blogPostData);

  return (
    <section className="flex flex-col items-center gap-16 py-24 px-40">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex gap-1">
            {blogPostData.categories.map((el, i) => (
              <span
                className="rounded-md bg-primary-light px-3 py-1 font-medium text-primary"
                key={i}
              >
                {el}
              </span>
            ))}
          </div>
          <h2 className="w-4/5 font-heading text-6xl leading-tight tracking-tight">
            {blogPostData.title}
          </h2>
        </div>
        <p className="w-3/5 text-center text-xl">{blogPostData.summary}</p>
      </div>
      <Image
        src={blogPostData.image}
        alt={blogPostData.title}
        className="rounded-2xl"
      />
      <div className="flex w-3/5 flex-col gap-8">
        <h4 className=" font-heading text-2xl leading-tight tracking-tight">
          {blogPostData.section1Heading}
        </h4>
        <p className="text-lg leading-relaxed">{blogPostData.text1}</p>
        <h4 className=" font-heading text-2xl leading-tight tracking-tight">
          {blogPostData.section2Heading}
        </h4>
        <p className="text-lg leading-relaxed">{blogPostData.text2}</p>
      </div>
      <ShareSection />
      <Blog heading={"Related"} />
    </section>
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: blogPosts.map((blog) => ({
      params: { blogPost: blog.id },
    })),
  };
};

export const getStaticProps = async (context) => {
  const blogPostId = context.params.blogPost;

  const selectedPost = blogPosts.find((el) => el.id === blogPostId);

  return {
    props: {
      blogPostData: {
        id: selectedPost.id,
        title: selectedPost.title,
        image: selectedPost.imageBig,
        section1Heading: selectedPost.section1Heading,
        section2Heading: selectedPost.section2Heading,
        text1: selectedPost.text1,
        text2: selectedPost.text2,
        summary: selectedPost.summary,
        categories: selectedPost.categories,
      },
    },
  };
};

export default BlogPost;
