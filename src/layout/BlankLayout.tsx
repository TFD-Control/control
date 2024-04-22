import React, { useState, ReactNode } from 'react';
import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index';

const BlankLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark h-screen overflow-y-hidden overflow-x-hidden">
        
        <div className="">
            {children}
        </div>
        
    </div>
  );
};

export default BlankLayout;
