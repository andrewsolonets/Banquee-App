export const BadgeL = ({ children, bg = "bg-primary-light" }) => {
  return <div className={`w-fit rounded-full ${bg} p-2.5`}>{children}</div>;
};

export const BadgeS = ({ children, bg = "bg-primary-light" }) => {
  return <div className={`p-1 ${bg} w-fit rounded-full`}>{children}</div>;
};

export const BadgeTrans = ({ children }) => {
  return <div className="w-fit rounded-lg bg-primary p-3">{children}</div>;
};

export const BadgeCompany = ({ children, bg = "bg-white-bgMuted" }) => {
  return (
    <div
      className={`p-4 ${bg} flex h-16 w-fit items-center justify-center rounded-xl `}
    >
      {children}
    </div>
  );
};
