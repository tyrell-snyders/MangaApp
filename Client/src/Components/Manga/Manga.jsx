import React from 'react'
import { Container, CardActionArea, Card, CardContent, CardMedia, Typography, Grid, useMediaQuery } from '@mui/material'

const Manga = ({title, pic, chap, slug, id}) => {
    const handleClick = () => {
        alert(`Directing to ${id}`)
    }
    
    return (
        <>
            <Grid item xs={12} md={3}>
                <Card sx={{ maxWidth: 250 }}>           
                    <CardActionArea onClick={handleClick}>
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
            </Grid>
        </>
    )
}

export default Manga