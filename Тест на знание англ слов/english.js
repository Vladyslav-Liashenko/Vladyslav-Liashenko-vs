function resultCome () {
    let calculateFalse = 0;
    let calculateTrue = 0;
    if (document.getElementById('1').value == 'Come' || document.getElementById('1').value == 'come'){
        document.getElementById('resultCheck1').value = 'True';
        calculateTrue = calculateTrue + 1;
    } else if (document.getElementById('1').value !== 'Come' || document.getElementById('1').value !== 'come'){
        document.getElementById('resultCheck1').value = 'False';
        document.getElementById('correctAnswers1').value = 'Come';
        calculateFalse = calculateFalse + 1;
    } 

    if (document.getElementById('2').value == 'Break' || document.getElementById('2').value == 'break'){
        document.getElementById('resultCheck2').value = 'True';
        calculateTrue = calculateTrue + 1;
    } else if (document.getElementById('2').value !== 'Break' || document.getElementById('2').value !== 'break'){
        document.getElementById('resultCheck2').value = 'False';
        document.getElementById('correctAnswers2').value = 'Break';
        calculateFalse = calculateFalse + 1;
    }  

    if (document.getElementById('3').value == 'Speak' || document.getElementById('3').value == 'speak'){
        document.getElementById('resultCheck3').value = 'True';
        calculateTrue = calculateTrue + 1;
    } else if (document.getElementById('3').value !== 'Speak' || document.getElementById('3').value !== 'speak'){
        document.getElementById('resultCheck3').value = 'False';
        document.getElementById('correctAnswers3').value = 'Speak';
        calculateFalse = calculateFalse + 1;
    } 
    
    if (document.getElementById('4').value == 'Write' || document.getElementById('4').value == 'write'){
        document.getElementById('resultCheck4').value = 'True';
        calculateTrue = calculateTrue + 1;
    } else if (document.getElementById('4').value !== 'Write' || document.getElementById('4').value !== 'write'){
        document.getElementById('resultCheck4').value = 'False';
        document.getElementById('correctAnswers4').value = 'Write';
        calculateFalse = calculateFalse + 1;
    } 

    if (document.getElementById('5').value == 'Eat' || document.getElementById('5').value == 'eat'){
        document.getElementById('resultCheck5').value = 'True';
        calculateTrue = calculateTrue + 1;
    } else if (document.getElementById('5').value !== 'Eat' || document.getElementById('5').value !== 'eat'){
        document.getElementById('resultCheck5').value = 'False';
        document.getElementById('correctAnswers5').value = 'Eat';
        calculateFalse = calculateFalse + 1;
    } 

    if (document.getElementById('6').value == 'Sleep' || document.getElementById('6').value == 'sleep'){
        document.getElementById('resultCheck6').value = 'True';
        calculateTrue = calculateTrue + 1;
    } else if (document.getElementById('6').value !== 'Sleep' || document.getElementById('6').value !== 'sleep'){
        document.getElementById('resultCheck6').value = 'False';
        document.getElementById('correctAnswers6').value = 'Sleep';
        calculateFalse = calculateFalse + 1;
    } 

    if (document.getElementById('7').value == 'Run' || document.getElementById('7').value == 'run'){
        document.getElementById('resultCheck7').value = 'True';
        calculateTrue = calculateTrue + 1;
    } else if (document.getElementById('7').value !== 'Run' || document.getElementById('7').value !== 'run'){
        document.getElementById('resultCheck7').value = 'False';
        document.getElementById('correctAnswers7').value = 'Run';
        calculateFalse = calculateFalse + 1;
    } 

    if (document.getElementById('8').value == 'Sit' || document.getElementById('8').value == 'sit'){
        document.getElementById('resultCheck8').value = 'True';
        calculateTrue = calculateTrue + 1;
    } else if (document.getElementById('8').value !== 'Sit' || document.getElementById('8').value !== 'sit'){
        document.getElementById('resultCheck8').value = 'False';
        document.getElementById('correctAnswers8').value = 'Sit';
        calculateFalse = calculateFalse + 1;
    } 

    if (document.getElementById('9').value == 'Read' || document.getElementById('9').value == 'read'){
        document.getElementById('resultCheck9').value = 'True';
        calculateTrue = calculateTrue + 1;
    } else if (document.getElementById('9').value !== 'Read' || document.getElementById('9').value !== 'read'){
        document.getElementById('resultCheck9').value = 'False';
        document.getElementById('correctAnswers9').value = 'Read';
        calculateFalse = calculateFalse + 1;
    } 

    if (document.getElementById('10').value == 'Get' || document.getElementById('10').value == 'get'){
        document.getElementById('resultCheck10').value = 'True';
        calculateTrue = calculateTrue + 1;
        console.log(calculateTrue);
    } else if (document.getElementById('10').value !== 'Get' || document.getElementById('10').value !== 'get'){
        document.getElementById('resultCheck10').value = 'False';
        document.getElementById('correctAnswers10').value = 'Get';
        calculateFalse = calculateFalse + 1;
    } 

    document.getElementById('pointTrue').value = calculateTrue;
    document.getElementById('pointFalse').value = calculateFalse;
    document.getElementById('point%').value = calculateTrue / 10 * 100;

        function notification (){
            if (document.getElementById('point%').value <= 100 && document.getElementById('point%').value > 80) {
                document.getElementById('notification').value = 'Good, ???? ?????????? very simple, ?????????????????? ?????? ??????????!'
            } else if (document.getElementById('point%').value <= 80 && document.getElementById('point%').value > 60) {
                document.getElementById('notification').value = 'Good, ???? ?????????? very simple, ?????????????????? ?????? ??????????!'
            } else if (document.getElementById('point%').value <= 60 && document.getElementById('point%').value > 40) {
                document.getElementById('notification').value = 'Fine, ?????? ???????????????? ?????? ??????????!'
            } else if (document.getElementById('point%').value <= 40 && document.getElementById('point%').value > 20) {
                document.getElementById('notification').value = 'Bad, ?????? ???? ????????, ?? ???????????????? ?????? ??????????!'
            } else if (document.getElementById('point%').value <= 20 && document.getElementById('point%').value > 0) {
                document.getElementById('notification').value = 'Vary Bad, ?????? ???? ?? ?????????? ???????? English? ???????????????? ?????? ??????????!'
            } else {
                document.getElementById('notification').value = '???? ??????, ?????????? ?????? ?? ?????????? ca??????!!!!';
            } 
        }
        notification();
}

