import { useEffect, useRef } from "react";

import { AiOutlineClose } from "react-icons/ai";

interface DrawerProps {
  setOpenDrawer: (n: boolean) => void;
  openDrawer: boolean;
  form: FormDTO;
  setForm: (n: FormDTO) => void;
  setProperties: (x: any) => void;
}

interface FormDTO {
  name: string;
  contact_name: string;
  phone: string;
  address: string;
  date: string;
}

const Drawer = ({
  setOpenDrawer,
  openDrawer,
  setForm,
  form,
  setProperties,
}: DrawerProps) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    // This function checks if the click is outside the drawer
    function handleClickOutside(event: any) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        setOpenDrawer(false);
      }
    }

    // Attach the click outside checker function to the document click event
    document.addEventListener("mousedown", handleClickOutside);

    // Return a cleanup function to remove the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

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
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="text-black border border-gray-200 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-14px]">Contact Name</h1>
            <input
              value={form.contact_name}
              onChange={(e) =>
                setForm({ ...form, contact_name: e.target.value })
              }
              className="text-black border border-gray-200 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-14px]">Phone number</h1>
            <input
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              className="text-black border border-gray-200 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-14px]">
              Physical Address
            </h1>
            <input
              value={form.address}
              onChange={(e) =>
                setForm({ ...form, address: e.target.value })
              }
              className="text-black border border-gray-200 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-14px]">Dates:</h1>
            <input
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
              className="text-black border border-gray-200 p-2 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 justify-end mt-4">
        {" "}
        {/* Added mt-4 for a little margin on top */}
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
              address: "",
              contact_name: "",
              date: "",
              name: "",
              phone: "",
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

export default Drawer;
