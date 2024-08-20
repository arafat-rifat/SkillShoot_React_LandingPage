const ListItem = ({ children }) => {
  return (
    <ul className="flex flex-col laptop:flex-row items-center gap-[30px]">
      {children}
    </ul>
  );
};

export default ListItem;
