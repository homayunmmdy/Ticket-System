import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ThemeToggle = () => {
    return (
        <label className="toggle toggle-xl toggle-error text-base-content">
            <input type="checkbox" value="dark" className="theme-controller" />
            <IoSunnyOutline size={24}
                aria-label="sun" />
            <IoMoonOutline size={24} aria-label="moon" />
        </label>
    )
}

export default ThemeToggle