import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import WcIcon from '@material-ui/icons/Wc';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 245,
    margin:20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Room({room}){
  const classes = useStyles();
  const history = useHistory()
    const handleBook = (vehicleType) => {
      history.push(`/book/${vehicleType}`);
    }
  return (
    <Grid >
      <Card  onClick={() => handleBook(room.vehicleType)} className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar} >
              {room.avatar}
            </Avatar>
          }
          title={room.title}
        />
        <CardMedia
          className={classes.media}
          image={room.imgUrl}
          title="Paella dish"
        />
        <img src={`/images/${room.vehicleType}.png`} alt="" />
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <WcIcon />: {room.capacity}
          </IconButton>
          <IconButton aria-label="price">
            <AttachMoneyIcon />: {room.price}
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
    
  );
}
