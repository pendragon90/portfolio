import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp} from 'react-icons/ai'

import Button from '../../Elements/Button'
import Nav from '../../Elements/Nav'
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../../redux/slices/darkMode';

const Home = () => {
  const isDarkMode = useSelector(state=>state.darkMode.status)

  return (
    <div id='home' className='h-screen flex items-center'>

    <Nav />

      <div className="grid grid-cols-12 mx-10 items-center">
      
      {/* <div className="col-span-12 bg-blue-600 flex justify-center bg-gradient-to-t from-blue-400 mx-auto">
        <img src={profile} alt="" className='w-72 h-80' />
      </div> */}
      <div className='col-span-12 mt-5'>
        <h1 className='font-bold text-4xl'>Hi, I'm Daffa Fahrizal</h1>
        <h1 className='font-medium my-2'>Fullstack Developer</h1>
        <p className='font-light text-lg leading-6 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ab, dolorum assumenda earum doloremque vitae fuga incidunt nesciunt eos nobis alias nisi necessitatibus autem! Doloribus earum iure suscipit soluta aut!</p>
      </div>
      <div className='col-span-12 flex gap-2 text-2xl mt-4'>
        <a href="" className='hover:text-slate-500'>
        <AiFillGithub />
        </a>
        <a href="" className='hover:text-slate-500'>
        <AiOutlineInstagram />
        </a>
        <a href="" className='hover:text-slate-500'>
        <AiFillLinkedin />
        </a>
      </div>
    <div className="col-span-12 flex gap-3 mt-10">
    <a href="#contact">
    <Button>Say Hello 🖐️</Button>
    </a>
    <Button>Download CV</Button>
    </div>
      </div>
    </div>
  )
}

export default Home