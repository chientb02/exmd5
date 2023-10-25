import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function List() {
    const [list, setList] = useState([]);
    useEffect(() => {
        findAll()
    }, [])
    return (
        <div className={'container'} style={{marginTop : '50px'}}>
            <Link to={'/create'} class="btn btn-info" style={{marginBottom : '50px'}}>Create </Link>
            <table class="table table-hover">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th colSpan="2"></th>
                </tr>
                <tbody>
                {list.map((item, index) => (
                    <tr key={index}>
                        <td> {index + 1}</td>
                        <td> <Link to={"/details/" + item.id} style={{textDecoration: 'none' , color : 'black'}} >{item.title}</Link></td>
                        <td>{item.price}</td>
                        <td>
                            <Link to={"/update/" + item.id} class="btn btn-info" style={{marginLeft : '30px'}}>Update</Link>
                        </td>
                        <td>
                            <Link to={"/delete/" + item.id} class="btn btn-info">Delete</Link>
                        </td>

                    </tr>
                ))}
                </tbody>

            </table>
        </div>
    )

    function findAll() {
        axios.get('http://localhost:3000/tuors').then(res => {
            setList(res.data)
        })
    }


}