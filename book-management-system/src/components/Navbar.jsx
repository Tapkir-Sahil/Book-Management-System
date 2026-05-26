const Navbar = () => {
  return (
    <nav
      className="
        sticky
        top-0
        z-50
        backdrop-blur-md
        bg-white/80
        border-b
        border-gray-200
        shadow-sm
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >
        <div>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Book Management System
          </h1>

          <p className="text-sm text-gray-500">
            Manage your books efficiently
          </p>
        </div>

        <div
          className="
            hidden
            md:flex
            items-center
            gap-2
          "
        >
          <div
            className="
              h-3
              w-3
              rounded-full
              bg-green-500
            "
          ></div>

          <span className="text-sm text-gray-600">
            Online
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
