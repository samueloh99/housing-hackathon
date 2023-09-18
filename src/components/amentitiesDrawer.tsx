import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";

import { amenities } from "@/data/mockdata";
import { PropertyType } from "@/types/Property";
interface DrawerProps {
  amentDrawer: boolean;
  setAmentDrawer: (x: boolean) => void;
  setProperties: (x: PropertyType[]) => void;
  properties: PropertyType[];
  openProperties: number;
}

const AmentitiesDrawer = ({
  amentDrawer,
  setAmentDrawer,
  setProperties,
  openProperties,
  properties,
}: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const [selectedAmenities, setSelectedAmenities] = useState<
    number[]
  >([]);

  const handleIconClick = (amenityId: number) => {
    setSelectedAmenities((prevSelected) => {
      if (prevSelected.includes(amenityId)) {
        return prevSelected.filter((id) => id !== amenityId);
      } else {
        return [...prevSelected, amenityId];
      }
    });
  };

  const handleCreateAmenities = () => {
    const updatedProperties = [...properties];
    const newProperty = updatedProperties[openProperties - 1];
    newProperty.amenities = selectedAmenities;

    setProperties(updatedProperties);
    setAmentDrawer(false);
  };

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

  useEffect(() => {
    const currentPropertyAmenities =
      properties[openProperties - 1].amenities || [];
    setSelectedAmenities(currentPropertyAmenities);
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
          {amenities.map((item, key) => {
            return (
              <div
                key={key}
                className="flex w-full border-b border-gray-200 py-3 items-center justify-between cursor-pointer"
                onClick={() => handleIconClick(item.id)}
                style={{ cursor: "pointer" }}
              >
                <span>{item.name}</span>
                {selectedAmenities.includes(item.id) ? (
                  <BsCheckCircleFill />
                ) : (
                  <BsCheckCircle />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row gap-5 justify-end mt-4">
        <button
          onClick={() => setAmentDrawer(false)}
          className="border border-gray-200 text-gray-600 rounded-md px-5 py-2"
        >
          Cancel
        </button>
        <button
          onClick={() => handleCreateAmenities()}
          className="bg-[#3ca39d] text-white rounded-md px-5 py-2"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default AmentitiesDrawer;
