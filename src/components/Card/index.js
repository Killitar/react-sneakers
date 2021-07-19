import styles from './Card.module.scss';

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="img/heart-unliked.svg" alt="heart-unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span className="opacity-5 text-uppercase">Цена:</span>
          <b>{props.price} руб.</b>
        </div>

        <button className="button">
          <img width={11} height={11} src="img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;