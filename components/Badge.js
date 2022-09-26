export const BadgeL = ({ children }) => {
  return (
    <div className="p-2.5 bg-primary-light rounded-full w-fit">{children}</div>
  );
};

export const BadgeS = ({ children, bg = "bg-primary-light" }) => {
  return <div className={`p-1 ${bg} rounded-full w-fit`}>{children}</div>;
};

export const BadgeTrans = ({ children }) => {
  return <div className="p-3 w-fit rounded-lg bg-primary">{children}</div>;
};
