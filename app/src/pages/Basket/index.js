import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MdArrowBack } from 'react-icons/md';

import { useChairNumber, useRestaurantId } from '~/store/hooks/basket';
import { clearBasket } from '~/store/modules/basket/actions';
import api from '~/config/api';
import history from '~/services/history';
import { formatPrice } from '~/utils/format';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Card from 'react-credit-cards';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from '~/utils/payment';
import 'react-credit-cards/es/styles-compiled.css';

import { dishesDetails, order } from '~/services/api/endPoints';
import { infos, category } from '~/services/api/pages';

import { Wrapper, Content, Scroll } from './styles';
import BasketContent from '~/components/BasketContent';

import logo from '~/assets/logo.png';
import cartIcon from '~/assets/icons/CartIcon.png';

export default function Basket() {
  const basket = useSelector(state => state.basket.basket);
  const chair = useChairNumber();
  const restaurantId = useRestaurantId();
  const [completeBasket, setCompleteBasket] = useState([]);
  const [focused, setFocused] = useState();
  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState(' ');

  const dispatch = useDispatch();

  const ReactSwal = withReactContent(Swal);

  const formatDishPrice = dish => {
    const formattedPrice = formatPrice(dish.price * dish.quantity);
    return formattedPrice;
  };

  const paymentRequestAlert = () => {
    ReactSwal.fire({
      title: <p>Aguardando provação do pedido!</p>,
      footer: 'Acompanhe o seu pedido :3',
      icon: 'info'
    }).then(() => {
      history.push(category(restaurantId, chair));
      dispatch(clearBasket());
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

  const handleDoAPayment = async () => {
    paymentRequestAlert();
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

  useEffect(() => {
    function validateChairExists() {
      if (!chair) {
        history.push(infos);
      }
    }

    validateChairExists();
  }, [chair]);

  useEffect(() => {
    async function loadBasketDishInfo() {
      const idList = await basket.map(dish => dish.dishId);

      const getBasketDetailsByIds = await api.post(dishesDetails, {
        dishes_id: idList
      });

      const getCompleteBasketDishDetailsWithQuantity = await getBasketDetailsByIds.data.map(
        (dish, index) => ({
          ...dish,
          quantity: basket[index].dishQuantity,
          comment: basket[index].dishComment
        })
      );
      setCompleteBasket(getCompleteBasketDishDetailsWithQuantity);
    }
    loadBasketDishInfo();
  }, [basket]);

  return (
    <Wrapper>
      <Content>
        <button type="button" onClick={history.goBack}>
          <MdArrowBack size={32} color="white" />
        </button>
        <img src={logo} alt="Pleez" />
      </Content>
      <BasketContent>
        <header>
          <p>seta</p>
          <div>
            <h1>Sua Bandeja</h1>
            <img src={cartIcon} alt="Cart" />
          </div>
        </header>
        <Scroll>
          {completeBasket.map(dish => (
            <div key={`${dish.id}-${dish.quantity}`}>
              <div>
                <h2>{dish.quantity}x</h2>
                <p>{dish.name}</p>
              </div>
              <p>
                <b>Observação: </b>
                <span>{dish.comment === '' ? 'Nenhuma' : dish.comment}</span>
              </p>
              <div>
                <p>
                  <span>Valor: </span>
                  <b> {formatDishPrice(dish)} </b>
                </p>
              </div>
            </div>
          ))}
          <h4>Pagamento</h4>
          <div id="PaymentForm">
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
            <div
              className="form-group"
              width="100%"
            >
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Número do cartão"
                pattern="[\d| ]{16,22}"
                required
                onChange={handleCreditCardNumberChange}
                onFocus={handleInputFocus}
                styles="width: 100% !important;"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Nome"
                required
                onChange={handleCreditCardNameChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Validade"
                  pattern="\d\d/\d\d"
                  required
                  onChange={handleExpiryNumberChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={handleCvcChange}
                  onFocus={handleInputFocus}
                />
              </div>
            </div>
          </form>
        </Scroll>
        <footer>
          <button type="button" onClick={handleDoAPayment}>
            Fazer o pedido
          </button>
        </footer>
      </BasketContent>
    </Wrapper>
  );
}
