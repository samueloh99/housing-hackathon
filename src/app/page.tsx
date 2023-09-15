"use client";

import Amentities from "@/components/amentities";
import Building from "@/components/building";
import Drawer from "@/components/drawer";
import Tab from "@/components/tab";
import Table from "@/components/table";
import { useEffect, useRef, useState } from "react";

import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import TableBuilding from "@/components/table_building";
import RoomType from "@/components/roomtype";

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

  const [amentDrawer, setAmentDrawer] = useState(false);
  const [buildingDrawer, setBuildingDrawer] = useState(false);
  const [roomTypeDrawer, setRoomTypeDrawer] = useState(false);

  const [form, setForm] = useState<FormDTO>({
    name: "",
    contact_name: "",
    phone: "",
    address: "",
    date: "",
  });

  const [properties, setProperties] = useState<FormDTO[]>([]);

  const [openProperties, setOpenProperties] = useState(0);

  const [counter, setCounter] = useState([0]);

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
      {amentDrawer && (
        <Amentities
          amentDrawer={amentDrawer}
          setAmentDrawer={setAmentDrawer}
        />
      )}

      {buildingDrawer && (
        <Building
          buildingDrawer={buildingDrawer}
          setBuildingDrawer={setBuildingDrawer}
        />
      )}

      {roomTypeDrawer && (
        <RoomType
          setCounter={setCounter}
          roomTypeDrawer={roomTypeDrawer}
          setRoomTypeDrawer={setRoomTypeDrawer}
        />
      )}
      <div className="flex flex-col w-full gap-5">
        <h1 className="font-bold text-[24px]">Tripsha Housing</h1>
        <Tab screen={screen} setScreen={setScreen} />
        {openProperties > 0 && (
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
                  Property {properties[openProperties - 1].name}
                </h1>
              </div>
              <div className="flex flex-row justify-center items-center gap-5">
                <h1 className="text-red-600">Delete Property</h1>
              </div>
            </div>
            <div className="flex flex-col w-full items-start p-5 justify-between border border-gray-200 rounded-md h-full bg-gray-50">
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
            <div className="flex flex-col w-full items-start p-5 justify-between border border-gray-200 rounded-md h-full bg-gray-50">
              <div className="flex flex-row items-center w-full justify-between">
                <h1 className="text-black font-bold">Amentities</h1>
                <h1
                  onClick={() => setAmentDrawer(true)}
                  className="text-blue-600 cursor-pointer hover:text-blue-400 transition-[2s]"
                >
                  + Add Amentities
                </h1>
              </div>
              <div className="mt-5 grid grid-cols-3 w-full gap-5">
                <h1>AC</h1>
                <h1>Sauna</h1>
                <h1>Parking</h1>
                <h1>BBQ Area</h1>
                <h1>Bar</h1>
                <h1>Kitchen in room</h1>
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
              {counter.map((item, key) => {
                return (
                  <div
                    className="flex flex-col w-full gap-5"
                    key={key}
                  >
                    <div className="flex flex-col gap-5 w-full rounded-md border border-gray-200 p-2 bg-white flex-row justify-between items-center">
                      <div className="flex flex-row w-full gap-2 items-center justify-between">
                        <h1>Building ABC</h1>
                        <div className="flex flex-row gap-2 items-center justify-center">
                          <div
                            onClick={() => {
                              if (counter.length === 0) return;
                              const newCounter = [...counter];
                              newCounter.splice(0, 1);
                              setCounter(newCounter);
                            }}
                            className="flex flex-row items-center justify-center gap-2 p-3 text-red-400 rounded-md cursor-pointer"
                          >
                            <AiOutlineDelete size={20} color="red" />
                            Delete building
                          </div>
                          <div
                            className="flex flex-row items-center justify-center gap-2 px-3 text-blue-400 rounded-md cursor-pointer"
                            onClick={() =>
                              setCounter((prev) => [...prev, 1])
                            }
                          >
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
                );
              })}
            </div>
          </div>
        )}
        {openProperties === 0 && (
          <div className="flex flex-col gap-10">
            <div className="flex flex-row w-full justify-between items-center align-center">
              <input
                className="border border-gray-200 text-black rounded-md p-2"
                placeholder="input search text"
              />
              <button
                className="bg-blue-600 py-2 px-3 rounded-md text-white"
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                + Property
              </button>
            </div>
            <div className="flex flex-col">
              <div className="font-medium text-[14px] text-center">
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
                        className="flex flex-col gap-5 w-full p-5 border border-gray-200 bg-gray-50 rounded-md h-full"
                      >
                        <div className="flex w-full items-start justify-between">
                          <h1 className="text-[20px] font-bold">
                            {item.name}
                          </h1>
                          <div className="flex flex-row gap-5 items-center">
                            <p className="cursor-pointer text-blue-600 font-medium text-[14px]">
                              Edit
                            </p>
                            <p
                              onClick={() =>
                                setOpenProperties(key + 1)
                              }
                              className="cursor-pointer border border-gray-200 bg-white p-2 rounded-md"
                            >
                              Property details
                            </p>
                          </div>
                        </div>
                        <Table />
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
