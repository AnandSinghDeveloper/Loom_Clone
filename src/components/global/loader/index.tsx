import { cn } from "@/lib/utils";
import Spinner from "./Spinner";

interface LoaderProps {
  state: boolean;
  className?: string;
  children?: React.ReactNode;
  color?: string;
}

const Loader = ({ state, className, children, color }: LoaderProps) => {
  return state ? (
    <div className={cn(className)}>
      <Spinner color={color} />
    </div>
  ) : (
    children
  );
};

export default Loader;
