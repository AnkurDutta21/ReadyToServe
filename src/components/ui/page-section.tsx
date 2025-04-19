import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface PageSectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: "light" | "white" | "dark" | "secondary";
  container?: boolean;
}

const sectionVariants = cva(
  "relative w-full overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        dark: "bg-[#1A1A1A]",
        light: "bg-[#D32B2B]/10",
      },
    },
  }
);

export function PageSection({
  id,
  children,
  className,
  bgColor = "light",
  container = true,
  ...props
}: PageSectionProps) {
  const bgColorClasses = {
    light: "bg-[#D32B2B]/10",
    white: "bg-white",
    dark: "bg-[#1A1A1A] text-[#F4E5AC]",
    secondary: "bg-[#D32B2B] text-[#F4E5AC]",
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
