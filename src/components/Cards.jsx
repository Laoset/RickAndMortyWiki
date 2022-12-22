import Card from './Card';
import styles from './Cards.module.css'
export default function Cards(props) {
   const { characters, onClose } = props;
   return (
      <div className={styles.container}>
         {characters?.map((personaje,index) => (
            <Card 
               key={index} 
               id={personaje.id}
               name ={personaje.name} 
               species={personaje.species} 
               gender={personaje.gender} 
               image={personaje.image}
               onClose= {() => onClose(personaje.id)}
            />
         ))}
      </div>)
   
}
