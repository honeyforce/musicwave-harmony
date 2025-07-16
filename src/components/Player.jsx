import { PlayIcon, SkipBackIcon, SkipForwardIcon, VolumeIcon } from "lucide-react";

const Player = () => {
  return (
    <div className="h-20 bg-gray-900 border-t border-gray-800 flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <img src="/placeholder.svg" alt="Album cover" className="w-14 h-14" />
        <div>
          <h4 className="text-sm font-semibold">Song Title</h4>
          <p className="text-xs text-gray-400">Artist Name</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-4">
          <SkipBackIcon className="w-5 h-5" />
          <button className="bg-white rounded-full p-2">
            <PlayIcon className="w-6 h-6 text-black" />
          </button>
          <SkipForwardIcon className="w-5 h-5" />
        </div>
        <div className="w-80 bg-gray-600 h-1 mt-2">
          <div className="bg-white h-1 w-1/3"></div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <VolumeIcon className="w-5 h-5" />
        <div className="w-24 bg-gray-600 h-1">
          <div className="bg-white h-1 w-2/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Player;