const ProfileImage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-100 h-100 rounded-full border-4 border-blue-500 shadow-lg overflow-hidden">
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
