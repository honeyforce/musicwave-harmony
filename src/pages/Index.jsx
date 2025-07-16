const Home = () => {
  const categories = [
    { name: "Music", color: "bg-pink-500" },
    { name: "Podcasts", color: "bg-green-500" },
    { name: "Live Events", color: "bg-purple-500" },
    { name: "Made For You", color: "bg-blue-500" },
    { name: "New Releases", color: "bg-yellow-500" },
    { name: "Summer", color: "bg-teal-500" },
    { name: "Hip-Hop", color: "bg-gray-500" },
    { name: "Pop", color: "bg-red-500" },
    { name: "Mood", color: "bg-pink-400" },
    { name: "Charts", color: "bg-indigo-500" },
    { name: "Podcast", color: "bg-blue-400" },
    { name: "Comedy", color: "bg-cyan-500" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Browse all</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div key={index} className={`${category.color} p-4 rounded-lg aspect-square flex items-end`}>
            <span className="text-white font-bold">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
