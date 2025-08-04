import { MapPin } from "lucide-react"; // Importing location icon

const VerticalLocation = () => {
  return (
    <div className="z-50 flex items-center justify-center w-20 fixed right-0 mr-2 bottom-[0.1%] transform -translate-y-1/2 transition-colors duration-300">
      <div className="flex flex-col items-center gap-2 transition-colors duration-300">
        {/* Location Pin Icon */}
        <MapPin className="text-red-500 dark:text-yellow-400 w-6 h-6 transition-colors duration-300" />

        {/* Vertical Text with Correct CSS */}
        <p
          className="text-xl font-semibold tracking-wide dark:text-white transition-colors duration-300"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Based in Karachi, Pakistan
        </p>
      </div>
    </div>
  );
};

export default VerticalLocation;
