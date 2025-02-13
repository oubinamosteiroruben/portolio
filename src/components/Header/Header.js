"use client";

import React, { useState, useEffect } from "react";
import './Header.css';
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBurger } from "@fortawesome/free-solid-svg-icons";

function Header({setPage, page}) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={isMobile ? 'header header-mobile' : 'header'} page={page}>
      <div className="left-container">
        <div className="logo-container">
          <Image src="/logo.png" alt="Logo" width={50} height={65.5} />
        </div>
        <div className="delimitator"></div>
        <div className="title-container">Portfolio de Rubén Oubiña</div>
      </div>
      <Menu isMobile={isMobile} setPage={setPage}/>
      {/* <div className="right-container">
        <div className='date-container'>Current Date: <CurrentDate /></div>
      </div> */}
    </div>
  );
}

function CurrentDate() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
    </>
  );
}


function Menu({isMobile, setPage}){

  return (
    <>
      {
        isMobile ? (
          <MenuMobile setPage={setPage}/>
        ) : (
          <MenuPC setPage={setPage} />
        )
      }
    </>
  )
}

function MenuOptions({setPage, closeOptions = () => {}}){
  
  return (
    <>
        <button onClick={() => {closeOptions() ; setPage('home')}} className='menu'>Inicio</button>
        <button onClick={() => {closeOptions() ; setPage('about')}} className='menu'>Sobre mi</button>
        <button onClick={() => {closeOptions() ; setPage('projects')}} className='menu'>Proyectos</button>
        <button onClick={() => {closeOptions() ; setPage('contact')}} className='menu'>Contacto</button>
    </>
  )
}

function MenuPC({setPage}){

  return (
    <div className='menu-container menu-pc'>
      <MenuOptions setPage={setPage} />
    </div>
  )

}

function MenuMobile({setPage}){

  const [isOpen, setIsOpen] = useState(false);

  const closeOptions = () => setIsOpen(false);

  return (
    <div className='menu-container menu-mobile'>
      <button onClick={() => setIsOpen(!isOpen)} className='menu'><FontAwesomeIcon icon={faBars}/></button>
      <div className={isOpen ? "options opened" : "options"} >
        {isOpen && <MenuOptions setPage={setPage} closeOptions={closeOptions}/>}
      </div>
    </div>
  )

}

export default Header;