import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/omni.png";
import IMG2 from "../../assets/crypto.png";

import IMG3 from "../../assets/memories.png";

import IMG4 from "../../assets/portfolio4.jpg";

import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";



const Portfolio = () => {

    const data=[

        {id :"1",title:"OMNI-FOOD" ,github:"",demo:"https://mywebmeal.netlify.app",img:IMG1},{id :"2",title:"CRYPTO-WATCH" ,github:"https://github.com/deepanshu551/cryptoFrontend",demo:"https://eloquent-conkies-17a035.netlify.app/",img:IMG2},{id :"3",title:"MEMORIES" ,github:"https://github.com/deepanshu551/memories",demo:"https://gregarious-pasca-46ad41.netlify.app/",img:IMG3}
    ]
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((d)=>{
return <article key={d.id} className="portfolio__items">
<div className="portfolio__item-image">
  <img src={d.img} alt="Image1" />
</div>
<h3>{d.title}</h3>
<div className="portfolio__item-cta">
<a href={d.github} className="btn" target="__blank">
  Github
</a>
<a
  href={d.demo}
  className="btn btn-primary"
  target="__blank"
>
  Live Demo
</a>
</div>
</article>

        })}
        
    
      </div>
    </section>
  );
};

export default Portfolio;
