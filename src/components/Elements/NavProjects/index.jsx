import { useSelector } from "react-redux"

const NavProjects = (props) => {
    const {children, classname} = props
    const isDarkMode = useSelector(state=>state.darkMode.status)

  return (
    <a href="" className={`
    ${isDarkMode? 'border-slate-600 hover:bg-slate-800': 'hover:bg-black hover:text-white'}
    ${classname}
    border border-black p-2 rounded-xl`}>{children}</a>
  )
}

export default NavProjects