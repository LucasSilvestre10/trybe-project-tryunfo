import React, { Component } from 'react';

export class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="input-name">
            <input
              type="text"
              data-testid="name-input"
              placeholder="Insira o nome da carta"
            />
          </label>
          <label htmlFor="input-description">
            <input type="textarea" data-testid="description-input" />
          </label>
          <label htmlFor="input-attr1">
            <input type="number" data-testid="attr1-input" />
          </label>
          <label htmlFor="input-attr2">
            <input type="number" data-testid="attr2-input" />
          </label>
          <label htmlFor="input-attr3">
            <input type="number" data-testid="attr3-input" />
          </label>
          <label htmlFor="input-image">
            <input type="text" data-testid="image-input" />
          </label>
          <label htmlFor="input-rarity">
            <select data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="input-trunfo">
            <input
              type="checkbox"
              name=""
              id="input-trunfo"
              data-testid="trunfo-input"
            />
            <p id="input-trunfo"> Super Trunfo </p>
          </label>
          <button type="submit" id="save-button" data-testid="save-button">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
