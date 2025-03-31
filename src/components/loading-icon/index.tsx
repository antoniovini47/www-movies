import { CgSpinnerTwoAlt } from "react-icons/cg";

const defaultSize = 10;

type LoadingIconProps = {
  size?: number;
  className?: string;
};

export function LoadingIcon({ size = defaultSize, className }: LoadingIconProps) {
  return <CgSpinnerTwoAlt className={`w-${size} h-${size} animate-spin ${className}`} />;
}
