
import { cn } from "@/lib/utils";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCard = ({ title, description, className, style }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg shadow-md p-6 border-t-4 border-primary hover:shadow-lg transition-all duration-300",
        className
      )}
      style={style}
    >
      <h4 className="text-lg font-semibold mb-3">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
