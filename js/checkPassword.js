function getPw(){
    let lengthscore = 0;
    let numscore = 0;
    let symbolscore = 0;

    let pw = document.getElementById('pwInput').value;
    let output = document.getElementById('results');
    let scores = document.getElementById('scores');
    output.innerHTML='';
    if (!pw){
        window.alert('Please enter a password to test!');
        return;
    }
    //------------------------------------------------------Length-------------------------------------------------------------------//
    let length = pw.length
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
        lengthCom = ` This is not an ideal password. You need to add a few more characters.`
    }
    if (length > 5 && length < 9){
        lengthCom = ` This is an ok password. You would benefit from add a few more characters.`
    }
    if (length >= 9){
        lengthCom = ` This password is an ideal length and should be secure.`
    }
    //-------------------------------------------------------------------------------------------------------------------------------//

    //------------------------------------------------------Nums-------------------------------------------------------------------//
    numCom = '';
    //regex
    let numsregex = pw.match(/\d+/g);
    //convert regex obj to str - get length and deduct 4 for ['']
    let nums = JSON.stringify(numsregex).length-4;

    if (nums == 0){
        numCom = `This password does not contain any numbers. Adding a few numbers will greatly enhance the security of your password.`
        numscore == 0;
    }
    if (nums == 1){
        numCom = ` Your password contains a number. This is good practice. If you'd like to increase your security you could add an additional number.`
        numscore == 5;
    }
    if (nums > 1){
        numCom = ` This password contains a variety of numbers. This is good practice.`
        numscore == 10;
    }
    //----------------------------------------------------------------------------------------------------------------------------//



    //------------------------------------------------------Results-------------------------------------------------------------------//
    let results = `Your password is "${pw}". It is ${length} characters long. ${lengthCom} It contains ${nums} numbers.`;
    let totalscore = lengthscore + numscore + symbolscore;
    let percentagescore = Math.floor(totalscore/30 *100);
    output.innerHTML=results;
    scores.innerHTML=`Your total score is ${totalscore}/30. You scored ${lengthscore}/10 in length, ${numscore}/10 in numbers and ${symbolscore}/10 in symbols. ${percentagescore}%`;
    //--------------------------------------------------------------------------------------------------------------------------------//
}