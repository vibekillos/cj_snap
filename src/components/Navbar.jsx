import { Moon, Sun } from "lucide-react"
import Logo from "./Logo"
import { useTheme } from "../context/ThemeContext"

const Navbar = () => {
    const {theme, toggleTheme} = useTheme()
  return (
    <div>
    {/* navbar */}
    <div className='w-full flex items-center justify-between p-2'>
        <div><Logo /></div>
        <div>{theme == "light" ? <button className="hover:scale-105 duration-200" onClick={toggleTheme}><Moon size={25} /></button> : <button className="dark:text-surface-white hover:scale-105 duration-200" onClick={toggleTheme}><Sun size={25} /></button>}</div>
    </div>
    </div>
  )
}

export default Navbar
