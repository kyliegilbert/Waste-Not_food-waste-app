import React from "react";
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './FoodList.css'

function FoodList({ 
  foods, 
  title,
  showTitle = true,
  showUsername = true }) {
  
  if (!foods.length) {
    console.log(foods)
    return <h3 className="heading">No Foods avaliable</h3>
  }
  return (
    <div className="flex-column justify-space-between my-4 hide">

      <h3 className="heading">Donations</h3>

      
        
        {foods && foods.map((food)=> (
          <div key={food._id}>
          <Card  sx={{ maxWidth: 300, mx: "auto", }}>
            <CardHeader title={food.name}>
            </CardHeader>
            <CardMedia
              component="img"
              height="194"
              image= {food.imageUrl}
              alt={food.name}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              {food.description}
              </Typography>
              
              <CardActions disableSpacing>
                {/* <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton> */}
                <Button size="small">

                  <Link className="moreinfo" to={`/food/${food._id}`}>
                  More info about this food

                  </Link>
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <br/>
          </div>
          ))}
        
        
          
        
   
      
        
    </div>
  );
}

export default FoodList;
