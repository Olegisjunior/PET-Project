import Items from "../Items/Items";

export const ItemList = (props) => {
  const { bikes } = props;

  return (
    <div className="gr w-[85%] h-[1000px] grid gap-17 gap-y-20 grid-cols-3 grid-rows-3 pl-10 pt-10 ">
      {bikes.map((item) => {
        return (
          <Items
            name={item.name}
            key={item.name}
            price={item.price}
            img={item.img}
            merida={item.merida}
          />
        );
      })}
    </div>
  );
};
