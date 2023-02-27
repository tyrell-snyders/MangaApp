import React, { useEffect, useState } from 'react'
import { Container, Typography, Grid, Button, Box  } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'

import api from '../../API/api.js'

import './Chapters.css'

const Chapters = () => {
    const { data } = useParams()
    const hid = data.split('-')[0]

    const [chapters, setChapters] = useState([])
    const getChapters = async () => {
        try {
            const res = await api.get(`/api/comick/comics/${hid}`)
            setChapters(res.data.chapters)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getChapters()
    }, [data])

    const slug = data.slice(data.indexOf('-') + 1)
    const [manga, setManga] = useState([])
    const getManga = async () => {
        try {
            const res = await api.get(`/api/comick/comic_data/${slug}`)
            setManga(res.data)
        } catch (err) {
           console.log(err) 
        }
    }

    useEffect(() => {
        getManga()
    }, [data])


    return (
        <>
            <Container className='manga-data' sx={{marginTop: '80px', marginBottom: '20px'}}>
                <Grid container>
                    <Grid item md={4}>
                        <Box
                            component='img'
                            sx={{
                                height: 500,
                                width: 350
                            }}
                            alt='Poster'
                            // src={`https://meo.comick.pictures/${manga.comic.md_covers[0].b2key}`}
                        />
                    </Grid>
                    <Grid item md={6} className='manga-info'>
                        <Typography variant='h4' className='title'>
                            {manga.comic.title}
                        </Typography>
                        <Typography variant='h7'> 
                            {manga.comic.desc}
                        </Typography>
                        <Container class='info'>
                            <Typography>
                                {/* Genres: {manga.comic.md_comic_md_genres} */}
                            </Typography>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
            <hr />
            <Container sx={{marginTop: '80px'}}>
                <div className='chapters'>
                    <Typography variant='h5'>Chapters</Typography>
                    <Grid 
                        sx={{marginTop: '40px', 
                            alignItems: 'center', 
                            overflow: 'auto', 
                            height: '400px',
                            width: '500px'
                        }} 
                        spacing={2} 
                        container
                    >
                        {chapters.map((chapter, i) => (
                        
                            <Grid item key={i} xs={12}>  
                                <Button 
                                    sx={{color: 'black', width: '150px', backgroundColor: 'gray', marginTop: '20px'}}
                                >
                                    <Typography>{chapter.chap}</Typography>
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Container>
        </>
    )
}

export default Chapters