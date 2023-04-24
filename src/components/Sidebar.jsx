import { useState } from 'react';

const Sidebar = ({ children }) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleSidebar = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="relative h-full">
      <div
        className={`fixed inset-y-0 left-0 bg-white w-64 h-full max-w-full transition-all duration-300 ease-in-out transform ${
          isHidden ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        {children}
        <button
          onClick={toggleSidebar}
          className={`fixed top-1/2 -mt-4 right-0 mr-3 bg-blue-500 text-white rounded-full p-2 focus:outline-none md:top-1/2 md:right-auto md:left-full md:mr-0 md:ml-0 transform ${
            isHidden ? 'translate-x-full' : 'translate-x-0'
          }`}
        >
          Toggle Sidebar
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
