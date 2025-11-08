import { A } from '@solidjs/router';
import { Index } from 'solid-js';
import LocationWidget from './LocationWidget';
import NewsWidget from './NewsWidget';

function NavBar() {
  return (
    <div class="hidden w-54 shrink-0 flex-col justify-items-center space-y-4 font-sans lg:flex">
      <img
        src="./avatar.png"
        alt="avatar of Yang Zhan"
        class="mt-4 h-32 w-32 rounded-full border border-purple-mid object-cover"
      />
      <h1 class="place-self-start font-sans text-3xl font-bold">Yang Zhan</h1>
      <nav class="flex flex-col space-y-1 text-xl font-light text-gray">
        <NavButtonList
          links={[
            { name: 'Academic', path: '' },
            { name: 'About', path: 'about' },
            { name: 'Links', path: 'links' },
          ]}
        />
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
            class="mt-4 h-24 w-24 rounded-full border border-purple-mid"
          />
          <h1 class="font-sans text-3xl font-bold">Yang Zhan</h1>
        </div>
        <nav class="flex flex-wrap space-x-2 text-xl font-light text-gray">
          <NavButtonList
            links={[
              { name: 'Academic', path: '' },
              { name: 'About', path: 'about' },
              { name: 'Links', path: 'links' },
            ]}
          />
        </nav>
      </div>
      <span class="flex w-full items-center justify-center space-x-2">
        <NewsWidget />
        <LocationWidget />
      </span>
    </div>
  );
}

function NavButtonList({ links }: { links: { name: string; path: string }[] }) {
  return (
    <Index each={links}>{(link) => <NavButton name={link().name} path={link().path} />}</Index>
  );
}

function NavButton({ name, path }: { name: string; path: string }) {
  return (
    <A
      href={`/${path}`}
      class="mt-1 h-10 flex-1 cursor-pointer rounded-xl lg:max-w-54 lg:flex-auto"
      activeClass="bg-purple-mid text-purple-strong shadow-md"
      inactiveClass="bg-[#f5f4ff]/75 shadow-xs"
      end={true}
    >
      <div class="flex h-full justify-center lg:justify-start">
        <span class="min-w-4 place-self-center px-4">{name}</span>
      </div>
    </A>
  );
}

export default NavBar;
