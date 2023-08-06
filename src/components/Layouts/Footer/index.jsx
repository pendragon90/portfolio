import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <div id='about' className=' pb-16 border-t border-slate-500'>
      <div className="mx-10">
        <h1 className='text-center text-2xl font-bold mt-3'>Daffa Fahrizal</h1>
        <div className="flex p-3 gap-x-3 justify-center">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>

        <div className="flex gap-2 text-2xl mt-4 justify-center">
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
          <p className="text-center mt-5">&copy; Created by Daffa Fahrizal</p>
      </div>
    </div>
  )
}

export default Footer