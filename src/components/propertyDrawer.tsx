import { useEffect, useRef } from "react";

import { AiOutlineClose } from "react-icons/ai";

import { PropertyType } from "@/types/Property";
interface DrawerProps {
  setOpenDrawer: (n: boolean) => void;
  openDrawer: boolean;
  form: PropertyType;
  setForm: (n: PropertyType) => void;
  setProperties: (x: any) => void;
}

const PropertyDrawer = ({
  setOpenDrawer,
  openDrawer,
  setForm,
  form,
  setProperties,
}: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        setOpenDrawer(false);
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
      className={`border-l border-gray-200 ${
        openDrawer ? "fixed" : ""
      } top-0 right-0 z-40 h-screen p-4 bg-white w-80`}
    >
      <div className="flex-grow">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-[20px]">Create property</h1>
          <h1
            onClick={() => setOpenDrawer(false)}
            className="cursor-pointer flex p-[4px] font-bold items-center justify-center border border-gray-400 rounded-full"
          >
            <AiOutlineClose size={15} />
          </h1>
        </div>
        <div className="flex flex-col gap-10 mt-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-14px]">Property name</h1>
            <input
              value={form.propertyName}
              onChange={(e) =>
                setForm({ ...form, propertyName: e.target.value })
              }
              className="text-black border border-gray-200 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-14px]">Contact Name</h1>
            <input
              value={form.contactName}
              onChange={(e) =>
                setForm({ ...form, contactName: e.target.value })
              }
              className="text-black border border-gray-200 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-14px]">Phone number</h1>
            <input
              value={form.phoneNumber}
              onChange={(e) =>
                setForm({ ...form, phoneNumber: e.target.value })
              }
              className="text-black border border-gray-200 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-14px]">
              Physical Address
            </h1>
            <input
              value={form.physicalAddress}
              onChange={(e) =>
                setForm({ ...form, physicalAddress: e.target.value })
              }
              className="text-black border border-gray-200 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-14px]">Dates:</h1>
            <input
              value={form.availableDates}
              onChange={(e) =>
                setForm({ ...form, availableDates: e.target.value })
              }
              className="text-black border border-gray-200 p-2 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 justify-end mt-4">
        <button
          onClick={() => setOpenDrawer(false)}
          className="border border-gray-200 text-gray-600 rounded-md px-5 py-2"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            setOpenDrawer(false);
            setProperties((prevItems: any) => [...prevItems, form]);
            setForm({
              physicalAddress: "",
              contactName: "",
              availableDates: "",
              propertyName: "",
              phoneNumber: "",
              amenities: [],
              buildings: [],
            });
          }}
          className="bg-[#3ca39d] text-white rounded-md px-5 py-2"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default PropertyDrawer;
