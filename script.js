let myChart = document.getElementById('myChart').getContext('2d');
let donutChart = new Chart(myChart, {
    type:'doughnut',
    data:{
    datasets: [{
        data: [3,7],
        backgroundColor: ['#fff','#5260E0']
      }]
    },
    options:{
        plugins: {
            tooltip: {
                enabled: false
            }
        }
    }
});
