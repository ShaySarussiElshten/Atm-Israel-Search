import {useState,useEffect} from 'react'
import {fetchLocations} from '../services/locationService'
import {filterAndFixing} from '../utiles/utiles'

const useSearchLocation =()=>{
    const [locations,setLocations] = useState([])
    const [timer, setTimer] = useState(null)

    useEffect(()=>{
        makeSearch()
    },[])

    const handleSearch=(searchTerm)=>{
           delayOnchange(searchTerm)
    }

    const delayOnchange=(searchTerm)=>{
        if (timer) {
            clearTimeout(timer);
            setTimer(null);
          }
          setTimer(
            setTimeout(() => {
                makeSearch(searchTerm)
            }, 500)
          );
    }


    const makeSearch = async (searchTerm ="")=>{
       
        try{
           let locationsArray = await fetchLocations(searchTerm) 
           locationsArray = filterAndFixing(locationsArray,searchTerm)
           setLocations(locationsArray)
        }catch(e){
          console.log(e)
        }
    }

    return [locations,handleSearch]

}

export default useSearchLocation