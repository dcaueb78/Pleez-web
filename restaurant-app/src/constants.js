const statusOrder = [
  {
    code: 0,
    message: 'Preparar',
    description: 'Aguardando restaurante',
  },
  {
    code: 1,
    message: 'Entregar',
    description: 'Preparando pedido',
  },
  {
    code: 2,
    message: 'Finalizado',
    description: 'Pedido foi entregue',
  },
];

const getStatusOrder = (currentCode) =>
  statusOrder.find((order) => order.code === currentCode);

export { statusOrder, getStatusOrder };
