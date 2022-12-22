import { useState } from 'react'
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   const { onSearch } = props;        
   const [character, setCharacter] = useState('');
   const handleChange= (evento) => {
      setCharacter(evento.target.value);
   }
   return (
      <div className={styles.divi}>
         <input className={styles.input} type='search' value={character} onChange={handleChange}/>
         <button className={styles.botonsito} onClick={()=> onSearch(character)}>ADD</button>
      </div>
   );
}
