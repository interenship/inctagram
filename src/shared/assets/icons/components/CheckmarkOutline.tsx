import type { Ref, SVGProps } from "react";
import { forwardRef, memo } from "react";

const SvgCheckmarkOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg height="18" viewBox="0 0 18 18" width="18" fill="currentColor" ref={ref} {...props}>
    <path d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCheckmarkOutline);
const Memo = memo(ForwardRef);
export default Memo;
