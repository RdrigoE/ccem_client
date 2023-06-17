import { useState } from "react"
import { Navigate } from "react-router-dom"

function fetch_county(county: string) {
    if (county) {
        return true
    }
    return false
}
function Search() {
    const [search, setSearch] = useState("")

    const [sucess, setSucess] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        let result = fetch_county(search)
        if (result) {
            setSucess(true)
        }
        console.log("Handling Request")
    }
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>

                <label htmlFor="search">Search</label>
                <input type="text"
                    id="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />


                <button type="submit">GO</button>
            </form>
            {sucess && (
                <Navigate to={`/${search}`} replace={true} />
            )}

        </>


    )

}

export default function Main() {

    return <div className="main">
        <Search />

    </div>
}
