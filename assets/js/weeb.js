var random_punch_array = ['punch1.gif', 'punch2.gif'];
function getRandomPunch(imgAr, path) {
    path = path || 'assets/img/punch/';
    var num = Math.floor(Math.random() * imgAr.length);
    var img = imgAr[num];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr);
    document.close();
}

var random_hug_array = ['hug1.gif', 'hug2.gif', 'hug3.gif', 'hug4.gif', 'hug5.gif', 'hug6.gif', 'hug7.gif', 'hug8.gif', 'hug9.gif', 'hug10.gif', 'hug11.gif', 'hug12.gif', 'hug13.gif', 'hug14.gif', 'hug15.gif', 'hug16.gif', 'hug17.gif', 'hug18.gif', 'hug19.gif'];
function getRandomHug(imgAr, path) {
    path = path || 'assets/img/hug/';
    var num = Math.floor(Math.random() * imgAr.length);
    var img = imgAr[num];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr);
    document.close();
}