import ArrowRight from "../assets/ArrowRight";

export const ButtonS = ({ children, bgColor = "bg-primary" }) => {
  return (
    <button
      className={`px-4 py-2 ${bgColor} text-white rounded-md font-heading  tracking-tight`}
    >
      {children}
    </button>
  );
};

export const ButtonM = ({ children, bgColor = "bg-primary" }) => {
  return (
    <button
      className={`px-6 py-3 ${bgColor} text-white rounded-md text-lg font-heading  tracking-tight`}
    >
      {children}
    </button>
  );
};

export const ButtonTextS = ({ children }) => {
  return (
    <button className="font-heading text-primary flex items-center gap-2 tracking-tight">
      {children} <ArrowRight className="fill-primary w-5" />
    </button>
  );
};

export const ButtonTextM = ({ children }) => {
  return (
    <button className="font-heading text-lg text-primary flex items-center gap-2 tracking-tight">
      {children} <ArrowRight className="fill-primary w-6" />
    </button>
  );
};
