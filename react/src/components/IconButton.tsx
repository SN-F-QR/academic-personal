import { type LucideIcon  } from "lucide-react";

type IconButtonProps = {
  icon: LucideIcon;
  name: string;
  url: string;
};

const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <button
      className="inline-flex cursor-pointer rounded-lg bg-purple-mid px-2 py-1 font-semibold"
      onClick={() => window.open(props.url, "_blank")}
    >
      <props.icon className="mr-1 size-5" />
      {props.name}
    </button>
  );
};

export default IconButton;
