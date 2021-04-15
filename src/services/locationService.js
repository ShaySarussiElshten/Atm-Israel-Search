import axios from 'axios'
import {URL_FETCH_LOCATIONS} from '../utiles/constants'


export const fetchLocations = (searchTerm)=>{
    
    
    return new Promise((resolve,reject)=>{
      
      axios.post(`${URL_FETCH_LOCATIONS}&q=${searchTerm}`).then((respone)=>{
        
        const locationsArray = [...respone.data.result.records] 
        resolve(locationsArray)
      }).catch(err=>{
        console.log("something went wrong")
      })
    });
}