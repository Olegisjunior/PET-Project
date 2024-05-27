import { useState } from "react";
import { FooterSection } from "../FooterSection/FooterSection";
import { Header } from "../Header/Header";
import { ItemList } from "../itemList/ItemList";
import { bikes } from "../../bikes";
import bannerMTB from "../ui/image1400w.jpeg";

export default function Mtb() {
  // const { product, setProduct } = useState();

  return (
    <>
      <Header />
      <div className="main w-full h-screen ">
        <div className="title w-full h-[250px] relative">
          <h1 className="font-[800] text-[4rem] text-white absolute left-[35%] top-[20%]">
            Moutain bikes
          </h1>
          <img
            src={bannerMTB}
            className="w-full h-[250px] object-cover"
            alt=""
          />
        </div>
        <div className="flex ">
          <aside className="aside w-[15%] h-[1000px] bg-gray-200"></aside>
          <ItemList bikes={bikes} />

          {/* <div className="gr w-[85%] h-[1000px] bg-red-800 grid gap-4 grid-cols-3 grid-rows-3 pl-10 pt-10">
            <div className="w-[325px] h-[200px] bg-yellow-600">2</div>
            <div className="w-[325px] h-[200px] bg-yellow-700">3</div>
            <div className="w-[325px] h-[200px] bg-purple-500">4</div>
            <div className="w-[325px] h-[200px] bg-purple-600">5</div>
            <div className="w-[325px] h-[200px] bg-purple-700">7</div>
            <div className="w-[325px] h-[200px] bg-blue-500">8</div>
            <div className="w-[325px] h-[200px] bg-blue-600">6</div>
            <div className="w-[325px] h-[200px] bg-blue-700">9</div>
          </div> */}
        </div>
      </div>
      <div className="pt-[500px]">
        <FooterSection />
      </div>
    </>
  );
}

// json with img & price & name, title, grid's, card item,
// sort on top, pagination, filters for grid's
// skeleton when loading
// item Page, with description, photos, buy button, how to pick sizes s/m/l/xl
