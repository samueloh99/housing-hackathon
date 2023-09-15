import { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";

interface DrawerProps {
  amentDrawer: boolean;
  setAmentDrawer: (x: boolean) => void;
}

const Amentities = ({ amentDrawer, setAmentDrawer }: DrawerProps) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        setAmentDrawer(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={drawerRef}
      className={`border border-gray-200 ${
        amentDrawer ? "fixed" : ""
      } top-0 right-0 z-40 h-screen p-4 bg-white w-80 overflow-scroll`}
    >
      <div className="flex-grow">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-[20px]">Amentities</h1>
          <h1
            onClick={() => setAmentDrawer(false)}
            className="cursor-pointer flex p-[4px] font-bold items-center justify-center border border-gray-400 rounded-full"
          >
            <AiOutlineClose size={15} />
          </h1>
        </div>
        <div className="flex flex-col w-full gap-2 mt-10">
          <div className="flex w-full border-b border-gray-200 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[15px] font-medium">
              Kitchen in room
            </h1>
            <BsCheckCircleFill size={20} />
          </div>
          <div className="flex w-full border-b border-gray-200 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[15px] font-medium">
              Laundry on site
            </h1>
            <BsCheckCircle size={20} />
          </div>
          <div className="flex w-full border-b border-gray-200 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[15px] font-medium">
              Dedicated workspace
            </h1>
            <BsCheckCircle size={20} />
          </div>
          <div className="flex w-full border-b border-gray-200 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[15px] font-medium">Meeting rooms</h1>
            <BsCheckCircleFill size={20} />
          </div>
          <div className="flex w-full border-b border-gray-200 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[15px] font-medium">Restaurants</h1>
            <BsCheckCircle size={20} />
          </div>
          <div className="flex w-full border-b border-gray-200 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[15px] font-medium">Bar</h1>
            <BsCheckCircleFill size={20} />
          </div>
          <div className="flex w-full border-b border-gray-200 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[15px] font-medium">Rooftop space</h1>
            <BsCheckCircle size={20} />
          </div>
          <div className="flex w-full border-b border-gray-200 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[15px] font-medium">Swimming pool</h1>
            <BsCheckCircle size={20} />
          </div>
          <div className="flex w-full border-b border-gray-200 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[15px] font-medium">Sauna</h1>
            <BsCheckCircleFill size={20} />
          </div>
          <div className="flex w-full border-b border-gray-200 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[15px] font-medium">
              Airport transfer
            </h1>
            <BsCheckCircleFill size={20} />
          </div>
          <div className="flex w-full border-b border-gray-200 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[15px] font-medium">BBQ area</h1>
            <BsCheckCircleFill size={20} />
          </div>
          <div className="flex w-full border-b border-gray-200 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[15px] font-medium">AC</h1>
            <BsCheckCircleFill size={20} />
          </div>
          <div className="flex w-full border-b border-gray-200 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[15px] font-medium">Balconies</h1>
            <BsCheckCircleFill size={20} />
          </div>
          <div className="flex w-full border-b border-gray-200 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[15px] font-medium">Free parking</h1>
            <BsCheckCircleFill size={20} />
          </div>
          <div className="flex w-full border-b border-gray-200 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[15px] font-medium">Parking</h1>
            <BsCheckCircle size={20} />
          </div>

          <div className="flex w-full border-b border-gray-200 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[15px] font-medium">Wifi</h1>
            <BsCheckCircle size={20} />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 justify-end mt-4">
        <button
          onClick={() => setAmentDrawer(false)}
          className="border border-gray-200 text-gray-600 rounded-sm px-5 py-2"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            setAmentDrawer(false);
          }}
          className="bg-[#3ca39d] text-white rounded-sm px-5 py-2"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Amentities;
