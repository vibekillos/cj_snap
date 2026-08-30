import { useState } from "react";

function ImageDropzone({ onFileSelect }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files)

    if (files.length > 0) {
      onFileSelect(files);
    }
  };

  const handleFileChange = (e) => {
    // const file = e.target.files[0]; this is the for the single image upload 
    const files = Array.from(e.target.files)
    if (files.length > 0) {
      onFileSelect(files);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        flex
        py-5
        md:min-h-[300px]
        cursor-pointer
        flex-col
        items-center
        justify-center
        rounded-2xl
        border-dasheds
        transition-all
        duration-300
        ${
          isDragging
            ? "border-electric-blue bg-electric-blue/20"
            : " bg-surface-white dark:bg-deep-black"
        }
      `}
    >
      <p className="text-deep-black dark:text-surface-white font-space">
        {isDragging ? "Drop your image here" : "Drag & drop your image"}
      </p>

      <p className="mt-2 text-sm text-deep-black dark:text-surface-white/70 font-space">
        or click to browse
      </p>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="image-upload"
        multiple
      />

      <label
        htmlFor="image-upload"
        className="mt-5 cursor-pointer rounded-xl bg-electric-blue px-8 py-3 text-md font-medium text-white font-space"
      >
        Choose Image
      </label>
    </div>
  );
}

export default ImageDropzone;