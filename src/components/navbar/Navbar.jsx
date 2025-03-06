import { CartContext } from '@/utils/context/Wrapper'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

const Navbar = ({ navRef }) => {
  const {setIsPdf} = useContext(CartContext)
  const [open, setOpen] = useState(false);
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();


  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openSidebar = () => {
    if (open) {
      document.querySelector(".menu-icon").classList.remove("ri-close-line");
      document.querySelector(".menu-icon").classList.add("ri-menu-fill");
      gsap.to(".side-menu", { top: "-100vh", duration: 0.5 });
      setOpen(false);
    } else {
      document.querySelector(".menu-icon").classList.add("ri-close-line");
      document.querySelector(".menu-icon").classList.remove("ri-menu-fill");
      gsap.to(".side-menu", { top: "100%", duration: 0.5 });
      setOpen(true);
    }
  };

  const links = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/product", name: "Product" },
    { path: "/Allaster_Brochure.pdf", name: "Brochure" },
    { path: "/contact", name: "Contact" },
  ];

  const handlePdf = () => {
    console.log("clicked");
    
    if (window.innerWidth < 1000) {
      router.push('/Allaster_Brochure.pdf'); // Replace '/some-route' with your desired route
      return;
    }
    setIsPdf(true);
  };

  return (
    <div ref={navRef} className='w-full sm:px-[4vw] md:px-[4vw] lg:px-[4vw] px-[2.5vw] sm:py-[3.1vw] md:py-[3.1vw] lg:py-[3.1vw] py-[1vw] text-black bg-white flex items-center justify-between fixed z-[9] top-0 left-0' style={{ backdropFilter: "blur(40px)" }}>
      <Link href="/"><Image width={1000} height={1000} className='w-[200px] h-auto' src="/logo-with-tag.png" alt='logo' /></Link>

      <div className='sm:hidden md:hidden lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 xl:text-[1.8vw] text-[1.1vw] font-regular capitalize -translate-y-1/2 flex items-center gap-[3vw]'>
      {links.map(({ path, name }, index) =>
    name === "Brochure" ? (
        <span
            key={index}
            className="hover:opacity-[.8] relative cursor-pointer"
            onClick={() => handlePdf()}
        >
            {name}
        </span>
    ) : (
        <Link
            key={index}
            href={path}
            className={`hover:opacity-[.8] relative ${router.pathname === path ? "font-bold" : ""}`}
        >
            {name}
        </Link>
    )
)}

      </div>

      <div className='flex items-center gap-[50px]'>
      <span className='cursor-pointer relative flex items-center text-[20px]' onClick={() => setIsCartOpen(true)}>
      <i className="ri-shopping-cart-2-line"></i>
        {isMounted && cartItems.length > 0 ? <p className='absolute top-[-3px] right-[-13px] w-[18px] h-[18px] text-white bg-red-600 rounded-full flex items-center justify-center text-[10px]'>{cartItems.length}</p> : ''}
      </span>

      <i onClick={openSidebar} className="menu-icon cursor-pointer ri-menu-fill text-[5.5vw] lg:text-[3.3vw] sm:block md:block lg:block hidden font-semibold"></i>

      </div>
      <div className='side-menu duration-300 w-[100%] h-[100vh] absolute top-[-100vh] left-0 text-black sm:flex md:flex lg:flex  hidden justify-end uppercase font-semibold text-left text-[6vw] lg:text-[3.5vw]'>
        <div className='w-full h-fit relative flex flex-col justify-center bg-white p-[2vw]'>
        {links.map(({ path, name }, index) =>
    name === "Brochure" ? (
        <span
            key={index}
            className="hover:opacity-[.8] relative cursor-pointer"
            onClick={() => handlePdf()}
        >
            {name}
        </span>
    ) : (
        <Link
            key={index}
            href={path}
            className={`hover:opacity-[.8] relative ${router.pathname === path ? "font-bold" : ""}`}
        >
            {name}
        </Link>
    )
)}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
