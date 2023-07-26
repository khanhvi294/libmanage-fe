// import Image from "next/image";
// import React from "react";
// import img from "/image.jpg";

type Props = {};

const BookItem = (props: Props) => {
  return (
    <div className="w-[230px] h-[294px] bg-white flex flex-col p-2">
      {/* <Image src={img} alt="book image" width={100} height={24} priority /> */}
      <div className="h-24">
        <p className="font-base">Gieo Trồng Hạnh Phúc (Tái Bản 2021)</p>
        <p>Thích Nhất Hạnh</p>
        <p>self help</p>
      </div>
    </div>
  );
};

export default BookItem;
