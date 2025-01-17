import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LOTTO } from '../constants/lottoData';
import { ERROR_MESSAGE } from '../constants/messages';
import './PriceForm.scss';

const validatePrice = (price) => {
  if (Number.isNaN(price)) {
    return ERROR_MESSAGE.TYPE_ERROR(price);
  }

  if (price < LOTTO.PRICE) {
    return ERROR_MESSAGE.LESS_THAN_MIN_PRICE;
  }

  if (price % 1 > 0) {
    return ERROR_MESSAGE.INVALID_AMOUNT;
  }

  return '';
};

export default class PriceForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmitPrice = this.onSubmitPrice.bind(this);
  }

  onSubmitPrice(event) {
    event.preventDefault();

    const price = event.target.price.value || 0;
    const errorMessage = validatePrice(price);

    if (errorMessage !== '') {
      alert(errorMessage);

      return;
    }

    const change = price % LOTTO.PRICE;
    if (change > 0) {
      alert(ERROR_MESSAGE.HAS_CHANGE(change));
    }

    this.props.createLottoList(Math.floor(price / LOTTO.PRICE));
  }

  render() {
    return (
      <section className="PriceForm">
        <form className="price-form" onSubmit={this.onSubmitPrice}>
          <label className="price-label">
            <span className="price-text">구입할 금액을 입력해주세요.</span>
            <input
              className="price-input"
              name="price"
              placeholder="구입 금액"
              type="number"
              min="1000"
              max=""
              step="1000"
            />
          </label>
          <div className="price-submit-btn-box">
            <button className="price-submit-btn">확인</button>
          </div>
        </form>
      </section>
    );
  }
}

PriceForm.propTypes = {
  createLottoList: PropTypes.func.isRequired,
};
