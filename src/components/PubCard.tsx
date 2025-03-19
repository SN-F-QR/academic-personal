import Gallery from "./Gallery";

export type PubCardProps = {
  title: string;
  author: string;
  conference: string;
  description: string;
  imagePaths: string[];
  link: string;
  pdfPath: string;
  techIcon: string;
};

const PubCard: React.FC<PubCardProps> = (props) => {
  return (
    <div className="flex h-52 min-w-full rounded-3xl border border-purple-mid bg-[#f5f4ff]/50 px-4 py-2">
      <div className="ml-2 basis-1/3">
        <Gallery images={props.imagePaths} />
      </div>
      <div className="h-full"></div>
    </div>
  );
};

export default PubCard;
