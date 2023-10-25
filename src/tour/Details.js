import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
export default function Details() {
    const {id} = useParams();
    const [tour, setTour] = useState({});

    useEffect(() => {
        axios.get('http://localhost:3000/tuors/' + id).then(res => {
            setTour(res.data)
        })
    }, []);
    return (
        <div style={{marginTop : '50px'}}>
            <div className={'container'}>
            <h1>Details Tour</h1>
            <p>{tour.title}</p>
            <p>{tour.price}</p>
            <p>{tour.description}</p>
                <Link className={'btn btn-secondary'} to={'/'}>Back to home</Link>
        </div>
        </div>
    )

}




