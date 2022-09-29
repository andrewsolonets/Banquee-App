import * as React from "react";

function MasterCardIcon(props) {
  return (
    <svg
      width={42}
      height={26}
      viewBox="0 0 42 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_703_806)">
        <path d="M26.487 2.726H15.598V22.29h10.89V2.726z" fill="#FF5A00" />
        <path
          d="M16.323 12.508c0-3.975 1.868-7.503 4.736-9.782A12.377 12.377 0 0013.383.064C6.505.064.94 5.629.94 12.508c0 6.878 5.566 12.443 12.444 12.443 2.904 0 5.566-1.003 7.676-2.662a12.419 12.419 0 01-4.736-9.781z"
          fill="#EB001B"
        />
        <path
          d="M41.178 12.508c0 6.878-5.566 12.443-12.444 12.443a12.377 12.377 0 01-7.675-2.662 12.376 12.376 0 004.735-9.781c0-3.975-1.868-7.503-4.735-9.782A12.357 12.357 0 0128.73.064c6.882 0 12.448 5.602 12.448 12.444z"
          fill="#F79E1B"
        />
      </g>
      <defs>
        <clipPath id="clip0_703_806">
          <path
            fill="#fff"
            transform="translate(.94 .064)"
            d="M0 0H40.625V25H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default MasterCardIcon;
