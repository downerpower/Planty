function App() {
  return (
    <div className="wrapper">
      <header className="headerLeft">
        <div>
          <img width={120} height={70} src='/img/logo.svg' alt='logo' />
        </div>
        <ul className="headerRight">
          <li><img width={26} height={26} src='/img/shopping_cart.svg' alt='logo' /><span>1499 руб.</span></li>
          <li><img width={26} height={26} src='/img/account_circle.svg' alt='logo' /></li>
        </ul>
      </header >
      <div className="content">
        <h1>Все растения</h1>
        <div className="plants">
          <div className="card">
            <img width={100} height={112} src='/img/plants/monstera.png' alt='plants' />
            <h5>Монстера</h5>
            <div className="cardBottom">
              <div className="cardDescription">
                <span>Цена: </span>
                <b>1499 руб.</b>
              </div>
              <div>
                <button className="button favorite">
                  <img width={32} height={32} src='/img/favorite.svg' alt='add' />
                </button>
                <button className="button">
                  <img width={32} height={32} src='/img/add_box.svg' alt='add' />
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <img width={100} height={112} src='/img/plants/succulent.png' alt='plants' />
            <h5>Суккулент</h5>
            <div className="cardBottom">
              <div className="cardDescription">
                <span>Цена: </span>
                <b>749 руб.</b>
              </div>
              <div>
                <button className="button favorite">
                  <img width={32} height={32} src='/img/favorite.svg' alt='add' />
                </button>
                <button className="button">
                  <img width={32} height={32} src='/img/add_box.svg' alt='add' />
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <img width={100} height={112} src='/img/plants/kalanchoe.png' alt='plants' />
            <h5>Каланхоэ</h5>
            <div className="cardBottom">
              <div className="cardDescription">
                <span>Цена: </span>
                <b>1399 руб.</b>
              </div>
              <div>
                <button className="button favorite">
                  <img width={32} height={32} src='/img/favorite.svg' alt='add' />
                </button>
                <button className="button">
                  <img width={32} height={32} src='/img/add_box.svg' alt='add' />
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <img width={100} height={112} src='/img/plants/sansevieria.png' alt='plants' />
            <h5>Сансевиерия</h5>
            <div className="cardBottom">
              <div className="cardDescription">
                <span>Цена: </span>
                <b>899 руб.</b>
              </div>
              <div>
                <button className="button favorite">
                  <img width={32} height={32} src='/img/favorite.svg' alt='add' />
                </button>
                <button className="button">
                  <img width={32} height={32} src='/img/add_box.svg' alt='add' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
