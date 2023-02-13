import React, { useState, useEffect } from 'react'
import { Container, CardActionArea, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material'

import './Mng.css'

const Mng = ({mng}) => {
    const [manga, setManga] = useState([])
    const validateData = () => {
        mng ? setManga(mng) : console.log('Invalid data')
        console.log(manga)
    }

    useEffect(() => {
        validateData()
    }, [manga])

    return (
        <Container sx={{ marginBottom: '50px', alignItems: 'center', textAlign: 'center' }}>
            <div className='manga'>
            <Typography variant='h4' sx={{paddingBottom: '20px'}}>Manga</Typography>
                <Grid container spacing={6}>
                    {manga.map((mang, i) => (
                        <>
                            <Grid key={i} item xs={12} md={3}>
                                <Card sx={{ maxWidth: 250 }}>
                                    <CardActionArea>
                                        <CardMedia 
                                            component="img"
                                            height="345"
                                            image={`https://meo.comick.pictures/${mang.md_covers[0].b2key}`}
                                            alt={mang.slug}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
                                                {mang.title}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </>
                    ))}
                </Grid>
            </div>
        </Container>
    )
}

export default Mng