import { useContext, useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { CartContext } from '../../context/cartContext';
import { ProductContext } from '../../context/productContext';
import styles from './ShopPage.module.scss'

 

const ShopPage=()=>{
  const{products,getProducts}=useContext(ProductContext)
  const{handleAddToCart}=useContext(CartContext)
  const[showBanner,setShowBanner]=useState(false)
    

    
    useEffect(()=>{
       getProducts()
    },[])
    console.log(products)
    const handleAction=(item)=>{
        handleAddToCart(item)
        setShowBanner(true)
        setTimeout(()=>{
            setShowBanner(false)
        },3000)
        
    }

    return(
        <main className={styles.shopPage}>
            <h1 className={styles['shopPage__title']}>Shop</h1>
            <ul className={styles['shopPage__list']}>
                {products.map(({title,price,image,id})=>{
                    return <Card
                    key={id}
                    title={title}
                    price={price}
                    image={image}
                    id={id}
                    iconOnClick={(amount)=>handleAction({title,price,image,id,amount})}
                    
                    
                    />
                })}
            </ul>
            {showBanner&&(
                <div className={styles['shopPage__banner']}>
                    Item was added to cart!
                </div>

            )}
        </main>
    )
}
export default ShopPage;