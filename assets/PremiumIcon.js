import * as React from "react";

function PremiumIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 23.567C5.556 23.567.333 18.344.333 11.9.333 5.457 5.556.233 12 .233c6.443 0 11.666 5.224 11.666 11.667 0 6.444-5.223 11.667-11.666 11.667zm0-2.334a9.333 9.333 0 100-18.666 9.333 9.333 0 000 18.666zm-3.5-14h7l2.916 4.084L12 17.733l-6.417-6.416L8.5 7.233zM9.7 9.567l-1.073 1.505L12 14.443l3.371-3.371-1.073-1.505H9.701z"
        fill="#5BB5A2"
      />
    </svg>
  );
}

export default PremiumIcon;
