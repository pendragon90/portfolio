import {TiTick} from 'react-icons/ti'
import { useSelector } from 'react-redux'

const Skills = () => {
  const isDarkMode = useSelector(state=>state.darkMode.status)

  return (
    <div id='skills' className='my-20 mx-10'>
    <h1 className='text-center text-2xl font-bold'>My Skills</h1>
    <h1 className='text-center font-light'>What skills i have</h1>  
    
    <div className="grid gap-3 grid-cols-4">
    <div className={`
     ${isDarkMode?'bg-slate-800':'bg-slate-100'}
    col-span-4 mt-5 rounded-lg p-3`}>
        <h1 className='text-center mb-3 text-lg font-bold'>Frontend</h1>
        <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <TiTick />
              <p>HTML</p>
            </div>
            <div className="flex items-center gap-2">
              <TiTick />
              <p>CSS</p>
            </div>
            <div className="flex items-center gap-2">
              <TiTick />
              <p>Javascript</p>
            </div>
            <div className="flex items-center gap-2">
              <TiTick />
              <p>Bootstrap</p>
            </div>
            <div className="flex items-center gap-2">
              <TiTick />
              <p>Tailwind css</p>
            </div>
            <div className="flex items-center gap-2">
              <TiTick />
              <p>React Js</p>
            </div>
        </div>
      </div>

      <div className={`
     ${isDarkMode?'bg-slate-800':'text-black'}
    col-span-4 mt-5 bg-slate-100 rounded-lg p-3`}>
        <h1 className='text-center mb-3 text-lg font-bold'>Backend</h1>
        <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <TiTick />
             <p>PHP</p>
            </div>
            <div className="flex items-center gap-2">
              <TiTick />
              <p>Mysql</p>
            </div>
            <div className="flex items-center gap-2">
              <TiTick />
             <p>Laravel</p>
            </div>
            <div className="flex items-center gap-2">
              <TiTick />
             <p>Git</p>
            </div>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Skills