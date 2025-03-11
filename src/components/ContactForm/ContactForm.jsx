import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid'
import s from "./ContactForm.module.css"
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const validationSchema = Yup.object({
        name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
        number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    });


const ContactForm = () => {
    const initialValues = {
        name: '',
        number: '',
    };
    
    const dispatch = useDispatch();
    const handleSubmit = (values, {resetForm }) => {
        dispatch(addContact({
                id: nanoid(),
                name: values.name,
                number: values.number,
            })
        );
        resetForm();
    }


    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit} 
        >
            <Form className={s.container}>
                <div className={s.form}>
                    <label className={s.label} htmlFor='name'>Name</label>
                    <Field id="name" name="name" type="text" className={ s.input} />
                <ErrorMessage name="name" component="div" className={s.error} />
                </div>

                <div className={s.form}>
                    <label className={s.label} htmlFor="number">Number</label>
                <Field id="number" name="number" type="tel" placeholder="xxx-xx-xx" className={ s.input} />
                <ErrorMessage name="number" component="div" className={s.error} />
                </div>
                
                <button type="submit" className={s.btn}>Add Contact</button>
            </Form>
        </Formik>
    )

}
export default ContactForm;