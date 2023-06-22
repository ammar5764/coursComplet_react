import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

import { Row, Form, Col, Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
    firstName: yup.string().required('Champ requis'),
    lastName: yup.string().required('Champ requis'),
    email: yup.string().email('Invalid email').required('Champ requis'),
    password: yup.string()
        .required("Svp entrez un mot de passe")
        .min(8, "Password too short")
        .test("isValidPass", "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un symbole ( !@#%& ).", (value) => {
            const hasUpperCase = /[A-Z]/.test(value);
            const hasLowerCase = /[a-z]/.test(value);
            const hasNumber = /[0-9]/.test(value);
            const hasSymbole = /[!@#%&]/.test(value);
            let validConditions = 0;
            const numberOfMustBeValidConditions = 4;
            const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
            conditions.forEach((condition) =>
                condition ? validConditions++ : null
            );
            if (validConditions >= numberOfMustBeValidConditions) {
                return true;
            }
            return false;
        }),

    agreeTermAndCondition: yup.bool().required().oneOf([true], 'Les conditions doivent être approuvés'),
    agreePrivacyPolicy: yup.bool().required().oneOf([true], 'La politique de confidentialité doit être approuvée'),
    isNewsletter: yup.bool(),
});

function FormikExemple() {
    const [errorMessage, setErrorMessage] = useState(false); // s'affichera  en cas d'erreur de fetch !
    const [passwordType, setpasswordType] = useState("password");
    const navigate = useNavigate();
    const [state, setState] = useState({
        isLoading: false
    })



    const ValideForm = (obj) => {
        //  fetch for send request
        console.log(obj)
    }



    return (
        <div className='container my-5'>        
            <Formik
            validationSchema={schema}
            onSubmit={ValideForm}
            initialValues={{
               email: "",                
                password: '',
                agreeTermAndCondition: false,
                agreePrivacyPolicy: false,
                isNewsletter: false,
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    {errorMessage &&
                        <>
                            <div className='alert alert-danger'>une erreur s'est produite</div>
                        </>
                    }
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationFormik03">
                            <Field
                                className={`form-control ${errors.email && touched.email && ('border border-danger')}`}
                                id="email"
                                name="email"
                                value={values.email}
                                placeholder="Email"
                                type="email"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {!errors.email && touched.email && <p className='text-success text-start' style={{ fontSize: '13px' }}>Email est valide</p>}
                        {errors.email && touched.email && <p className='text-danger  text-start' style={{ fontSize: '13px' }}>{errors.email}</p>}
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationFormik03">
                            <Field
                                className={`form-control ${errors.password && touched.password && ('border border-danger')}`}
                                id="password"
                                name="password"
                                value={values.password}
                                placeholder="Mot de passe"
                                type={passwordType}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">

                    </Form.Group>
                        <p className={`${errors.password && touched.password && 'text-danger'} text-start mt-1 `} style={{ fontSize: '10px', fontWeight: 'bold' }}>Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un symbole ( !@#%& ).</p>
                        {!errors.password && touched.password && <p className='text-success text-start' style={{ fontSize: '13px' }}>Le password est valide</p>}
                        {/* {errors.password && touched.password && <p className='text-danger  text-start' style={{ fontSize : '13px' }}>{errors.password}</p>} */}
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Check
                            type="switch"
                            className='text-start'
                            required
                            name="agreeTermAndCondition"
                            label="J'accepte les conditions générales "
                            onChange={handleChange}
                            isInvalid={!!errors.agreeTermAndCondition}
                            feedback={errors.agreeTermAndCondition}
                            feedbackType="invalid"
                            id="agreeTermAndCondition"
                        ></Form.Check>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check
                            type="switch"
                            className='text-start'
                            required
                            name="agreePrivacyPolicy"
                            label="J'accepte la politique de confidentialité"
                            onChange={handleChange}
                            isInvalid={!!errors.agreePrivacyPolicy}
                            feedback={errors.agreePrivacyPolicy}
                            feedbackType="invalid"
                            id="validationFormik1"

                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check
                            type="switch"
                            name="isNewsletter"
                            className='text-start'
                            label="Newsletter?"
                            onChange={handleChange}
                            id="validationFormik3"

                        />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="dark" style={{ fontSize: 16 }} size="lg" type="submit"> {!state.isLoading ? 'Créer un compte' : 'Wait'}</Button>
                    </div>

                </Form>
            )}
        </Formik>
        </div>

    );
};

export default FormikExemple