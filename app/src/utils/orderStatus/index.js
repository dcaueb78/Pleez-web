const DescriptionStatusList = ['Aguardando', 'Preparando', 'Pronto'];
const ColorStatusList = ['greyCircle', 'yellowCircle', 'greenCircle'];

const getStatusDescription = statusNumber => {
  return DescriptionStatusList[statusNumber];
};

const getColorStatusList = statusNumber => {
  return ColorStatusList[statusNumber];
};

export { getStatusDescription, getColorStatusList };
