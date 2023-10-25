import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
export default function Details() {
    const {id} = useParams();
    const [tour, setTour] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/tuors/' + id).then(res => {
            setTour(res.data)
        })
    }, []);
    return (
        <>
            <div className={'container'} style={{marginTop : '50px'}}>
                <h1>Details Tour</h1>
                <p>{tour.title}</p>
                <p>{tour.price}</p>
                <p>{tour.description}</p>
                <button className="btn btn-primary"  type={'button'}  onClick={()=> (deleteT(id))}>
                    Delete
                </button>
                <Link className={'btn btn-secondary'} to={'/'}>Back To List</Link>
            </div>
        </>
    )
    function deleteT(id) {
        // eslint-disable-next-line no-restricted-globals
        let result = confirm("Are you sure") ;
        if(result){
        axios.delete('http://localhost:3000/tuors/' + id).then(res => {
            alert("success");
            navigate("/")
        })}
    }
}




