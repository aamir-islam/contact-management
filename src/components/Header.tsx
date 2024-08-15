import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="h-12 bg-blue-800 text-center text-white text-xl p-2">
      {pathname === "/" ? "Contact List" : "Chart and Map"}
    </div>
  );
};

export default Header;
