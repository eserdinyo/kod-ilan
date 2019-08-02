import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    age: Yup.number()
        .min(10, 'cok kisa')
        .max(100, 'cok uzun')
        .required('Gerekli'),
    email: Yup.string()
        .email('Geçerli bir mail adresi girin.')
        .required('Required'),
});

const AddPost = () => {
    return (
        <div className='login'>
            <h3>Ilan Ekle</h3>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    age: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className='login'>
                        <Field name="firstName" placeholder="username" />
                        {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                        ) : null}
                        <Field name="lastName" placeholder="lastname" />
                        {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                        ) : null}
                        <Field name="age" placeholder="yas" />
                        {errors.age && touched.age ? (
                            <div>{errors.age}</div>
                        ) : null}
                        <Field name="email" type="email" placeholder="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

            {/* <input type="text" placeholder='Pozinyon' />
            <input type="text" placeholder='Şirket' />
            <input type="text" placeholder='Lokasyon' />
            <button className="btn"> Kaydet </button> */}
        </div>
    )
}

export default AddPost;