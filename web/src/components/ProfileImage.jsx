const ProfileImage = () => {
  return (
    <div className="flex items-center justify-center transition-colors duration-300">
      <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-blue-500 dark:border-slate-700 shadow-lg dark:shadow-slate-900 overflow-hidden transition-colors duration-300">
        <img
          src="/mnt/data/pics.png" // Change this to your image URL
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
