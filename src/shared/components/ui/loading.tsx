import { Loader } from "lucide-react";

type LoadingProps = {
  className?: string;
};

export const Loading = ({ className }: LoadingProps) => {
  return (
    <div className={className}>
      <Loader className="animate-spin" />
    </div>
  );
};
