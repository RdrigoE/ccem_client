import { Navigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "./autocomplete.css";
import React, { useState } from 'react';
import { FormControl, InputLabel, TextField, ButtonBase } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';


function fetch_county(county: string) {
    if (county) {
        return true;
    }
    return false;
}

function Search() {
    const [search, setSearch] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let result = fetch_county(search);
        if (result) {
            setSuccess(true);
        }
        console.log("Handling Request");
    };
    const options = ['Option 1', 'Option 2', 'Option 3']; // Example options, replace with your own

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };
    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <FormControl component="form" onSubmit={handleSubmit}>
                <InputLabel htmlFor="searchPlace"></InputLabel>
                <Autocomplete
                    disablePortal
                    id="searchPlace"
                    options={filteredOptions}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            onChange={handleSearchChange}
                            label="Search"
                        />
                    )}
                />

                <ButtonBase type="submit">Submit</ButtonBase>
            </FormControl>
            {success && <Navigate to={`/${search}`} replace={true} />}
        </>
    );
}

export default function Main() {
    return (
        <div className="main">
            <Search />
        </div>
    );
}
