import './Card.css';

const Card = ({ title, price, imgSrc, type , clickHandler }) => {

    return (        
        <div className="card__item" type={type} onClick={clickHandler}>
            <div className="card__inner">
            <img src={imgSrc} alt="" />           
            <div className="text__wrapper">
                <h6>
                    {title}
                </h6>
                <p>
                   {`$ ${price}`}
                </p>
            </div>
            </div>           
        </div>
    );
}

export default Card;
