import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './ContactForm.module.css';
import * as Yup from 'yup';

export default function ContactForm({ onAdd }) {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAdd({
      id: Date.now(),
      name: values.name,
      number: values.number,
    });
    resetForm();
  };

  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.contactForm}>
          <label className={s.label}>
            <p>Name</p>
            <Field className={s.input} type="text" name="name" />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <p>Number</p>
            <Field className={s.input} type="number" name="number" />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <div className={s.btnWrapper}>
            <button className={s.btn} type="submit">
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
