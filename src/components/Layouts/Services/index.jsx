import {TiTick} from 'react-icons/ti'
import { useSelector } from 'react-redux';

const Services = () => {
    const isDarkMode = useSelector(state=>state.darkMode.status)
  return (
    <div id='services' className='mx-10 my-20'>
    <h1 className='text-center text-2xl font-bold'>Services</h1>
    <h1 className='text-center font-light'>What Can I do ?</h1>  
        <div className={`
         ${isDarkMode?'bg-slate-800':'text-black'}
        bg-slate-200 p-3 rounded-lg mt-5 flex flex-col gap-y-3`}>
            <div className="flex gap-3 items-center">
                <TiTick className='text-xl'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, perspiciatis.</p>
            </div>
            <div className="flex gap-3 items-center">
                <TiTick className='text-xl'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, perspiciatis.</p>
            </div>
            <div className="flex gap-3 items-center">
                <TiTick className='text-xl'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, perspiciatis.</p>
            </div>
        </div>
    </div>
  )
}

export default Services