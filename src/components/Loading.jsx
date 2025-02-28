const Loading = () => {
  return (
    <div className="bg-pink flex items-center justify-center gap-2">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-[bg-dark] border-t-transparent"></div>
      <p className="text-dark text-sm">Loading...</p>
    </div>
  );
};

export default Loading;
