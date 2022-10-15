import ArrowRight from "../assets/ArrowRight";

export const ButtonS = ({ children, bgColor = "bg-primary", special }) => {
  return (
    <button
      className={`px-4 py-2 ${bgColor} box-border hover:${bgColor} rounded-md font-heading tracking-tight ${special} text-white`}
    >
      {children}
    </button>
  );
};

export const ButtonM = ({ children, bgColor = "bg-primary" }) => {
  return (
    <button
      className={`px-6 py-3 ${bgColor} box-border rounded-md font-heading text-lg tracking-tight  text-white`}
    >
      {children}
    </button>
  );
};

export const ButtonTextS = ({ children }) => {
  return (
    <button className="flex items-center gap-2 font-heading tracking-tight text-primary">
      {children} <ArrowRight className="w-5 fill-primary" />
    </button>
  );
};

export const ButtonTextM = ({ children }) => {
  return (
    <button className="flex items-center gap-2 font-heading text-lg tracking-tight text-primary">
      {children} <ArrowRight className="w-6 fill-primary" />
    </button>
  );
};

export const ButtonInvertM = ({ children }) => {
  return (
    <button
      className={`box-border rounded-md border-2 border-grey bg-white px-6 py-3 font-heading text-lg font-medium tracking-tight text-black-txt`}
    >
      {children}
    </button>
  );
};
