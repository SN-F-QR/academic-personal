import { A } from '@solidjs/router';
import { Index } from 'solid-js';
import LocationWidget from './LocationWidget';
import NewsWidget from './NewsWidget';
import { LibraryBig, Satellite, Sticker, type LucideIcon } from 'lucide-solid';

const navButtonGroups = [
  { name: 'Academic', path: '', Icon: LibraryBig },
  { name: 'About', path: 'about', Icon: Satellite },
  { name: 'Links', path: 'links', Icon: Sticker },
];

function NavBar() {
  return (
    <div class="hidden w-54 shrink-0 flex-col justify-items-center space-y-4 font-sans lg:flex">
      <img
        src="./avatar.png"
        alt="avatar of Yang Zhan"
        class="mt-4 h-32 w-32 rounded-full border border-purple-mid object-cover shadow-sm"
        draggable={false}
      />
      <h1 class="place-self-start font-sans text-3xl font-bold">Yang Zhan</h1>
      <nav class="flex flex-col space-y-1 text-xl font-light text-gray">
        <NavButtonList links={navButtonGroups} />
      </nav>
      <NewsWidget />
      <LocationWidget />
    </div>
  );
}

export function InlineNavBar() {
  return (
    <div class="w-full max-w-2xl pb-4 lg:hidden">
      <div class="flex w-full flex-col space-y-4 pb-4">
        <div class="flex items-center space-x-4">
          <img
            src="./avatar.png"
            alt="avatar of Yang Zhan"
            class="mt-4 h-24 w-24 rounded-full border border-purple-mid shadow-sm"
          />
          <h1 class="font-sans text-3xl font-bold">Yang Zhan</h1>
        </div>
        <nav class="flex flex-wrap space-x-2 text-sm font-light text-gray sm:text-xl">
          <NavButtonList links={navButtonGroups} />
        </nav>
      </div>
      <span class="flex w-full items-center justify-center space-x-2">
        <NewsWidget />
        <LocationWidget />
      </span>
    </div>
  );
}

function NavButtonList({ links }: { links: { name: string; path: string; Icon?: LucideIcon }[] }) {
  return (
    <Index each={links}>
      {(link) => <NavButton name={link().name} path={link().path} Icon={link().Icon} />}
    </Index>
  );
}

function NavButton({ name, path, Icon }: { name: string; path: string; Icon?: LucideIcon }) {
  return (
    <A
      href={`/${path}`}
      class="animated mt-1 h-10 flex-1 cursor-pointer rounded-xl lg:max-w-54 lg:flex-auto"
      activeClass="bg-purple-mid text-purple-strong shadow-sm"
      inactiveClass="bg-gray-50 hover:bg-gray-100"
      end={true}
    >
      <div class="flex h-full items-center justify-center gap-1 px-4 lg:justify-start">
        {Icon && <Icon class="size-4 sm:size-5" />}
        <span class="min-w-4 place-self-center">{name}</span>
      </div>
    </A>
  );
}

export default NavBar;
