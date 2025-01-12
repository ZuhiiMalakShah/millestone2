import Link from "next/link";
import Image from "next/image";
// import Header from "../components/header";
import Footer from "../components/footer";

import Home from "../page";

export default function About() {
  return (
   <header className="card5">
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
      <h1>GoodUX (UX)</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita magnam corporis deleniti, quas quisquam facilis nihil ab debitis laudantium maiores inventore corrupti placeat magni ipsa! Deserunt animi aspernatur dolore deleniti dolores earum vel impedit inventore amet vitae cumque, ducimus doloremque veniam blanditiis velit. Sit ea adipisci quam harum ut maiores!</p>
      <h2>Dark Mode Design (UI)</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat eligendi nisi nobis quaerat vel minus corrupti facere cupiditate voluptate, quas excepturi, deserunt sint, hic fugiat doloribus neque doloremque ipsa? Quam voluptatum autem dolorem vitae beatae blanditiis temporibus quis sit deserunt, pariatur impedit ea dolor dolores eveniet eum totam nesciunt?</p>
     </div>
</header>
   )}