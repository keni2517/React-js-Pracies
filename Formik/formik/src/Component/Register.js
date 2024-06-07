import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const SignupSchema = Yup.object({
  Password: Yup.string()
    .min(2, 'Too Short!')
    .max(8, 'Too Long!')
    .required('Password is Required'),
  Email: Yup.string().email('Invalid email').required('Email is Required'),
  Fullname: Yup.string()
    .min(2, 'Too Short!')
    .max(8, 'Too Long!')
    .required('Full Name is Required'),
  ConPassword: Yup.string()
    .min(2, 'Too Short!')
    .max(40, 'Too Long!')
    .required('ConformPassword is Required'),
});


export function SignUpOne() {
  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      Fullname: '',
      Email: '',
      Password: '',
      ConPassword: ''
    },
    validationSchema: SignupSchema,
    onSubmit: (value) => {
      console.log(value, "value");
    }
  })

  console.log(values, "values");
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{' '}
              <a
                href="#"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </a>
            </p>
            <form action="#" method="POST" className="mt-8" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Full Name{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      id="name"
                      name='Fullname'
                      onChange={handleChange}
                      value={values.Fullname}
                    ></input>
                    {errors.Fullname && touched.Fullname ? <p style={{ color: "red" }}>{errors.Fullname}</p> : null}
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      name='Email'
                      onChange={handleChange}
                      value={values.Email}
                    ></input>
                    {errors.Email && touched.Email ? <p style={{ color: "red" }}>{errors.Email}</p> : null}
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      name='Password'
                      onChange={handleChange}
                      value={values.Password}
                    ></input>
                    {errors.Password && touched.Password ? <p style={{ color: "red" }}>{errors.Password}</p> : null}
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      Conform Password{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Conform Password"
                      id="password"
                      name='ConPassword'
                      onChange={handleChange}
                      value={values.ConPassword}
                    ></input>
                    {errors.ConPassword && touched.ConPassword ? <p style={{ color: "red" }}>{errors.ConPassword}</p> : null}
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Account <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
