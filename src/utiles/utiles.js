/*
 this function is responsible to make Fixing to incorrect records 
 or in some cases throw them away
*/
export const filterAndFixing=(locations,serchTerm)=>{

   let locationsList = [...locations]
   locationsList = checkCoordinateMatch(locationsList)
   locationsList = removeDuplicateInstances(locationsList)
   locationsList = cleanMismatchCities(locationsList,serchTerm)
   return locationsList

}

/*
In some of the records (that I got from the API) I saw records that the coordinates are reversed
i.e., the X coordinate is placed in place of the Y coordinate and vice versa.
So first of all I defined what is a valid coordinate : ( 29.3 <= X <=33.5) &&  (33.7 <= Y <=36.3) 
(These are the coordinates that define Israel's borders)
therefore coordinates record's that is not in this range, but if I reverse the coordinates 
then the coordinates will be valid (by definition),then the record is valid :-)

This function comes to address the problem I mentioned above, 
and also to throw records that dont have coordinates
*/

const checkCoordinateMatch=(locationsList)=>{
   
   locationsList = locationsList.filter((location)=>{
      if(location.X_Coordinate === null || location.Y_Coordinate ===null)
           return false
      
      if(!(location.X_Coordinate >= 29.3 && location.X_Coordinate <= 33.5 )){
            if((location.Y_Coordinate >= 29.3 && location.Y_Coordinate <= 33.5) && 
              (location.X_Coordinate >= 33.7 && location.X_Coordinate <= 36.3)){ 
               
                  const temp = location.X_Coordinate
                  location.X_Coordinate = location.Y_Coordinate 
                  location.Y_Coordinate = temp
                  return true
            } 
            return false   
      }
      return true
     
   })

   return locationsList
  
}


/*
 this function is responsible to clear mismatch between record (city) to searchTerm
*/

const cleanMismatchCities=(locations,serchTerm)=>{
   if(serchTerm === "")
      return locations

   let result = []
   result = locations.filter(location => location.City.includes(serchTerm))

   return result
}


/*
 this function is responsible to delete repetitive records 
 but note that the repeated records have a difference in the "ATM_Type" attribute 
 so what that I do is unioin all of the "above attributes" ("ATM_Type") into one record
*/
const removeDuplicateInstances=(locations)=>{

   let mapLocation = new Map()

   const result = []
   
   const reducer = (mapLocation, location) => {
      if(!mapLocation.has(location.ATM_Address)){
         mapLocation.set(location.ATM_Address,location)
      }else{
         const obj = mapLocation.get(location.ATM_Address)
         if(!obj.ATM_Type.includes(location.ATM_Type)){
            obj.ATM_Type = obj.ATM_Type + ' & ' + location.ATM_Type
            mapLocation.set(location.ATM_Address,obj)
         }
         
      }
      return mapLocation
    }


   locations.reduce(reducer, mapLocation)


   mapLocation.forEach((value,key)=>{
      result.push(value)
   })

   return result
     
}


