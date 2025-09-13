import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const Container = ({ children, className = "", noPadding = false }: ContainerProps) => {
  return (
    <div className={`max-w-6xl w-full mx-auto ${noPadding ? '' : 'px-4 md:px-8'} ${className}`}>
      {children}
    </div>
  );
};
