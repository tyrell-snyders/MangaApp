import React from 'react'
import { Container } from '@mui/system'
import Button from '@mui/material/Button';

import Trending from '../Trending/Trending'

const Home = ({comics}) => {
    return (
        <Container sx={{marginTop: '80px', alignItems: 'center'}}>
            <div className='trending'>
                <Trending comics={comics} />
            </div>
        </Container>
    )
}

export default Home