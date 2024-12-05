import React, { useState } from "react";

const VideoInTablet = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative flex justify-center items-center">
      {/* Tablet Image */}
      <img
        src="/images/signup/TabSides.png"
        className="w-full lg:max-w-[500px] max-h-[500px] object-contain"
        alt="Dashboard Preview"
      />

      {/* Video or Thumbnail */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative w-[72.5%] h-[85%]">
          {showVideo ? (
            // YouTube Video
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&controls=1&autoplay=1&showinfo=0&autohide=1"
              title="YouTube Video"
              style={{ border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            // Thumbnail
            <div
              className="absolute inset-0 w-full h-full cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              <img
                src="/images/signup/DashboardThumbnail.png" // Replace with your thumbnail image
                className="w-full h-full rounded-lg shadow-lg object-cover"
                alt="Video Thumbnail"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                {/* Play Button */}
                <img
                  src="/images/signup/PauseButton.png" // Replace with your play button image
                  alt="Play Button"
                  className="w-16 h-16"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoInTablet;
