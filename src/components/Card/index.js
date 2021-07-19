import styles from './Card.module.scss';
import React from 'react';

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavorite}>
        <img src="img/heart-unliked.svg" alt="heart-unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span className="opacity-5 text-uppercase">Цена:</span>
          <b>{props.price} руб.</b>
        </div>

        <img
          onClick={onClickPlus}
          src={isAdded ? 'img/btn-cheked.svg' : 'img/btn-plus.svg'}
          alt="plus"
          className="cu-p"
        />
      </div>
    </div>
  );
}

export default Card;
