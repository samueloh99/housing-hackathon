import { useEffect, useRef } from "react";
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
      className={`border-l border-gray-400 ${
        amentDrawer ? "fixed" : ""
      } top-0 right-0 z-40 h-screen p-4 bg-white w-80 overflow-scroll`}
    >
      <div className="flex-grow">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-[20px]">Amentities</h1>
          <h1
            onClick={() => setAmentDrawer(false)}
            className="cursor-pointer flex h-[20px] w-[20px] font-bold items-center justify-center border-2 border-black rounded-full"
          >
            x
          </h1>
        </div>
        <div className="flex flex-col w-full gap-2 mt-10">
          <div className="flex w-full border-b border-gray-400 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[17px] font-bold">Kitchen in room</h1>
            <BsCheckCircleFill size={25} />
          </div>
          <div className="flex w-full border-b border-gray-400 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[17px] font-bold">Laundry on site</h1>
            <BsCheckCircle size={25} />
          </div>
          <div className="flex w-full border-b border-gray-400 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[17px] font-bold">
              Dedicated workspace
            </h1>
            <BsCheckCircle size={25} />
          </div>
          <div className="flex w-full border-b border-gray-400 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[17px] font-bold">Meeting rooms</h1>
            <BsCheckCircleFill size={25} />
          </div>
          <div className="flex w-full border-b border-gray-400 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[17px] font-bold">Restaurants</h1>
            <BsCheckCircle size={25} />
          </div>
          <div className="flex w-full border-b border-gray-400 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[17px] font-bold">Bar</h1>
            <BsCheckCircleFill size={25} />
          </div>
          <div className="flex w-full border-b border-gray-400 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[17px] font-bold">Rooftop space</h1>
            <BsCheckCircle size={25} />
          </div>
          <div className="flex w-full border-b border-gray-400 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[17px] font-bold">Swimming pool</h1>
            <BsCheckCircle size={25} />
          </div>
          <div className="flex w-full border-b border-gray-400 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[17px] font-bold">Sauna</h1>
            <BsCheckCircleFill size={25} />
          </div>
          <div className="flex w-full border-b border-gray-400 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[17px] font-bold">
              Airport transfer
            </h1>
            <BsCheckCircleFill size={25} />
          </div>
          <div className="flex w-full border-b border-gray-400 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[17px] font-bold">BBQ area</h1>
            <BsCheckCircleFill size={25} />
          </div>
          <div className="flex w-full border-b border-gray-400 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[17px] font-bold">AC</h1>
            <BsCheckCircleFill size={25} />
          </div>
          <div className="flex w-full border-b border-gray-400 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[17px] font-bold">Balconies</h1>
            <BsCheckCircleFill size={25} />
          </div>
          <div className="flex w-full border-b border-gray-400 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[17px] font-bold">Free parking</h1>
            <BsCheckCircleFill size={25} />
          </div>
          <div className="flex w-full border-b border-gray-400 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[17px] font-bold">Parking</h1>
            <BsCheckCircle size={25} />
          </div>

          <div className="flex w-full border-b border-gray-400 py-3 items-center justify-between cursor-pointer">
            <h1 className="text-[17px] font-bold">Wifi</h1>
            <BsCheckCircle size={25} />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 justify-end mt-4">
        <button
          onClick={() => setAmentDrawer(false)}
          className="border border-gray-600 text-gray-600 rounded-sm px-5 py-2"
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
