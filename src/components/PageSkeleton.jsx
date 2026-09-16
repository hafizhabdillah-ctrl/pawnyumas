function Bar({ className = "" }) {
  return <div className={`animate-pulse rounded-full bg-soga-600/10 ${className}`} />;
}

function Block({ className = "" }) {
  return <div className={`animate-pulse rounded-2xl bg-soga-600/10 ${className}`} />;
}

export default function PageSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 animate-pulse rounded-full bg-soga-600/15" />
          <Bar className="h-4 w-32" />
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <Bar className="h-3 w-20" />
          <Bar className="h-3 w-20" />
          <Bar className="h-3 w-24" />
        </div>
        <div className="h-9 w-20 animate-pulse rounded-full bg-soga-600/15" />
      </div>

      <div className="mt-16 flex flex-col items-center gap-4">
        <Bar className="h-10 w-3/4 max-w-xl" />
        <Bar className="h-10 w-2/3 max-w-lg" />
        <Bar className="mt-2 h-3 w-full max-w-md" />
        <Bar className="h-3 w-5/6 max-w-md" />
      </div>

      <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Block className="h-32" />
        <Block className="h-32" />
        <Block className="h-32" />
      </div>
    </div>
  );
}
