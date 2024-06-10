import { FooterSection } from "../FooterSection/FooterSection";
import { Header } from "../Header/Header";
import { ItemList } from "../itemList/ItemList";
import bannerMTB from "../ui/image1400w.jpeg";
import Button from "../interface/Buttons/Button";
import Pagination from "../Pagination/Pagination";
import { useEffect, useState } from "react";
import Skeleton from "../Skeleton/Skeleton";
import Filters from "../Filters/Filters";
import axios from "axios";

export default function Mtb() {
  const [product, setProduct] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState([]);
  const [dataAxios, setDataAxios] = useState({});
  const [sortValue, setSortValue] = useState("");
  const [sortPrice, setSortPrice] = useState("");

  async function getBikes(sortValue, sortPrice) {
    const perPage = 9;
    const params = {
      page: CurrentPage,
      limit: perPage,
    };
    let sortBy = "";

    if (sortValue) sortBy += sortValue;
    if (sortPrice) sortBy += sortPrice;

    if (sortBy) {
      params.sortBy = sortBy;
    }

    if (filter && filter.length > 0) {
      params.brand = filter;
    }

    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://9062e60b1552f6a8.mokky.dev/bikes`,
        {
          params,
        }
      );

      setProduct(response.data.items);
      let len = response.data.meta.total_items;

      setDataAxios({ ItemsLengthAxios: len, ItemsPerPageAxios: perPage });
    } catch (e) {
      console.error(e.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getBikes(sortValue, sortPrice, filter);
  }, [CurrentPage, sortValue, sortPrice, filter]);

  const handleSort = (type) => {
    if (type === "sortByAlpha") {
      const typeSort = sortValue === "name" ? "-name" : "name";
      setSortValue(typeSort);
      setSortPrice("");
      setCurrentPage(1);
    } else if (type === "sortByPrice") {
      const typePriceSort = sortPrice === "price" ? "-price" : "price";
      setSortValue("");
      setSortPrice(typePriceSort);
      setCurrentPage(1);
    }
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const SortedBikes = (data) => {
  //

  //   if (sortType === "sortByAlpha") {
  //     return filteredBikes.sort((a, b) => a.name.localeCompare(b.name));
  //   } else if (sortType === "sortByPrice") {
  //     return filteredBikes.sort((a, b) => {
  //       return a.price - b.price;
  //     });
  //   } else {
  //     return filteredBikes;
  //   }
  // };

  const handleCategory = (categoryFilter) => {
    // setFilter(categoryFilter);
    setFilter((prevFilter) => {
      if (prevFilter.includes(categoryFilter)) {
        return prevFilter.filter((brand) => brand !== categoryFilter);
      } else {
        return [...prevFilter, categoryFilter];
      }
    });

    setCurrentPage(1);
  };

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
        <Button onClick={() => handleSort("sortByAlpha")} hoverUnd={true}>
          sort by alhabeth
        </Button>
        <Button onClick={() => handleSort("sortByPrice")} hoverUnd={true}>
          sort by price
        </Button>
        <Button hoverUnd={true}>sort by rate</Button>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex pb-[5rem]">
          <aside className="aside w-[14rem] h-fit bg-gray-200 flex flex-col">
            <Filters Category={handleCategory}></Filters>
          </aside>
          {isLoading ? <Skeleton /> : null}

          {!isLoading ? <ItemList bikes={product} /> : null}
        </div>
        {
          <Pagination
            items={dataAxios}
            handlePagination={handlePagination}
          ></Pagination>
        }

        <div className="mt-[5rem]">
          <FooterSection />
        </div>
      </div>
    </>
    // json with img & price & name, title, grid's, card item, резиновий грід
    // sort on top, pagination,
    // skeleton when loading
    // filters for grids, add active Button filter, add one two more active buttons...
    // transport free data base or partner db

    ////////////////////////////////////////////////////////////////////////////////////////////

    // Item Page with description photos buy button how to pick sizes s/m/l/xl,
    // feature favorite <3 to cart favorite
    // New filters(year, size), rate for sort rate,
    // На карточках показувати які є кольори і мб їх міняти зразу ж в сторінці з всіма велами
    // IDK чи треба, воно нічого не оптимузовує, upload photos to web service, not for local db
  );
}
