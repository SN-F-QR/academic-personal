type CardList = {
  children: React.ReactElement;
};

const CardList: React.FC<CardList> = ({ children }) => {
  return <div className="flex flex-col space-y-6 pt-2 pb-6">{children}</div>;
};

export default CardList;
