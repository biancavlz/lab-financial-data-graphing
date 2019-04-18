const getBitcoinInfo = () => {
  const url = "http://api.coindesk.com/v1/bpi/historical/close.json"
  axios.get(url).then(response => {
    console.log(response)
  }).catch(err => {
    console.error(err)
  })
}
getBitcoinInfo()
