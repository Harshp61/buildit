export function MobileBlocker() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center bg-[#0a0a0a] px-6 text-center text-white">
      <div className="max-w-md">
        <p className="text-lg font-semibold">This workspace is optimized for desktop</p>
        <p className="mt-2 text-sm text-white/60">
          Please open this app on a larger screen to build and edit your project.
        </p>
      </div>
    </div>
  );
}
