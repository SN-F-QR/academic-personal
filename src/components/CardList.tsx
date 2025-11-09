import { children, type ParentProps } from 'solid-js';

function CardList(props: ParentProps) {
  const childrenComponent = children(() => props.children);

  return <div class="flex flex-col place-items-center space-y-6 pb-6">{childrenComponent()}</div>;
}

export default CardList;
