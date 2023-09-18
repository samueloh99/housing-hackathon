import { MdKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import TableBuilding from "./table_building";
import { PropertyType } from "@/types/Property";
import { amenities } from "@/data/mockdata";

interface BuildingCardProps {
  setOpenProperties: (x: number) => void;
  properties: PropertyType[];
  openProperties: number;
  setAmentDrawer: (x: boolean) => void;
  setBuildingDrawer: (x: boolean) => void;
  setRoomTypeDrawer: (x: boolean) => void;
}

const BuildingDetails = ({
  setOpenProperties,
  properties,
  openProperties,
  setAmentDrawer,
  setBuildingDrawer,
  setRoomTypeDrawer,
}: BuildingCardProps) => {
  const propertyInfo = properties[openProperties - 1];
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row items-center w-full justify-between">
        <div className="flex flex-row justify-center items-center gap-5">
          <div
            className="border border-gray-200 p-1 rounded-md cursor-pointer"
            onClick={() => setOpenProperties(0)}
          >
            <MdKeyboardArrowLeft size={20} />
          </div>
          <h1 className="text-black font-bold">
            Property {propertyInfo.propertyName}
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          <h1 className="text-red-600">Delete Property</h1>
        </div>
      </div>
      <div className="flex flex-col w-full items-start p-5 justify-between border border-gray-200 rounded-md h-full bg-gray-50">
        <h1 className="text-black font-bold">Property Info.</h1>
        <div className="flex flex-col items-start mt-6">
          <div className="flex flex-row items-center justify-center gap-5">
            <h1 className="font-bold">Contact Name:</h1>
            <h1>{propertyInfo.contactName}</h1>
          </div>
          <div className="flex flex-row items-center justify-center gap-5">
            <h1 className="font-bold">Phone Number:</h1>
            <h1>{propertyInfo.phoneNumber}</h1>
          </div>
          <div className="flex flex-row items-center justify-center gap-5">
            <h1 className="font-bold">Physical Address:</h1>
            <h1>{propertyInfo.physicalAddress}</h1>
          </div>
          <div className="flex flex-row items-center justify-center gap-5">
            <h1 className="font-bold">Available Dates:</h1>
            <h1>{propertyInfo.availableDates}</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-start p-5 justify-between border border-gray-200 rounded-md h-full bg-gray-50">
        <div className="flex flex-row items-center w-full justify-between">
          <h1 className="text-black font-bold">Amenities</h1>
          <h1
            onClick={() => setAmentDrawer(true)}
            className="text-blue-600 cursor-pointer hover:text-blue-400 transition-[2s]"
          >
            + Add Amenities
          </h1>
        </div>
        <div className="mt-5 grid grid-cols-3 w-full gap-5">
          {propertyInfo.amenities.length > 0 ? (
            amenities
              .filter((amenity) =>
                propertyInfo.amenities.includes(amenity.id)
              )
              .map((filteredAmenity, key) => {
                return <h1 key={key}>{filteredAmenity.name}</h1>;
              })
          ) : (
            <h1>No Amenity</h1>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full items-start gap-5 p-5 justify-between border border-gray-200 rounded-md h-full bg-gray-50">
        <div className="flex flex-row items-center w-full justify-between">
          <h1 className="text-black font-bold">Buildings</h1>
          <h1
            onClick={() => setBuildingDrawer(true)}
            className="text-blue-600 cursor-pointer hover:text-blue-400 transition-[2s]"
          >
            + Add Building
          </h1>
        </div>
        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-col gap-5 w-full rounded-md border border-gray-200 p-2 bg-white flex-row justify-between items-center">
            <div className="flex flex-row w-full gap-2 items-center justify-between">
              <h1>Building ABC</h1>
              <div className="flex flex-row gap-2 items-center justify-center">
                <div className="flex flex-row items-center justify-center gap-2 p-3 text-red-400 rounded-md cursor-pointer">
                  <AiOutlineDelete size={20} color="red" />
                  Delete building
                </div>
                <div className="flex flex-row items-center justify-center gap-2 px-3 text-blue-400 rounded-md cursor-pointer">
                  <HiOutlineDocumentDuplicate
                    size={20}
                    className="text-blue-400"
                  />
                  Duplicate
                </div>
                <div className="flex flex-row items-center justify-center gap-2 px-3 text-blue-400 rounded-md cursor-pointer">
                  <AiOutlineEdit
                    size={20}
                    className="text-blue-400"
                  />
                  Edit
                </div>
                <div
                  onClick={() => setRoomTypeDrawer(true)}
                  className="px-3 border border-gray-200 rounded-md cursor-pointer"
                >
                  + Room Type
                </div>
              </div>
            </div>
            <TableBuilding />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingDetails;
