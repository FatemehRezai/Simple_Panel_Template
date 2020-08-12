var ctx = document.getElementById("myChart").getContext('2d');
var xLabals = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
var postCountData = [12, 34, 50, 45, 68, 51, 37, 60, 32, 20, 43, 64];
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xLabals,
        datasets: [{
            type: 'line',
            label: '# of Posts',
            data: postCountData,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            fill: false,
            borderDash: [4, 2],
            borderDashOffset:6,
            borderWidth: 2
        },
        {
            label: '# of Posts',
            data: postCountData,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            yAxisID: 'postCount'
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [
                {
                    id: "postCount",
                    position: 'left',
                    ticks: {
                        beginAtZero: true,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Post Count'
                      }
                },
            ],
            xAxes: [
                {
                    id: "dateMonth",
                    position: 'bottom',
                    ticks: {
                        // beginAtZero: true,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Date/Month'
                      }
                },
            ]
        },
    }
});



/////////////
// var ctx = document.getElementById("myChart").getContext('2d');
// var xLabals = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
// var postCountData = [12, 34, 50, 45, 68, 51, 37, 60, 32, 20, 43, 64];
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: xLabals,
//         datasets: [{
//             label: '# of Votes',
//             data: postCountData,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });