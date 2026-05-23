import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Home() {
  return (
    <div className='min-h-screen bg-slate-950'>
      <Navbar />

      <div className='max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center'>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className='text-6xl font-bold text-white leading-tight'>
            Smart Job Application Automation
          </h1>
          <p className='text-gray-400 mt-6 text-lg'>
            Automate resume submissions, manage applications,
            and track recruiter responses using AI-powered workflows.
          </p>

          <Link to='/apply'>
            <button className='mt-8 bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl text-white font-semibold'>
              Start Applying
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className='bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl'
        >
          <img
            src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
            alt='hero'
            className='rounded-2xl'
          />
          </motion.div>
      </div>
    </div>
  )
}

export default Home
