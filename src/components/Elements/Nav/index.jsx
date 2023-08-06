import {CiDark} from 'react-icons/ci'
import {BsSun,BsPerson} from 'react-icons/bs'
import {CgMenuGridR,CgClose} from 'react-icons/cg'
import {AiOutlineHome} from 'react-icons/ai'
import {MdComputer} from 'react-icons/md'
import {CgWebsite} from 'react-icons/cg'
import {BsChatDots, BsStack} from 'react-icons/bs'
import { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '../../../redux/slices/darkMode'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const isDarkMode = useSelector(state=>state.darkMode.status)
    const dispatch = useDispatch()

   const toggleDarkModeHandler = () => {
    dispatch(toggleDarkMode())
   }

    const handleNav = () => {
        setIsOpen(!isOpen)
    }

    const handleOutsideNav = () => {
        setIsOpen(false)
    }

  return (
    <OutsideClickHandler onOutsideClick={handleOutsideNav}>
        <nav className={`
        ${isDarkMode?'bg-black border-white':'bg-white border-slate-500'}
        fixed bottom-0 z-10 w-full flex flex-col py-2 px-10 border-t `}>
        <div className={`
        ${isOpen? 'transform translate-y-0 h-full' : 'transform translate-y-96 h-0'}
        ${isDarkMode? 'text-white':'text-black'}
        transition-all ease-in duration-200 w-full grid grid-cols-4 gap-4 text-xl`}>
            <a href='#home' className="col-span-2 flex flex-col items-center">
            <AiOutlineHome />
            <h1 className='text-sm'>Home</h1>
            </a>
            <a href='#about' className="col-span-2 flex flex-col items-center">
            <BsPerson />
            <h1 className='text-sm'>About</h1>
            </a>
            <a href='#contact' className="col-span-2 flex flex-col items-center">
            <BsChatDots />
            <h1 className='text-sm'>Contact</h1>
            </a>
            <a href='#services' className="col-span-2 flex flex-col items-center">
            <MdComputer />
            <h1 className='text-sm'>Services</h1>
            </a>
            <a href='#projects' className="col-span-2 flex flex-col items-center">
            <CgWebsite/>
            <h1 className='text-sm'>Projects</h1>
            </a>
            <a href='#skills' className="col-span-2 flex flex-col items-center">
            <BsStack />
            <h1 className='text-sm'>Skills</h1>
            </a>
        </div>
     
        <div className={
            `${isOpen? 'justify-end' : 'justify-between '} flex items-center
            ${isDarkMode? 'text-white':'text-black'}
            transition-all ease-in duration-500
            `
            }>
            <div className={`${isOpen? 'hidden':'block'} text-2xl cursor-pointer`}>
                {isDarkMode? (
                    <BsSun onClick={() => toggleDarkModeHandler()} />
                ) : (
                    <CiDark onClick={() => toggleDarkModeHandler()} />
                )}
            </div>

            <div className='text-2xl cursor-pointer'>
                {!isOpen? (
        <CgMenuGridR onClick={() => handleNav()} />
                ):(
                    <CgClose onClick={() => handleNav()} />
                )
                }
            </div>

        
        </div>
    </nav>
    </OutsideClickHandler>
  )
}

export default Nav