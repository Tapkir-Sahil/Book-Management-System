const Footer = () => {
  return (
    <footer
      className="
        mt-16
        border-t
        border-gray-200
        bg-white
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-6
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-3
        "
      >
        <div>
          <h2 className="font-semibold text-gray-800">
            Book Management System
          </h2>

          <p className="text-sm text-gray-500">
            Built using React, Tailwind CSS & MockAPI
          </p>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;