import Map from '../components/Map/Map'
import SearchMenu from '../components/Search/SearchMenu/SearchMenu'
import React from 'react'
import useLocations from '../hooks/useLocations'
import Grid from '@material-ui/core/Grid';



const AtmSearch=()=> {
  const [locations,handleSearch,selectedLocations,setSelectedLocations,viewPoint,zoom,isLoadingMode] = useLocations()
  
  return (
    <>
     <Grid container spacing={0}>
        <Grid item sm={4} xs={12}>
              <SearchMenu locations={locations} onFormSubmit={handleSearch} setSelectedLocations={setSelectedLocations}/>
            </Grid>
            <Grid item sm={8} xs={12}>
                <Map selectedLocations={selectedLocations} viewPoint={viewPoint} zoom={zoom} isLoadingMode={isLoadingMode}/>
            </Grid>
      </Grid>
    </>
  );
}

export default AtmSearch;