import Section1 from '@/components/about/Section1'
import Section3 from '@/components/about/Section3'
import Section4 from '@/components/about/Section4'
import Section5 from '@/components/about/Section5'
import Section6 from '@/components/about/Section6'
import Footer from '@/components/footer/Footer'
import Section2 from '@/components/home/Section2'
import Navbar from '@/components/navbar/Navbar'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const About = () => {
  const bluetxt = "Allastir is a leading pharmaceutical innovator specializing in Active Pharmaceutical Ingredients (APIs), formulations, and dietary supplements."
  const normaltxt = "With cutting-edge R&D, world-class manufacturing, and a commitment to quality, we deliver superior healthcare solutions globally. Our expertise, regulatory excellence, and industry partnerships drive advancements in medicine and patient care."

  const navRef = useRef(null)
  const sec1Ref = useRef(null)
  const sec2Ref = useRef(null)

  useEffect(() => {
    gsap.set(sec1Ref.current, { opacity: 0 })
    gsap.set(sec1Ref.current.querySelector("h2"), { y: "100%" })
    gsap.set(sec2Ref.current, { y: "80",opacity:0 })
    gsap.set(navRef.current, { y: "-100%" })
    var tl = gsap.timeline()
    tl
      .to(sec1Ref.current, {
        opacity: 1,
        duration: .8,
        ease: "power4.in",
      })
      .to(navRef.current, {
        y: 0,
        duration: .6
      })
      .to(sec1Ref.current.querySelector("h2"), {
        y: 0,
        duration: .5
      },"a")
      .to(sec2Ref.current, {
        y: 0,
        opacity:1,
        duration: .5,
        delay:.3
      },"a")

    return () => {
      tl.kill();
    };
  }, [])




  return (
    <div className='w-full relative overflow-hidden'>
      <Navbar navRef={navRef}/>
      <Section1 sec1Ref={sec1Ref}/>
      <Section2 sec2Ref={sec2Ref} bluetxt={bluetxt} normaltxt={normaltxt} />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  )
}

export default About