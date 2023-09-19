import { PropertyType } from "@/types/Property";

interface TableProps {
  items: PropertyType;
}

const Table = ({ items }: TableProps) => {
  const randomCellContent = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "bg-custom-orange";
      case 1:
        return "half-diagonal";
      default:
        return "";
    }
  };

  return (
    <div className="flex w-full">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border border-gray-400"></th>
            <th className="border border-gray-400"></th>
            <th className="border border-gray-400"></th>
            {["July", "August"].map((month, key) => (
              <th
                key={key}
                className="border border-gray-400"
                colSpan={5}
              >
                {month}
              </th>
            ))}
          </tr>
          <tr className="border border-gray-400">
            <th className="border border-gray-400">Building</th>
            <th className="border border-gray-400">Room type</th>
            <th className="border border-gray-400">Room name</th>
            {[...Array(10)].map((_, idx) => (
              <th key={idx} className="border border-gray-400">
                {25 + idx}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.buildings.map((building) =>
            building.rooms.map((room, idx) => (
              <tr className="border border-gray-400" key={idx}>
                {idx === 0 && (
                  <td
                    className="border border-gray-400 pl-4"
                    rowSpan={building.rooms.length}
                  >
                    {building.name}
                  </td>
                )}
                <td className="border border-gray-400 bg-[#f9f0ff] p-2">
                  {room.roomType}
                </td>
                <td className="border border-gray-400 bg-[#f9f0ff] p-2">
                  {room.roomName}
                </td>
                {Array.from({ length: 10 }).map((_, idx) => {
                  const cellContent = randomCellContent();
                  return (
                    <td
                      key={idx}
                      className={`border border-gray-400 relative ${
                        cellContent !== "half-diagonal"
                          ? cellContent
                          : ""
                      }`}
                    >
                      {cellContent === "half-diagonal" && (
                        <div className="half-diagonal" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
