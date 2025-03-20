type CardList = {
  children: React.ReactElement;
};

const CardList: React.FC<CardList> = ({ children }) => {
  return <div className="flex flex-col space-y-4 py-2">{children}</div>;
};

export default CardList;
