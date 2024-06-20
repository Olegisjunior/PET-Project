import Button from "../interface/Buttons/Button";

export const Pagination = ({ items, handlePagination }) => {
  const totalItems = items.ItemsLengthAxios;
  const ItemsPerPage = items.ItemsPerPageAxios;

  const PagItems = [];
  for (let i = 1; i <= Math.ceil(totalItems / ItemsPerPage); i++) {
    PagItems.push(i);
  }

  return (
    <div className="mt-[5rem]">
      <div className="Pagination flex justify-center items-center gap-10 text-[1.2rem]">
        {PagItems.map((pageNumber) => {
          return (
            <Button
              onClick={() => handlePagination(pageNumber)}
              hoverUnd={true}
              key={pageNumber}
            >
              {pageNumber}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
