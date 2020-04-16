import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { Container } from './styles';

export default function CreateCategory() {
  const restaurantSelected = useSelector((state) => state.account.restaurant);
  const loading = useSelector((state) => state.auth.loading);

  const schema = Yup.object().shape({
    categoryName: Yup.string().required('O nome é obrigatório'),
  });

  const handleCreateNewCategory = async (form) => {
    if (await schema.isValid(form)) {
      const { categoryName } = form;

      try {
        const response = await api.post('/category', {
          name: categoryName,
          restaurant_id: 59,
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

  return (
    <Container>
      <div className="center">
        <h1>Cadastro de categoria</h1>
      </div>
      <Form schema={schema} onSubmit={handleCreateNewCategory}>
        <span>Nome da categoria</span>
        <div>
          <Input name="categoryName" type="text" placeholder="Categoria" />
        </div>
        <button type="submit">{loading ? 'Carregando...' : 'Cadastrar'}</button>
        <button onClick={history.goBack} type="button" className="red">
          <a className="white">Voltar</a>
        </button>
      </Form>
    </Container>
  );
}
