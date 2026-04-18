import ResumeContent from '../contents/resume.mdx';
import Footer from '../components/Footer';
import { ArrowUpRight, BookDown } from 'lucide-solid';
import { type ParentProps, type JSX, Show } from 'solid-js'; // type for children prop
import { A } from '@solidjs/router';

function Resume() {
  return (
    <div class="mx-auto flex w-full max-w-2xl flex-col py-4">
      <div class="markdown flex flex-col">
        <ResumeContent />
      </div>
      <div class="pt-8">
        <Footer />
      </div>
    </div>
  );
}

export function RHeader(props: {
  name: string;
  description: string;
  homepage?: string;
  cvUrl?: string;
}) {
  return (
    <header>
      <A href={props.homepage ?? ''}>
        <h2>
          {props.name}
          <ArrowUpRight class="ml-1 inline size-4 align-text-top" />
        </h2>
      </A>
      <p class="m-0 text-sm">{props.description}</p>
      <Show when={props.cvUrl}>
        {props.cvUrl && (
          <A class="mt-1 flex items-center" href={props.cvUrl} download="CV_YangZhan.pdf">
            <BookDown class="mr-1 inline size-4 align-text-top" />
            <p class="m-0 text-sm">Download</p>
          </A>
        )}
      </Show>
    </header>
  );
}

export function RSection(props: ParentProps<{ title: string }>) {
  return (
    <section class="my-4">
      <h3 class="my-4">{props.title}</h3>
      <div class="flex flex-col space-y-4">{props.children}</div>
    </section>
  );
}

export function RItem(props: {
  title: string;
  startTime: string;
  endTime?: string;
  subtitle?: JSX.Element | string;
  description?: JSX.Element | string;
  url?: string;
}) {
  return (
    <div class="flex w-full flex-col text-sm md:flex-row">
      <div class="mr-14 mb-1 w-full max-w-32 font-mono font-light text-gray-700">{`${props.startTime}${props.endTime ? `-${props.endTime}` : ''}`}</div>

      <div class="flex flex-1 flex-col space-y-1">
        <div class="text-black">
          <Show when={props.url} fallback={props.title}>
            <A class="cursor-pointer text-black" href={props.url!}>
              {props.title}
              <ArrowUpRight class="ml-1 inline size-3 align-text-top" />
            </A>
          </Show>
        </div>
        <Show when={props.subtitle}>
          <div class="font-light text-gray-700">{props.subtitle}</div>
        </Show>
        <Show when={props.description}>
          <div class="my-2 mt-0 text-sm font-light text-gray-700">{props.description}</div>
        </Show>
      </div>
    </div>
  );
}

export default Resume;
