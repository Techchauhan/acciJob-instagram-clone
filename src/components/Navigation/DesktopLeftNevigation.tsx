import { InstagramIcon,HomeIcon, SearchIcon, ExploreIcon, ReelIcon, MessageIcon, NotificationIcon, CreateIcon,  MoreIcon } from "@/components/Icon/page"; // Assuming you have these icons

const DesktopLeftNavigation = () => {
  // Menu items
  const menuItems = [
    { label: "Home", Icon: HomeIcon },
    { label: "Search", Icon: SearchIcon },
    { label: "Explore", Icon: ExploreIcon },
    { label: "Reels", Icon: ReelIcon },
    { label: "Message", Icon: MessageIcon },
    { label: "Notification", Icon: NotificationIcon },
    { label: "Create", Icon: CreateIcon },
    { label: "Profile", Icon: MoreIcon },
    { label: "More", Icon: MoreIcon },
  ];

  return (
    <div className="bg-white py-4 h-screen flex flex-col items-center">
      {/* Instagram Icon */}
      <div className="flex items-center justify-center mt-8">
        <InstagramIcon />
      </div>

      {/* Navigation Menu */}
      <div className="mt-8 w-full">
        <ul className="flex flex-col space-y-4">
          {menuItems.map(({ label, Icon }) => (
            <li key={label} className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <Icon />
              <span className="ml-4 text-gray-800 font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DesktopLeftNavigation;
