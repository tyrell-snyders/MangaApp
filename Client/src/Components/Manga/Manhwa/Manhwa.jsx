import React, { useState, useEffect } from 'react'
import { Container, CardActionArea, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material'

import './Mnh.css'

const Manhwa = ({mhwa}) => {
    const [manhwa, setManhwa] = useState([])
    const validateData = () => {
        mhwa ? setManhwa(mhwa) : console.log('Invalid data')
        console.log(manhwa)
    }

    useEffect(() => {
        validateData()
    }, [manhwa])

    return (
        <Container sx={{ marginBottom: '50px',alignItems: 'center', textAlign: 'center'}}>
            <div className='manhwa'>
                <Typography variant='h4' sx={{paddingBottom: '20px'}}>Manhwa</Typography>
                <Grid container spacing={6}>
                    {manhwa.map((mnh, i) => (
                        <>
                            <Grid key={i} item xs={12} md={3}>
                                <Card sx={{maxWidth: '250px'}}>
                                    <CardActionArea>
                                        <CardMedia 
                                            component='img'
                                            height="345"
                                            image={`https://meo.comick.pictures/${mnh.md_covers[0].b2key}`}
                                            alt={mnh.slug}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant='h6' component='div'>
                                                {mnh.title}
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

export default Manhwa