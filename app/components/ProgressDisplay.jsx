const ProgressDisplay = ({ progress }) => {
  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-semibold text-slate-400">Progress</span>
        <span className="text-xs font-bold text-amber-400">{progress}%</span>
      </div>
      <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden shadow-inner backdrop-blur-sm">
        <div
          className="bg-linear-to-r from-amber-500 via-amber-400 to-yellow-400 h-3 rounded-full transition-all duration-500 ease-out relative overflow-hidden shadow-lg"
          style={{ width: `${progress}%` }}
        >
          {/* Animated shimmer effect */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressDisplay;
