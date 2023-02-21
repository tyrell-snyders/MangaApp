import React, { useState, useEffect } from 'react'
import { Container, TextField, CardActionArea, Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material'
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import {useNavigate} from 'react-router-dom'

import api from '../../API/api.js'

const Search = () => {
    const [res, setRes] = useState()
    const [search, setSearch] = useState(false)
    const [comics, setComics] = useState([])
    const [src , setSrc] = useState()

    const handleChange = (e) => {
        setRes(e.target.value)
    }

    const getSearch = async() => {
        try {
            const result = await api.get(`/api/comick/search/${res}`)
            if (result.data) {
                setComics(result.data)
            } else {
                alert('Nothing found')
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            if (res) {
                setSearch(true)
                getSearch()
                setSrc(res)
                
            } else {
                alert('Please enter a value for search')
            }
        } catch (err) {
            console.log(err)
        }
        console.log(comics)
    }

    return (
        <>
            <Container sx={{marginTop: '100px'}} container>
                <form> 
                    <TextField 
                        className='search'
                        value={res}
                        variant="outlined"
                        onChange={handleChange}
                        placeholder='Search ...'
                        sx={{width: '100%'}}
                        size='small'
                    />
                    <IconButton type="submit" aria-label="search" onClick={handleSubmit}>
                        <SearchIcon style={{ fill: "blue" }} />
                    </IconButton>
                </form>
            </Container>
            <Container>
                {search && comics && (
                    <Results res={src} comics={comics} />
                )}
                {!comics && (
                    <>
                        <Typography>Results not found!</Typography>
                    </>
                )}
            </Container>
        </>
    )
}

export default Search

const Results = ({res, comics}) => {
    const navigate = useNavigate()

    const getHid = (e) => {
        const { value } = e.target.dataset
        alert(value)
        // navigate(`/comic/chapters/${value}`)
    }

    return (
        <Container sx={{ marginBottom: '50px',alignItems: 'center', textAlign: 'center' }}>
            <Typography variant='h4' sx={{paddingBottom: '20px'}}>
                Showing results for {res}
            </Typography>
            <Grid container spacing={6}>
                {comics.map((comic, i) => (
                    <>
                        <Grid key={comic.hid} item xs={12} md={3} data-value={comic.title}>
                            <Card sx={{ maxWidth: '250px' }}>
                                <CardActionArea>
                                    <CardMedia 
                                        component="img"
                                        height="350"
                                        image={`https://meo.comick.pictures/${comic.md_covers[0].b2key}`}
                                        alt={comic.slug}
                                    />
                                </CardActionArea>
                                <CardContent>
                                    <Typography
                                        gutterBottom 
                                        variant="h6" 
                                        component="div"
                                    >
                                        {comic.title}
                                    </Typography>
                                    <Button data-value={comic.hid} onClick={getHid}>Read</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </>
                ))}
            </Grid>
        </Container>
    )
}