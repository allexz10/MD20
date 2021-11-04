
import './App.css';
import buttontTitles from './components/Button/ButtonTitles';
import shopItems from './components/Card/CardItems';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

const App = () => {

  return (
    <div className="container">
      <h1 className="heading"><span>Our</span> Store</h1>
      <div className="nav" >

        {buttontTitles.map(({ buttonTitle, clickHandler }) => (
          <Button
            key={buttonTitle}
            clickHandler={clickHandler}
          >
            {buttonTitle}
          </Button>
        ))
        }

      </div>
      <div className="card__wrapper">

        {shopItems.map(({ title, price, imgSrc, type, clickHandler, itemId }) => (
          <Card
            key={itemId}
            type={type}
            imgSrc={imgSrc}
            title={title}
            price={price}
            clickHandler={clickHandler}
          />
        ))
        }

      </div>
    </div>
  );
}

export default App;
