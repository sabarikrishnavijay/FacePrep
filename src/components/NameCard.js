import React from "react";

function NameCard({ user }) {
  return (
    <div className="px-0 md:px-24 w-[100%] bg-white h-24 mt-3 mb-3">
      <div
        key={user.registered.date}
        className=" h-[100%] flex flex-row  justify-around border-2 border-gray-400 rounded-[100px] transition duration-500  shadow-black  hover:shadow-2xl"
      >
        <div className="flex-none w-16  md:w-64 h-[100%] flex  justify-center pt-8">
          {user.name.first}
        </div>
        <div className="shrink  w-30 md:w-96  h-[100%]  flex  justify-center pt-8">
          {user.email}
        </div>
        <div className="flex-none pt-3 w-16 md:w-64 h-[100%] flex  justify-center sm:pt-1  ">
          <img
            className="transform m-4  inline-block  h-10 md:h-14 w-10 md:w-14 rounded-full ring-2 ring-orange-500 transition duration-1000 hover:scale-125  "
            src={user.picture.large}
          />
        </div>
      </div>
    </div>
  );
}

export default NameCard;
