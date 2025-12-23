interface TechBadgeProps {
  name: string;
  color: string;
}

export default function TechBadge({ name, color }: TechBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-3 p-4">
      <div 
        className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-sm"
        style={{ backgroundColor: color }}
      >
        {name.charAt(0).toUpperCase()}
      </div>
      <span className="text-[#00114C] font-inter font-medium text-sm text-center">
        {name}
      </span>
    </div>
  );
}