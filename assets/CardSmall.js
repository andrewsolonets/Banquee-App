import * as React from "react";

function CardSmall(props) {
  return (
    <svg
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.5 4.224h21a1.167 1.167 0 011.167 1.166v18.667a1.167 1.167 0 01-1.167 1.167h-21a1.167 1.167 0 01-1.167-1.167V5.39A1.167 1.167 0 013.5 4.224zm19.834 10.5H4.666v8.166h18.666v-8.166zm0-4.667v-3.5H4.666v3.5h18.666z"
        fill="#5BB5A2"
      />
    </svg>
  );
}

export default CardSmall;
