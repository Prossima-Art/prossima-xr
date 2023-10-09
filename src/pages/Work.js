import {IconVr} from "../components/Icons";
import './Style.css';

const Work = () => {
    const btnStyle = "relative p-3 shadow bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 text-white text-base flex justify-center items-center rounded-full gap-4";
    return (
        
        <div className="classWork">
            <h1 className="text-5xl w-1/2 text-center pb-5">A new era of innovation for your B2B business success </h1>
            <button className={`${btnStyle}`}><IconVr/> Launch a VR Experience</button>
        </div>
    )
}
export default Work