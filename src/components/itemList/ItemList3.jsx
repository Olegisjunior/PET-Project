import Items3 from "../Items/Items3";

export const ItemList3 = (props) => {
  const { bikes } = props;

  return (
    <>
      <div className="grid w-[85%] my-0 mx-auto pl-[2.5rem] pt-[2.5rem] gap-x-[3rem] gap-y-[8rem] max-w-[1620px] grid-cols-[repeat(auto-fill,_325px)] ">
        {bikes.map((item) => {
          return (
            <Items3
              name={item.name}
              key={item.id}
              price={item.price}
              img={item.img}
              id={item.id}
              product={item}
            />
          );
        })}
      </div>
    </>
  );
};

export default ItemList3;
