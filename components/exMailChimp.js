import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className={`text-input ${
          meta.touched && meta.error && 'animate-shake'
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

const SignupForm = ({ status, message, onValidated }) => {
  return (
    <div>
      <article>
        <h1 className="text-4xl w-7/12 m-auto text-white font-black">
          Send me the Adam Finkelston Artist Newsletter via e-mail!
        </h1>
      </article>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        validationSchema={Yup.object({
          // firstName: Yup.string()
          //   .max(15, 'Must be 15 characters or less')
          //   .required('Required'),
          // lastName: Yup.string()
          //   .max(20, 'Must be 20 characters or less')
          //   .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            onValidated({
              EMAIL: values.email,
              // FNAME: values.firstName,
              // LNAME: values.lastName,
            })
            setSubmitting(false)
          }, 400)
        }}
      >
        {(formik) => (
          <Form className="flex justify-center">
            {/* <MyTextInput name="firstName" type="text" placeholder="Sean" />
            <MyTextInput name="lastName" type="text" placeholder="Connery" /> */}
            <MyTextInput
              className="p-2 rounded-l-md w-5/12"
              name="email"
              type="email"
              placeholder="seanconnery@gmail.com"
            />
            <button
              className="bg-gray-900 rounded-r-md px-2 text-white"
              disabled={formik.isSubmitting}
              type="submit"
            >
              Subscribe
            </button>
          </Form>
        )}
      </Formik>
      <article className=" w-6/12 text-white font-bold relative bottom-10 p-4 m-auto">
        {status === 'sending' && (
          <div className="mc__alert mc__alert--sending">sending...</div>
        )}
        {status === 'error' && (
          <div
            className="mc__alert mc__alert--error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === 'success' && (
          <div
            className="mc__alert mc__alert--success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </article>
    </div>
  )
}

export default function MailChimpFormContainer() {
  const url = 'https://gmail.us10.list-manage.com/subscribe/post'
  const postUrl = `${url}?u=${process.env.NEXT_PUBLIC_SANITY_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_SANITY_MAILCHIMP_ID}`
  return (
    <div className="mc__form-containter">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <SignupForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  )
}
