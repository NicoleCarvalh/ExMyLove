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
            <button className="bg-m-medio text-white font-bold p-5 rounded-xl w-[12rem] text-center shadow-md">Conheça mais</button>
          </div>
        </div>
        <div className="overflow-hidden w-full align-bottom flex absolute left-0 right-0 bottom-0 my-0 mx-auto border-4 border-amber-950">
          {/* <img src="/elements.png" alt="" className=""/> */}
          <img
            src="/shapes/shape1.svg"
            alt=""
            className="border-2 border-b-blue-950"
          />
          <img
            src="/shapes/shape2.svg"
            alt=""
            className=""
          />
          <img
            src="/shapes/shape5.svg"
            alt=""
            className=""
          />
        </div>
      </section>
    </>
  );
}

export { Home };
