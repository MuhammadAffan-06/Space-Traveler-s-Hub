import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';


const Cards = ({ rockets }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: 150}}>
            {rockets.map((rocket) => (
                <Card
                    key={rocket.id}
                    sx={{
                        maxWidth: 345,
                        flexBasis: '50%',
                        '@media (max-width: 600px)': {
                            flexBasis: '100%',
                        },
                    }}
                >
                    <CardMedia
                        sx={{ height: 300 }}
                        image={rocket.flickr_images[0]}
                        title={rocket.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {rocket.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {rocket.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='outlined'>Reserve</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}

export default Cards;
