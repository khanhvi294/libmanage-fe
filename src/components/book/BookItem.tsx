import Image from "next/image";
import React from "react";
import img from "../../../public/test.jpg";

type Props = {};

const BookItem = (props: Props) => {
  return (
    <div className="w-[230px] h-[294px] bg-white flex flex-col p-2">
      <div className="w-[182px] m-auto relative">
        <Image src={img} alt="book image" className="w-full h-auto" priority />
      </div>
      <div className="h-24 p-1 mt-1">
        <p className="font-base  text-sm leading-4">
          Gieo Trồng Hạnh Phúc (Tái Bản 2021)
        </p>
        <p className="text-xs italic mt-2">
          <span className="font-bold">Tác giả:</span> Thích Nhất Hạnh
        </p>
        <p className="text-xs mt-2">
          <span className="border-[1px] text-cyan-400 border-cyan-400 rounded-lg py-0.5 px-1">
            Tiểu thuyết
          </span>
        </p>
      </div>
    </div>
  );
};

export default BookItem;
