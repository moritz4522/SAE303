/* GRAPHIQUE RADAR */

let ctxRadar = document.getElementById('chartRadar');
let data20 = [4.63, 0.44, 2.89, 0.91, 2.05, 2.40];
let data30 = [4.17, 3, 1.21, 3.33, 0.9, 3.6];
let data40 = [4.68,3.36,0.91,4.04,0.60,3.12];
let data50 = [6.02,2.91,1.09,2.21,0.48,2.8];
let data60 = [6.89,3.41,1.09,1.032,0.59,2.09];
let data70 = [7.48,4.36,0.79,0.88,0.76,0.45];
let data80 = [7.95,4.62,1.1,0.75,0.59,0.087];


let labelsRadar = ['seul', 'avec son/sa partenaire', 'avec sa famille', 'avec ses enfants', 'avec ses amis', 'avec ses collègues'];

let myChart = new Chart(ctxRadar, {    
        type: 'radar',
        data: {
            labels: labelsRadar,
            datasets: [{
                label: '20 ans',
                data: data20, 
            }]
        },
        options: {
            events: ['click'],
            responsive: true, 
            scale: {
                min : 0,
                max : 8,
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        padding: 0
                    }
                },
                filler: {
                    propagate: false
                },
                'samples-filler-analyser': {
                    target: 'chart-analyser'
                }
            }, interaction: {
                intersect: false
            }
        }
    });


function minutesToHours(minutes){
    return hours = minutes/60;
}    

data80.forEach(element => {
    console.log(minutesToHours(element));
});

function UpdateChart(label) {
    let donneesAge = {
    data20: [4, 6, 9, 6, 8, 4],
    data30: [8, 7, 5, 9, 7, 2],
    data40: [3, 1, 4, 9, 5, 6],
    data50: [3, 5, 7, 9, 2, 6],
    data60: [5, 6, 1, 4, 8, 2],
    data70: [1, 6, 7, 8, 2, 4],
    data80: [5, 6, 9, 1, 3, 4]
    }
    //const selectedAge = document.getElementById("age");
    //let label1 = selectedAge.value;l
    
    myChart.data.datasets[0].label = label.value;
    myChart.data.datasets[0].data = label;
    myChart.update();
    console.log(label);
}


/* BOUTON BACK TO TOP */

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Graphique Moritz

const labels = ['20 ans', '30 ans', '40 ans', '50 ans', '60 ans', '70 ans', '80 ans'];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Temps passé seul',
            data: [34.77, 25.74, 27.80, 38.79, 45.55, 50.76, 55.71],
            fill: false,
            borderColor: 'rgb(228, 228, 115)',
            tension: 0.1
        },
        {
            label: 'Temps passé avec les collègues',
            data: [18.02, 22.20, 18.72, 18.06, 13.88, 3.04, 0.61],
            fill: false,
            borderColor: 'rgb(188, 107, 188)',
            tension: 0.1
        },
        {
            label: 'Temps passé avec les enfants',
            data: [6.84, 20.56, 24.22, 14.23, 6.83, 5.68, 5.26],
            fill: false,
            borderColor: 'rgb(92, 175, 92)',
            tension: 0.1
        },
        {
            label: 'Temps passé avec le partenaire',
            data: [3.3, 18.53, 20.18, 18.79, 22.55, 29.62, 26.53],
            fill: false,
            borderColor: 'rgb(216, 152, 143)',
            tension: 0.1
        },
        {
            label: 'Temps passé avec la famille',
            data: [21.69, 7.46, 5.46, 7.02, 7.22, 5.43, 7.72],
            fill: false,
            borderColor: 'rgb(226, 170, 96)',
            tension: 0.1
        },
        {
            label: 'Temps passé avec les Amis',
            data: [15.37, 5.5, 3.62, 3.11, 3.96, 5.18, 4.16],
            fill: false,
            borderColor: 'rgb(200, 86, 49)',
            tension: 0.1
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const myChart = new Chart(
    document.getElementById('chart'),
    config
);

