import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


import api from '~/config/api';
import history from '~/services/history';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from '~/utils/payment';
import { useRestaurantId } from '~/store/hooks/basket';
import { clearBasket } from '~/store/modules/basket/actions';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { order } from '~/services/api/endPoints';
import { category } from '~/services/api/pages';

import Card from 'react-credit-cards';

export default function Payment({ completeBasket, chair }) {
  const [focused, setFocused] = useState();
  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState(' ');

  const restaurantId = useRestaurantId();

  const dispatch = useDispatch();
  const ReactSwal = withReactContent(Swal);

  const handleCreditCardNumberChange = ({ target }) => {
    target.value = formatCreditCardNumber(target.value);
    setCardNumber(target.value);
  };

  const handleExpiryNumberChange = ({ target }) => {
    target.value = formatExpirationDate(target.value);
    setExpiry(target.value);
  };

  const handleCvcChange = ({ target }) => {
    target.value = formatCVC(target.value);
    setCvc(target.value);
  };

  const handleCreditCardNameChange = ({ target }) => {
    setName(target.value);
  };

  const handleInputFocus = ({ target }) => {
    setFocused(target.name);
  };

  const handleDoAPayment = async () => {
    paymentRequestAlert();
    dispatch(clearBasket());
    const orderResult = await api.post(order, {
      dishes: completeBasket,
      restaurant_id: restaurantId,
      chair: chair,
      creditCard: {
        number: cardNumber,
        expiry,
        cvc,
        name
      }
    });
    if (orderResult) {
      confirmPayment();
    } else {
      paymentException();
    }
  };

  const paymentRequestAlert = () => {
    ReactSwal.fire({
      title: <p>Aguardando provação do pedido!</p>,
      footer: 'Acompanhe o seu pedido :3',
      icon: 'info'
    }).then(() => {
      history.push(category(restaurantId, chair));
    });
  };

  const confirmPayment = () => {
    ReactSwal.fire({
      title: <p>Pedido Confirmado!</p>,
      footer: 'Daqui a pouco seu pedido vai chegar :D',
      icon: 'success'
    }).then(() => {
      history.push(category(restaurantId, chair));
    });
  };

  const paymentException = () => {
    ReactSwal.fire({
      title: <p>Houve um problema no pedido!</p>,
      footer: 'Poderia tentar novamente? :(',
      icon: 'error'
    });
  };

  return (
    <>
      <h4>Pagamento</h4>
      <div>
        <Card
          number={cardNumber}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          placeholders={{ name: 'SEU NOME' }}
        />
      </div>

      <form>
        <div>
          <input
            className="input-width-100"
            type="tel"
            name="number"
            placeholder="Número do cartão"
            pattern="[\d| ]{16,22}"
            required
            onChange={handleCreditCardNumberChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div>
          <input
            className="input-width-100"
            type="text"
            name="name"
            placeholder="Nome"
            required
            onChange={handleCreditCardNameChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div>
          <div>
            <input
              className="input-width-100"
              type="tel"
              name="expiry"
              placeholder="Validade"
              pattern="\d\d/\d\d"
              required
              onChange={handleExpiryNumberChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div>
            <input
              className="input-width-100"
              type="tel"
              name="cvc"
              placeholder="CVC"
              pattern="\d{3,4}"
              required
              onChange={handleCvcChange}
              onFocus={handleInputFocus}
            />
          </div>
        </div>
      </form>

      <footer>
        <button type="button" onClick={handleDoAPayment}>
          Fazer o pedido
        </button>
      </footer>
    </>
  );
}
