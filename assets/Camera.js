import * as React from "react";

function CameraIcon(props) {
  return (
    <svg
      width={54}
      height={55}
      viewBox="0 0 54 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_618_310)">
        <path
          d="M0 15.724s0-6 6-6h42s6 0 6 6v27s0 6-6 6H6s-6 0-6-6v-27z"
          fill="#31373D"
        />
        <path
          d="M31.5 44.224c8.284 0 15-6.716 15-15 0-8.285-6.716-15-15-15-8.284 0-15 6.715-15 15 0 8.284 6.716 15 15 15z"
          fill="#CCD6DD"
        />
        <path
          d="M31.5 41.224c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12s-12 5.372-12 12c0 6.627 5.373 12 12 12z"
          fill="#31373D"
        />
        <path
          d="M31.5 36.724a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
          fill="#3B88C3"
        />
        <path
          d="M48.75 17.224a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
          fill="#fff"
        />
        <path
          d="M24 14.224l4.5-9-9 3-6-7.5-3 7.5-9-1.5 6 9-7.5 6h9l-3 9 9-4.5 9 7.5-1.5-12 9-1.5-7.5-6z"
          fill="#FFAC33"
        />
        <path
          d="M15 21.724l-4.5 3 1.5-4.5-4.5-1.5 4.5-3-4.5-4.5h6l1.5-4.5 3 4.5 4.5-1.5-3 4.5 4.5 4.5-4.5 1.5 1.5 6-6-4.5z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="clip0_618_310">
          <path fill="#fff" transform="translate(0 .724)" d="M0 0H54V54H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CameraIcon;
