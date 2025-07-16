import { SearchIcon } from "lucide-react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Index";
import Search from "../pages/Search";

const MainContent = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-black">
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center bg-white rounded-full">
          <SearchIcon className="text-black ml-3" />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="bg-transparent text-black p-2 rounded-full outline-none"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-black px-4 py-2 rounded-full">Upgrade</button>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </header>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
    </div>
  );
};

export default MainContent;
