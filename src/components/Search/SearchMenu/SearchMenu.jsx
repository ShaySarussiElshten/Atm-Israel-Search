import React,{useState,useEffect} from 'react'
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SreachCard from '../SearchCard/SearchCard'
import PropTypes from 'prop-types'



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(5),
        width: '50%',
      },
    },
    menuSearch:{
      border: 'solid 1px black',
      width:'100%'
    },
    searchResults:{
      padding: '1rem',
      height: '850px',
      overflow: 'auto'
    },
    '@global': {
      '*::-webkit-scrollbar': {
        width: '10px'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
        borderRadius: '10px'
      },
      '*::-webkit-scrollbar-thumb': {
        background: 'rgb(119, 119, 119)',
        borderRadius: '10px',
        '&:hover':{
          background: '#b30000'
        }
      }
    }
  }));

const SearchMenu = ({locations,onFormSubmit,setSelectedLocations})=>{

   const [isFirstRender,setIsFirstRender] = useState(true)

    useEffect(()=>{
      if(isFirstRender && locations.length !== 0 ){
        setIsFirstRender(false)
      }
    },[locations])

 
    const renderSearchCards =()=>{
 
       
       if(locations.length === 0 && !isFirstRender)
          return <h2>אין תוצאות חיפוש מתאימות</h2>
        
        
        const loacationsList = locations.map(location =>(
        
               <SreachCard key={location._id} location={location} setSelectedLocations={setSelectedLocations}/>
        ))

        return loacationsList
    }

     const classes = useStyles();
     
     return (
         <div className={classes.menuSearch}>
           <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                    id="standard-basic" 
                    label="חיפוש כספומט לפי עיר"
                    name="search"
                    onChange={(event)=>{onFormSubmit(event.target.value)}}
                />
              
          </form>
          <div className={classes.searchResults} data-simplebar>
             {renderSearchCards()}
          </div>
        </div>
     )
}


SearchMenu.propTypes = {
   locations: PropTypes.array,
   onFormSubmit: PropTypes.func,
   setSelectedLocations: PropTypes.func
}

export default SearchMenu