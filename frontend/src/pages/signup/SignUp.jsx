import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up
          <span className='text-blue-500'> Chat App</span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base text-white label-text'>Full Name</span>
            </label>
            <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base text-white label-text'>Username</span>
            </label>
            <input type="text" placeholder='johndoe' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base text-white label-text'>Password</span>
            </label>
            <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base text-white label-text'>Confirm Password</span>
            </label>
            <input type="text" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
          </div>

          <GenderCheckbox />

          <a href="#" className='text-sm hover:underline text-white hover:text-blue-500 mt-2 inline-block'>
            Already have an account?
          </a>

          <div>
            <button className='btn bg-blue-500 btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default SignUp








// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Sign Up
//           <span className='text-blue-500'> Chat App</span>
//         </h1>

//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base text-white label-text'>Full Name</span>
//             </label>
//             <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base text-white label-text'>Username</span>
//             </label>
//             <input type="text" placeholder='johndoe' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base text-white label-text'>Password</span>
//             </label>
//             <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base text-white label-text'>Confirm Password</span>
//             </label>
//             <input type="text" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
//           </div>

//           <GenderCheckbox />

//           <a href="#" className='text-sm hover:underline text-white hover:text-blue-500 mt-2 inline-block'>
//             Already have an account?
//           </a>

//           <div>
//             <button className='btn bg-blue-500 btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
//           </div>
//         </form>
//       </div>
      
//     </div>
//   )
// }

// export default SignUp

