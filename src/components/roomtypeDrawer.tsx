import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { PropertyType } from "@/types/Property";
interface DrawerProps {
  roomTypeDrawer: boolean;
  setRoomTypeDrawer: (x: boolean) => void;
  properties: PropertyType[];
  setProperties: (properties: PropertyType[]) => void;
  openProperties: number;
  buildingIdx: number;
}

const RoomTypeDrawer = ({
  roomTypeDrawer,
  setRoomTypeDrawer,
  openProperties,
  properties,
  setProperties,
  buildingIdx,
}: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Define states for new room details
  const [roomTypeName, setRoomTypeName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [bedConfigs, setBedConfigs] = useState([
    { quantity: "", bedType: "" },
  ]);

  const [numOfRooms, setNumOfRooms] = useState("");

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

  const addRoomToBuilding = () => {
    // Create a copy of the properties array
    const updatedProperties = [...properties];

    // Create new room data from state
    const newRoom = {
      roomType: roomTypeName,
      roomName: roomName,
      dateRange: dateRange,
      beds: bedConfigs.map((bedConfig) => ({
        quantity: parseInt(bedConfig.quantity, 10),
        name: bedConfig.bedType,
      })),
    };

    // Number of rooms to be created
    const roomsCount = parseInt(numOfRooms, 10);

    // Get the current property we're working with
    const currentProperty = updatedProperties[openProperties - 1];

    if (
      currentProperty.buildings &&
      currentProperty.buildings[buildingIdx].rooms
    ) {
      // Push the new room details multiple times based on numOfRooms
      for (let i = 0; i < roomsCount; i++) {
        currentProperty.buildings[buildingIdx].rooms.push({
          ...newRoom,
        });
      }
    } else if (currentProperty.buildings) {
      // If rooms array doesn't exist, create it
      currentProperty.buildings[buildingIdx].rooms = Array(
        roomsCount
      ).fill({
        ...newRoom,
      });
    } else {
      // If buildings array doesn't exist, create it with a default building name and rooms
      currentProperty.buildings = [
        {
          name: "Default Building Name",
          rooms: Array(roomsCount).fill({ ...newRoom }),
        },
      ];
    }

    // Update the main properties array
    setProperties(updatedProperties);

    // Close the drawer
    setRoomTypeDrawer(false);

    // Reset states
    setRoomTypeName("");
    setDateRange("");
    setBedConfigs([{ quantity: "", bedType: "" }]);
    setNumOfRooms("");
  };

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
                    { quantity: "", bedType: "" },
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
                    const newBedConfigs = [...bedConfigs];
                    newBedConfigs[index].quantity = e.target.value;
                    setBedConfigs(newBedConfigs);
                  }}
                  placeholder="1"
                  className="text-black text-center border border-gray-200 rounded-md w-1/5 h-[40px]"
                />
                <input
                  value={bedConfig.bedType}
                  onChange={(e) => {
                    const newBedConfigs = [...bedConfigs];
                    newBedConfigs[index].bedType = e.target.value;
                    setBedConfigs(newBedConfigs);
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
          <div className="flex flex-col w-full items-start justify-between cursor-pointer gap-4">
            <h1 className="text-[15px]">No. of rooms of this type</h1>
            <input
              value={numOfRooms}
              onChange={(e) => setNumOfRooms(e.target.value)}
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
          onClick={() => addRoomToBuilding()}
          className="bg-[#3ca39d] text-white rounded-md px-5 py-2"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default RoomTypeDrawer;
