import BottomNavitationBar from "@/components/Navigation/BottomNavigationBar";
import PostSection from "@/components/Posts/pages";
import StorySection from "@/components/StorySection/page";

const MobileScreen = () => (
    <div className="bg-white">
      <StorySection/>
      <PostSection></PostSection>
      <BottomNavitationBar/>
    </div>
  );

  export default MobileScreen