 import Card from "../../components/Card/Card"
 import { useWishList } from '../../context/wishListContext';
 import styles  from "./FavouritesPage.module.scss";
 import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

 
 const FavouritesPage=()=>{
    const{wishList}=useWishList()
    const { handleAddToCart } = useContext(CartContext);

    
 return(
  
    <section className={styles.favourite}>
    <h1 className={styles['favourite__title']}>
        Wish List
    </h1>
     {wishList.length<=0?
     (<p className={styles['favourite__empty']}>Oops,no favourite products yet</p>):(
<ul className={styles['favourite__list']}>
    {wishList.map(({title,id,price,image,amount})=>{
       return(
        <Card
        key={id}
        id={id}
        title={title}
        price={price}
        image={image}
        amount={amount}
        
        iconOnClick={(amount) => handleAddToCart({ 
            id, 
            title, 
            image:image,
            price:Number(price)||0,
            amount:Number(amount)||1     
         })}
        

        />)
    })}
    </ul>
     )}
    
    </section>
 )

 }

 export default FavouritesPage;