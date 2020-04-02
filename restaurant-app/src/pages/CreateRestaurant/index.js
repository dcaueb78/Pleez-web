import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import history from '~/services/history';

import { Container } from './styles';

export default function CreateRestaurant() {
  const loading = useSelector((state) => state.auth.loading);

  const handleGoBack = () => {
    history.push('/restaurants');
  };

  return (
    <Container>
      <h1>Cadastro de restaurante</h1>
      <Form onSubmit={console.log}>
        <span>Endereço</span>
        <div className="grid three-gaps">
          <Input
            name="fullName"
            type="text"
            placeholder="Nome do restaurante"
          />
          <Input name="socialReason" type="text" placeholder="Razão social" />
          <Input name="cnpj" type="text" placeholder="CNPJ" />
        </div>
        <div>
          <Input name="phone" type="text" placeholder="Telefone" />
        </div>
        <div className="grid two-gaps">
          <Input name="cep" type="text" placeholder="Cep" />
          <Input name="state" type="text" placeholder="Estado" />
        </div>
        <div>
          <Input name="city" type="text" placeholder="Cidade" />
        </div>
        <div className="grid three-gaps">
          <Input
            autoComplete="address-level3"
            name="neighborhood"
            type="text"
            placeholder="Bairro"
          />
          <Input
            autocomplete="address-line1"
            name="addres"
            type="text"
            placeholder="Rua"
          />
          <Input
            autocomplete="address-line2"
            name="street_number"
            type="text"
            placeholder="Número"
          />
        </div>
        <span>Dados bancários</span>
        <div className="grid three-gaps">
          <Input name="agency" type="text" placeholder="Agência" />
          <Input name="account" type="text" placeholder="Número da conta" />
          <Input
            name="account_dv"
            type="text"
            placeholder="Digito verificador"
          />
        </div>
        <div>
          <Input name="bank_code" type="text" placeholder="Código do banco" />
        </div>
        <button type="submit">{loading ? 'Carregando...' : 'Cadastrar'}</button>
        <button type="button" className="red" onClick={handleGoBack}>
          <Link className="white">Voltar</Link>
        </button>
      </Form>
    </Container>
  );
}
