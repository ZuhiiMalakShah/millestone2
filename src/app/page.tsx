import Link from 'next/link';
import Footer from "./components/footer";

// import Header from "./components/header";

import Image from 'next/image';
import myImage from './mypic.jpg'; 

export default function Home() {
  return (
   <header className="header">
   <nav> 
     <a href=""><img src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png" alt="" className="logo"/></a>
     <div className="nav-link">
       <ul><li><Link href="/">HOME</Link></li>
       <li><Link href="/about-us">ABOUT</Link></li>
         <li><Link href="/blog">BLOG</Link></li>
          <a className="bton" href="/contact">CONTACT ME</a>
       </ul>
       </div>
   </nav>
   <div className="text-box">
      <h1>HELLO EVERYONE </h1>
         <h2>This is me Azra Talib <br /> MY WEBSITE</h2>
      <p>I am doing web developer course in this I have learned <br /> HTML, CSS & javascript very well and I am also good at typescript .</p>
    <div className='imagee'>
      <Image 
        src={myImage} 
        alt="My Image" 
        width={250} 
        height={200} 
      />
    </div>
      
      <a className="btn" href="/blog">GET START</a>
    </div>
    <Footer />
  </header>
   )
  }
