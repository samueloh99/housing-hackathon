const options = [
  "Overview",
  "Traveler Management",
  "Attendees",
  "Resources",
  "Vendor Payments",
  "Rooms",
  "Questions",
  "Budgets",
  "Links",
];

interface TabProps {
  setScreen: (x: number) => void;
  screen: number;
}

const Tab = ({ setScreen, screen }: TabProps) => {
  const active =
    "border-b-2 border-[#3ca39d] text-[#3ca39d] cursor-pointer";
  return (
    <div className="font-medium text-[14px] mb-10 text-center border-2 border-gray-200">
      <ul className="flex flex-wrap gap-7 border-b-2 border-gray-400">
        {options.map((item, key) => {
          return (
            <li
              key={key}
              className={screen === key ? active : "cursor-pointer"}
              onClick={() => setScreen(key)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tab;
