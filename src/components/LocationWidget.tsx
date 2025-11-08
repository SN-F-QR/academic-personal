function LocationWidget() {
  return (
    <a
      class="h-28 max-w-54 flex-1 overflow-hidden rounded-3xl shadow-md"
      href="https://www.google.com/maps/place/Raleigh"
    >
      <div class="relative">
        <div class="absolute top-[35%] left-[35%] z-10 size-8">
          <div class="relative h-full w-full">
            <div class="absolute top-1/4 left-1/4 grid size-6 animate-[ping_3s_cubic-bezier(0,0,0.2,1)infinite] rounded-full bg-sky-500 opacity-75" />
            <div class="absolute top-1/4 left-1/4 grid size-6 place-content-center rounded-full bg-white">
              <div class="size-4 rounded-full bg-sky-500" />
            </div>
          </div>
        </div>
        <img
          src="./generated-map.png"
          alt="google map of Raleigh"
          class="h-28 w-full scale-[2.5] object-contain pr-2"
        />
        <div class="absolute bottom-1/12 left-1/12 h-6 w-14">
          <div class="relative flex h-full w-full items-center justify-center">
            <div class="absolute h-full w-full translate-x-0 rounded-lg bg-white/70"></div>
            <p class="absolute text-sm text-purple-strong opacity-100">Raleigh</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default LocationWidget;
