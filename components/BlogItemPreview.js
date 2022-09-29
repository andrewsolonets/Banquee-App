import Image from "next/image";

export const BlogItemPreview = ({ title, img, txt, categories }) => {
  return (
    <div className="max-w- flex w-1/3 flex-col gap-6">
      <Image src={img} alt={"blogimg"} className="rounded-2xl" />
      <div className="flex flex-col items-start gap-2">
        <h5 className="font-heading text-3xl tracking-tighter">{title}</h5>
        <p className="leading-tight tracking-wide">{txt}</p>
      </div>
      <div className="flex gap-2">
        {categories.map((el, i) => (
          <span
            className="rounded-md bg-white-bgMuted px-3 py-1 font-medium"
            key={i}
          >
            {el}
          </span>
        ))}
      </div>
    </div>
  );
};
