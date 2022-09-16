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

const order = document.querySelectorAll(".order");
order.forEach((userItem) => {
userItem.onclick = function() {myFunction()};
function myFunction(){
    const el = document.createElement('div');
    el.textContent = 'View Details';
    el.style.cssText = 'color:#000; background-color:#40EEB9; height:2rem;font-size: 0.75rem; display:flex; justify-content:center; align-items:center; margin: 0.5rem 0 0.75rem 0; border-radius: 0.19rem';
    userItem.parentNode.appendChild(el);
}});