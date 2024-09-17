import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* {Search Bar} */}
      <div className="hidden md:flex items-center gap-2 text-sm ring-[1.5px] rounded-full p-1.5 ring-gray-300">
        <Image src="/search.png" alt="Search" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] border-none bg-transparent focus:outline-none ml-2"
        />
      </div>

      {/* {Icons & User Profile} */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white relative rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/bell.png" alt="Notification" width={20} height={20} />
          <div className="absolute -top-3 rounded-full -right-3 flex items-center justify-center p-1 font-semibold w-5 h-5 bg-purple-500 text-xs text-white">
            1
          </div>
        </div>
        <div className="bg-white relative rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/messenger.png" alt="Message" width={20} height={20} />
          <div className="absolute -top-3 rounded-full -right-3 flex items-center justify-center p-1 font-semibold w-5 h-5 bg-purple-500 text-xs text-white">
            12
          </div>
        </div>
        <div className="bg-white relative rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src="/marketing.png"
            alt="Announcement"
            width={20}
            height={20}
          />
          <div className="absolute -top-3 rounded-full -right-3 flex items-center justify-center p-1 font-semibold w-5 h-5 bg-purple-500 text-xs text-white">
            8
          </div>
        </div>
        <Image
          src="/avatar.png"
          alt="Profile"
          width={30}
          height={30}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[8px] text-gray-500 text-right">
            Super Admin
          </span>
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/english.png" alt="English" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
