import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import RoomTypeEditDrawer from "./roomtypeEditDrawer";
import { PropertyType } from "@/types/Property";
import React from "react";

type BuildingType = {
  roomType: string;
  roomName: string;
  dateRange: string;
  beds: {
    quantity: number;
    name: string;
  }[];
};

interface TableBuildingProps {
  buildingDetails: {
    name: string;
    rooms: {
      roomType: string;
      dateRange: string;
      roomName: string;
      beds: { quantity: number; name: string }[];
    }[];
  };
  properties: PropertyType[];
  openProperties: number;
  setProperties: (x: PropertyType[]) => void;
  buildingIdx: number;
}

const TableBuilding = ({
  buildingDetails,
  openProperties,
  buildingIdx,
  properties,
  setProperties,
}: TableBuildingProps) => {
  const [roomTypeEditDrawer, setRoomTypeEditDrawer] = useState(false);
  const [roomToEdit, setRoomToEdit] = useState<BuildingType | null>(
    null
  );

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="flex w-full px-5">
      {roomTypeEditDrawer && roomToEdit && (
        <RoomTypeEditDrawer
          roomTypeEditDrawer={roomTypeEditDrawer}
          setRoomTypeEditDrawer={setRoomTypeEditDrawer}
          properties={properties}
          setProperties={setProperties}
          roomToEdit={roomToEdit}
          openProperties={openProperties}
          buildingIdx={buildingIdx}
        />
      )}
      <table className="table-auto w-full">
        <thead>
          <tr className="border border-gray-200">
            <th className="border border-gray-200">Room types</th>
            <th className="border border-gray-200">Room name</th>
            <th className="border border-gray-200">Beds</th>
          </tr>
        </thead>
        <tbody>
          {buildingDetails.rooms.map((room, roomIndex) =>
            room.beds.map((bed, bedIndex) => (
              <tr
                key={`${roomIndex}-${bedIndex}`}
                className="border border-gray-200"
              >
                {bedIndex === 0 && (
                  <>
                    <td
                      className="border border-gray-200 px-5 py-2"
                      rowSpan={room.beds.length}
                    >
                      {roomIndex + 1}.{" "}
                      {capitalizeFirstLetter(room.roomType)}
                      <div
                        className="flex flex-row items-center justify-center gap-2 px-3 text-blue-400 rounded-md cursor-pointer"
                        onClick={() => {
                          setRoomTypeEditDrawer(true);
                          setRoomToEdit(room);
                        }}
                      >
                        <AiOutlineEdit
                          size={20}
                          className="text-blue-400"
                        />
                        Edit
                      </div>
                    </td>
                    <td
                      className="border border-gray-200 px-5 py-2"
                      rowSpan={room.beds.length}
                    >
                      {room.roomName}
                    </td>
                  </>
                )}
                <td className="border border-gray-200 px-5 py-2">
                  {bed.quantity} {bed.name}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableBuilding;
