interface BuildingCardProps {
  index: number;
  item: {
    name: string;
    contact_name: string;
    phone: string;
    address: string;
    date: string;
  };
  setOpenProperties: (x: number) => void;
}

const BuildingCard = ({
  index,
  item,
  setOpenProperties,
}: BuildingCardProps) => {
  return (
    <div className="flex flex-col gap-5 w-full p-5 border border-gray-200 bg-gray-50 rounded-md h-full">
      <div className="flex w-full items-start justify-between">
        <h1 className="text-[20px] font-bold">{item.name}</h1>
        <div className="flex flex-row gap-5 items-center">
          <p className="cursor-pointer text-blue-600 font-medium text-[14px]">
            Edit
          </p>
          <p
            onClick={() => setOpenProperties(index + 1)}
            className="cursor-pointer border border-gray-200 bg-white p-2 rounded-md"
          >
            Property details
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuildingCard;
