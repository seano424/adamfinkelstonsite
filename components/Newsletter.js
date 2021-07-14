import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className={`text-input ${
          meta.touched && meta.error && "animate-shake"
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-gray-150 font-serif rounded-b bg-red-200 px-2 py-1">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

const SignupForm = ({ status, message, onValidated }) => {
  return (
    <>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid email address"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            onValidated({
              EMAIL: values.email,
            });
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <section className="bg-black p-10 pb-16 rounded-3xl m-auto">
            <article>
              <h1 className="text-4xl text-center lg:px-8 py-6 rounded text-white font-black bg-black">
                Sign up for Adam's Newsletter
              </h1>
            </article>

            <Form>
              <article>
                <div className="flex flex-col md:flex-row my-1 gap-1">
                  <MyTextInput
                    className={`rounded focus:outline-none focus:ring focus:border-blue-300 p-3`}
                    name="firstName"
                    type="text"
                    placeholder="First name"
                  />
                  <MyTextInput
                    className={`rounded focus:outline-none focus:ring focus:border-blue-300 p-3`}
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
                <div className="flex flex-col md:flex-row">
                  <MyTextInput
                    className={`rounded-l w-full focus:outline-none focus:ring focus:border-blue-300 p-3`}
                    name="email"
                    type="email"
                    placeholder="ludwigvonsiegen@gmail.com"
                  />
                  <button
                    className={`bg-green-300 w-full md:w-auto rounded-r p-3 font-black text-black self-start cursor-pointer`}
                    disabled={formik.isSubmitting}
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </article>
              <article className="mt-1">
                {status === "sending" && (
                  <div className="mc__alert mc__alert--sending bg-green-300 p-1 rounded">
                    sending...
                  </div>
                )}
                {status === "error" && (
                  <div
                    className="mc__alert mc__alert--error bg-red-300 p-1 rounded"
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}
                {status === "success" && (
                  <div
                    className="mc__alert mc__alert--success bg-green-400 p-1 rounded"
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}
              </article>
            </Form>
          </section>
        )}
      </Formik>
    </>
  );
};

export default function Newsletter() {
  const url =
    "https://adamfinkelstonphotography.us6.list-manage.com/subscribe/post";
  const postUrl = `${url}?u=bd6d6a1c39&id=97985cc2e1`;
  return (
    <div>
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
  );
}
