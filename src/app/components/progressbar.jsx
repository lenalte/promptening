import React from 'react';

const ProgressBar = ({ progress, sidebarWidth }) => {
    return (
        <div
            className="fixed top-0 left-0 w-full h-[15px] z-1000 flex items-center"
            style={{ width: `calc(100% - ${sidebarWidth}px)`, backgroundColor: 'var(--red-custom)', left: `${sidebarWidth}px` }}
        >
            <div
                className="h-[60%] bg-[var(--foreground)] transition-all duration-300 ease-in-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ProgressBar;