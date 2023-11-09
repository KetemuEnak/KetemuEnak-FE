import { useState, useRef, useEffect } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Searchbar = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [seachValue, setSeachValue] = useState("");
  const searchRef = useRef(null);

  const handleClickOutside = (e) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(e.target) &&
      seachValue == ""
    ) {
      console.log(seachValue);
      setIsSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="flex items-center px-2 py-2 bg-gray-200 border border-gray-400 rounded-full cursor-pointer"
      ref={searchRef}>
      <MagnifyingGlassIcon
        className="block w-4 h-4"
        onClick={() => setIsSearch((isSearch) => !isSearch)}
      />
      <input
        type="text"
        placeholder="search"
        className={`${
          !isSearch && "hidden"
        } transition-[width] duration-150 ease-in-out flex-grow mx-4 p-0 bg-transparent border-0 appearance-none md:block focus:outline-none focus:border-0 focus:ring-0 focus:ring-transparent peer max-w-[80px] sm:max-w-[240px] md:max-w-none`}
        value={seachValue}
        onChange={(e) => setSeachValue(e.target.value)}
      />
      <XMarkIcon
        className={`${!isSearch && "hidden"}  ${
          !seachValue && "opacity-0"
        } md:block w-4 h-4 cursor-pointer`}
        onClick={() => setSeachValue("")}
      />
    </div>
  );
};

export default Searchbar;
