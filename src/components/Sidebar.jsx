import { HomeIcon, SearchIcon, LibraryIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-60 bg-black p-6 flex flex-col">
      <div className="mb-6">
        <Link to="/" className="flex items-center space-x-2 text-white">
          <HomeIcon />
          <span>Home</span>
        </Link>
        <Link to="/search" className="flex items-center space-x-2 text-white mt-4">
          <SearchIcon />
          <span>Search</span>
        </Link>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <LibraryIcon />
          <span>Your Library</span>
        </div>
        <PlusIcon className="cursor-pointer" />
      </div>
      <div className="overflow-y-auto flex-1">
        {/* Placeholder for library items */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="py-2 text-sm text-gray-400">
            Playlist {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;