import SidebarItem from "../SidebarItem";

const sideBarItems = [
  "DashBoard",
  "Transactions",
  "Schedules",
  "Users",
  "Settings"
];

const Sidebar = () => {
  return (
    <div className="flex flex-col p-3 justify-center items-center pt-6 ">
      <h1 className="text-white font-bold text-xl mb-6">Board.</h1>
      {sideBarItems.map((each, index) => (
        <SidebarItem key={index} details={each} />
      ))}
    </div>
  );
};

export default Sidebar;
