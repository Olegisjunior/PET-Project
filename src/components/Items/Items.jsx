import Button from "../interface/Buttons/Button";

export const Items = (props) => {
  const { name, img, price } = props;

  return (
    <div className="w-[325px] h-[200px] hover:shadow-[0_60px_30px_rgb(0,0,0,0.15)]">
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
      </a>
      <a className="justify-center hover:cursor-pointer flex wrap">{name}</a>
      <a className="justify-center flex hover:cursor-pointer ">{`${price}$`}</a>
    </div>
  );
};

export default Items;
