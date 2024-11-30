import { Avatar } from "antd";

const RightNevigation = () => {
  const friendSuggestionList = [
    { id: 1, userName: 'imkir', subTitle: 'Follows You' },
    { id: 2, userName: 'organic_al', subTitle: 'Followed by Chirag_singal17' },
    { id: 3, userName: 'im_gr', subTitle: 'Followed by Chirag_signal17' },
    { id: 4, userName: 'abh952', subTitle: 'Follows you' },
    { id: 5, userName: 'sakbrl', subTitle: 'Follows you' },
  ];

  return (
    <div className="mt-14">
      {/* User Profile start */}
      <div className="flex justify-between py-4">
        <div className="space-x-4 flex">
          <Avatar src='/images/profile.jpg' size={50} />
          <div>
            <h1 className="text-black">AcciJob_student</h1>
            <p className="text-gray-400">Rishab Chauhan</p>
          </div>
        </div>
        <h1 className="pr-6 text-blue-600 cursor-pointer">Switch</h1>
      </div>
      {/* User Profile end */}

      {/* Spacing between profile and suggestions */}
      <div className="mb-6"></div>

      {/* Suggestion List Start */}
      <div>
        <div className="flex justify-between">
          <p className="font-bold text-gray-400">Suggestions for you</p>
          <p className="text-black pr-6">See All</p>
        </div>

        {/* Spacing between profile and suggestions */}
        <div className="mb-6"></div>

        {/* Mapping Friend Suggestions */}
        {friendSuggestionList.map((List) => (
          <div className="flex justify-between " key={List.id}>
            <div className="space-x-4 flex">
              <Avatar size={30} />
              <div>
                <h1 className="text-black">{List.userName}</h1>
                <p className="text-gray-400">{List.subTitle}</p>
              </div>
            </div>
            <h1 className="pr-6 text-blue-600 cursor-pointer">Follow</h1>
          </div>
        ))}
      </div>
      {/* Suggestion List End */}
    </div>
  );
};

export default RightNevigation;
