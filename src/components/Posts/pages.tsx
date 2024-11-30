import { Avatar, Divider } from "antd";
import Image from "next/image";
import { CommentIcon, LikeIcon, SavedIcon, ShareIcon } from "../Icon/page";

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
      username: "kurzgesagt",
      profileUrl: "images/user/user7.jpeg",
      verified: false,
      postImage: "/images/post/post2.jpeg",
      likes: "741,368",
      discription: "Parabéns Ayrton, minha inspiração sempre 🇧🇷💫",
    },
    {
      id: 3,
      username: "discovery",
      profileUrl: "images/user/user8.jpeg",
      verified: false,
      postImage: "/images/post/post3.jpeg",
      likes: "741,368",
      discription: "Parabéns Ayrton, minha inspiração sempre 🇧🇷💫",
    },
  ];

  return (
    <div className="justify-center items-center ml-4 mr-4 md:ml-60 md:mr-60">
      {posts.map((post) => (
        <div key={post.id} className="p-4 rounded-lg">
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

              <h1 className="text-black text-sm md:text-base">{post.username}</h1>
              {post.verified && (
                <Image
                  src="/images/verify.png"
                  height={10}
                  width={10}
                  alt="verified-user"
                />
              )}
              <span className="text-gray-600 text-xs md:text-sm">5h</span>
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

          {/* User Post Image Start */}
          <div className="w-full mt-4">
            <Image
              src={post.postImage}
              alt="user-post-image"
              width={1200} // Set a max width for the image
              height={800} // Set a height that maintains aspect ratio
              objectFit="cover" // Ensures the image is properly cropped and doesn't distort
              className="rounded-lg w-full h-auto" // Ensures responsiveness
            />
          </div>
          {/* User Post Image End */}

          {/* Like comment Share Section */}
          <div className="mt-2 flex justify-between">
            {/* first Box */}
            <div className="flex space-x-2">
              <LikeIcon />
              <CommentIcon />
              <ShareIcon />
            </div>

            {/* Second Box */}
            <div>
              <SavedIcon />
            </div>
          </div>

          {/* Number of Likes */}
          <div className="py-2 text-black text-sm md:text-base">
            <h1>{post.likes} likes</h1>
          </div>

          {/* Description */}
          <div className="flex text-black space-x-2 text-sm md:text-base">
            <h1>{post.username} </h1>
            <span>{post.discription}</span>
          </div>
          <div className="text-black text-xs md:text-sm">
            <h1>See translation</h1>
          </div>
          <div className="text-gray-400 text-xs md:text-sm">
            <h1>View all 13,384 comments</h1>
          </div>
          <div>
            <p className="text-black text-xs md:text-sm">Add a comment...</p>
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default PostSection;
