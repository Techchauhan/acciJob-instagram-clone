import { Avatar } from "antd"; // Ant Design for avatars
import "antd/dist/reset.css"; // Import Ant Design styles
import Image from "next/image";

const StorySection = () => {
  const stories = [
    { id: 1, username: "john_doe", image: "/images/user/user1.jpeg" },
    { id: 2, username: "jane_smith", image: "/images/user/user2.jpeg" },
    { id: 3, username: "peter_parker", image: "/images/user/user3.jpeg" },
    { id: 4, username: "bruce_wayne", image: "/images/user/user4.png" },
    { id: 5, username: "clark_kent", image: "/images/user/user5.jpeg" },
    { id: 6, username: "diana_prince", image: "/images/user/user6.jpeg" },
  ];

  return (
    <div className="flex overflow-x-auto space-x-4 p-4 border-b border-gray-200 mt-6">
      {stories.map((story) => (
        <div
          key={story.id}
          className="flex flex-col items-center w-20 flex-shrink-0 relative space-x-2"
        >
          {/* Frame */}
          <div className="relative w-20 h-20">
            <Image
              alt="avatar-frame"
              src="/images/frame.png"
              layout="fill"
              className="absolute"
            />
            {/* Avatar */}
            <Avatar
              size={64}
              src={story.image}
              className="absolute top-2 left-2"
            />
          </div>
          {/* Username */}
          <span className="text-sm text-gray-700 mt-2 truncate w-full text-center">
            {story.username}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StorySection;
