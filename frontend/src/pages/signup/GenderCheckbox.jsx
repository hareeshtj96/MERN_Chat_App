import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text text-white'>Male</span>
                <input type="checkbox" className='checkbox bg-white border-slate-900' />
            </label>
        </div>

        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text text-white'>Female</span>
                <input type="checkbox" className='checkbox bg-white border-slate-900' />
            </label>
        </div>
      
    </div>
  )
}

export default GenderCheckbox



// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text text-white'>Male</span>
//                 <input type="checkbox" className='checkbox bg-white border-slate-900' />
//             </label>
//         </div>

//         <div className='form-control'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text text-white'>Female</span>
//                 <input type="checkbox" className='checkbox bg-white border-slate-900' />
//             </label>
//         </div>
      
//     </div>
//   )
// }

// export default GenderCheckbox