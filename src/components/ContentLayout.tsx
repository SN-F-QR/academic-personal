import { type ParentProps } from 'solid-js';

function ContentLayout(props: ParentProps<{ title: string }>) {
  return (
    <div class="flex flex-col md:max-w-2xl">
      <div class="markdown">
        <h2 class="hidden lg:block">{props.title}</h2>
        {props.children}
      </div>
    </div>
  );
}

export default ContentLayout;
