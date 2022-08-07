const CurrencyFormat = new Intl.NumberFormat(undefined, {
    currency: "USD", style: "currency"
})
const formatCurrency = (number: number) => {
  return CurrencyFormat.format(number)
}

export default formatCurrency