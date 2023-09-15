"use client";

import Drawer from "@/components/drawer";
import Tab from "@/components/tab";
import { useEffect, useRef, useState } from "react";

import { MdKeyboardArrowLeft } from "react-icons/md";

interface FormDTO {
  name: string;
  contact_name: string;
  phone: string;
  address: string;
  date: string;
}

export default function Home() {
  const [screen, setScreen] = useState(1);

  const [tab, setTab] = useState(1);

  const [openDrawer, setOpenDrawer] = useState(false);

  const [form, setForm] = useState<FormDTO>({
    name: "",
    contact_name: "",
    phone: "",
    address: "",
    date: "",
  });

  const [properties, setProperties] = useState<FormDTO[]>([]);

  const [openProperties, setOpenProperties] = useState(0);

  const active =
    "border-b-2 border-[#3ca39d] text-[#3ca39d] cursor-pointer";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {openDrawer && (
        <Drawer
          form={form}
          openDrawer={openDrawer}
          setForm={setForm}
          setOpenDrawer={setOpenDrawer}
          setProperties={setProperties}
        />
      )}
      <div className="flex flex-col w-full gap-5">
        <h1 className="font-bold text-[24px]">Trip Title</h1>
        <Tab screen={screen} setScreen={setScreen} />
        {openProperties > 0 && (
          <div className="flex flex-col gap-10">
            <div className="flex flex-row items-center w-full justify-between">
              <div className="flex flex-row justify-center items-center gap-5">
                <div
                  className="border border-gray-400 p-1 rounded-md"
                  onClick={() => setOpenProperties(0)}
                >
                  <MdKeyboardArrowLeft size={20} />
                </div>
                <h1 className="text-black font-bold">
                  Property {properties[openProperties - 1].name}
                </h1>
              </div>
              <div className="flex flex-row justify-center items-center gap-5">
                <h1 className="text-red-600">Delete Property</h1>
              </div>
            </div>
            <div className="flex flex-col w-full items-start p-5 justify-between border-2 border-gray-400 rounded-md h-full">
              <h1 className="text-black font-bold">Property</h1>
              <div className="flex flex-col items-start mt-6">
                <div className="flex flex-row items-center justify-center gap-5">
                  <h1 className="font-bold">Contact Name:</h1>
                  <h1>
                    {properties[openProperties - 1].contact_name}
                  </h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-5">
                  <h1 className="font-bold">Phone Number:</h1>
                  <h1>{properties[openProperties - 1].phone}</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-5">
                  <h1 className="font-bold">Physical Address:</h1>
                  <h1>{properties[openProperties - 1].address}</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-5">
                  <h1 className="font-bold">Available Dates:</h1>
                  <h1>{properties[openProperties - 1].date}</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full items-start p-5 justify-between border-2 border-gray-400 rounded-md h-full">
              <div className="flex flex-row items-center w-full justify-between">
                <h1 className="text-black font-bold">Amentities</h1>
                <h1 className="text-blue-600">+ Add Amentities</h1>
              </div>
            </div>
          </div>
        )}
        {openProperties === 0 && (
          <div className="flex flex-col gap-10">
            <div className="flex flex-row w-full justify-between items-center align-center">
              <input
                className="border border-gray-400 text-black rounded-sm"
                placeholder="input search text"
              />
              <button
                className="bg-blue-600 py-2 px-3 rounded-sm text-white"
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                + Property
              </button>
            </div>
            <div className="flex flex-col">
              <div className="font-medium text-[14px] text-center border-2 border-gray-200">
                <ul className="flex flex-wrap gap-7">
                  <li
                    className={tab === 1 ? active : "cursor-pointer"}
                    onClick={() => setTab(1)}
                  >
                    Property
                  </li>
                  <li
                    className={tab === 2 ? active : "cursor-pointer"}
                    onClick={() => setTab(2)}
                  >
                    People
                  </li>
                </ul>
              </div>
              {properties.length > 0 ? (
                <div className="flex flex-col min-h-[70vh] py-10 justify-start items-center w-full gap-5">
                  {properties.map((item, key) => {
                    return (
                      <div
                        key={key}
                        className="flex flex-row bg-[#bbf7d0] w-full items-start p-5 justify-between border-2 border-gray-400 rounded-md h-[100px]"
                      >
                        <h1 className="text-[20px] font-bold">
                          {item.name}
                        </h1>
                        <div className="flex flex-row gap-5 items-center">
                          <p className="cursor-pointer text-blue-600 font-medium text-[14px]">
                            Edit
                          </p>
                          <p
                            onClick={() => setOpenProperties(key + 1)}
                            className="cursor-pointer border-2 border-[#a3a3a3] bg-white p-2 rounded-sm"
                          >
                            Property details
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col min-h-[70vh] justify-center items-center w-full">
                  <h1 className="font-bold text-[20px]">
                    No properties
                  </h1>
                  <h1 className="font-medium text-[14px]">
                    Create your first property
                  </h1>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
