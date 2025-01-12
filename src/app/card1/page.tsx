import Link from "next/link";
import Image from "next/image";
// import Header from "../components/header";
import Footer from "../components/footer";

import Home from "../page";

export default function About() {
  return (
   <header className="card1">
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
      <h1>Refero (UX/UI)</h1>
      <p>Refero is a curated collection of design inspiration in two main categories: UX patterns and UI elements. Both are sorted into clean subcategories, making it easy to find numerous great examples of what you’re looking for (checkouts, 404 pages, product detail pages, tables, maps, color pickers, and so on.) For each individual example, Refero also lists the UI elements it .</p>
      <h2>Laws of UX</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eligendi ab, iste sapiente perspiciatis nam veritatis dolore sunt eaque incidunt aut illo enim accusamus debitis, voluptas et! Quo quisquam ducimus dolore dolores eos praesentium temporibus commodi natus, quidem perspiciatis explicabo eligendi, molestiae similique aliquam voluptatem illum? Rerum deleniti tenetur inventore?</p>
     </div>
</header>
   )}