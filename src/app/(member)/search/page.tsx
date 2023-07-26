import SearchFilter from "@/components/Search/SearchFilter";
import BookItem from "@/components/book/BookItem";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex gap-2">
      <SearchFilter />
      <div className="bg-[#f0f0f0] text-black xl:max-w-[944px] flex flex-wrap gap-2 max-[770px]:justify-center flex-1">
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        {/* <div className="w-[230px] h-[294px] bg-white"></div>
      <div className="w-[230px] h-[294px] bg-white"></div>
      <div className="w-[230px] h-[294px] bg-white"></div>
      <div className="w-[230px] h-[294px] bg-white"></div> */}
      </div>
    </div>
  );
};

export default page;
