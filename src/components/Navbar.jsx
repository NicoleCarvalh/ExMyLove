import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("ScrollY:", window.scrollY); // Para depuração
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (typeof window !== "undefined") {
    document.body.style.overflow = isOpen ? "hidden" : null;
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-colors duration-300 rounded-b-[1rem] ${
        isScrolled ? "bg-rs-palido shadow-md" : "bg-transparent"
      }`}
    >
      {console.log("isScrolled:", isScrolled)}

      {/* Big screen menu */}
      <nav className="hidden md:flex p-[.5rem] justify-around w-full items-center text-[1.2rem] font-extrabold rounded-b-[2rem]">
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Produtos</a>

        <Logo className="w-[5rem] pt-[1rem]" />

        <a href="#">Enjoei</a>
        <a href="#">Instagram</a>
        <a href="#">Contato</a>
      </nav>

      {/* Small screen menu */}
      <div role="navigation" className="">
        <div
          className={`md:hidden h-[10%] flex justify-between items-center p-[1rem] px-[2rem] fixed w-full z-40 rounded-b-[1rem] ${
            isScrolled ? "bg-rs-palido shadow-md" : "bg-transparent"
          } `}
        >
          <Logo type="small" className="w-[4rem]" />
          <button
            className=""
            onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
          >
            <Menu className="size-[4rem]" />
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col fixed p-[3rem] w-full min-w-sm h-[100vh] rounded-t-[5rem] bg-am-palido z-40">
            <div className="justify-end">
              <button
                className="float-right"
                onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
              >
                <X className="size-[3.5rem]" />
              </button>
            </div>

            <ul className="font-title font-regular text-[2.5rem] flex flex-col gap-[3rem]">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Produtos</a>
              </li>
              <li>
                <a href="#">Enjoei</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export { Navbar };
