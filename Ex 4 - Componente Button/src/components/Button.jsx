import { buttonClick } from '../utils'

function Button({bg, title}){
    return (
        <button 
        onClick={buttonClick}
        style={{background: bg}}
        className="button">{title}
        </button>
    )
}
export default Button;