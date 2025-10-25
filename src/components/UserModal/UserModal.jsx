import {useState} from 'react'
import { createPortal } from 'react-dom'
import styles from './UserModal.module.scss'


const UserModal=({isOpen,onClose,onSubmit})=>{

    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [isSubmitted,setIsSubmitted]=useState(false)

    if(!isOpen) return null
    


    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit({name,email});
        setIsSubmitted(true);
        setTimeout(()=>{
            setIsSubmitted(false)
            setEmail('')
            setName('')
            onClose()
        },2000)
    };

   const modalContent=(
    <div className={styles['modal_overlay']}>
    <div className={styles['modal']}>
    <button className={styles['modal__close']} onClick={onClose}>x</button>
    {!isSubmitted?(
      <>
      <h2 className={styles['modal__title']}> Join our newsletter</h2>
      <form className={styles['modal__form']} onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder='your name'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      className={styles['modal__input']}      
      required
      />
      <input 
      type="email"
      placeholder='enter your email'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      className={styles['modal__input']}
      required
      />
       <button type='submit' className={styles['modal__submit']}>Submit</button>
      </form>
    </>
    ):(
        <p className={styles['modal__success']}>Thank you!!</p>
 )}
    </div>

    </div>
   )

   return createPortal(modalContent, document.getElementById('modal-root'));

}

export default UserModal;