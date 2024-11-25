const facts = require("./data");

// função filtrar ano e dovolver fato

function ReturnFact(param) {
  let selectedFact = facts.facts.find((fact) => {
    return fact.Ano === param;
  });

  return selectedFact.Fato;
}

// validar ano

function ValidateYear(param) {
  if (isNaN(param)) {
    return false;
  } else {
    if (param >= 1920 && param <= 2020) {
      return true;
    } else {
      return false;
    }
  }
}

exports.ValidateYear = ValidateYear;
exports.ReturnFact = ReturnFact;
