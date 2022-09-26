import * as React from "react";

function PlusIcon(props) {
  return (
    <svg
      width={40}
      height={41}
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y={0.723633} width={40} height={40} rx={20} fill="#1A191E" />
      <path d="M19 19.724v-6h2v6h6v2h-6v6h-2v-6h-6v-2h6z" fill="#fff" />
    </svg>
  );
}

export default PlusIcon;
