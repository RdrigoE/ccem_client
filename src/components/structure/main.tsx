import { Navigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "./autocomplete.css";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function fetch_county(county: string) {
    if (county) {
        return true;
    }
    return false;
}

function Search() {
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [success, setSuccess] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleSubmit = (e) => {
        e.preventDefault();
        let result = fetch_county(search);
        if (result) {
            setSuccess(true);
        }
        console.log("Handling Request");
    };

    const setInputText = (suggestion: any) => {
        setSearch(suggestion);
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        setInputText(value);

        // Perform autocomplete based on input value
        // You can replace this logic with your own autocomplete implementation
        const filteredSuggestions = getFilteredSuggestions(value);
        setSuggestions(filteredSuggestions);
        setActiveIndex(-1);
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
            );
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex((prevIndex) =>
                prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
            );
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (activeIndex !== -1) {
                const selectedSuggestion = suggestions[activeIndex];
                setInputText(selectedSuggestion);
                setSuggestions([]);
            }
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setInputText(suggestion);
        setSuggestions([]);
    };

    const getFilteredSuggestions = (value) => {
        // Perform filtering logic here based on your data source
        // This is just a basic example using an array of suggestions
        const suggestions = ["Apple", "Banana", "Orange", "Mango"];
        return suggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(value.toLowerCase())
        );
    };
    const options = [
        { label: 'The Godfather', id: 1 },
        { label: 'Pulp Fiction', id: 2 },
    ];
    // or
    // const options = ['The Godfather', 'Pulp Fiction'];


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="autocomplete">
                    <Form.Label>Search</Form.Label>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={options}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Movie" />}
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>

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
