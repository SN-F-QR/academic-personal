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
        }}
      >
        <img
          src={image}
          className="m-0 w-full rounded-3xl"
          alt="a figure in this paper"
        />
      </div>
    );
  });

  return <div className="relative h-full w-full">{imageStack}</div>;
};

export default Gallery;
