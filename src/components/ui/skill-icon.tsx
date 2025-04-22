
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillIconProps {
  icon: LucideIcon;
  name: string;
  className?: string;
  color?: string;
}

export function SkillIcon({ icon: Icon, name, className, color }: SkillIconProps) {
  return (
    <div 
      className={cn(
        "flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300 hover:-translate-y-1",
        color ? `bg-opacity-10 ${color}` : "bg-gray-100",
        className
      )}
    >
      <div className="p-3 rounded-full bg-white shadow-sm">
        <Icon size={24} className={color || "text-primary"} />
      </div>
      <span className="font-medium text-sm">{name}</span>
    </div>
  );
}
