import React, { useEffect, useState } from 'react'
import { Container, Typography, Grid, Button } from '@mui/material'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

import api from '../../API/api.js'

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
    }, [])

    const [manga, setManga] = useState([])
    const getManga = async () => {
        try {
            const res = await api.get(``)
        } catch (err) {
            
        }
    }

    console.log(chapters)

    return (
        <Container sx={{marginTop: '80px'}}>
            <Typography>Chapters for manga: {hid} </Typography>
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
    )
}

export default Chapters