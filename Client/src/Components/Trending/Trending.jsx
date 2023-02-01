import React, { useState, useEffect } from 'react'

import Manga from '../Manga/Manga'

const Trending = ({comics}) => {
    const [coms, setComs] = useState([])
    const validateData = () => {
        comics ? setComs(comics) : console.log('No data found')
    }

    useEffect(() => {
        validateData()
    }, [comics])
    console.log(coms)

    return (
        <>
            {comics.map((com, i) => (
                <Manga 
                    key={i}
                    title={com.title}
                    pic={com.md_covers}
                    chap={com.last_chapter}
                    slug={com.slug}
                />
            ))}
        </>
    )
}

export default Trending