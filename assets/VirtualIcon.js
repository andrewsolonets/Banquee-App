import * as React from "react";

function VirtualIcon(props) {
  return (
    <svg
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23.333 10.233v-3.5H4.666v3.5h18.667zm0 2.334H4.666v10.5h18.667v-10.5zM3.5 4.4h21a1.167 1.167 0 011.166 1.167v18.666A1.167 1.167 0 0124.5 25.4h-21a1.167 1.167 0 01-1.167-1.166V5.566A1.167 1.167 0 013.5 4.4zm9.333 12.833h7v2.334H7.583l5.25-5.25v2.916z" />
    </svg>
  );
}

export default VirtualIcon;
