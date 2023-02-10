import React, { useState, useEffect } from 'react'
import { Container, TextField } from '@mui/material'
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import api from '../../API/api.js'

const Search = () => {
    const results = () => {
        return (
            <>

            </>
        )
    }

    const [res, setRes] = useState()
    const [search, setSearch] = useState(false)

    const handleChange = (e) => {
        setRes(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setSearch(search => !search)
    }

    return (
        <>
            <Container sx={{marginTop: '100px'}}>
                <div className='form-area'>
                    <form>
                        <div className="searchArea">
                            <TextField 
                                className='search'
                                value={res}
                                variant="outlined"
                                onChange={handleChange}
                                placeholder='Search ...'
                                sx={{width: '100%'}}
                            />
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon style={{ fill: "blue" }} />
                            </IconButton>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default Search