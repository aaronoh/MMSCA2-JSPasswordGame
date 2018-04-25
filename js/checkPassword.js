$(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();


let input = document.getElementById('pwInput');
input.addEventListener('keyup', function getPw() {
    document.getElementById('chart-container').innerHTML = '' +
        '                   <div class="row">\n' +
        '                   <div class="col l3">\n' +
        '                        <div class="card">\n' +
        '                        <div class="card-content">\n' +
        '                        <span id ="ctitle" class="card-title">Numbers</span>\n' +
        '                <div class="chart" id="numcircle"></div>\n' +
        '                        </div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="col l3">\n' +
        '                        <div class="card">\n' +
        '                            <div class="card-content">\n' +
        '                            <span id ="ctitle" class="card-title">Symbols</span>\n' +
        '                                <div class="chart" id="symcircle"></div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        </div>\n' +
        '                    <div class="col l3">\n' +
        '                        <div class="card">\n' +
        '                            <div class="card-content">\n' +
        '                            <span id ="ctitle" class="card-title">Length</span>\n' +
        '                                <div class="chart" id="lcircle"></div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="col l3">\n' +
        '                        <div class="card">\n' +
        '                            <div class="card-content">\n' +
        '                            <span id ="ctitle" class="card-title">Upper/Lower Case</span>\n' +
        '                                <div class="chart" id="ccircle"></div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    </div>\n' +

        '                    <div class="col l3">\n' +
        '                        <div class="card">\n' +
        '                            <div class="card-content">\n' +
        '                            <span id ="ctitle" class="card-title">Total</span>\n' +
        '                                <div class="chart" id="tcircle"></div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                       </div>\n' +

        '                    <ul class="col l9 collapsible popout">\n' +
        '                   <li>\n' +
        '                   <div class="collapsible-header"><i class="material-icons">expand_more</i>Show More...</div>\n'+
        '                   <div class="collapsible-body">\n' +
        '                   <div id="results" class="row"></div>\n' +
        '                   <div id="scores" class="row"></div>\n'+
        '                   </div>\n' +
        '                   </li>\n' +
        '                   </ul>\n';

    $('.collapsible').collapsible();

    let lengthscore = 0;
    let numscore = 0;
    let symscore = 0;

    let pw = document.getElementById('pwInput').value;
    let output = document.getElementById('results');
    let scores = document.getElementById('scores');
    output.innerHTML = '';
    if (!pw) {
        document.getElementById('chart-container').innerHTML = '';
        output.innerHTML = '';
        scores.innerHTML = '';
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
    else {
        lengthscore = 10;
    }

    if (length <= 5) {
        lengthCom = ` This is not an ideal password. You need to add a few more characters.`;
        lencol = '#ff7675'
    }
    if (length > 5 && length < 9) {
        lengthCom = ` This is an ok password. You would benefit from add a few more characters.`;
        lencol = '#fdcb6e'
    }
    if (length >= 9) {
        lengthCom = ` This password is an ideal length and should be secure.`;
        lencol = '#00b894'
    }
    //-------------------------------------------------------------------------------------------------------------------------------//

    //------------------------------------------------------Nums-------------------------------------------------------------------//
    numCom = '';
    //regex
    let numsregex = pw.match(/\d/g);
    //convert regex obj to str - get length and deduct 4 for ['']
    let nums = 0;
    if (numsregex) {
        nums = numsregex.length;
    }
    if (nums === 0) {
        numCom = `Adding a few numbers will  enhance the security of your password.`;
        numscore = 0;
        numcol = '#ff7675'
    }
    else if (nums === 1) {
        numCom = ` This is good practice. If you'd like to increase your security you could add an additional number.`;
        numscore = 5;
        numcol = '#fdcb6e';
    }
    else if (nums > 1) {
        numCom = ` A variety of numbers increases the security of your password.`;
        numscore = 10;
        numcol = '#00b894'
    }
    //----------------------------------------------------------------------------------------------------------------------------//

    //------------------------------------------------------Symbols-------------------------------------------------------------------//
    //regex
    let symaregex = pw.match(/\W/g);

    let syms = 0;
    if (symaregex) {
        syms = symaregex.length;
    }

    if (syms === 0) {
        symCom = `Adding a few symbols will greatly improve your password.`;
        symscore = 0;
        symcol = '#ff7675'
    }
    else if (syms === 1) {
        symCom = ` This is good practice. If you'd like to increase your security you could add an additional symbol.`;
        symscore = 5;
        symcol = '#fdcb6e'
    }
    else if (syms > 1) {
        symCom = `Well done!`;
        symscore = 10;
        symcol = '#00b894'
    }
    //--------------------------------------------------------------------------------------------------------------------------------//

    //--------------------------------------------------a-z---------------------------------------------------------------------//
    let AZregex = pw.match(/[A-Z]/g);
    let azregex = pw.match(/[a-z]/g);
    let AZ = 0;
    let az = 0;

    if (AZregex) {
        AZ =AZregex.length;
    }

    if (azregex) {
        az =azregex.length;
    }

    if (az === 0 || AZ == 0) {
        caseCom = 'Using a mix of upper and lower case letters will improve your password.';
        casescore = 0;
        casecol = '#ff7675'
    }
    else if ((AZ > 0 && AZ < 2)) {
        caseCom = `You have ${az} lower case letters and ${AZ} upper case letters. This is good practice but you would benefit from additional letters.`;
        casescore = 5;
        casecol = '#fdcb6e'
    }
    else if (AZ > 1 && az > 2) {
        caseCom = `You have ${az} lower case letters and ${AZ} upper case letters.`;
        casescore = 10;
        casecol = '#00b894'
    }


    //------------------------------------------------------Results-------------------------------------------------------------------//
    let results = `Your password is: <span style="font-weight: bold; margin-left: 5px;">  ${pw}.</span> It is ${length} characters long. ${lengthCom} ${caseCom} It also contains ${nums} numbers. ${numCom} It also contains ${syms} symbols. ${symCom}`;
    let totalscore = lengthscore + numscore + symscore;
    let percentagescore = Math.floor(totalscore / 30 * 100);
    output.innerHTML = results;
    scores.innerHTML = `Your total score is ${totalscore}/30. You scored ${lengthscore}/10 in length, ${numscore}/10 in numbers and ${symscore}/10 in symbols. That's ${percentagescore}%`;
    //--------------------------------------------------------------------------------------------------------------------------------//

    var numchart = new ProgressBar.Circle('#numcircle', {
        color: numcol,
        duration: 2000,
        easing: 'easeInOut'
    });
    if (numscore > 0) {
        numchart.animate(numscore / 10);
    }
    else {
        numchart.animate(0.01);
    }
    numchart.setText(numscore * 10 + '%');


    var symchart = new ProgressBar.Circle('#symcircle', {
        color: symcol,
        duration: 2000,
        easing: 'easeInOut'
    });
    if (symscore > 0) {
        symchart.animate(symscore / 10);
    }
    else {
        symchart.animate(0.01);
    }
    symchart.setText(symscore * 10 + '%');

    if (totalscore <= 10) {
        tcol = '#ff7675'
    }
    if (totalscore > 10 && totalscore <= 20) {
        tcol = '#fdcb6e'
    }
    if (totalscore > 20 && totalscore <= 30) {
        tcol = '#00b894'
    }
    var totalchart = new ProgressBar.Circle('#tcircle', {
        color: tcol,
        duration: 2000,
        easing: 'easeInOut'
    });
    totalchart.animate(percentagescore / 100);

    totalchart.setText(percentagescore + '%');

    var lenchart = new ProgressBar.Circle('#lcircle', {
        color: lencol,
        duration: 2000,
        easing: 'easeInOut'
    });
    lenchart.animate(lengthscore / 10);

    lenchart.setText(lengthscore * 10 + '%');


    var casechart = new ProgressBar.Circle('#ccircle', {
        color: casecol,
        duration: 2000,
        easing: 'easeInOut'
    });
    casechart.animate(casescore / 10);

    casechart.setText(casescore * 10 + '%');
    });
});