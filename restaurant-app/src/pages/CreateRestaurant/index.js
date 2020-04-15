import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { Container } from './styles';

export default function CreateRestaurant() {
  const loading = useSelector((state) => state.auth.loading);

  const handleGoBack = () => {
    history.push('/restaurants');
  };

  const schema = Yup.object().shape({
    fullName: Yup.string().required('O nome é obrigatório'),
    socialReason: Yup.string().required('A Razão Social é obrigatória'),
    cnpj: Yup.number('Insira um cnpj válido')
      .typeError('O CNPJ é obrigatório')
      .required('O CNPJ é obrigatório'),
    phone: Yup.number('Insira um telefone válido').required(
      'O telefone é obrigatório'
    ),
    cep: Yup.number('Insira um CEP válido').required('O CEP é obrigatório'),
    state: Yup.string().required('O estado é obrigatorio'),
    city: Yup.string().required('A cidade é obrigatória'),
    neighborhood: Yup.string().required('O bairro é obrigatório'),
    address: Yup.string().required('O endereço é obrigatório'),
    street_number: Yup.number().required('O número é obrigatório'),
    agency: Yup.number().required('A agência é obrigatória'),
    account: Yup.number().required('A conta bancária é obrigatória'),
    account_dv: Yup.number().required('O digito verificador é obrigatorio'),
    bank_code: Yup.number().required('O código do banco é obrigatório'),
  });

  const handleCreateNewRestaurant = async (form) => {
    if (await schema.isValid(form)) {
      const {
        fullName,
        socialReason,
        cnpj,
        phone,
        cep,
        state,
        city,
        neighborhood,
        address,
        street_number,
        agency,
        account,
        account_dv,
        bank_code,
      } = form;

      try {
        const { id, name, social_reason } = await api.post('/restaurant', {
          name: fullName,
          social_reason: socialReason,
          cnpj,
          telephone: phone,
          cep,
          state,
          city,
          neighborhood,
          address,
          number: street_number,
          agency,
          account,
          account_dv,
          bank_code,
        });

        toast.success('Cadastrado com sucesso :D');
        history.push('/dashboard');
      } catch (err) {
        toast.error(
          <div>
            Houve um problema na criação :(
            Poderia verificar os seus dados?
          </div>
        );
      }
    } else {
      toast.error(
        <div>
          Houve um problema na criação :(
          Poderia verificar os seus dados?
        </div>
      );
    }
  };

  return (
    <Container>
      <div className="center">
        <h1>Cadastro de restaurante</h1>
      </div>
      <Form schema={schema} onSubmit={handleCreateNewRestaurant}>
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
            autoComplete="address-line1"
            name="address"
            type="text"
            placeholder="Endereço"
          />
          <Input
            autoComplete="address-line2"
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
        <button onClick={history.goBack} type="button" className="red">
          <a className="white">Voltar</a>
        </button>
      </Form>
    </Container>
  );
}
