import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, ListItem } from '@mui/material';
import { margin, styled } from '@mui/system';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import './MvpCard.css'
import zIndex from '@mui/material/styles/zIndex';

const ArtworkCard = styled(Card)({
  height: "320px",
  width: "240px",
  textAlign: "center",
});


const ThumbImage = styled(CardMedia)({
  height: '200px',
  width: 'auto',
  marginTop: '20px',
  marginLeft: 'auto',
  marginRight: 'auto'
});

const CheckBox = styled(CheckBoxTwoToneIcon)({
  position: "absolute",
  paddingTop: "280px",
  paddingLeft: "80px",
  fontSize: "2em",
  zIndex: "99"
})



export default function MvpCard(props) {

  const handleSelection = () => {
    console.log("in handleselect")
    props.select()
  }


  return (
    <ArtworkCard elevation={props.id === props.choice ? 2 : 10} className={props.id === props.choice ? 'userSelected' : ''}>
      {props.id === props.choice ? <CheckBox/> : '' }
    <CardActionArea onClick={handleSelection}>
      <ThumbImage
        component="img"
        height="140"
        image={`/static/images/${props.img}`}
        alt={props.title}
      />
      <CardContent>
      
        <Typography gutterBottom variant="h5" component="div">
        {props.id === props.choice ? '' : `${props.title}` }
        </Typography>
      </CardContent>
    </CardActionArea>
  </ArtworkCard>
  )
}
