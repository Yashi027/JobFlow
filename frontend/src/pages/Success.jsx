import { Link } from 'react-router-dom'

function Success() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-950'>

      <div className='bg-slate-900 p-12 rounded-3xl border border-slate-800 text-center'>

        <h1 className='text-5xl font-bold text-green-400'>Success</h1>

        <p className='text-gray-400 mt-4'>
          Your application was submitted successfully.
        </p>

        <Link to='/'>
          <button className='mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white'>
            Back Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success