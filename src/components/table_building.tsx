const TableBuilding = () => {
  return (
    <div className="flex w-full px-5">
      <table className="table-auto w-full">
        <thead>
          <tr className="border border-gray-200">
            <th className="border border-gray-200">Room types</th>
            <th className="border border-gray-200">Room name</th>
            <th className="border border-gray-200">Beds</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-gray-200">
            <td
              className="border border-gray-200 px-5 py-2"
              rowSpan={2}
            >
              1. Deluxe Cabin
            </td>
            <td
              className="border border-gray-200 px-5 py-2"
              rowSpan={2}
            >
              105
            </td>
            <td className="border border-gray-200 px-5 py-2">
              1 Twin Bed
            </td>
          </tr>
          <tr className="border border-gray-200">
            <td className="border border-gray-200 px-5 py-2">
              1 Queen Bed
            </td>
          </tr>
          <tr className="border border-gray-200">
            <td
              className="border border-gray-200 px-5 py-2"
              rowSpan={2}
            >
              1. Deluxe Cabin
            </td>
            <td
              className="border border-gray-200 px-5 py-2"
              rowSpan={2}
            >
              105
            </td>
            <td className="border border-gray-200 px-5 py-2">
              1 Twin Bed
            </td>
          </tr>
          <tr className="border border-gray-200">
            <td className="border border-gray-200 px-5 py-2">
              1 Queen Bed
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableBuilding;
