import { useState } from 'react'
import Navbar from '../components/Navbar'
import API from '../services/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function ApplyJob() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: '',
    message: ''
  })

  const [resume, setResume] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)

      const data = new FormData()

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key])
      })

      data.append('resume', resume)

      const response = await API.post('/apply', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      toast.success(response.data.message)
      navigate('/success')

    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-slate-950'>
      <Navbar />

      <div className='max-w-3xl mx-auto py-16 px-6'>

        <div className='bg-slate-900 border border-slate-800 p-10 rounded-3xl'>

          <h1 className='text-4xl text-white font-bold mb-10'>
            Apply For Job
          </h1>

          <form onSubmit={submitHandler} className='space-y-6'>

            <input
              type='text'
              name='fullName'
              placeholder='Full Name'
              onChange={handleChange}
              className='w-full bg-slate-800 text-white p-4 rounded-xl outline-none'
            />

            <input
              type='email'
              name='email'
              placeholder='Email'
              onChange={handleChange}
              className='w-full bg-slate-800 text-white p-4 rounded-xl outline-none'
            />

            <input
              type='text'
              name='company'
              placeholder='Company Name'
              onChange={handleChange}
              className='w-full bg-slate-800 text-white p-4 rounded-xl outline-none'
            />

            <input
              type='text'
              name='role'
              placeholder='Job Role'
              onChange={handleChange}
              className='w-full bg-slate-800 text-white p-4 rounded-xl outline-none'
            />

            <textarea
              rows='5'
              name='message'
              placeholder='Cover Letter Message'
              onChange={handleChange}
              className='w-full bg-slate-800 text-white p-4 rounded-xl outline-none'
            />

            <input
              type='file'
              onChange={(e) => setResume(e.target.files[0])}
              className='w-full bg-slate-800 text-white p-4 rounded-xl outline-none'
            />

            <button
              disabled={loading}
              className='w-full bg-blue-600 hover:bg-blue-700 transition p-4 rounded-xl text-white font-semibold'
            >
              {
                loading ? 'Submitting...' : 'Submit Application'
              }
            </button>

            </form>
        </div>
      </div>
    </div>
  )
}

export default ApplyJob