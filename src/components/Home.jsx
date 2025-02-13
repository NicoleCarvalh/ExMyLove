import { Navbar } from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="bg-rs-palido h-[100vh] pt-[6rem] overflow-hidden relative border-4 border-black"
      >
        <div className="flex flex-col p-6 pt-[2rem] gap-4">
          <h1 className="font-title md:text-center text-clamp text-balance font-medium">
            Lorem Ipsum magnitis bufos regularis
          </h1>
          <p className="text-[1.5rem] font-semibold">
            Lorem Ipsum magnitis bufos regularis lorem ipsum bufos bufos bufos
            regularis{" "}
          </p>
          <div className="flex justify-center p-6">
            <button className="bg-m-medio text-white font-bold p-5 rounded-xl w-[12rem] text-center shadow-md">
              Conheça mais
            </button>
          </div>
        </div>
        <div className="overflow-hidden w-full absolute left-0 right-0 bottom-0 my-0 mx-auto border-4 border-amber-950">
          {/* <img src="/elements.png" alt="" className=""/> */}
          <div className="grid grid-cols-[12fr, 1fr] relative overflow-hidden">
            <div className="col-start-1 col-end-[4] row-span-full z-10 flex self-end">
              <img
                src="/shapes/shape1.svg"
                alt=""
                className="border-2 border-b-blue-950 w-[70rem] translate-y-[20%] translate-x-[-10%]"
                role="presentation"
              />
            </div>
            <div className="col-start-[3] col-end-[10] row-span-full flex self-end">
              <img
                src="/shapes/shape2.svg"
                alt=""
                className="w-[55rem] translate-y-[20%]"
                role="presentation"
              />
            </div>
            <div className="col-start-[8] col-end-[12] row-span-full z-10 flex self-end">
              <img
                src="/shapes/shape5.svg"
                alt=""
                className="w-[50rem] translate-x-[45%] translate-y-[25%]"
                role="presentation"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { Home };
