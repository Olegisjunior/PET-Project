import { ItemList4 } from "../itemList/ItemList4";
import bannerMTB from "../ui/image1400w.jpg";
import Button from "../interface/Buttons/Button";
import Pagination from "../Pagination/Pagination";
import { useEffect, useState } from "react";
import Skeleton from "../Skeleton/Skeleton";
import Filters from "../Filters/Filters";
import axios from "axios";

export const Ebikes = () => {
  const [product, setProduct] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState([]);
  const [filter2, setFilter2] = useState([]);
  const [filter3, setFilter3] = useState([]);
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
    if (filter2 && filter2.length > 0) {
      params.size = filter2;
    }
    if (filter3 && filter3.length > 0) {
      params.year = filter3;
    }

    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://9062e60b1552f6a8.mokky.dev/ebikes`,
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
    getBikes(sortValue, sortPrice, filter, filter2, filter3);
  }, [CurrentPage, sortValue, sortPrice, filter, filter2, filter3]);

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

  const handleCategory = (categoryFilter) => {
    setFilter((prevFilter) => {
      if (prevFilter.includes(categoryFilter)) {
        return prevFilter.filter((brand) => brand !== categoryFilter);
      } else {
        return [...prevFilter, categoryFilter];
      }
    });

    setCurrentPage(1);
  };

  const handleSize = (sizeFilter) => {
    setFilter2((prevFilter) => {
      if (prevFilter.includes(sizeFilter)) {
        return prevFilter.filter((size) => size !== sizeFilter);
      } else {
        return [...prevFilter, sizeFilter];
      }
    });
    setCurrentPage(1);
  };
  const handleYear = (YearFilter) => {
    setFilter3((prevFilter) => {
      if (prevFilter.includes(YearFilter)) {
        return prevFilter.filter((year) => year !== YearFilter);
      } else {
        return [...prevFilter, YearFilter];
      }
    });
    setCurrentPage(1);
  };

  return (
    <>
      <div className="main h-fit">
        <div className="title w-full h-[250px] relative">
          <h1 className="font-[800] text-[4rem] text-white absolute left-[45%] top-[20%]">
            Ebikes
          </h1>
          <img src={bannerMTB} className="w-full h-[250px] object-cover" />
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
            <Filters
              Category={handleCategory}
              Sizes={handleSize}
              Years={handleYear}
            ></Filters>
          </aside>
          {isLoading ? <Skeleton /> : null}

          {!isLoading ? <ItemList4 bikes={product} /> : null}
        </div>

        <div className="p-10">
          <Pagination
            items={dataAxios}
            handlePagination={handlePagination}
          ></Pagination>
        </div>
      </div>
    </>
  );
};
