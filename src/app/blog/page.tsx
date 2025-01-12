import Link from "next/link";
import Image from "next/image";
// import Header from "../components/header";
import Footer from "../components/footer";

import Home from "../page";

export default function About() {
  return (
   <header className="blog">
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
   
      {/* Card Section */}
      
      <div className="cards">
          <div className="card">
            <img src={"https://websta.me/wp-content/uploads/2021/06/UI-UX-BLOG-BANNER-IMAGE.jpg"}alt=""className="cardImage"/>
            <h1>Refero (UX/UI)</h1>
            <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius dolorum doloribus, ipsa molestiae eum nihil totam vitae, architecto perspiciatis omnis velit magni aspernatur?fugit omnis velit magni aspernatur.</p>
            <Link href="/card1"><button className="cardButton">ReadMore</button></Link>
          </div>
      
      {/* <div className="cards"> */}
        
          <div className="card">
            <img src={"https://blackflagcreative.com/wp-content/uploads/2018/11/How-UX-UI-Design-Will-Help-Your-Business-Succeed.jpg"}alt="" className="cardImage"/>
            <h1>Design inspiration</h1>
            <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius dolorum doloribus, ipsa molestiae eum nihil totam vitae, architecto perspiciatis omnis velit magni aspernatur?fugit omnis velit magni aspernatur.</p>
            <Link href="/card2"><button className="cardButton">ReadMore</button></Link>
          </div>
      {/* </div> */}
      
      {/* <div className="cards"> */}
        
        <div className="card">
          <img src={"https://uikreative.com/wp-content/uploads/2019/09/bpmsupreme_01-2.jpg"}alt="" className="cardImage"/>
          <h1>Scrnshts (UI)</h1>
          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius dolorum doloribus, ipsa molestiae eum nihil totam vitae, architecto perspiciatis omnis velit magni aspernatur?fugit omnis velit magni aspernatur.
          </p>
          <Link href="/card3">
            <button className="cardButton">ReadMore</button>
          </Link>
        </div>
    </div>
    
    <div className="cards">
        
        <div className="card">
          <img src={"https://pctechmag.com/wp-content/uploads/2019/09/UX-Design-1068x801.jpg"}alt="" className="cardImage"/>
          <h1>Waveguide (UX)</h1>
          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius dolorum doloribus, ipsa molestiae eum nihil totam vitae, architecto perspiciatis omnis velit magni aspernatur?fugit omnis velit magni aspernatur.</p>
          <Link href="/card4"><button className="cardButton">ReadMore</button> </Link>
        </div>
    {/* </div> */}

    {/* <div className="cards"> */}
        
        <div className="card">
          <img src={"https://miro.medium.com/v2/resize:fit:1000/1*djOWBfUNhFUPeDHchV9cEQ.jpeg"}alt="" className="cardImage"/>
          <h1>GoodUX (UX)</h1>
          <p className="cardText"> Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius dolorum doloribus, ipsa molestiae eum nihil totam vitae, architecto perspiciatis omnis velit magni aspernatur?fugit omnis velit magni aspernatur.</p>
          <Link href="/card5"><button className="cardButton">ReadMore</button></Link>
        </div>
    {/* </div> */}

     {/* <div className="cards"> */}
        
        <div className="card">
          <img src={"https://www.easeout.co/images/uploads/ladder-dark-mode.png"}alt="" className="cardImage"/>
          <h1>Minimal Gallery (UI)</h1>
          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius dolorum doloribus, ipsa molestiae eum nihil totam vitae, architecto perspiciatis omnis velit magni aspernatur?fugit omnis velit magni aspernatur.
          </p>
          <Link href="/card6"><button className="cardButton">ReadMore</button></Link>
        </div>
    </div>
      </header>
      
  );
}
