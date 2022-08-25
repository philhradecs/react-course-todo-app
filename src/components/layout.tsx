import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-neutral-800 min-h-screen py-10">
      <div className="container mx-auto ">{children}</div>
    </div>
  );
};
