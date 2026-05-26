const Loader = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="relative">
        <div
          className="
            h-16
            w-16
            rounded-full
            border-4
            border-blue-200
          "
        ></div>

        <div
          className="
            absolute
            top-0
            left-0
            h-16
            w-16
            rounded-full
            border-4
            border-blue-600
            border-t-transparent
            animate-spin
          "
        ></div>
      </div>
    </div>
  );
};

export default Loader;