import ShimmerButton from "@/components/magicui/shimmer-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-cyan-700">
        <div className="z-10 flex items-center justify-center">
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Shimmer Button
            </span>
          </ShimmerButton>
        </div>
        ̦̦
      </div>
    </main>
  );
}
