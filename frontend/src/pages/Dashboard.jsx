import Navbar from '../components/Navbar'
import {
  Briefcase,
  Mail,
  CalendarCheck,
  Clock,
  CheckCircle2,
  XCircle
} from 'lucide-react'

function Dashboard() {

  const recentApplications = [
    {
      company: 'Google',
      role: 'Frontend Developer',
      status: 'Interview Scheduled',
      date: '22 May 2026'
    },
    {
      company: 'Microsoft',
      role: 'Full Stack Developer',
      status: 'Application Sent',
      date: '20 May 2026'
    },
    {
      company: 'Amazon',
      role: 'React Developer',
      status: 'Rejected',
      date: '18 May 2026'
    },
    {
      company: 'Netflix',
      role: 'Software Engineer',
      status: 'Under Review',
      date: '15 May 2026'
    }
  ]

  return (
    <div className='min-h-screen bg-slate-950'>
      <Navbar />

      <div className='max-w-7xl mx-auto px-6 py-12'>

        <div className='flex items-center justify-between mb-10'>
          <div>
            <h1 className='text-5xl font-bold text-white'>
              Dashboard
            </h1>

            <p className='text-slate-400 mt-3 text-lg'>
              Track your applications, responses, and interview progress.
            </p>
          </div>
        </div>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6'>

          <div className='bg-slate-900 border border-slate-800 rounded-3xl p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-slate-400'>Applications</p>
                <h2 className='text-4xl font-bold text-white mt-3'>
                  24
                </h2>
              </div>

              <div className='bg-blue-500/20 p-4 rounded-2xl'>
                <Briefcase className='text-blue-400' size={28} />
              </div>
            </div>

            <p className='text-green-400 mt-4 text-sm'>
              +12% this month
            </p>
          </div>

          <div className='bg-slate-900 border border-slate-800 rounded-3xl p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-slate-400'>Responses</p>
                <h2 className='text-4xl font-bold text-white mt-3'>
                  8
                </h2>
              </div>

              <div className='bg-purple-500/20 p-4 rounded-2xl'>
                <Mail className='text-purple-400' size={28} />
              </div>
            </div>

            <p className='text-green-400 mt-4 text-sm'>
              +5 new recruiter replies
            </p>
          </div>

          <div className='bg-slate-900 border border-slate-800 rounded-3xl p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-slate-400'>Interviews</p>
                <h2 className='text-4xl font-bold text-white mt-3'>
                  3
                </h2>
              </div>

              <div className='bg-green-500/20 p-4 rounded-2xl'>
                <CalendarCheck className='text-green-400' size={28} />
              </div>
            </div>

            <p className='text-slate-400 mt-4 text-sm'>
              2 upcoming this week
            </p>
          </div>

          <div className='bg-slate-900 border border-slate-800 rounded-3xl p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-slate-400'>Pending</p>
                <h2 className='text-4xl font-bold text-white mt-3'>
                  13
                </h2>
              </div>

              <div className='bg-yellow-500/20 p-4 rounded-2xl'>
                <Clock className='text-yellow-400' size={28} />
              </div>
            </div>

            <p className='text-yellow-400 mt-4 text-sm'>
              Awaiting recruiter review
            </p>
          </div>

        </div>

        <div className='mt-12 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden'>

          <div className='flex items-center justify-between px-8 py-6 border-b border-slate-800'>
            <h2 className='text-2xl font-bold text-white'>
              Recent Applications
            </h2>
          </div>

          <div className='overflow-x-auto'>

            <table className='w-full'>

              <thead className='bg-slate-800/50'>
                <tr>
                  <th className='text-left text-slate-400 px-8 py-4 font-medium'>
                    Company
                  </th>

                  <th className='text-left text-slate-400 px-8 py-4 font-medium'>
                    Role
                  </th>

                  <th className='text-left text-slate-400 px-8 py-4 font-medium'>
                    Status
                  </th>

                  <th className='text-left text-slate-400 px-8 py-4 font-medium'>
                    Applied On
                  </th>
                </tr>
              </thead>

              <tbody>

                {
                  recentApplications.map((item, index) => (

                    <tr
                      key={index}
                      className='border-b border-slate-800 hover:bg-slate-800/30 transition'
                    >

                      <td className='px-8 py-5 text-white font-medium'>
                        {item.company}
                      </td>

                      <td className='px-8 py-5 text-slate-300'>
                        {item.role}
                      </td>

                      <td className='px-8 py-5'>

                        <div className='flex items-center gap-2'>

                          {
                            item.status === 'Interview Scheduled' &&
                            <CheckCircle2
                              className='text-green-400'
                              size={18}
                            />
                          }

                          {
                            item.status === 'Rejected' &&
                            <XCircle
                              className='text-red-400'
                              size={18}
                            />
                          }

                          <span
                            className={`
                              text-sm font-medium
                              ${item.status === 'Rejected'
                                ? 'text-red-400'
                                : item.status === 'Interview Scheduled'
                                ? 'text-green-400'
                                : 'text-yellow-400'
                              }
                            `}
                          >
                            {item.status}
                          </span>

                        </div>

                      </td>

                      <td className='px-8 py-5 text-slate-400'>
                        {item.date}
                      </td>

                    </tr>
                  ))
                }

              </tbody>

            </table>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard