import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PlayerCard = ({ card }) => {
  if (!card){
    return (
      <Card sx={{ margin: '16px', maxWidth: 350, backgroundColor: 'red' }}>
        <CardContent>
          <CardMedia
          component="img"
          height="300"
          image="https://cdn.pixabay.com/photo/2014/04/03/10/53/football-311619_960_720.png"
          alt='placeholder image'
          />
          <Typography sx={{textAlign: 'center'}}>Placeholder</Typography>
        </CardContent>
      </Card>
    );}

      const rarityColor = {
      common: 'yellow',
      super_rare: 'red',
      rare: 'blue',
      unique: 'black',
      limited: 'green',
      }

  return (
    <Card sx={{ margin: '16px', maxWidth: 350, backgroundColor: rarityColor[card.rarity] }}>
      <CardContent>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}> 
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}> 
        <Typography variant='subtitle2'>{card.season.name}</Typography>
        <Typography variant='subtitle2' >{card.rarity}</Typography>
        </Box>
        <Typography variant='subtitle2'>{card.player.activeClub.name}</Typography>
        </Box>
        <CardMedia
        component="img"
        height="300"
        image={card.player.pictureUrl}
        alt={card.player.name}
      />
       <Typography sx={{textAlign: 'center'}}>{card.player.matchName}</Typography>
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}> 
          <Typography>{card.age}</Typography>
          <Typography>{card.position}</Typography>
          <Typography>{card.player.country.code}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PlayerCard;