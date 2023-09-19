import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { PropertyType } from "@/types/Property";

type BuildingType = {
  roomType: string;
  roomName: string;
  dateRange: string;
  beds: {
    quantity: number;
    name: string;
  }[];
};

interface DrawerProps {
  setRoomTypeEditDrawer: (x: boolean) => void;
  roomTypeEditDrawer: Boolean;
  properties: PropertyType[];
  setProperties: (properties: PropertyType[]) => void;
  openProperties: number;
  roomToEdit: BuildingType;
  buildingIdx: number;
}

const RoomTypeEditDrawer = ({
  roomTypeEditDrawer,
  setRoomTypeEditDrawer,
  properties,
  setProperties,
  openProperties,
  roomToEdit,
  buildingIdx,
}: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Define states for new room details
  const [roomTypeName, setRoomTypeName] = useState(
    roomToEdit.roomType
  );
  const [roomName, setRoomName] = useState(roomToEdit.roomName);
  const [dateRange, setDateRange] = useState(roomToEdit.dateRange);
  const [bedConfigs, setBedConfigs] = useState(roomToEdit.beds);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        setRoomTypeEditDrawer(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const updateRoomDetails = () => {
    const updatedProperties = [...properties];
    const currentProperty = updatedProperties[openProperties - 1];

    if (
      currentProperty.buildings &&
      currentProperty.buildings[buildingIdx].rooms
    ) {
      const roomIndex = currentProperty.buildings[
        buildingIdx
      ].rooms.findIndex(
        (room) => room.roomName === roomToEdit.roomName
      );

      if (roomIndex > -1) {
        currentProperty.buildings[buildingIdx].rooms[roomIndex] = {
          roomType: roomTypeName,
          roomName: roomName,
          dateRange: dateRange,
          beds: bedConfigs.map((bedConfig) => ({
            quantity: bedConfig.quantity,
            name: bedConfig.name,
          })),
        };
      }
    }

    setProperties(updatedProperties);
    setRoomTypeEditDrawer(false);
  };

  return (
    <div
      ref={drawerRef}
      className={`flex flex-col border-l border-gray-200 ${
        roomTypeEditDrawer ? "fixed" : ""
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
            onClick={() => setRoomTypeEditDrawer(false)}
            className="cursor-pointer flex p-[4px] font-bold items-center justify-center border border-gray-400 rounded-full"
          >
            <AiOutlineClose size={15} />
          </h1>
        </div>
        <div className="flex flex-col w-full gap-7 mt-10 bg-gray-50 border border-gray-200 py-5 px-2">
          <div className="flex flex-col w-full items-start justify-between cursor-pointer gap-4">
            <h1 className="text-[15px]">Room type name</h1>
            <input
              value={roomTypeName}
              onChange={(e) => setRoomTypeName(e.target.value)}
              placeholder="Deluxe Cabin"
              className="px-2 text-black border border-gray-200 rounded-md h-[40px] w-full"
            />
          </div>
          <div className="flex flex-col w-full items-start justify-between cursor-pointer gap-4">
            <h1 className="text-[15px]">Room name</h1>
            <input
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="105"
              className="px-2 text-black border border-gray-200 rounded-md h-[40px] w-full"
            />
          </div>
          <div className="flex flex-col w-full items-start justify-between cursor-pointer gap-4">
            <h1 className="text-[15px]">Start and end date</h1>
            <input
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              placeholder="2020-11-08 -> 2020-12-23"
              className="px-2 text-black border border-gray-200 rounded-md h-[40px] w-full"
            />
          </div>
          <div className="flex flex-col max-w-full w-full items-start justify-between cursor-pointer gap-4">
            <div className="flex borde border-black w-full justify-between">
              <h1 className="text-[15px]">Bed configuration</h1>
              <h1
                onClick={() =>
                  setBedConfigs([
                    ...bedConfigs,
                    { quantity: 0, name: "" },
                  ])
                }
                className="text-blue-600 cursor-pointer hover:text-blue-400 transition-[2s]"
              >
                + Add
              </h1>
            </div>
            {bedConfigs.map((bedConfig, index) => (
              <div className="flex flex-row gap-2 w-full" key={index}>
                <input
                  value={bedConfig.quantity}
                  onChange={(e) => {
                    const value = Number(e.target.value); // Convert string to number
                    setBedConfigs((prevBedConfigs) => {
                      const newBedConfigs = [...prevBedConfigs];
                      newBedConfigs[index] = {
                        ...newBedConfigs[index],
                        quantity: value,
                      };
                      return newBedConfigs;
                    });
                  }}
                  placeholder="1"
                  className="text-black text-center border border-gray-200 rounded-md w-1/5 h-[40px]"
                />
                <input
                  value={bedConfig.name}
                  onChange={(e) => {
                    const value = e.target.value;
                    setBedConfigs((prevBedConfigs) => {
                      const newBedConfigs = [...prevBedConfigs];
                      newBedConfigs[index] = {
                        ...newBedConfigs[index],
                        name: value,
                      };
                      return newBedConfigs;
                    });
                  }}
                  placeholder="Queen Bed"
                  className="px-2 text-black border border-gray-200 rounded-md w-4/5 h-[40px]"
                />
              </div>
            ))}
            <h1 className="text-[13px] text-gray-400">
              Total capacity: 2
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 justify-end mt-4">
        <button
          onClick={() => setRoomTypeEditDrawer(false)}
          className="border border-gray-200 text-gray-600 rounded-md px-5 py-2"
        >
          Cancel
        </button>
        <button
          onClick={() => updateRoomDetails()}
          className="bg-[#3ca39d] text-white rounded-md px-5 py-2"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default RoomTypeEditDrawer;
