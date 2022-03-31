import React, {useState} from 'react'
import styles from './Card.module.css'
import axios from "axios"


const Card = () => {
    
    const [advice, setAdvice] = useState()

    const loadAdvice = ( ) => {
        
        const url = "https://api.adviceslip.com/advice";
        axios.get(url)
            .then((response)=>{
                const { advice } = response.data.slip;
                setAdvice(advice);
            })
            .catch((error) =>{
                console.log(error)
            }) 
    }
const handleCLick = () =>{
    loadAdvice();
}
    
  return (
      <div>
          <h1><span>Need An Sage?</span> <br/> Click on the button for an advice!</h1>
        <div className={styles.card}>
            <p styles={styles.p}>{advice}</p>
            <button onClick={handleCLick} styles={styles.button}>Give An Advice</button>
        </div>
      </div>

  )
}

export default Card