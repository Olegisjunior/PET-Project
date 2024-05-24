export const FooterSection = () => {
  return (
    <>
      <div className="w-full">
        <div className="bg-[#1e1e1e] border-b-2 border-solid border-[#2b2b2b]"></div>

        <div className="pt-10 bg-[#1e1e1e] flex justify-around items-start pb-10">
          <div className="first flex justify-center items-center flex-col text-[#dadddb]">
            <h1 className="text-[1.25rem] text-[#ffffff]">SHOP</h1>
            <button className="hover:underline">Mountain bikes</button>
            <button className="hover:underline">Road bikes</button>
            <button className="hover:underline">Electra bikes</button>
            <button className="hover:underline">Hybrid bikes</button>
            <button className="hover:underline">Men's bikes</button>
            <button className="hover:underline">Women's bikes</button>
            <button className="hover:underline">Equipment</button>
            <button className="hover:underline">Clothing</button>
            <button className="hover:underline">Cloth</button>
          </div>
          <div className="second flex justify-center items-center flex-col text-[#dadddb]">
            <h1 className="text-[1.25rem] text-[#ffffff]">ABOUT US</h1>
            <button className="hover:underline">Our history</button>
            <button className="hover:underline">our missions</button>
            <button className="hover:underline">our principles</button>
            <button className="hover:underline">Technology</button>
            <button className="hover:underline">Stores</button>
          </div>
          <div className="third flex justify-center items-center flex-col text-[#dadddb]">
            <h1 className="text-[1.25rem] text-[#ffffff]">SUPPORT</h1>
            <button className="hover:underline">Contact us</button>
            <button className="hover:underline">Product support</button>
            <button className="hover:underline">Bike registration</button>
            <button className="hover:underline">Bike archive</button>
            <button className="hover:underline">Manuals & user guides</button>
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
