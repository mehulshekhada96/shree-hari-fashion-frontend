import { useState, useEffect } from "react";
import Link from "next/link";
import { LockClosedIcon } from "@heroicons/react/solid";
import showPass from "../javascripts/validate";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  function setemail(e) {
    // e.preventDefault();
    setEmail(e.target.value);
  }

  function setpass(e) {
    // e.preventDefault();
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    const data = {
      email,
      password,
    };
    e.preventDefault();
    fetch("http://localhost:5050/signin", {
      method: "post",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => alert(result.message))
      .catch((error) => alert("Something went wrong"));
  };
  useEffect(()=>{
    showPass()
  },[])
  return (
    <div className=" flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label
                htmlFor="email-address"
                className=" mb-1 font-bold block text-lg text-gray-600"
              >
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={setemail}
                className="appearance-none rounded-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-1 mt-3 font-bold block text-lg text-gray-600"
              >
                Password
              </label>
              <div className='w-full flex items-center relative'>
              <input
                id="password"
                name="password"
                type='password'
                autoComplete="current-password"
                required
                onChange={setpass}
                className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <div className='absolute right-0 showIconPass flex items-center justify-center'>
              <i className="far fa-eye " id="togglePassword"></i>
              </div>
              
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group  relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>
          <div className="text-sm flex items-center justify-center">
            <Link href="/signup">
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                New Here ? Click to Signup
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
