import NavBar, { InlineNavBar } from './NavBar';
import Footer from './Footer';
import { type ParentProps } from 'solid-js';

function WithNavBarLayout(props: ParentProps) {
  return (
    <div class="relative flex min-h-dvh w-full flex-col justify-center pb-4 transition-all max-lg:items-center lg:flex-row xl:pr-32">
      <div class="sticky top-8 h-full">
        <NavBar />
      </div>
      <InlineNavBar />
      <div class="flex w-full max-w-2xl grow flex-col justify-between lg:ml-24 lg:pt-8">
        {props.children}
        <div class="mt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default WithNavBarLayout;
