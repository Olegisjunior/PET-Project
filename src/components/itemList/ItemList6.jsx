import Items6 from "../Items/Items6";

export const ItemList6 = (props) => {
  const { bikes } = props;

  return (
    <>
      <div className="grid w-[85%] my-0 mx-auto pl-[2.5rem] pt-[2.5rem] gap-x-[3rem] gap-y-[8rem] max-w-[1620px] grid-cols-[repeat(auto-fill,_325px)] ">
        {bikes.map((item) => {
          return (
            <Items6
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

export default ItemList6;
