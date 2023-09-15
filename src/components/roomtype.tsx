import { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface DrawerProps {
  roomTypeDrawer: boolean;
  setRoomTypeDrawer: (x: boolean) => void;
  setCounter: (x: any) => void;
}

const RoomType = ({
  roomTypeDrawer,
  setRoomTypeDrawer,
  setCounter,
}: DrawerProps) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        setRoomTypeDrawer(false);
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
      className={`flex flex-col border-l border-gray-200 ${
        roomTypeDrawer ? "fixed" : ""
      } top-0 right-0 z-40 h-screen p-4 bg-white w-80 overflow-scroll`}
    >
      <div className="flex-grow">
        <div className="flex items-start justify-between">
          <div className="flex flex-col w-full gap-5">
            <h1 className="font-bold text-[20px]">Add room type</h1>
            <h1 className="font-medium text-[15px]">
              Input the room type name, add bed configurations, and
              specify the quantity of this room type.
            </h1>
          </div>
          <h1
            onClick={() => setRoomTypeDrawer(false)}
            className="cursor-pointer flex p-[4px] font-bold items-center justify-center border border-gray-400 rounded-full"
          >
            <AiOutlineClose size={15} />
          </h1>
        </div>
        <div className="flex flex-col w-full gap-7 mt-10 bg-gray-50 border border-gray-200 py-5 px-2">
          <div className="flex flex-col w-full items-start justify-between cursor-pointer gap-4">
            <h1 className="text-[15px]">Room type name</h1>
            <input
              placeholder="Deluxe Cabin"
              className="px-2 text-black border border-gray-200 rounded-md h-[40px] w-full"
            />
          </div>
          <div className="flex flex-col w-full items-start justify-between cursor-pointer gap-4">
            <h1 className="text-[15px]">Start and end date</h1>
            <input
              placeholder="2020-11-08 -> 2020-12-23"
              className="px-2 text-black border border-gray-200 rounded-md h-[40px] w-full"
            />
          </div>
          <div className="flex flex-col max-w-full w-full items-start justify-between cursor-pointer gap-4">
            <h1 className="text-[15px]">Bed configuration</h1>
            <div className="flex flex-row gap-2 w-full">
              <input
                placeholder="1"
                className="text-black text-center border border-gray-200 rounded-md w-1/5 h-[40px]"
              />
              <input
                placeholder="Queen Bed"
                className="px-2 text-black border border-gray-200 rounded-md w-4/5 h-[40px]"
              />
            </div>
            <h1 className="text-[13px] text-gray-400">
              Total capacity: 2
            </h1>
          </div>
          <div className="flex flex-col w-full items-start justify-between cursor-pointer gap-4">
            <h1 className="text-[15px]">No. of rooms of this type</h1>
            <input
              placeholder="2"
              className="px-2 text-black border border-gray-200 rounded-md h-[40px] w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 justify-end mt-4">
        <button
          onClick={() => setRoomTypeDrawer(false)}
          className="border border-gray-200 text-gray-600 rounded-md px-5 py-2"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            setRoomTypeDrawer(false);
            setCounter((prev: any) => [...prev, 1]);
          }}
          className="bg-[#3ca39d] text-white rounded-md px-5 py-2"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default RoomType;
