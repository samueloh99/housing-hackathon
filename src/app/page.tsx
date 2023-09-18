"use client";

import { useState } from "react";

import AmentitiesDrawer from "@/components/amentitiesDrawer";
import BuildingDrawer from "@/components/buildingDrawer";
import PropertyDrawer from "@/components/propertyDrawer";
import RoomTypeDrawer from "@/components/roomtypeDrawer";
import MainTab from "@/components/maintab";
import Table from "@/components/table";
import BuildingDetails from "@/components/buildingDetails";
import BuildingCard from "@/components/buildingCard";

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

  const active =
    "border-b-2 border-[#3ca39d] text-[#3ca39d] cursor-pointer";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {openDrawer && (
        <PropertyDrawer
          form={form}
          openDrawer={openDrawer}
          setForm={setForm}
          setOpenDrawer={setOpenDrawer}
          setProperties={setProperties}
        />
      )}
      {amentDrawer && (
        <AmentitiesDrawer
          amentDrawer={amentDrawer}
          setAmentDrawer={setAmentDrawer}
        />
      )}

      {buildingDrawer && (
        <BuildingDrawer
          buildingDrawer={buildingDrawer}
          setBuildingDrawer={setBuildingDrawer}
        />
      )}

      {roomTypeDrawer && (
        <RoomTypeDrawer
          roomTypeDrawer={roomTypeDrawer}
          setRoomTypeDrawer={setRoomTypeDrawer}
        />
      )}
      <div className="flex flex-col w-full gap-5">
        <h1 className="font-bold text-[24px]">Tripsha Housing</h1>
        <MainTab screen={screen} setScreen={setScreen} />
        {openProperties > 0 && (
          <BuildingDetails
            openProperties={openProperties}
            properties={properties}
            setAmentDrawer={setAmentDrawer}
            setBuildingDrawer={setBuildingDrawer}
            setOpenProperties={setOpenProperties}
            setRoomTypeDrawer={setRoomTypeDrawer}
          />
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
                      <BuildingCard
                        item={item}
                        index={key}
                        key={key}
                        setOpenProperties={setOpenProperties}
                      />
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
