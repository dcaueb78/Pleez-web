const validateCnpj = (cnpjWithoutMask) => {
  const cnpj = cnpjWithoutMask.toString().replace(/[^\d]+/g,'');

  const cnpjWith14Numbers = checkInvalidCnpjLength(cnpj);
  const isCommomCnpj = checkCommonCnpj(cnpj);
  const isValidCnpjNumbers = checkValidCnpjNumbers(cnpj);

  if(cnpjWith14Numbers || isCommomCnpj || !isValidCnpjNumbers) {
    return false;
  } else {
    return parseInt(cnpj)
  }
}

const checkValidCnpjNumbers = (cnpj) => {
  let cnpjLength = cnpj.length - 2;
  let cnpjNumbers = cnpj.substring(0, cnpjLength);
  const verificationDigit = cnpj.substring(cnpjLength);
  let numbersCalc = 0;
  let pos = cnpjLength - 7;

  for (let i = cnpjLength; i >= 1; i--) {
    numbersCalc += cnpjNumbers.charAt(cnpjLength - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  let numbersResult = numbersCalc % 11 < 2 ? 0 : 11 - numbersCalc % 11;

  if (numbersResult !== verificationDigit.charAt(0)) {
    return false;
  }

  cnpjLength = cnpjLength + 1;
  cnpjNumbers = cnpj.substring(0, cnpjLength);
  numbersCalc = 0;
  pos = cnpjLength - 7;
  for (let i = cnpjLength; i >= 1; i--) {
    numbersCalc +=cnpjNumbers.charAt(cnpjLength - i) * pos--;
    if(pos < 2) {
      pos = 9;
    }
  }

  numbersResult = numbersCalc % 11 < 2 ? 0 : 11 - numbersCalc % 11;
  if (numbersResult !== verificationDigit.charAt(1)) {
    return false;
  }

  return true;
}

const checkInvalidCnpjLength = (cnpj) => {
  const validCnpj = false;
  const invalidCnpj = true;
  return cnpj.length !== 14 ? invalidCnpj : validCnpj;
}

const checkCommonCnpj = (cnpj) => {
  if (
    cnpj === "00000000000000" ||
    cnpj === "11111111111111" ||
    cnpj === "22222222222222" ||
    cnpj === "33333333333333" ||
    cnpj === "44444444444444" ||
    cnpj === "55555555555555" ||
    cnpj === "66666666666666" ||
    cnpj === "77777777777777" ||
    cnpj === "88888888888888" ||
    cnpj === "99999999999999") {
      return false;
    }
}

export default validateCnpj;
