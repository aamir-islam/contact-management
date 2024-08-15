import { Link } from "react-router-dom";

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-900 text-white p-6 shadow-lg">
      <div className="text-3xl font-bold mb-8 text-center">MyApp</div>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="block w-full text-center bg-green-400 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Contact List
            </Link>
          </li>
          <li>
            <Link
              to="/chart"
              className="block w-full text-center bg-green-400 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Chart
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
