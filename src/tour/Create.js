import axios from "axios";
import {Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";

export default function Create() {
    const navigate = useNavigate();
    function createTour(values) {
        axios.post('http://localhost:3000/tuors', values).then(() => {
            alert("create success!")
            navigate("/")
        })
    }

    return (
        <> <div className={'container'} style={{marginTop : '50px'}}>
            <Formik
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                }}
                onSubmit={(values)=>{createTour(values)}}
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
                        <Field type={'text'} name={'description'} className={'form-control'} id="{'description'}" required/>
                    </div>
                    <div style={{display : 'flex',justifyContent:'space-between'}}>
                        <button className="btn btn-primary"  type={'submit'} >
                            Create
                        </button>
                        <Link className={'btn btn-secondary'} to={'/'}>Back to home</Link>
                    </div>
                </Form>
            </Formik>
        </div>
        </>
    )

}