import useLockBodyScroll from './lock-body-scroll';

function Drawer(props) {
  useLockBodyScroll();
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column p-30">
        <h2 className="mb-30 d-flex justify-between">
          Корзина{' '}
          <img
            className="removeBtn cu-p"
            src="img/btn-remove.svg"
            alt="Close"
            onClick={props.onClose}
          />
        </h2>

        <div className="items flex">
          <div className="cartItem d-flex align-center p-20 mb-20">
            <img className="mr-20" width={70} height={70} src="sneakers/1.jpg" alt="Sneakers" />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
          </div>
        </div>
        <ul className="cartTotalBlock">
          <li>
            <span>Итого:</span>
            <div></div>
            <b>21 498 руб. </b>
          </li>
          <li>
            <span>Налог 5%: </span>
            <div></div>
            <b>1074 руб. </b>
          </li>
        </ul>
        <button className="greenButton">
          Оформить заказ <img src="img/arrow.svg" alt="Arrow" />
        </button>
      </div>
    </div>
  );
}

export default Drawer;
