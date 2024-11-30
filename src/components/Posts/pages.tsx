import { Avatar } from "antd";
import Image from "next/image";

const PostSection = () => {
  const posts = [
    {
      id: 1,
      username: "peter_parker",
      profileUrl: "images/user/user3.jpeg",
      verified: true,
      postImage: "/images/post/post1.jpeg",
      likes: "741,368",
      discription: "Parabéns Ayrton, minha inspiração sempre 🇧🇷💫",
    },
    {
      id: 2,
      username: "peter_parker",
      profileUrl: "images/user/user3.jpeg",
      verified: false,
      postImage: "/images/post/post1.jpeg",
      likes: "741,368",
      discription: "Parabéns Ayrton, minha inspiração sempre 🇧🇷💫",
    },
  ];

  return (
    <div className="justify-center items-center ml-60 mr-60 py-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 mb-4 rounded-lg">
          {/* Username section and three dots section start */}
          <div className="flex items-center justify-between">
            {/* Profile section */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Avatar src={post.profileUrl} />
                <Image
                  alt="avatar-frame"
                  src="/images/frame.png"
                  layout="fill"
                  className="absolute"
                />
              </div>

              <h1 className="text-black">{post.username}</h1>
              {post.verified && (
                <Image
                  src="/images/verify.png"
                  height={10}
                  width={10}
                  alt="verified-user"
                />
              )}
              <span className="text-gray-600">5h</span>
            </div>

            {/* Dots icon */}
            <div className="flex items-center">
              <Image
                src="/images/dots.png"
                alt="dots"
                width={20}
                height={20}
              />
            </div>
          </div>
          {/* Username section and three dots section end */}

          {/* User Post Image */}
          <div className="w-full mt-4">
            <Image
              src={post.postImage}
              alt="user-post-image"
              width={1200} // Set a max width for the image
              height={800} // Set a height that maintains aspect ratio
              objectFit="cover" // Ensures the image is properly cropped and doesn't distort
              className="rounded-lg" // Adds rounded corners to the image
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostSection;
