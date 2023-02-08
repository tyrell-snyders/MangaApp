import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@mui/material'

import Manga from '../Manga/Manga'

const Trending = ({comics}) => {
    const [coms, setComs] = useState([])
    const validateData = () => {
        comics ? setComs(comics) : console.log('No data found')
    }

    useEffect(() => {
        validateData()
    }, [comics])

    return (
        <>
            <Typography variant='h4' sx={{paddingBottom: '20px'}}>Trending</Typography>
            <Grid container spacing={6}>
                {comics.map((com, i) => (
                    <Manga 
                        key={i}
                        title={com.title}
                        pic={com.md_covers}
                        chap={com.last_chapter}
                        slug={com.slug}
                    />
                ))}
            </Grid>
        </>
    )
}

export default Trending