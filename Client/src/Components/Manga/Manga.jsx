import React from 'react'
import { CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material';


const Manga = () => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                </CardActionArea>
            </Card>
        </>
    )
}

export default Manga