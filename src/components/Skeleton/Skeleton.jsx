export const Skeleton = () => {
  const SkeletonCount = [];

  for (let i = 1; i <= 12; i++) {
    SkeletonCount.push(i);
  }

  return (
    <div className="grid w-[85%] my-0 mx-auto pl-[2.5rem] pt-[2.5rem] gap-x-[3rem] gap-y-[8rem] max-w-[1620px] grid-cols-[repeat(auto-fill,_325px)]">
      {SkeletonCount.map((elem) => {
        return (
          <div
            key={elem}
            className="w-[325px] h-[200px] bg-gray-200 animate-pulse"
          ></div>
        );
      })}
    </div>
  );
};

export default Skeleton;
