import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PropTypes from 'prop-types'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  iconaContainer:{
    width: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardItem:{
     '&:hover':{
      cursor: 'pointer',
      animation: '$shake 0.5s',
      animationIterationCount: 'infinite'
     }
  },
  '@keyframes shake': {
    '70%':{ 
      transform: 'translate(0.01px, 0.7px) rotate(-0.01deg)' 
    }
  }
}));


const SerchCard =(props)=>{

  const {Bank_Name,ATM_Address,ATM_Type,City} = props.location
  const { setSelectedLocations } = props
  const classes = useStyles()

  return (
    <div className={classes.cardItem} onClick={()=>{setSelectedLocations([props.location])}}>
       <Card className={classes.root}>
        <div className={classes.iconaContainer}>
           <AccountBalanceIcon></AccountBalanceIcon>
        </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {Bank_Name} 
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {ATM_Address} | {ATM_Type}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {City}
          </Typography>
        </CardContent>
      </div>
    </Card>
    </div>
    
  )
}

SerchCard.propTypes ={
  locations: PropTypes.array,
  setSelectedLocations: PropTypes.func
}

export default SerchCard