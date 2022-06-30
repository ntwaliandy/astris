import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css"
import Head from "next/head";

const Home = () => {

  
  const state = {
    prodcuts: [
      {
        product_name: "Astris 1",
        product_subtitle: "Astris Quality",
        product_price: 120.0,
        product_description: "best Quality",
        product_origin: "Congo",
        product_pic: "img1.jpeg"
      },
      {
        product_name: "Astris 2",
        product_subtitle: "Astris Quality",
        product_price: 140.0,
        product_description: "best Quality",
        product_origin: "Congo",
        product_pic: "img1.jpeg"
      },
      {
        product_name: "Astris 3",
        product_subtitle: "Astris Quality",
        product_price: 160.0,
        product_description: "best Quality",
        product_origin: "Congo",
        product_pic: "img1.jpeg"
      },
      {
        product_name: "Astris 4",
        product_subtitle: "Astris Quality",
        product_price: 170.0,
        product_description: "best Quality",
        product_origin: "Congo",
        product_pic: "img1.jpeg"
      },
      {
        product_name: "Astris 5",
        product_subtitle: "Astris Quality",
        product_price: 200.0,
        product_description: "best Quality",
        product_origin: "Congo",
        product_pic: "img1.jpeg"
      },
      {
        product_name: "Astris 6",
        product_subtitle: "Astris Quality",
        product_price: 400.0,
        product_description: "best Quality",
        product_origin: "Congo",
        product_pic: "img1.jpeg"
      }
    ]
  }
  return (
    <>
    <Head>
      <title>Astris | Home</title>
      <meta name='keywords' content='Ninjas' />
    </Head>
      <div>
        <div className={styles.title}>Recent Products</div>
        <div className={styles.gallery}>
          {
            state.prodcuts.map(prod => (
              <div className={styles.content} key={prod.product_name}>
                <img src={prod.product_pic} />
                <h3>{prod.product_name}</h3>
                <p>{prod.product_subtitle}</p>
                <h6>$ {prod.product_price}</h6>
                <Link href={{ pathname: "/details", query: prod}}>
                  <button className={styles.buy1}>Buy Now</button> 
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}


export default Home