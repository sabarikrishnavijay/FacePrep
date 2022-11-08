import React from "react";

function Skelton() {
  return (
    <div className="px-0 md:px-24 w-[100%] h-24 mt-3 mb-3">
      <div className="border border-blue-300 shadow rounded-[100px] p-4  w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
          <div className="rounded-full bg-slate-700 h-10 w-10 m-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Skelton;
