import { useState } from 'react';

export default function ToggleSwitch() {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex flex-col items-start">
      <div className="flex justify-between w-full items-center">
        <p className="text-black p-4">Nav Link 1</p>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
            onChange={handleToggle}
            checked={checked}
          />
          <label
            htmlFor="toggle"
            className={`bg-gray-300 w-14 h-8 rounded-full flex items-center cursor-pointer ${
              checked ? 'bg-blue-500' : ''
            }`}
          >
            <div
              className={`dot w-6 h-6 rounded-full bg-white transform transition duration-300 ease-in-out ${
                checked ? 'translate-x-6' : ''
              }`}
            ></div>
          </label>
        </div>
      </div>
    </div>
  );
}