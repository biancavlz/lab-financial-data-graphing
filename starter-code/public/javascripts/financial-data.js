const printChart = (bpi, time) => {
  const displayElement = document.getElementById('myChart').getContext('2d')
  const myChart = new Chart(displayElement, {
    type: 'line',
      data: {
        labels: time,
        datasets: [
          {
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            label: 'Stock Chart',
            data: bpi
          }
        ]
      }
  })
}

const getBitcoinInfo = () => {
  const url = "http://api.coindesk.com/v1/bpi/historical/close.json"
  axios.get(url).then(response => {
    console.log(response)
    const { data } = response
    const time = Object.keys(data.bpi)
    const bpi = Object.values(data.bpi)

    printChart(bpi, time)
  }).catch(err => {
    console.error(err)
  })
}
getBitcoinInfo()
