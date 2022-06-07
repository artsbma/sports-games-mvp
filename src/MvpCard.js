import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, ListItem } from "@mui/material";
import { margin, styled } from "@mui/system";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import "./MvpCard.css";
import zIndex from "@mui/material/styles/zIndex";

const ArtworkCard = styled(Card)({
  height: "270px",
  width: "190px",
  textAlign: "center",
});

const ThumbImage = styled(CardMedia)({
  height: "150px",
  width: "auto",
  marginTop: "20px",
  marginLeft: "auto",
  marginRight: "auto",
});

const CheckBox = styled(CheckBoxTwoToneIcon)({
  position: "absolute",
  paddingTop: "230px",
  paddingLeft: "60px",
  fontSize: "2em",
  zIndex: "99",
});

export default function MvpCard(props) {
  const handleSelection = () => {
    console.log("in handleselect");
    props.select();
  };

  return (
    <ArtworkCard
      elevation={props.id === props.choice ? 2 : 10}
      className={props.id === props.choice ? "userSelected" : ""}
    >
      {props.id === props.choice ? <CheckBox /> : ""}
      <CardActionArea onClick={handleSelection}>
        <ThumbImage
          component="img"
          height="140"
          image={`/static/images/${props.img}`}
          alt={props.title}
        />
        <CardContent>
          <Typography style={{ fontSize: '1rem' }} gutterBottom variant="subtitle2" component="div">
            {props.id === props.choice ? `${props.title}` : `${props.title}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </ArtworkCard>
  );
}
