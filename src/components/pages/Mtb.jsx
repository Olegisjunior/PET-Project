import { useState } from "react";
import { FooterSection } from "../FooterSection/FooterSection";
import { Header } from "../Header/Header";
import { ItemList } from "../itemList/ItemList";
import { bikes } from "../../bikes";
import bannerMTB from "../ui/image1400w.jpeg";
import Button from "../interface/Buttons/Button";

export default function Mtb() {
  return (
    <>
      <Header />
      <div className="main h-fit">
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
      </div>
      <div className="sort bg-gray-200 w-[100%] flex flex-row justify-center items-center gap-12">
        <Button hoverUnd={true}>sort by alhabeth</Button>
        <Button hoverUnd={true}>sort by price</Button>
        <Button hoverUnd={true}>sort by ..</Button>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex pb-[5rem]">
          <aside className="aside w-[15%] h-fit bg-gray-200 flex flex-col">
            <Button>filters</Button>
            <Button>filters</Button>
            <Button>filters</Button>
          </aside>

          <ItemList bikes={bikes} />
        </div>

        <div className="mt-[5rem]">
          <FooterSection />
        </div>
      </div>
    </>
  );
}

// json with img & price & name, title, grid's, card item, резиновий грід
// sort on top, pagination, filters for grid's
// skeleton when loading
// item Page, with description, photos, buy button, how to pick sizes s/m/l/xl
