import Button from '../../Elements/Button/index';
import img from '../../../assets/img/p1.jpg'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import NavProjects from '../../Elements/NavProjects';

function Projects() {
    const [isHover, setIsHover] = useState(false)
    const [read, setRead] = useState(false)
    const isDarkMode = useSelector(state=>state.darkMode.status)

    const hoverHandler = () => {
        setIsHover(!isHover)
    }

    const readHandler = () => {
        setRead(!read)
    }

  return (
    <>
    <div id='projects' className='mx-10 mb-20'>
        <h1 className='text-center text-2xl font-bold'>My Projects</h1>
        <div className='flex gap-x-3 justify-center mt-5'>
          <NavProjects classname={`
          ${isDarkMode?'bg-slate-800':'bg-black'}
           text-white`}>All</NavProjects>
          <NavProjects>React Js</NavProjects>
          <NavProjects>Laravel</NavProjects>
        </div>
        <div className='mt-5'>
          <div
            onMouseEnter={hoverHandler}
            onMouseLeave={hoverHandler}
            className='relative rounded-lg overflow-hidden'
          >
            <img src={img} alt='' className={`${isHover?'transform scale-105':'transform scale-100'} transition-all ease-out duration-200`}/>
            <div
              className={`${
                isHover
                  ? 'transform translate-y-0'
                  : 'transform translate-y-64'
              } absolute top-0 left-0 right-0 bottom-0 bg-slate-400 bg-opacity-80 flex flex-col justify-center items-center transition-all ease-in duration-200`}
            >
              <div className='flex gap-3'>
                <Button click={readHandler}>Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div onClick={()=>readHandler()} className={`fixed top-0 left-0 bottom-0 right-0 bg-slate-200 bg-opacity-80 ${!read?'hidden':'flex'} justify-center items-center`}>
        <div className={`
        ${isDarkMode?'bg-slate-800':'bg-white'}
        w-3/4 rounded-lg overflow-hidden`}>
            <img src={img} alt="" />
            <div className="p-3">
            <h1 className='text-lg font-semibold'>Netflix Clone</h1>
            <p>Saya membuat web Netflix clone ini menggunakan React Js, Redux, dan juga API dari TMDB</p>

            <div className="my-4">
                <h1>Technologies :</h1>
                <div className="flex gap-3 text-md">
                    <p className={`
                    ${isDarkMode?'bg-slate-500':'bg-slate-300 '}
                    py-1 px-2 rounded-lg`}>React Js</p>
                </div>
            </div>

            <Button>Live Demo</Button>

            </div>
        </div>
    </div>
    </>
    
  )
}

export default Projects