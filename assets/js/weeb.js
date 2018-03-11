// var random_punch_array = ['punch1.gif', 'punch2.gif'];
// function getRandomPunch(imgAr, path) {
//     path = path || 'assets/img/punch/';
//     var num = Math.floor(Math.random() * imgAr.length);
//     var img = imgAr[num];
//     var imgStr = '<img src="' + path + img + '" alt = "">';
//     document.write(imgStr);
//     document.close();
// }

function randomPunch() {
    var rand = ['https://weebsquad.github.io/assets/img/hug/punch1.gif', 'https://weebsquad.github.io/assets/img/punch/punch2.gif'];
    return rand[Math.floor(Math.random() * rand.length)];
}

function randomHug() {
    var rand = ['https://weebsquad.github.io/assets/img/hug/hug1.gif', 'https://weebsquad.github.io/assets/img/hug/hug2.gif', 'https://weebsquad.github.io/assets/img/hug/hug3.gif', 'https://weebsquad.github.io/assets/img/hug/hug4.gif', 'https://weebsquad.github.io/assets/img/hug/hug5.gif', 'https://weebsquad.github.io/assets/img/hug/hug6.gif', 'https://weebsquad.github.io/assets/img/hug/hug7.gif', 'https://weebsquad.github.io/assets/img/hug/hug8.gif', 'https://weebsquad.github.io/assets/img/hug/hug9.gif', 'https://weebsquad.github.io/assets/img/hug/hug10.gif', 'https://weebsquad.github.io/assets/img/hug/hug11.gif', 'https://weebsquad.github.io/assets/img/hug/hug12.gif', 'https://weebsquad.github.io/assets/img/hug/hug13.gif', 'https://weebsquad.github.io/assets/img/hug/hug14.gif', 'https://weebsquad.github.io/assets/img/hug/hug15.gif', 'https://weebsquad.github.io/assets/img/hug/hug16.gif', 'https://weebsquad.github.io/assets/img/hug/hug17.gif', 'https://weebsquad.github.io/assets/img/hug/hug18.gif', 'https://weebsquad.github.io/assets/img/hug/hug19.gif'];;
    return rand[Math.floor(Math.random() * rand.length)];
}