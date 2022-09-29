import * as React from "react";

function Cross(props) {
  return (
    <svg
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 5.15L11.95.2l1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414L7 7.978l-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L2.05.2 7 5.15z"
        fill="#5BB5A2"
      />
    </svg>
  );
}

export default Cross;
