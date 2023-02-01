import React from 'react'
import { CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material';

const Manga = ({title, pic, chap, slug}) => {
    return (
        <>
            <Card sx={{ maxWidth: 250 }}>           
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="345"
                        image={`https://meo.comick.pictures/${pic[0].b2key}?width=345`}
                        alt={slug}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography  variant="body2" color="text.secondary">
                            Latest Chapter {chap}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default Manga