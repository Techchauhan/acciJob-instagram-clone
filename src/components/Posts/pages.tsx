import { Avatar } from "antd";
import Image from "next/image";

const PostSection = ()=>{

    const posts =  [
        {
            id:1, username: 'peter_parker', profileUrl:'images/user/user3.jpeg', verified: true, postImage:'/iamges/post/post1.jpeg', likes: '741,368', discription: 'Parabéns Ayrton, minha inspiração sempre 🇧🇷💫'
        },
        {
            id:1, username: 'peter_parker', profileUrl:'images/user/user3.jpeg', verified: false, postImage:'/iamges/post/post1.jpeg', likes: '741,368', discription: 'Parabéns Ayrton, minha inspiração sempre 🇧🇷💫'
        }
    ];
    return(
        <div className="justify-center items-center  ml-60 mr-60 py-4">
        {posts.map((post) => (
          <div key={post.id} className="  p-4 mb-4 rounded-lg">
            <div className="flex items-center justify-between">
              {/* Profile section */}
              <div className="flex items-center space-x-2">
              <div className="relative ">
              <Avatar src={post.profileUrl} />
              <Image
                    alt="avatar-frame"
                    src="/images/frame.png"
                    layout="fill"
                    className="absolute"
                    />
              </div>
               
                <h1 className="text-black">{post.username}</h1>
                {post.verified ? <Image src={'/images/verify.png'} height={10} width={10} alt="verified-user"></Image> : <></>}
                <span> 5h</span>
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
          </div>
        ))}
      </div>
    );
}

export default PostSection;