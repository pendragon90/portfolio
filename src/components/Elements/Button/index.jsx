import { useSelector } from "react-redux"

const Button = (props) => {
    const {classname = '',children,click} = props
    const isDarkMode = useSelector(state=>state.darkMode.status)
    return (
    <button onClick={click} className={`px-3 py-2 w-max rounded-lg cursor-pointer font-medium
    ${classname}
    ${isDarkMode?'bg-slate-700 hover:bg-slate-600 text-black'
    :'bg-black hover:bg-slate-800 text-white'}
    `}>
    {children}
    </button>
  )
}

export default Button