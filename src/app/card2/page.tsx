import Link from "next/link";
import Image from "next/image";
// import Header from "../components/header";
import Footer from "../components/footer";

import Home from "../page";

export default function About() {
  return (
   <header className="card2">
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
      <h1>Design inspiration</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod beatae soluta praesentium obcaecati recusandae blanditiis corporis magni, molestias sequi ipsam, ullam ex. Vel rem ullam, doloremque odit quas quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem temporibus consequatur non dicta alias architecto, exercitationem repellat. Et, culpa.</p>
      <h2>Pageflows (UX/UI)</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In tempora ipsa praesentium aliquam ut est natus optio maiores alias totam? Obcaecati quod quos fuga provident dolores non eum facilis id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nulla maiores aliquid quaerat tempora asperiores. Sint magni neque quaerat unde?</p>
     </div>
</header>
   )}