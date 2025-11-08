import { children } from 'solid-js';

function CardList(props: { children: Element }) {
  const childrenComponent = children(() => props.children);

  return (
    <div class="flex flex-col place-items-center space-y-6 pt-2 pb-6">{childrenComponent()}</div>
  );
}

export default CardList;
