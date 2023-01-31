import React, { useState, useEffect } from 'react'

import Manga from '../Manga/Manga'

const Trending = ({comics}) => {
    console.log(comics[9])
    return (
        <>
            <Manga />
        </>
    )
}

export default Trending