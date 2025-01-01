import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password)
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login
          <span className='text-blue-500'> Chat App</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          </div>

          <Link to="/signup" className='text-sm hover:underline text-white hover:text-blue-500 mt-2 inline-block'>
            {"Don't"} have an account?
          </Link>

          <div>
            <button className='btn bg-blue-500 btn-block btn-sm mt-2 border border-slate-700'
            disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Login"}
              </button>
          </div>
        </form>
      </div>      
    </div>
  )
}

export default Login






// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Login
//           <span className='text-blue-500'> Chat App</span>
//         </h1>

//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-white'>Username</span>
//             </label>
//             <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-white'>Password</span>
//             </label>
//             <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10' />
//           </div>

//           <a href="#" className='text-sm hover:underline text-white hover:text-blue-500 mt-2 inline-block'>
//             {"Don't"} have an account?
//           </a>

//           <div>
//             <button className='btn bg-blue-500 btn-block btn-sm mt-2 border border-slate-700'>Login</button>
//           </div>
//         </form>
//       </div>      
//     </div>
//   )
// }

// export default Login

