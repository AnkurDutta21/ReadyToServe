import React from "react";
import { cn } from "@/lib/utils";

interface PageSectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: "light" | "white" | "dark" | "secondary";
  container?: boolean;
}

export function PageSection({
  id,
  children,
  className,
  bgColor = "light",
  container = true,
  ...props
}: PageSectionProps) {
  const bgColorClasses = {
    light: "bg-[#F4F1DE]",
    white: "bg-white",
    dark: "bg-[#2A2A2A] text-white",
    secondary: "bg-[#3D405B] text-white",
  };
  
  return (
    <section
      id={id}
      className={cn(
        "py-20",
        bgColorClasses[bgColor],
        className
      )}
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-4">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

export default PageSection;
