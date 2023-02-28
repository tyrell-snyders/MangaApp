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

    const [genres, setGenres] = useState([])
    // const getGenre = () => {
    //     setGenre(manga.comic?.md_comic_md_genres)
    // }

    // useEffect(() => {
    //     getGenre()
    // }, [manga])

    // console.log(genre)
    const genre = []
    manga.comic?.md_comic_md_genres.forEach((gnr, i) => {
        genre.push(gnr)
    })

    useEffect(() => {
        setGenres(genre)
    }, [manga])

    console.log(genres)

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
                            src={`https://meo.comick.pictures/${manga.comic?.md_covers[0]?.b2key}`}
                        />
                    </Grid>
                    <Grid item md={6} className='manga-info'>
                        <Typography variant='h4' className='title'>
                            {manga.comic?.title}
                        </Typography>
                        <Typography variant='h7'> 
                            {manga.comic?.desc}
                        </Typography>
                        <Container class='info'>
                            <Typography variant='h5'>
                                Genres:
                            </Typography>
                            {genres.map((gnr, i) => (
                                <Typography key={i}>
                                    {gnr[i]?.md_genres.slug}
                                </Typography>
                            ))}
                        </Container>
                    </Grid>
                </Grid>
            </Container>
            <hr />
            <Container sx={{marginTop: '80px', marginBottom: '60px', justifyContent: 'center', alignItems: 'center'}}>
                <div className='chapters'>
                    <Typography variant='h5'>Chapters</Typography>
                    <Grid 
                        sx={{marginTop: '40px',
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
                                    sx={{color: 'black', width: '300px', backgroundColor: 'gray', marginTop: '20px'}}
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