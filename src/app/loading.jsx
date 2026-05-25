import { Spinner } from "@heroui/react";

const LoadingPage = () => {
  return (
    <div>
      <div className="h-[60vh] flex flex-col justify-center items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-muted">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingPage;