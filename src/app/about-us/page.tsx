import Link from "next/link";
import Image from "next/image";
// import Header from "../components/header";
import Footer from "../components/footer";

import Home from "../page";

export default function About() {
  return (
   <header className="header">
   <nav> 
     <a href=""><img src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png" alt="" className="logo"/></a>
     <div className="nav-link">
       <ul><li><Link href="/">HOME</Link></li>
       <li><Link href="about-us">ABOUT</Link></li>
         <li><Link href="/blog">BLOG</Link></li>
          <a className="bton" href="/contact">CONTACT ME</a>
       </ul>
       </div>
   </nav>
   
   <div className="text-box">
      <h1>ABOUT PAGE</h1>
        
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto voluptate assumenda error aliquid omnis tenetur voluptatem itaque, facere praesentium et dicta vel dolor repudiandae consequatur magnam quas? Sapiente, modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempora dolorum quidem veniam sapiente, aspernatur temporibus eaque quod eligendi, maxime minima maiores ad? Reprehenderit nostrum fugit temporibus suscipit, molestiae deleniti ipsum, culpa, sequi odit voluptas porro animi? Et omnis, dolor earum ex, consequatur eum animi accusantium explicabo ipsum reprehenderit expedita..</p>
     </div>
</header>
   )}