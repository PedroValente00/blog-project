import {useState, useEffect} from "react";

const useFetch = (url:string) => {
    
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error("could not fetch data")
            }
            return res.json()
        }).then(data => {
            setLoading(false);
            setData(data);
            setError(null)
        }).catch(err => {
            setLoading(false);
            setError(err.message);
        })
    }, [url])

    return {data, error, loading}

}
 
export default useFetch;