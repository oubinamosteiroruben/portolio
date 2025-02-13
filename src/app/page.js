"use client";

import { useState } from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import About from '../components/About/About';
// import Projects from '../components/Projects/Projects';
// import Contact from '../components/Contact/Contact';

export default function App() {
  const [page, setPage] = useState('home');

  let PageComponent;
  switch (page) {
    case 'about':
      PageComponent = About;
      break;
    // case 'projects':
    //   PageComponent = Projects;
    //   break;
    // case 'contact':
    //   PageComponent = Contact;
      // break;
    case 'home':
    default:
      PageComponent = Home;
      break;
  }

  return (
    <div>
      <Header setPage={setPage}  page={page}/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <PageComponent />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
