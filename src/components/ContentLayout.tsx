function ContentLayout(props: { title: string; children: Element }) {
  return (
    <div class="flex flex-col md:max-w-2xl">
      <div class="markdown">
        <div class="w-full">
          <h2 class="hidden lg:block">{props.title}</h2>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default ContentLayout;
