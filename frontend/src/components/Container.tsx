import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='w-full xl:max-w-[1260px] max-w-[80%] my-0 mx-auto'>
      {children}
    </div>
  );
};

export default Container;
