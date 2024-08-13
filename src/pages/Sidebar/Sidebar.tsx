import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <div className="text-white text-xl">MyApp</div>
      <nav className="pt-10">
        <ul>
          <li>
            <Link to="/contact-list">Contact List</Link>
          </li>
          <li>
            <Link to="/chart">Chart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
