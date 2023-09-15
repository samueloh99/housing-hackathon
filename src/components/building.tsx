import { useEffect, useRef } from "react";

interface DrawerProps {
  buildingDrawer: boolean;
  setBuildingDrawer: (x: boolean) => void;
}

const Building = ({
  buildingDrawer,
  setBuildingDrawer,
}: DrawerProps) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        setBuildingDrawer(false);
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
        buildingDrawer ? "fixed" : ""
      } top-0 right-0 z-40 h-screen p-4 bg-white w-80 overflow-scroll`}
    >
      <div className="flex-grow">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-[20px]">Create Building</h1>
          <h1
            onClick={() => setBuildingDrawer(false)}
            className="cursor-pointer flex h-[20px] w-[20px] font-bold items-center justify-center border-2 border-black rounded-full"
          >
            x
          </h1>
        </div>
        <div className="flex w-full gap-2 mt-10">
          <div className="flex flex-col w-full items-start justify-between cursor-pointer">
            <h1 className="text-[17px] font-bold">Building name</h1>
            <input className="text-black border border-gray-400 p-2 rounded-sm" />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 justify-end mt-4">
        <button
          onClick={() => setBuildingDrawer(false)}
          className="border border-gray-600 text-gray-600 rounded-sm px-5 py-2"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            setBuildingDrawer(false);
          }}
          className="bg-[#3ca39d] text-white rounded-sm px-5 py-2"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Building;
