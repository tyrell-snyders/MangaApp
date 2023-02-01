import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'

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