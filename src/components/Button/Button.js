
import './Button.css';

const Button = ({clickHandler,children}) =>{  
  
    return (
     <button className="button"
      onClick={ clickHandler }
      >
        {children}
     </button>
    );
}
  
  export default Button;
  