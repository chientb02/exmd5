import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
export default function UpdateStudent() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState({});


    function updateTour(values) {

        axios.put('http://localhost:3000/tuors/' + id, values).then(() => {
            alert("update success!")
            navigate("/")
        })
    }

    useEffect(() => {
        axios.get('http://localhost:3000/tuors/' + id).then(res => {
            setTour(res.data)
        })
    }, []);
    return (
        <> <div className={'container'} style={{marginTop : '50px'}}>
            <Formik
                initialValues={tour}
                onSubmit={(values)=>{updateTour(values)}}
                enableReinitialize={true}
            >
                <Form style={{width:'500px',marginLeft:'30%'}}>

                    <h2>Create</h2>
                    <div className="mb-3">
                        <label htmlFor={'name'} className="form-label" >Title</label>
                        <Field type={'text'} name={'title'} className={'form-control'} id="{'title'}" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor={'price'} className="form-label">Price</label>
                        <Field type={'text'} name={'price'} className={'form-control'} id="{'price'}" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor={'description'} className="form-label">Description</label>
                        <Field type={'text'} name={'description'} className={'form-control'} id="{'description'}"  required/>
                    </div>
                    <div style={{display : 'flex',justifyContent:'space-between'}}>
                        <button className="btn btn-primary"  type={'submit'} >
                            Update
                        </button>
                        <Link className={'btn btn-secondary'} to={'/'}>Back to home</Link>
                    </div>
                </Form>
            </Formik>
        </div>
        </>
    )

}




