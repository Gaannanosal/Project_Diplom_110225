import './customCheckbox.scss'
import { FaCheck } from 'react-icons/fa6';

const CustomCheckbox = ({onChange, checked}) => {
    const handlerChecked = () => {
        onChange(!checked) 
    }
    return (
        <div className="customCheckbox" onClick={handlerChecked}>
            {checked && <div className='customCheckbox-checked'>
                <FaCheck /> </div>}
        </div>
    )
}  

export default CustomCheckbox