export default function getBudgetObject(income, gdp, capita) {
  let budget = {
    [income]: income,
    [gdp]: gdp,
    [capita]: capita,
  }

  return budget;
}