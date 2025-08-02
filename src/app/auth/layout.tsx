import React from "react";

export interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <div className="container h-screen flex justify-center items-center">{children}</div>
  );
};

export default layout;
