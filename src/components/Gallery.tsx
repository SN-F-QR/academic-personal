export type GalleryProps = {
  images: string[];
};

const Gallery: React.FC<GalleryProps> = (props) => {
  const stride: number = 20 / (props.images.length - 1);
  const imageStack = props.images.map((image, index) => {
    return (
      <div
        key={image}
        className="absolute h-full w-4/5 place-content-center"
        style={{
          left: `${index * stride}%`,
          zIndex: `${props.images.length - index}`,
          filter: `${index === 0 ? "none" : "blur(3px)"}`,
        }}
      >
        <img
          src={image}
          className="m-0 rounded-3xl shadow-md"
          width={160}
          alt="a figure in this paper"
        />
      </div>
    );
  });

  return <div className="relative h-full w-full">{imageStack}</div>;
};

export const SingleImage: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className="h-full">
      <img
        src={image}
        className="m-0 h-full object-cover"
        alt="a figure in this paper"
      />
    </div>
  );
};

export default Gallery;
