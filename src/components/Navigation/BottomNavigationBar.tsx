import { Avatar } from "antd";
import { CreateIcon, HomeIcon, ReelIcon, SearchIcon } from "../Icon/page";

const BottomNavitationBar = ()=>{
    return(
        <div className="flex justify-evenly sticky bottom-0 bg-white items-center py-5">
            <HomeIcon/>
            <SearchIcon/>
            <CreateIcon/>
            <ReelIcon/>
            <Avatar src='/images/profile.jpg'></Avatar>
        </div>
    );
}

export default BottomNavitationBar