import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserData, fetchUserData, wishlistFunc } from '../redux/slices/Slice';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from "react-helmet";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
const Add = () => {
    const dispatch = useDispatch();
    const { data, loading, error, wishlist } = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);
    console.log(wishlist)
    const [search, setSearch] = useState("")
    const filtered = data.filter((elem) => elem.name.toLowerCase().includes(search.toLowerCase()))
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <h1>Post</h1>
                <Formik
                    initialValues={{
                        id: uuidv4(),
                        name: '',
                        price: '',
                        desc: '',
                    }}
                    // validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    {({ errors, touched, handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <Field name="name" placeholder="name" />
                            {errors.name && touched.name ? (
                                <div>{errors.name}</div>
                            ) : null}
                            <Field name="price" placeholder="price" />
                            {errors.price && touched.price ? (
                                <div>{errors.price}</div>
                            ) : null}
                            <Field name="desc" placeholder="description" />
                            {errors.desc && touched.desc ? (
                                <div>{errors.desc}</div>
                            ) : null}
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className='table' >
                <input type="text" placeholder='search smthng..' onChange={(e) => setSearch(e.target.value)} />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Desc</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Delete</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filtered && filtered.map((row, i) => (
                                <TableRow
                                    key={i
                                    }
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell >
                                        {row.id}
                                    </TableCell>
                                    <TableCell >
                                        {row.name}
                                    </TableCell>
                                    <TableCell >
                                        {row.desc}
                                    </TableCell>
                                    <TableCell >
                                        {row.price}
                                    </TableCell>
                                    <TableCell >
                                        <button onClick={() => dispatch(deleteUserData(row.id))}>delete</button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer></div></>
    )
}

export default Add