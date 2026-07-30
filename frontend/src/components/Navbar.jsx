import { NavLink } from "react-router-dom";
import logo from "../assets/kenya.png";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Brand */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Kenya Coat of Arms"
            className="h-12 w-auto"
          />

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              CivicLens AI
            </h1>

            <p className="text-sm text-gray-500">
              Citizen Intelligence & Analytics Platform
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? "text-blue-700"
                  : "text-gray-600 hover:text-blue-700"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/submit"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? "text-blue-700"
                  : "text-gray-600 hover:text-blue-700"
              }`
            }
          >
            Submit Report
          </NavLink>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;