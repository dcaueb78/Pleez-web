import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { Container } from './styles';

import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export default function CreateDish({ match }) {
  const { category_id } = match.params;

  const restaurantSelected = useSelector((state) => state.account.restaurant);
  const loading = useSelector((state) => state.auth.loading);
  const [price, setPrice] = useState('');

  const schema = Yup.object().shape({
    dishName: Yup.string().required('O nome é obrigatório'),
    details: Yup.string().required('Os detalhes são obrigatórios'),
  });

  const formatPriceToRequest = (value) => {
    const priceWithoutSuffix = value.replace(' $', '');
    const priceIsInt =
      priceWithoutSuffix[priceWithoutSuffix.length - 1] === ',';

    const priceWithDecimal = priceIsInt
      ? `${priceWithoutSuffix}00`
      : priceWithoutSuffix;

    const formattedPrice = priceWithDecimal.replace('.', '').replace(',', '.');
    return formattedPrice;
  };

  const handleCreateNewDish = async (form) => {
    if (await schema.isValid(form)) {
      const { dishName, details } = form;

      try {
        const response = await api.post('/dish', {
          name: dishName,
          details,
          price: formatPriceToRequest(price),
          restaurant_id: restaurantSelected,
          category_id,
        });

        const { name } = response.data;

        toast.success(`Categoria ${name} criada!`);
        history.push('/categorias');

        history.push('/dashboard');
      } catch (err) {
        toast.error(
          'Houve um problema na criação :( Poderia verificar os seus dados?'
        );
      }
    } else {
      toast.error(
        'Houve um problema na criação :( Poderia verificar os seus dados?'
      );
    }
  };

  const numberMask = createNumberMask({
    prefix: '',
    suffix: ' $',
    allowDecimal: true,
    thousandsSeparatorSymbol: '.',
    decimalSymbol: ',',
    decimalLimit: 2,
    requireDecimal: true,
  });

  return (
    <Container>
      <div className="center">
        <h1>Cadastro de categoria</h1>
      </div>
      <Form schema={schema} onSubmit={handleCreateNewDish}>
        <span>Informações do prato</span>
        <div>
          <Input name="dishName" type="text" placeholder="Prato" />
          <Input name="details" type="text" placeholder="Detalhes do prato" />
          <MaskedInput
            name="price"
            mask={numberMask}
            placeholder="Valor do prato"
            guide={false}
            onBlur={() => {}}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit">{loading ? 'Carregando...' : 'Cadastrar'}</button>
        <button onClick={history.goBack} type="button" className="red">
          <a className="white">Voltar</a>
        </button>
      </Form>
    </Container>
  );
}
