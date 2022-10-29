import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deleteCard,

    } = this.props;

    const buttonDelete = (
      <button
        type="button"
        data-testid="delete-button"
        onClick={ deleteCard }
      >
        Excluir

      </button>
    );

    return (

      <li htmlFor={ cardName } id={ cardName }>
        <h1 data-testid="name-card">{ cardName }</h1>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <h3 data-testid="rare-card">{ cardRare }</h3>
        {
          cardTrunfo === true
            && <p data-testid="trunfo-card">Super Trunfo</p>
        }
        {deleteCard !== undefined && buttonDelete}
      </li>

    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteCard: PropTypes.func,
};
Card.defaultProps = {
  deleteCard: PropTypes.undefined,
};

export default Card;
