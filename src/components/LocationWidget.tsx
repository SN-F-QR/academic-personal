const LocationWidget = () => {
  return (
    <a
      className="h-28 max-w-54 flex-1 overflow-hidden"
      href="https://www.google.com/maps/place/Tokyo"
    >
      <div className="relative">
        <div className="absolute top-[35%] left-[35%] size-8">
          <div className="relative h-full w-full">
            <div className="absolute top-1/4 left-1/4 grid size-6 animate-[ping_3s_cubic-bezier(0,0,0.2,1)infinite] rounded-full bg-sky-500 opacity-75" />
            <div className="absolute top-1/4 left-1/4 grid size-6 place-content-center rounded-full bg-white">
              <div className="size-4 rounded-full bg-sky-500" />
            </div>
          </div>
        </div>
        <img
          src="./tokyo_map.png"
          alt="google map of Tokyo"
          className="h-28 w-full rounded-3xl object-cover"
        />
        <div className="absolute bottom-1/12 left-1/12 h-6 w-14">
          <div className="relative flex h-full w-full items-center justify-center">
            <div className="absolute h-full w-full translate-x-0 rounded-lg bg-white/70"></div>
            <p className="absolute text-sm text-purple-strong opacity-100">
              Tokyo
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default LocationWidget;
