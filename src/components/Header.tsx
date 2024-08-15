import { useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="h-12 bg-blue-800 text-center text-white text-xl p-2">
      {pathname === "/" ? "Contact List" : "Chart and Map"}
    </div>
  );
};
