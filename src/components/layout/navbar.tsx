import Image from "next/image";
import Link from "next/link";
import Search from "../Search/Search";
import Account from "../account/Account";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="h-16 bg-white text-black flex  justify-between xl:w-[1230px] mx-auto  items-center">
        <Link href="/" className="flex items-center justify-between">
          <Image src="/logo.png" alt="Chat App Logo" width={45} height={45} />
          <div className="pl-1">Library ViN</div>
        </Link>

        <div className="flex justify-end w-[99px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 7L2 7"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M19 12L5 12"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M16 17H8"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <Search />
        <Account />
      </div>
    </div>
  );
};
export default Navbar;
