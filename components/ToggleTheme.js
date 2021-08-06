import React, { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  const toggle = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      class="flex justify-end w-80 my-2"
    >
      <label for="toggleB" class="flex items-center cursor-pointer">
        {/* <!-- label --> */}
        <div class={`mr-3 text-gray-200 dark:text-gray-600  font-medium`}>
          {theme === "dark" ? "View lighter mode" : "View darker mode"}
        </div>
        {/* <!-- toggle --> */}
        <div class="relative">
          {/* <!-- input --> */}
          <input
            type="checkbox"
            id="toggleB"
            class="sr-only"
            onChange={toggle}
          />
          {/* <!-- line --> */}
          <div class="block bg-gray-400 dark:bg-gray-200 w-14 h-8 rounded-full"></div>
          {/* <!-- dot --> */}
          <div class="dot absolute left-1 top-1 bg-white dark:bg-green-200 w-6 h-6 rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
}
