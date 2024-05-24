import Button from "../interface/Buttons/Button";

export const FooterSection = () => {
  return (
    <>
      <div className="w-full">
        <div className="bg-[#1e1e1e] border-b-2 border-solid border-[#2b2b2b]"></div>

        <div className="pt-10 bg-[#1e1e1e] flex content-center pl-16 justify-around items-start pb-10">
          <div className="first flex justify-center items-center flex-col text-[#dadddb]">
            <h1 className="text-[1.25rem] text-[#ffffff]">SHOP</h1>
            <Button hoverUnd={true}>Mountain bikes</Button>
            <Button hoverUnd={true}>Road bikes</Button>
            <Button hoverUnd={true}>Electra bikes</Button>
            <Button hoverUnd={true}>Hybrid bikes</Button>
            <Button hoverUnd={true}>Men's bikes</Button>
            <Button hoverUnd={true}>Women's bikes</Button>
            <Button hoverUnd={true}>Equipment</Button>
            <Button hoverUnd={true}>Clothing</Button>
            <Button hoverUnd={true}>Cloth</Button>
          </div>
          <div className="second flex justify-center items-center flex-col text-[#dadddb]">
            <h1 className="text-[1.25rem] text-[#ffffff]">ABOUT US</h1>
            <Button hoverUnd={true}>Our history</Button>
            <Button hoverUnd={true}>our missions</Button>
            <Button hoverUnd={true}>our principles</Button>
            <Button hoverUnd={true}>Technology</Button>
            <Button hoverUnd={true}>Stores</Button>
          </div>
          <div className="third flex justify-center items-center flex-col text-[#dadddb]">
            <h1 className="text-[1.25rem] text-[#ffffff]">SUPPORT</h1>
            <Button hoverUnd={true}>Contact us</Button>
            <Button hoverUnd={true}>Product support</Button>
            <Button hoverUnd={true}>Bike registration</Button>
            <Button hoverUnd={true}>Bike archive</Button>
            <Button hoverUnd={true}>Manuals & user guides</Button>
          </div>
        </div>

        <div className="bg-[#1e1e1e] border-b-2 border-solid border-[#2b2b2b]"></div>

        <div className="text-white bg-[#1e1e1e] p-5 flex flex-col justify-center items-center">
          <p>Copyright by Oleg</p>
          <p>2024</p>
        </div>
      </div>
    </>
  );
};
