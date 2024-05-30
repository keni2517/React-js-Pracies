import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [Student, setStudent] = useState({
    firstname: "",
    lastname: "",
    age: "",
    city: ""
  })

  const loadUserWithId = async () => {
    const res = await axios.get(`http://localhost:3001/posts/${id}`)
    setStudent(res.data);
  }

  const onSubmitEditStudent = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/posts/${id}`, Student)
    navigate("/home");
  }

  useEffect(() => {
    loadUserWithId();
  }, [])

  return (
    <section class="rounded-md bg-black/80 p-2">
      <div class="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div>
            <h2 className="text-lg font-semibold text-center"> Edit Student</h2>
          </div>
          <form action="#" method="POST" class="mt-8" onSubmit={onSubmitEditStudent}>
            <div class="space-y-5">
              <div className='text-center'>
                <label for="firstname" class="text-base font-medium text-gray-900">
                  {" "}
                  First Name{" "}
                </label>
                <div class="mt-2">
                  <input
                    class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="First Name"
                    id="firstname"
                    name='firstname'
                    value={Student.firstname}
                    onChange={(e) => setStudent({ ...Student, firstname: e.target.value })}
                  />
                </div>
              </div>
              <div className='text-center'>
                <label for="lastname" class="text-base font-medium text-gray-900">
                  {" "}
                  Last Name{" "}
                </label>
                <div class="mt-2">
                  <input
                    class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Last Name"
                    id="lastname"
                    name="lastname"
                    value={Student.lastname}
                    onChange={(e) => setStudent({ ...Student, lastname: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <div class="text-center">
                  <label for="password" class="text-base font-medium text-gray-900">
                    {" "}
                    Age{" "}
                  </label>
                </div>
                <div class="mt-2">
                  <input
                    class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Age"
                    id="age"
                    name='age'
                    value={Student.age}
                    onChange={(e) => setStudent({ ...Student, age: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <div class=" text-center">
                  <label for="password" class="text-base font-medium text-gray-900">
                    {" "}
                    City{" "}
                  </label>
                </div>
                <div class="mt-2">
                  <input
                    class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="City"
                    id="city"
                    name='city'
                    value={Student.city}
                    onChange={(e) => setStudent({ ...Student, city: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Edit Student{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="ml-2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

  )
}

export default Edit