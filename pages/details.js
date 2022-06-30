import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import styles from "../styles/Detail.module.css"
const Details = () => {
    const router = useRouter()
    const data = router.query
    return (
        <>
            <Head>
                <title>Astris | Details</title>
                <meta name='keywords' content='Ninjas' />
            </Head>
            <div className={styles.title}>Product Details</div>
                <div className={styles.Details}>
                    <div className={styles.card}>
                        <div className={styles.shoeBackground}>
                            <div className={styles.gradients}>
                                <div className={styles.gradient} color="blue"></div>
                                <div className={styles.gradient} color="red"></div>
                                <div className={styles.gradient} color="green"></div>
                                <div className={styles.gradient} color="orange"></div>
                                <div className={styles.gradient} color="black"></div>
                            </div>
                            <h1 className={styles.nike}>andy</h1>
                            <img src={data.product_pic} alt="" className={styles.logo} />
                            
                        </div>
                        <div className={styles.info}>
                            <div className={styles.shoeName}>
                                <div>
                                    <h1 className={styles.big}>{data.product_name}</h1>
                                    <span className={styles.new}>new</span>
                                </div>
                                <h3 className={styles.small}>{data.product_subtitle}</h3>
                            </div>
                            <div className={styles.description}>
                                <h3 className={styles.title}>Product Info</h3>
                                <p className={styles.text}>{data.product_description}</p>
                            </div>
                            <div className={styles.sizeContainer}>
                                <h3 className={styles.title}>Packages</h3>
                                <div className={styles.sizes}>
                                    <span className={styles.size}>1</span>
                                    <span className={styles.size}>2</span>
                                    <span className={styles.size}>3</span>
                                    <span className={styles.size}>4</span>
                                    <span className={styles.size}>5</span>
                                </div>
                            </div>
                            <div className={styles.buyPrice}>
                                <Link href={{ pathname: "/Order", query: data }}>
                                    <a href="#" className={styles.buy}><i className="fas fa-shopping-cart"></i>Order Now</a>
                                </Link>
                                <div className={styles.price}>
                                    <i className="fas fa-dollar-sign"></i>
                                    <h1>$ {data.product_price}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}


export default Details;