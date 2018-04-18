
$(document).ready(function(){
    $('.modal').modal();
});

window.onload = function onLoad() {
    var chart = new ProgressBar.Circle('#circle', {easing: 'easeInOut'});
    chart.animate(.8);  // Value from 0.0 to 1.0);
    chart.setText(8);
};

function getPw(){
    let lengthscore = 0;
    let numscore = 0;
    let symscore = 0;

    let pw = document.getElementById('pwInput').value;
    let output = document.getElementById('results');
    let scores = document.getElementById('scores');
    output.innerHTML='';
    if (!pw){
        window.alert('Please enter a password to test!');
        return;
    }
    //------------------------------------------------------Length-------------------------------------------------------------------//
    let length = pw.length;
    lengthCom = '';

    //for the first 10 chars of the pw, length = score
    if (length <= 10) {
        lengthscore = length;
    }
    //If pw is over 10 chars they get the max score - 10
    else{
        lengthscore = 10;
    }

    if (length <= 5){
        lengthCom = ` This is not an ideal password. You need to add a few more characters.`;
    }
    if (length > 5 && length < 9){
        lengthCom = ` This is an ok password. You would benefit from add a few more characters.`;
    }
    if (length >= 9){
        lengthCom = ` This password is an ideal length and should be secure.`;
    }
    //-------------------------------------------------------------------------------------------------------------------------------//

    //------------------------------------------------------Nums-------------------------------------------------------------------//
    numCom = '';
    //regex
    let numsregex = pw.match(/\d+/g);
    //convert regex obj to str - get length and deduct 4 for ['']
    let nums = JSON.stringify(numsregex).length-4;

    if (nums === 0){
        numCom = `Adding a few numbers will  enhance the security of your password.`;
        numscore = 0;
    }
    else if (nums === 1){
        numCom = ` This is good practice. If you'd like to increase your security you could add an additional number.`;
        numscore = 5;
    }
    else if (nums > 1){
        numCom = ` A variety of numbers increases the security of your password.`;
        numscore = 10;
    }
    //----------------------------------------------------------------------------------------------------------------------------//

    //------------------------------------------------------Symbols-------------------------------------------------------------------//
    //regex
    let symaregex = pw.match(/\W+/);

    let syms = JSON.stringify(symaregex).length-4;

    if (syms === 0){
        symCom = `Adding a few symbols will greatly improve your password.`;
        symscore = 0;
    }
    else if (syms === 1){
        numCom = ` This is good practice. If you'd like to increase your security you could add an additional symbol.`;
        symscore = 5;
    }
    else if (syms > 1){
        symCom = `Well done!`;
        symscore = 10;
    }
    //--------------------------------------------------------------------------------------------------------------------------------//


    //------------------------------------------------------Results-------------------------------------------------------------------//
    let results = `Your password is: <span style="font-weight: bold; margin-left: 5px;">  ${pw}.</span> It is ${length} characters long. ${lengthCom} It contains ${nums} numbers. ${numCom} It also contains ${syms} symbols. ${symCom}`;
    let totalscore = lengthscore + numscore + symscore;
    let percentagescore = Math.floor(totalscore/30 *100);
    output.innerHTML=results;
    scores.innerHTML=`Your total score is ${totalscore}/30. You scored ${lengthscore}/10 in length, ${numscore}/10 in numbers and ${symscore}/10 in symbols. That's ${percentagescore}%`;
    //--------------------------------------------------------------------------------------------------------------------------------//
}