import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    // hasTrunfo,
    isSaveButtonDisabled: true,
    cardList: [],
  };

  validateForm = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const cardA1 = parseInt(cardAttr1, 10);
    const cardA2 = parseInt(cardAttr2, 10);
    const cardA3 = parseInt(cardAttr3, 10);
    const totalPower = cardA1 + cardA2 + cardA3;
    const maxAttr = 90;
    const maxPower = 210;
    let error = 0;

    if (cardName.length <= 0) {
      error += 1;
    } if (cardDescription.length <= 0) {
      error += 1;
    } if (cardDescription.length <= 0) {
      error += 1;
    } if (cardImage.length <= 0) {
      error += 1;
    } if (cardRare.length <= 0) {
      error += 1;
    } if (cardA1 < 0 || cardA1 > maxAttr) {
      error += 1;
    } if (cardA2 < 0 || cardA2 > maxAttr) {
      error += 1;
    } if (cardA3 < 0 || cardA3 > maxAttr) {
      error += 1;
    } if (totalPower > maxPower) {
      error += 1;
    }
    if (error === 0) {
      this.setState({ isSaveButtonDisabled: false });
    } if (error >= 1) {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onInputChange = (event) => {
    const { name, value, checked } = event.target;
    if (name === 'cardTrunfo') {
      this.setState({ [name]: checked }, this.validateForm);
    } else {
      this.setState({ [name]: value }, this.validateForm);
    }
  };

  clearForm = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  };

  saveCard = () => {
    const { cardList,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare } = this.state;
    const obj = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    };

    cardList.push(obj);
    this.setState({ cardList });
  };

  onSaveButtonClick = () => {
    this.saveCard();
    this.clearForm();
  };

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
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          validateForm={ this.validateForm }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
