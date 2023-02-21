import React, { useEffect, useState } from 'react'
import { Container, Typography, Grid, Button } from '@mui/material'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

import api from '../../API/api.js'

const Chapters = () => {
    const { hid } = useParams()

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

    console.log(chapters)

    const getHid = (e) => {
        const {value} = e.target.dataset
        alert(value)
    }
    
    return (
        <Container sx={{marginTop: '80px'}}>
            <Typography>Chapters for manga: {hid} </Typography>
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
                <Typography variant='h5'>Chapters</Typography>
                {chapters.map((chapter, i) => (
                
                    <Grid item key={i} xs={12}>  
                        <Button 
                            data-value={chapter.hid} 
                            sx={{color: 'black', width: '150px', backgroundColor: 'gray', marginTop: '20px'}} 
                            onClick={getHid}
                        >
                            <Typography>{chapter.chap}</Typography>
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Chapters