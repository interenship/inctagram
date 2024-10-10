import type { ComponentProps } from "react";
import React from "react";

const ChevronUp = (props: ComponentProps<"svg">) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_376_9175)">
        <path
          d="M19.5416 14.5141C19.542 14.7478 19.4606 14.9742 19.3116 15.1541C19.2276 15.2554 19.1245 15.3391 19.0082 15.4004C18.8918 15.4618 18.7645 15.4996 18.6335 15.5116C18.5026 15.5237 18.3705 15.5098 18.2449 15.4708C18.1193 15.4318 18.0026 15.3683 17.9016 15.2841L12.5416 10.8041L7.17157 15.1241C7.06928 15.2072 6.95158 15.2692 6.82524 15.3066C6.6989 15.3441 6.56641 15.3562 6.43538 15.3422C6.30436 15.3283 6.17737 15.2886 6.06174 15.2254C5.9461 15.1622 5.84409 15.0768 5.76157 14.9741C5.67053 14.8706 5.60186 14.7495 5.55987 14.6182C5.51788 14.487 5.50348 14.3484 5.51757 14.2113C5.53165 14.0742 5.57392 13.9415 5.64172 13.8216C5.70952 13.7016 5.80139 13.5969 5.91157 13.5141L11.9116 8.68411C12.0905 8.53703 12.3149 8.45662 12.5466 8.45662C12.7782 8.45662 13.0026 8.53703 13.1816 8.68411L19.1816 13.6841C19.3026 13.7844 19.3982 13.9119 19.4608 14.0561C19.5233 14.2003 19.551 14.3572 19.5416 14.5141Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_376_9175">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChevronUp;
