import {FaTelegram} from 'react-icons/fa'
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
} from 'react-icons/ai'
import Button from '../../Elements/Button'
import { useSelector } from 'react-redux'

const Contact = () => {
  const isDarkMode = useSelector(state=>state.darkMode.status)

  return (
    <div id='contact' className='mx-10 my-20'>
    <h1 className='text-center text-2xl font-bold'>Contact Me</h1>
    <h1 className='text-center font-light'>Let Me Introduce Myself</h1>  
      <div className="grid grid-cols-12 mt-5 gap-3">
          <a href='' className={`
          ${isDarkMode?'bg-slate-800 hover:bg-slate-600':'bg-slate-300 hover:bg-slate-400'}
          flex flex-col items-center col-span-6 p-3 rounded-lg`}>
            <FaTelegram className='text-xl' />
            <p>Telegram</p>
          </a>
          <a href='' className={`
          ${isDarkMode?'bg-slate-800 hover:bg-slate-600':'bg-slate-300 hover:bg-slate-400'}
          flex flex-col items-center col-span-6 p-3 rounded-lg`}>
            <AiOutlineWhatsApp className='text-xl' />
            <p>Whatsapp</p>
          </a>
          <div className="col-span-12">
            <form action="">
             <div className="mb-3">
                <label htmlFor="name">Name :</label>
                  <input id='name' type="text" className={`
                  ${isDarkMode&&'text-black'}
                  w-full border border-slate-500 focus:border-none focus:outline focus:outline-blue-600 rounded-lg px-3 py-1`}/>
             </div>
             <div className="mb-3">
                <label htmlFor="email">Email :</label>
                  <input id='email' type="text" className={`
                  ${isDarkMode&&'text-black'}
                  w-full border border-slate-500 focus:border-none focus:outline focus:outline-blue-600 rounded-lg px-3 py-1`}/>
             </div>
             <div className="mb-3">
                <label htmlFor="message">Message :</label>
                  <textarea id='message' className={`
                  ${isDarkMode&&'text-black'}
                  w-full border border-slate-500 focus:border-none focus:outline focus:outline-blue-600 rounded-lg px-3 py-1`}/>
             </div>
             <Button>Submit</Button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Contact