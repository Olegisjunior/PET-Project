import Button from "../interface/Buttons/Button";

export const Items = (props) => {
  const { name, img, price, merida } = props;

  // const noMerida = "h-[230px]";
  // const isMerida = "h-[190px] mt-12";
  return (
    <div className="w-[325px] h-[200px] ">
      <div className="bar flex justify-between">
        <a
          title="New Product"
          className=" bg-gray-300 text-[0.8rem] rounded-[30px] w-[60px] flex justify-center items-center"
        >
          NEW
        </a>
        <div>
          <Button tailwind={"mr-5"}>{`<3`}</Button>
          <Button hoverUnd={true}>compare</Button>
        </div>
      </div>
      <a className="hover:cursor-pointer">
        <img
          src={img}
          className="max-w-full min-h-full object-cover"
          alt="bike"
        />
        {/* {merida ? isMerida : noMerida} */}
      </a>
      <a className="justify-center hover:cursor-pointer flex wrap">{name}</a>
      <a className="justify-center flex hover:cursor-pointer">{price}</a>
    </div>
  );
};

export default Items;
