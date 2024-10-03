import React from "react";

function Featured() {
  return (
    <div className="w-full  ">
      <div className="py-[100px] px-20 ">
        <h1 className='text-5xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="border-t-2 border-zinc-500 flex  ">
        <div>
          <div className="flex ">
            <div className="w-3 h-3 rounded-full bg-zinc-100 ml-10 mt-10 "></div>
            <div className="pl-2 mt-[34px]">
              <h1>FYDE</h1>
            </div>
          </div>

          <div className="w-[650px] h-[550px] bg-red-400 rounded-2xl ml-10 mt-5 ">
            <div className="w-full h-full  overflow-hidden ">
                <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt=" hello"  />
            </div>
          </div>
        </div>

        <div>
        <div className="flex">
          <div className="w-3 h-3 rounded-full bg-zinc-100 ml-10 mt-10"></div>
          <div className="pl-2 mt-[34px]">
            <h1>VISE</h1>
          </div>
        </div>
        <div className="w-[650px] h-[550px] bg-zinc-800 rounded-2xl ml-10 mt-5  ">
            <div className="w-full h-full overflow-hidden scale-75 ">
                <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt=""  />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
