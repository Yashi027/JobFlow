import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full bg-slate-900 border-b border-slate-700'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <h1 className='text-2xl font-bold text-white'>JobFlow AI</h1>

        <div className='flex gap-6'>
          <Link className='text-gray-300 hover:text-white' to='/'>Home</Link>
          <Link className='text-gray-300 hover:text-white' to='/apply'>Apply</Link>
          <Link className='text-gray-300 hover:text-white' to='/dashboard'>Dashboard</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar