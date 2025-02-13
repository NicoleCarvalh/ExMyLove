function About() {
  return (
    <>
      <section id="about" className="bg-rs-palido h-[100vh] p-6">
        <div className="flex flex-col gap-[2rem]">
          <h2 className="font-title text-4xl pt-3">Como funciona?</h2>
          <p className="pb-[2rem] text-2xl text-justify font-medium">
            Lorem Ipsum magnitis bufos regularis lorem ipsum bufos bufos bufos
            regularis lorem ipsum bufos regularis lorem Ipsum magnitis bufos
            Lorem Ipsum magnitis bufos regularis lorem ipsum bufos bufos bufos
            regularis lorem ipsum bufos regularis lorem Ipsum magnitis bufos
            Lorem Ipsum magnitis bufos regularis lorem ipsum bufos bufos bufos
            regularis lorem ipsum bufos regularis lorem Ipsum magnitis bufos{" "}
          </p>
        </div>

        <div className="flex flex-col gap-[1rem]">
          <div className="bg-vd-amanteigado h-[15vh] rounded-[1rem] justify-items-center p-7">
            <div className="max-w-[15rem] max-h-[15rem] p-[1rem] mb-4 border-4 border-black">
              <img src="/instagram.png" alt="" />
            </div>
            <button className="bg-m-medio text-white font-bold p-3 rounded-xl w-[8rem] text-center shadow-md">
              Acessar
            </button>
          </div>

          <div className="bg-am-azedo h-[15vh] rounded-[1rem] justify-items-center p-4">
            <div className="max-w-[15rem] max-h-[15rem] p-[1rem] mb-4 border-4 border-black">
              <img src="/enjoei.png" alt="" />
            </div>
            <button className="bg-m-medio text-white font-bold p-3 rounded-xl w-[8rem] text-center shadow-md">
              Acessar
            </button>
          </div>
        </div>
      </section>
      <section className="bg-rs-palido h-[100vh] p-6 border-4 border-black">
      <div className="flex flex-col gap-[2rem]">
          <h2 className="font-title text-4xl pt-3">Sobre</h2>
          <p className="pb-[2rem] text-2xl text-justify font-medium">
            Lorem Ipsum magnitis bufos regularis lorem ipsum bufos bufos bufos
            regularis lorem ipsum bufos regularis lorem Ipsum magnitis bufos
            Lorem Ipsum magnitis bufos regularis lorem ipsum bufos bufos bufos
            regularis lorem ipsum bufos regularis lorem Ipsum magnitis bufos
            Lorem Ipsum magnitis bufos regularis lorem ipsum bufos bufos bufos
            regularis lorem ipsum bufos regularis lorem Ipsum magnitis bufos{" "}
          </p>
        </div>
      </section>
    </>
  );
}

export { About };
