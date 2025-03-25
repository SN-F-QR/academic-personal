const LocationWidget = () => {
  return (
    <div className="relative md:h-32 md:w-full">
      <div className="absolute top-[25%] left-[40%] size-8">
        <div className="relative h-full w-full">
          <div className="absolute top-1/4 left-1/4 grid size-6 animate-[ping_2s_cubic-bezier(0,0,0.2,1)6] rounded-full bg-sky-500 opacity-75" />
          <div className="absolute top-1/4 left-1/4 grid size-6 place-content-center rounded-full bg-white">
            <div className="size-4 rounded-full bg-sky-500" />
          </div>
        </div>
      </div>
      <img
        src="./tokyo_map.png"
        alt="google map of Tokyo"
        className="w-54 rounded-3xl"
      />
      <div className="absolute bottom-1/5 left-1/12 h-6 w-14">
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="absolute h-full w-full translate-x-0 rounded-xl backdrop-blur-sm"></div>
          <p className="absolute text-sm text-indigo-500 opacity-100">Tokyo</p>
        </div>
      </div>
    </div>
  );
};

export default LocationWidget;
