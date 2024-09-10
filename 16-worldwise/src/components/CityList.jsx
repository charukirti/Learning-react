import Spinner from "./Spinner";
import styles from './CityList.module.css'
import CityItem from "./CityItem";
import Message from "./Message";

export default function CitiList ({cities, isLoading}) {
    if(isLoading) return <Spinner/>
    if(!cities.length) return <Message message="add your first city by clicking on the map"/>
    return (
        <ul className={styles.cityList}>
            {
                cities.map(city => <CityItem city={city} key={city.id}/>)
            }
        </ul>
    )
}

