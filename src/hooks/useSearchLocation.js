import {useState,useEffect,useRef} from 'react'
import {fetchLocations} from '../services/locationService'
import {filterAndFixing} from '../utiles/utiles'

const useSearchLocation =()=>{
    const [locations,setLocations] = useState([])
    const timerRef = useRef(null)
    const [searchTerm,setSearchTerm] = useState("")
    const [isLoadingMode,setIsLoadingMode] = useState(true)


    const handleSearch=(searchTerm)=>{
           delayOnchange(searchTerm)
    }

    const delayOnchange=(searchTerm)=>{
          if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null
          }
          
          timerRef.current = setTimeout(() => {
                setSearchTerm(searchTerm)
          }, 750)
          
    }

    useEffect(()=>{
       setIsLoadingMode(true)
       makeSearch(searchTerm)
       setIsLoadingMode(false)
    },[searchTerm])


    const makeSearch = async (searchTerm)=>{
       
        try{
           let locationsArray = await fetchLocations(searchTerm) 
           locationsArray = filterAndFixing(locationsArray,searchTerm)
           setLocations(locationsArray)
        }catch(e){
           console.log(e)
        }
    }

    return [locations,handleSearch,isLoadingMode]

}

export default useSearchLocation