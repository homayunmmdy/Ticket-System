const StatusDisplay = ({ status }) => {
  const getStyles = (status) => {
    switch (status) {
      case "done":
        return {
          bg: "bg-gradient-to-r from-emerald-500 to-green-500",
          text: "text-white",
          shadow: "shadow-lg shadow-emerald-500/50",
          border: "border-emerald-400/30"
        };
      case "started":
        return {
          bg: "bg-gradient-to-r from-amber-500 to-yellow-500",
          text: "text-white",
          shadow: "shadow-lg shadow-amber-500/50",
          border: "border-amber-400/30"
        };
      case "open":
        return {
          bg: "bg-gradient-to-r from-slate-600 to-slate-700",
          text: "text-white",
          shadow: "shadow-lg shadow-slate-500/50",
          border: "border-slate-400/30"
        };
      case "delay":
        return {
          bg: "bg-gradient-to-r from-red-500 to-orange-500",
          text: "text-white",
          shadow: "shadow-lg shadow-red-500/50",
          border: "border-red-400/30"
        };
      default:
        return {
          bg: "bg-gradient-to-r from-slate-700 to-slate-800",
          text: "text-white",
          shadow: "shadow-lg shadow-slate-500/50",
          border: "border-slate-400/30"
        };
    }
  };

  const styles = getStyles(status);

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-xl px-2 py-1 text-xs font-bold uppercase tracking-wider ${styles.bg} ${styles.text} ${styles.shadow} border ${styles.border} backdrop-blur-sm transition-all duration-300 hover:scale-105`}
    >
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${styles.bg} opacity-75`}></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 bg-white`}></span>
      </span>
      {status}
    </span>
  );
};

export default StatusDisplay;
