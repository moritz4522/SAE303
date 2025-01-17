function swapWithLarge(smallBox) {
    const largeBox = document.querySelector('.bento-tall');

    // Ajoutez une classe pour déclencher l'animation
    largeBox.classList.add('swapping');
    smallBox.classList.add('swapping');

    // Forcez un reflow pour que le navigateur applique les styles immédiatement
    void largeBox.offsetWidth; // ou largeBox.getBoundingClientRect();

    // Attendez la fin de l'animation avant d'échanger le contenu
    setTimeout(() => {
        // Échangez les contenus
        const tempContent = largeBox.innerHTML;
        largeBox.innerHTML = smallBox.innerHTML;
        smallBox.innerHTML = tempContent;

        // Retirez la classe d'animation après l'échange
        largeBox.classList.remove('swapping');
        smallBox.classList.remove('swapping');
    }, 500); // La durée doit correspondre à celle définie dans les transitions CSS
}

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
            responsive: true, 
            scale: {
                min : 0,
                max : 8,
            },
            plugins: {
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