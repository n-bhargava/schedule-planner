var schoolValue = 0;
var schoolStored;
var sleepValue = 0;
var sleepStored;
var hwValue1 = 0;
var hwValue2 = 0;
var hwValue3 = 0;
var hwValue4 = 0;
var ecValue1 = 0;
var ecValue2 = 0;
var ecValue3 = 0;
var dlValue1 = 0;
var dlValue2 = 0;
var dlValue3 = 0;
var dlValue4 = 0;
var dlValue5 = 0;
var hw1;
var hw2;
var hw3;
var hw4;
var hwStored1;
var hwStored2;
var hwStored3;
var hwStored4;
var hwDefault1;
var hwDefault2;
var hwDefault3;
var hwDefault4;





function getDropdownValueSchool() {
    let school = this.value;
    schoolStored = school;
    if (school == "5.5"){
        schoolValue = 5.5;
        document.getElementById('range-slider-school').disabled = false;
        document.getElementById('range-slider-school').value = schoolValue;
        document.getElementById('label-school').textContent = schoolValue + " hours";
        document.getElementById('range-slider-school').disabled = true;
        drawChart();
    } else if (school == "7"){
        schoolValue = 7;
        document.getElementById('range-slider-school').disabled = false;
        document.getElementById('range-slider-school').value = schoolValue;
        document.getElementById('label-school').textContent = schoolValue + " hours";
        document.getElementById('range-slider-school').disabled = true;
        drawChart();
    } else{
        schoolValue = 0;
        document.getElementById('range-slider-school').disabled = false;
        document.getElementById('range-slider-school').value = schoolValue;
        document.getElementById('label-school').textContent = schoolValue + " hours";
        document.getElementById('range-slider-school').disabled = true;
        drawChart();
    }

}

function getDropdownValueSleep() {
    let sleep = this.value;
    sleepStored = sleep;
    if (sleep == "10"){
        sleepValue = 10;
        document.getElementById('range-slider-sleep').disabled = false;
        document.getElementById('range-slider-sleep').value = sleepValue;
        document.getElementById('label-sleep').textContent = sleepValue + " hours";
        document.getElementById('range-slider-sleep').disabled = true;
        drawChart();
        
    } else if (sleep == "9"){
        sleepValue = 9;
        document.getElementById('range-slider-sleep').disabled = false;
        document.getElementById('range-slider-sleep').value = sleepValue;
        document.getElementById('label-sleep').textContent = sleepValue + " hours";
        document.getElementById('range-slider-sleep').disabled = true;
        drawChart();
        
    } else if (sleep == "8"){
        sleepValue = 8;
        document.getElementById('range-slider-sleep').disabled = false;
        document.getElementById('range-slider-sleep').value = sleepValue;
        document.getElementById('label-sleep').textContent = sleepValue + " hours";
        document.getElementById('range-slider-sleep').disabled = true;
        drawChart();
        
    } else {
        sleepValue = 0;
        document.getElementById('range-slider-sleep').disabled = false;
        document.getElementById('range-slider-sleep').value = sleepValue;
        document.getElementById('label-sleep').textContent = sleepValue + " hours";
        document.getElementById('range-slider-sleep').disabled = true;
        drawChart();

    } 

}


function getValueSleep(){
    sleepValue = document.getElementById('range-slider-sleep').value;
    document.getElementById('label-sleep').innerHTML = sleepValue + " hours";
    drawChart();
}



function getDropdownValueHomework1() {
    let hw1 = this.value;
    hwStored1 = hw1;
    if (hw1 == "Animation" || hw1 == "Intro to Engineering" || hw1 == "Drawing and Painting 2"){
        hwValue1 = 5;
        hwDefault1 = 5;
        document.getElementById('range-slider-homework-1').disabled = false;
        document.getElementById('range-slider-homework-1').value = hwValue1;
        document.getElementById('label-hw1').textContent = "MHT: " + hwValue1 + " mins";
        drawChart();

    } else if (hw1 == "Personal Business Finance" || hw1 == "AP Comp Sci Principles" || hw1 == "Careers with Children" || hw1 == "Child Development" || hw1 == "CME" || hw1 == "SAT Prep" || hw1 == "Forensics" || hw1 == "Health"){
        hwValue1 = 10;
        hwDefault1 = 10;
        document.getElementById('range-slider-homework-1').disabled = false;
        document.getElementById('range-slider-homework-1').value = hwValue1;
        document.getElementById('label-hw1').textContent = "MHT: " + hwValue1 + " mins";
        drawChart();

    } else if (hw1 == "Integrated Math 1" || hw1 == "Advanced Algebra" || hw1 == "Spanish 2" || hw1 == "Physics" || hw1 == "Develop Psychology of Children" || hw1 == "Principles of Engineering" || hw1 == "Multimedia Production"){
        hwValue1 = 15;
        hwDefault1 = 15;
        document.getElementById('range-slider-homework-1').disabled = false;
        document.getElementById('range-slider-homework-1').value = hwValue1;
        document.getElementById('label-hw1').textContent = "MHT: " + hwValue1 + " mins";
        drawChart();
    
    } else if (hw1 == "US History" || hw1 == "Gov/Econ" || hw1 == "French 1" || hw1 == "Spanish 1" || hw1 == "AP Studio Art" || hw1 == "Speech and Debate 1"){
        hwValue1 = 20;
        hwDefault1 = 20;
        document.getElementById('range-slider-homework-1').disabled = false;
        document.getElementById('range-slider-homework-1').value = hwValue1;
        document.getElementById('label-hw1').textContent = "MHT: " + hwValue1 + " mins";
        drawChart();
        
    } else if (hw1 == "Integrated Math 2" || hw1 == "Integrated Math 3" || hw1 == "Pre-Calculus" || hw1 == "AP Statistics" || hw1 == "French 3" || hw1 == "Spanish 3" || hw1 == "Biology" || hw1 == "Honors Biology" || hw1 == "Chemistry" || hw1 == "English 1 (9th grade)" || hw1 == "English 2 (10th grade)" || hw1 == "English 3 (11th grade)" || hw1 == "CSU ERWC (12th)" || hw1 == "Principles of Biomed"){
        hwValue1 = 25;
        hwDefault1 = 25;
        document.getElementById('range-slider-homework-1').disabled = false;
        document.getElementById('range-slider-homework-1').value = hwValue1;
        document.getElementById('label-hw1').textContent = "MHT: " + hwValue1 + " mins";
        drawChart();
        
    } else if (hw1 == "World Cultures" || hw1 == "French 4" || hw1 == "Spanish 4" || hw1 == "Honors English 1" || hw1 == "Human Body Systems"){
        hwValue1 = 30;
        hwDefault1 = 30;
        document.getElementById('range-slider-homework-1').disabled = false;
        document.getElementById('range-slider-homework-1').value = hwValue1;
        document.getElementById('label-hw1').textContent = "MHT: " + hwValue1 + " mins";
        drawChart();

    } else if (hw1 == "AP French"){
        hwValue1 = 35;
        hwDefault1 = 35;
        document.getElementById('range-slider-homework-1').disabled = false;
        document.getElementById('range-slider-homework-1').value = hwValue1;
        document.getElementById('label-hw1').textContent = "MHT: " + hwValue1 + " mins";
        drawChart();

    } else if (hw1 == "World Geography" || hw1 == "AP Government" || hw1 == "French 2" || hw1 == "AP Environmental Science" || hw1 == "Honors English 2"){
        hwValue1 = 40;
        hwDefault1 = 40;
        document.getElementById('range-slider-homework-1').disabled = false;
        document.getElementById('range-slider-homework-1').value = hwValue1;
        document.getElementById('label-hw1').textContent = "MHT: " + hwValue1 + " mins";
        drawChart();

    
    } else if (hw1 == "AP Chemistry" || hw1 == "AP Language"){
        hwValue1 = 45;
        hwDefault1 = 45;
        document.getElementById('range-slider-homework-1').disabled = false;
        document.getElementById('range-slider-homework-1').value = hwValue1;
        document.getElementById('label-hw1').textContent = "MHT: " + hwValue1 + " mins";
        drawChart();

    } else if (hw1 == "AP Spanish"){
        hwValue1 = 50;
        hwDefault1 = 50;
        document.getElementById('range-slider-homework-1').disabled = false;
        document.getElementById('range-slider-homework-1').value = hwValue1;
        document.getElementById('label-hw1').textContent = "MHT: " + hwValue1 + " mins";
        drawChart();

    } else if (hw1 == "AP Calculus" || hw1 == "AP Human Geo" || hw1 == "AP World History" || hw1 == "AP US History" || hw1 == "AP Psychology" || hw1 == "Honors Chemistry" || hw1 == "AP Biology" || hw1 == "AP Physics" || hw1 == "AP Literature"){
        hwValue1 = 60;
        hwDefault1 = 60;
        document.getElementById('range-slider-homework-1').disabled = false;
        document.getElementById('range-slider-homework-1').value = hwValue1;
        document.getElementById('label-hw1').textContent = "MHT: " + hwValue1 + " mins";
        drawChart();

    } else if (hw1 == " "){
        hwValue1 = 0;
        hwDefault1 = 0;
        document.getElementById('range-slider-homework-1').disabled = false;
        document.getElementById('range-slider-homework-1').value = hwValue1;
        document.getElementById('label-hw1').textContent = hwValue1 + " mins";
        document.getElementById('range-slider-homework-1').disabled = true;
        drawChart();
    
    } else {
        hwValue1 = 0;
        hwDefault1 = 0;
        document.getElementById('range-slider-homework-1').disabled = false;
        document.getElementById('range-slider-homework-1').value = hwValue1;
        document.getElementById('label-hw1').textContent = hwValue1 + " mins";
        drawChart();
    }


}

function getValueHomework1(){
    hwValue1 = document.getElementById('range-slider-homework-1').value;
    if (hwValue1 < hwDefault1){
        hwValue1 =  hwDefault1;
        document.getElementById('range-slider-homework-1').value = hwValue1;
        drawChart();
        document.getElementById('label-hw1').innerHTML = "MHT: " + hwValue1 + " mins";
    } else {
        hwValue1 = document.getElementById('range-slider-homework-1').value;
        drawChart();
        if (hwValue1 == hwDefault1 && hwDefault1 != 0){
            document.getElementById('label-hw1').innerHTML = "MHT: " + hwValue1 + " mins";
        } else {
            document.getElementById('label-hw1').innerHTML = hwValue1 + " mins";
        }
    }
    
}
    

function getDropdownValueHomework2() {
    let hw2 = this.value;
    hwStored2 = hw2;
    if (hw2 == "Animation" || hw2 == "Intro to Engineering" || hw2 == "Drawing and Painting 2"){
        hwValue2 = 5;
        hwDefault2 = 5;
        document.getElementById('range-slider-homework-2').disabled = false;
        document.getElementById('range-slider-homework-2').value = hwValue2;
        document.getElementById('label-hw2').textContent = "MHT: " + hwValue2 + " mins";
        drawChart();

    } else if (hw2 == "Personal Business Finance" || hw2 == "AP Comp Sci Principles" || hw2 == "Careers with Children" || hw2 == "Child Development" || hw2 == "CME" || hw2 == "SAT Prep" || hw2 == "Forensics" || hw2 == "Health"){
        hwValue2 = 10;
        hwDefault2 = 10;
        document.getElementById('range-slider-homework-2').disabled = false;
        document.getElementById('range-slider-homework-2').value = hwValue2;
        document.getElementById('label-hw2').textContent = "MHT: " + hwValue2 + " mins";
        drawChart();

    } else if (hw2 == "Integrated Math 1" || hw2 == "Advanced Algebra" || hw2 == "Spanish 2" || hw2 == "Physics" || hw2 == "Develop Psychology of Children" || hw2 == "Principles of Engineering" || hw2 == "Multimedia Production"){
        hwValue2 = 15;
        hwDefault2 = 15;
        document.getElementById('range-slider-homework-2').disabled = false;
        document.getElementById('range-slider-homework-2').value = hwValue2;
        document.getElementById('label-hw2').textContent = "MHT: " + hwValue2 + " mins";
        drawChart();
        
    } else if (hw2 == "US History" || hw2 == "Gov/Econ" || hw2 == "French 1" || hw2 == "Spanish 1" || hw2 == "AP Studio Art" || hw2 == "Speech and Debate 1"){
        hwValue2 = 20;
        hwDefault2 = 20;
        document.getElementById('range-slider-homework-2').disabled = false;
        document.getElementById('range-slider-homework-2').value = hwValue2;
        document.getElementById('label-hw2').textContent = "MHT: " + hwValue2 + " mins";;
        drawChart();
        
    } else if (hw2 == "Integrated Math 2" || hw2 == "Integrated Math 3" || hw2 == "Pre-Calculus" || hw2 == "AP Statistics" || hw2 == "French 3" || hw2 == "Spanish 3" || hw2 == "Biology" || hw2 == "Honors Biology" || hw2 == "Chemistry" || hw2 == "English 1 (9th grade)" || hw2 == "English 2 (10th grade)" || hw2 == "English 3 (11th grade)" || hw2 == "CSU ERWC (12th)" || hw2 == "Principles of Biomed"){
        hwValue2 = 25;
        hwDefault2 = 25;
        document.getElementById('range-slider-homework-2').disabled = false;
        document.getElementById('range-slider-homework-2').value = hwValue2;
        document.getElementById('label-hw2').textContent = "MHT: " + hwValue2 + " mins";
        drawChart();
        
    } else if (hw2 == "World Cultures" || hw2 == "French 4" || hw2 == "Spanish 4" || hw2 == "Honors English 1" || hw2 == "Human Body Systems"){
        hwValue2 = 30;
        hwDefault2 = 30;
        document.getElementById('range-slider-homework-2').disabled = false;
        document.getElementById('range-slider-homework-2').value = hwValue2;
        document.getElementById('label-hw2').textContent = "MHT: " + hwValue2 + " mins";
        drawChart();

    } else if (hw2 == "AP French"){
        hwValue2 = 35;
        hwDefault2 = 35;
        document.getElementById('range-slider-homework-2').disabled = false;
        document.getElementById('range-slider-homework-2').value = hwValue2;
        document.getElementById('label-hw2').textContent = "MHT: " + hwValue2 + " mins";
        drawChart();

    } else if (hw2 == "World Geography" || hw2 == "AP Government" || hw2 == "French 2" || hw2 == "AP Environmental Science" || hw2 == "Honors English 2"){
        hwValue2 = 40;
        hwDefault2 = 40;
        document.getElementById('range-slider-homework-2').disabled = false;
        document.getElementById('range-slider-homework-2').value = hwValue2;
        document.getElementById('label-hw2').textContent = "MHT: " + hwValue2 + " mins";
        drawChart();

    
    } else if (hw2 == "AP Chemistry" || hw2 == "AP Language"){
        hwValue2 = 45;
        hwDefault2 = 45;
        document.getElementById('range-slider-homework-2').disabled = false;
        document.getElementById('range-slider-homework-2').value = hwValue2;
        document.getElementById('label-hw2').textContent = "MHT: " + hwValue2 + " mins";
        drawChart();

    } else if (hw2 == "AP Spanish"){
        hwValue2 = 50;
        hwDefault2 = 50;
        document.getElementById('range-slider-homework-2').disabled = false;
        document.getElementById('range-slider-homework-2').value = hwValue2;
        document.getElementById('label-hw2').textContent = "MHT: " + hwValue2 + " mins";
        drawChart();

    } else if (hw2 == "AP Calculus" || hw2 == "AP Human Geo" || hw2 == "AP World History" || hw2 == "AP US History" || hw2 == "AP Psychology" || hw2 == "Honors Chemistry" || hw2 == "AP Biology" || hw2 == "AP Physics" || hw2 == "AP Literature"){
        hwValue2 = 60;
        hwDefault2 = 60;
        document.getElementById('range-slider-homework-2').disabled = false;
        document.getElementById('range-slider-homework-2').value = hwValue2;
        document.getElementById('label-hw2').textContent = "MHT: " + hwValue2 + " mins";
        drawChart();

    } else if (hw2 == " "){
        hwValue2 = 0;
        hwDefault2 = 0;
        document.getElementById('range-slider-homework-2').disabled = false;
        document.getElementById('range-slider-homework-2').value = hwValue2;
        document.getElementById('label-hw2').textContent = hwValue2 + " mins";
        document.getElementById('range-slider-homework-2').disabled = true;
        drawChart();
    
    } else {
        hwValue2 = 0;
        hwDefault2 = 0;
        document.getElementById('range-slider-homework-2').disabled = false;
        document.getElementById('range-slider-homework-2').value = hwValue2;
        document.getElementById('label-hw2').textContent = hwValue2 + " mins";
        drawChart();
    }



}

function getValueHomework2(){
    hwValue2 = document.getElementById('range-slider-homework-2').value;
    if (hwValue2 < hwDefault2){
        hwValue2 =  hwDefault2;
        document.getElementById('range-slider-homework-2').value = hwValue2;
        drawChart();
        document.getElementById('label-hw2').innerHTML = "MHT: " + hwValue2 + " mins";
    } else {
        hwValue2 = document.getElementById('range-slider-homework-2').value;
        drawChart();
        if (hwValue2 == hwDefault2 && hwDefault2 != 0){
            document.getElementById('label-hw2').innerHTML = "MHT: " + hwValue2 + " mins";
        } else {
            document.getElementById('label-hw2').innerHTML = hwValue2 + " mins";
        }
    }
}

function getDropdownValueHomework3() {
    let hw3 = this.value;
    hwStored3 = hw3;
    if (hw3 == "Animation" || hw3 == "Intro to Engineering" || hw3 == "Drawing and Painting 2"){
        hwValue3 = 5;
        hwDefault3 = 5;
        document.getElementById('range-slider-homework-3').disabled = false;
        document.getElementById('range-slider-homework-3').value = hwValue3;
        document.getElementById('label-hw3').textContent = "MHT: " + hwValue3 + " mins";
        drawChart();

    } else if (hw3 == "Personal Business Finance" || hw3 == "AP Comp Sci Principles" || hw3 == "Careers with Children" || hw3 == "Child Development" || hw3 == "CME" || hw3 == "SAT Prep" || hw3 == "Forensics" || hw3 == "Health"){
        hwValue3 = 10;
        hwDefault3 = 10;
        document.getElementById('range-slider-homework-3').disabled = false;
        document.getElementById('range-slider-homework-3').value = hwValue3;
        document.getElementById('label-hw3').textContent = "MHT: " + hwValue3 + " mins";
        drawChart();

    } else if (hw3 == "Integrated Math 1" || hw3 == "Advanced Algebra" || hw3 == "Spanish 2" || hw3 == "Physics" || hw3 == "Develop Psychology of Children" || hw3 == "Principles of Engineering" || hw3 == "Multimedia Production"){
        hwValue3 = 15;
        hwDefault3 = 15;
        document.getElementById('range-slider-homework-3').disabled = false;
        document.getElementById('range-slider-homework-3').value = hwValue3;
        document.getElementById('label-hw3').textContent = "MHT: " + hwValue3 + " mins";
        drawChart();
        
    } else if (hw3 == "US History" || hw3 == "Gov/Econ" || hw3 == "French 1" || hw3 == "Spanish 1" || hw3 == "AP Studio Art" || hw3 == "Speech and Debate 1"){
        hwValue3 = 20;
        hwDefault3 = 20;
        document.getElementById('range-slider-homework-3').disabled = false;
        document.getElementById('range-slider-homework-3').value = hwValue3;
        document.getElementById('label-hw3').textContent = "MHT: " + hwValue3 + " mins";
        drawChart();
        
    } else if (hw3 == "Integrated Math 2" || hw3 == "Integrated Math 3" || hw3 == "Pre-Calculus" || hw3 == "AP Statistics" || hw3 == "French 3" || hw3 == "Spanish 3" || hw3 == "Biology" || hw3 == "Honors Biology" || hw3 == "Chemistry" || hw3 == "English 1 (9th grade)" || hw3 == "English 2 (10th grade)" || hw3 == "English 3 (11th grade)" || hw3 == "CSU ERWC (12th)" || hw3 == "Principles of Biomed"){
        hwValue3 = 25;
        hwDefault3 = 25;
        document.getElementById('range-slider-homework-3').disabled = false;
        document.getElementById('range-slider-homework-3').value = hwValue3;
        document.getElementById('label-hw3').textContent = "MHT: " + hwValue3 + " mins";
        drawChart();
        
    } else if (hw3 == "World Cultures" || hw3 == "French 4" || hw3 == "Spanish 4" || hw3 == "Honors English 1" || hw3 == "Human Body Systems"){
        hwValue3 = 30;
        hwDefault3 = 30;
        document.getElementById('range-slider-homework-3').disabled = false;
        document.getElementById('range-slider-homework-3').value = hwValue3;
        document.getElementById('label-hw3').textContent = "MHT: " + hwValue3 + " mins";
        drawChart();

    } else if (hw3 == "AP French"){
        hwValue3 = 35;
        hwDefault3 = 35;
        document.getElementById('range-slider-homework-3').disabled = false;
        document.getElementById('range-slider-homework-3').value = hwValue3;
        document.getElementById('label-hw3').textContent = "MHT: " + hwValue3 + " mins";
        drawChart();

    } else if (hw3 == "World Geography" || hw3 == "AP Government" || hw3 == "French 2" || hw3 == "AP Environmental Science" || hw3 == "Honors English 2"){
        hwValue3 = 40;
        hwDefault3 = 40;
        document.getElementById('range-slider-homework-3').disabled = false;
        document.getElementById('range-slider-homework-3').value = hwValue3;
        document.getElementById('label-hw3').textContent = "MHT: " + hwValue3 + " mins";
        drawChart();

    
    } else if (hw3 == "AP Chemistry" || hw3 == "AP Language"){
        hwValue3 = 45;
        hwDefault3 = 45;
        document.getElementById('range-slider-homework-3').disabled = false;
        document.getElementById('range-slider-homework-3').value = hwValue3;
        document.getElementById('label-hw3').textContent = "MHT: " + hwValue3 + " mins";
        drawChart();

    } else if (hw3 == "AP Spanish"){
        hwValue3 = 50;
        hwDefault3 = 50;
        document.getElementById('range-slider-homework-3').disabled = false;
        document.getElementById('range-slider-homework-3').value = hwValue3;
        document.getElementById('label-hw3').textContent = "MHT: " + hwValue3 + " mins";
        drawChart();

    } else if (hw3 == "AP Calculus" || hw3 == "AP Human Geo" || hw3 == "AP World History" || hw3 == "AP US History" || hw3 == "AP Psychology" || hw3 == "Honors Chemistry" || hw3 == "AP Biology" || hw3 == "AP Physics" || hw3 == "AP Literature"){
        hwValue3 = 60;
        hwDefault3 = 60;
        document.getElementById('range-slider-homework-3').disabled = false;
        document.getElementById('range-slider-homework-3').value = hwValue3;
        document.getElementById('label-hw3').textContent = "MHT: " + hwValue3 + " mins";;
        drawChart();

    } else if (hw3 == " "){
        hwValue3 = 0;
        hwDefault3 = 0;
        document.getElementById('range-slider-homework-3').disabled = false;
        document.getElementById('range-slider-homework-3').value = hwValue3;
        document.getElementById('label-hw3').textContent = hwValue3 + " mins";
        document.getElementById('range-slider-homework-3').disabled = true;
        drawChart();
    } else {
        hwValue3 = 0;
        hwDefault3 = 0;
        document.getElementById('range-slider-homework-3').disabled = false;
        document.getElementById('range-slider-homework-3').value = hwValue3;
        document.getElementById('label-hw3').textContent = hwValue3 + " mins";
        drawChart();
    }


}

function getValueHomework3(){
    hwValue3 = document.getElementById('range-slider-homework-3').value;
    if (hwValue3 < hwDefault3){
        hwValue3 =  hwDefault3;
        document.getElementById('range-slider-homework-3').value = hwValue3;
        drawChart();
        document.getElementById('label-hw3').innerHTML = "MHT: " + hwValue3 + " mins";
    } else {
        hwValue3 = document.getElementById('range-slider-homework-3').value;
        drawChart();
        if (hwValue3 == hwDefault3 && hwDefault3 != 0){
            document.getElementById('label-hw3').innerHTML = "MHT: " + hwValue3 + " mins";
        } else {
            document.getElementById('label-hw3').innerHTML = hwValue3 + " mins";
        }
    }

}

function getDropdownValueHomework4() {
    let hw4 = this.value;
    hwStored4 = hw4;
    if (hw4 == "Animation" || hw4 == "Intro to Engineering" || hw4 == "Drawing and Painting 2"){
        hwValue4 = 5;
        hwDefault4 = 5;
        document.getElementById('range-slider-homework-4').disabled = false;
        document.getElementById('range-slider-homework-4').value = hwValue4;
        document.getElementById('label-hw4').textContent = "MHT: " + hwValue4 + " mins";
        drawChart();

    } else if (hw4 == "Personal Business Finance" || hw4 == "AP Comp Sci Principles" || hw4 == "Careers with Children" || hw4 == "Child Development" || hw4 == "CME" || hw4 == "SAT Prep" || hw4 == "Forensics" || hw4 == "Health"){
        hwValue4 = 10;
        hwDefault4 = 10;
        document.getElementById('range-slider-homework-4').disabled = false;
        document.getElementById('range-slider-homework-4').value = hwValue4;
        document.getElementById('label-hw4').textContent = "MHT: " + hwValue4 + " mins";
        drawChart();

    } else if (hw4 == "Integrated Math 1" || hw4 == "Advanced Algebra" || hw4 == "Spanish 2" || hw4 == "Physics" || hw4 == "Develop Psychology of Children" || hw4 == "Principles of Engineering" || hw4 == "Multimedia Production"){
        hwValue4 = 15;
        hwDefault4 = 15;
        document.getElementById('range-slider-homework-4').disabled = false;
        document.getElementById('range-slider-homework-4').value = hwValue4;
        document.getElementById('label-hw4').textContent = "MHT: " + hwValue4 + " mins";
        drawChart();
        
    } else if (hw4 == "US History" || hw4 == "Gov/Econ" || hw4 == "French 1" || hw4 == "Spanish 1" || hw4 == "AP Studio Art" || hw4 == "Speech and Debate 1"){
        hwValue4 = 20;
        hwDefault4 = 20;
        document.getElementById('range-slider-homework-4').disabled = false;
        document.getElementById('range-slider-homework-4').value = hwValue4;
        document.getElementById('label-hw4').textContent = "MHT: " + hwValue4 + " mins";
        drawChart();
        
    } else if (hw4 == "Integrated Math 2" || hw4 == "Integrated Math 3" || hw4 == "Pre-Calculus" || hw4 == "AP Statistics" || hw4 == "French 3" || hw4 == "Spanish 3" || hw4 == "Biology" || hw4 == "Honors Biology" || hw4 == "Chemistry" || hw4 == "English 1 (9th grade)" || hw4 == "English 2 (10th grade)" || hw4 == "English 3 (11th grade)" || hw4 == "CSU ERWC (12th)" || hw4 == "Principles of Biomed"){
        hwValue4 = 25;
        hwDefault4 = 25;
        document.getElementById('range-slider-homework-4').disabled = false;
        document.getElementById('range-slider-homework-4').value = hwValue4;
        document.getElementById('label-hw4').textContent = "MHT: " + hwValue4 + " mins";
        drawChart();
        
    } else if (hw4 == "World Cultures" || hw4 == "French 4" || hw4 == "Spanish 4" || hw4 == "Honors English 1" || hw4 == "Human Body Systems"){
        hwValue4 = 30;
        hwDefault4 = 30;
        document.getElementById('range-slider-homework-4').disabled = false;
        document.getElementById('range-slider-homework-4').value = hwValue4;
        document.getElementById('label-hw4').textContent = "MHT: " + hwValue4 + " mins";
        drawChart();

    } else if (hw4 == "AP French"){
        hwValue4 = 35;
        hwDefault4 = 35;
        document.getElementById('range-slider-homework-4').disabled = false;
        document.getElementById('range-slider-homework-4').value = hwValue4;
        document.getElementById('label-hw4').textContent = "MHT: " + hwValue4 + " mins";
        drawChart();

    } else if (hw4 == "World Geography" || hw4 == "AP Government" || hw4 == "French 2" || hw4 == "AP Environmental Science" || hw4 == "Honors English 2"){
        hwValue4 = 40;
        hwDefault4 = 40;
        document.getElementById('range-slider-homework-4').disabled = false;
        document.getElementById('range-slider-homework-4').value = hwValue4;
        document.getElementById('label-hw4').textContent = "MHT: " + hwValue4 + " mins";
        drawChart();

    
    } else if (hw4 == "AP Chemistry" || hw4 == "AP Language"){
        hwValue4 = 45;
        hwDefault4 = 45;
        document.getElementById('range-slider-homework-4').disabled = false;
        document.getElementById('range-slider-homework-4').value = hwValue4;
        document.getElementById('label-hw4').textContent = "MHT: " + hwValue4 + " mins";
        drawChart();

    } else if (hw4 == "AP Spanish"){
        hwValue4 = 50;
        hwDefault4 = 50;
        document.getElementById('range-slider-homework-4').disabled = false;
        document.getElementById('range-slider-homework-4').value = hwValue4;
        document.getElementById('label-hw4').textContent = "MHT: " + hwValue4 + " mins";
        drawChart();

    } else if (hw4 == "AP Calculus" || hw4 == "AP Human Geo" || hw4 == "AP World History" || hw4 == "AP US History" || hw4 == "AP Psychology" || hw4 == "Honors Chemistry" || hw4 == "AP Biology" || hw4 == "AP Physics" || hw4 == "AP Literature"){
        hwValue4 = 60;
        hwDefault4 = 60;
        document.getElementById('range-slider-homework-4').disabled = false;
        document.getElementById('range-slider-homework-4').value = hwValue4;
        document.getElementById('label-hw4').textContent = "MHT: " + hwValue4 + " mins";
        drawChart();

    } else if (hw4 == " "){
        hwValue4 = 0;
        hwDefault4 = 0;
        document.getElementById('range-slider-homework-4').disabled = false;
        document.getElementById('range-slider-homework-4').value = hwValue4;
        document.getElementById('label-hw4').textContent = hwValue4 + " mins";
        document.getElementById('range-slider-homework-4').disabled = true;
        drawChart();
    
    } else {
        hwValue4 = 0;
        hwDefault4 = 0;
        document.getElementById('range-slider-homework-4').disabled = false;
        document.getElementById('range-slider-homework-4').value = hwValue4;
        document.getElementById('label-hw4').textContent = hwValue4 + " mins";
        drawChart();
    }

}

function getValueHomework4(){
    hwValue4 = document.getElementById('range-slider-homework-4').value;
    if (hwValue4 < hwDefault4){
        hwValue4 =  hwDefault4;
        document.getElementById('range-slider-homework-4').value = hwValue4;
        drawChart();
        document.getElementById('label-hw4').innerHTML = "MHT: " + hwValue4 + " mins";
    } else {
        hwValue4 = document.getElementById('range-slider-homework-4').value;
        drawChart();
        if (hwValue4 == hwDefault4 && hwDefault4 != 0){
            document.getElementById('label-hw4').innerHTML = "MHT: " + hwValue4 + " mins";
        } else {
            document.getElementById('label-hw4').innerHTML = hwValue4 + " mins";
        }
    }

}

function getValueEc1(){
    ecValue1 = 0;
    ecValue1 = document.getElementById('range-slider-ec-1').value;
    document.getElementById('label-ec1').innerHTML = ecValue1 + " mins";
    drawChart();
}

function getValueEc2(){
    ecValue2 = 0;
    ecValue2 = document.getElementById('range-slider-ec-2').value;
    document.getElementById('label-ec2').innerHTML = ecValue2 + " mins";
    drawChart();
}

function getValueEc3(){
    ecValue3 = 0;
    ecValue3 = document.getElementById('range-slider-ec-3').value;
    document.getElementById('label-ec3').innerHTML = ecValue3 + " mins";
    drawChart();
}

function getValueDl1(){
    dlValue1 = 0;
    dlValue1 = document.getElementById('range-slider-living-1').value;
    document.getElementById('label-dl1').innerHTML = dlValue1 + " mins";
    drawChart();
}

function getValueDl2(){
    dlValue2 = 0;
    dlValue2 = document.getElementById('range-slider-living-2').value;
    document.getElementById('label-dl2').innerHTML = dlValue2 + " mins";
    drawChart();
}

function getValueDl3(){
    dlValue3 = 0;
    dlValue3 = document.getElementById('range-slider-living-3').value;
    document.getElementById('label-dl3').innerHTML = dlValue3 + " mins";
    drawChart();
}

function getValueDl4(){
    dlValue4 = 0;
    dlValue4 = document.getElementById('range-slider-living-4').value;
    document.getElementById('label-dl4').innerHTML = dlValue4 + " mins";
    drawChart();
}

function getValueDl5(){
    dlValue5 = 0;
    dlValue5 = document.getElementById('range-slider-living-5').value;
    document.getElementById('label-dl5').innerHTML = dlValue5 + " mins";
    drawChart();
}


function drawChart() {
    $("#alertOvertime").hide();
    $("#alertSame").hide();
    homework1 = hwValue1 / 60.0;
    homework2 = hwValue2 / 60.0;
    homework3 = hwValue3 / 60.0;
    homework4 = hwValue4 / 60.0;
    ec1 = ecValue1 / 60.0;
    ec2 = ecValue2 / 60.0;
    ec3 = ecValue3 / 60.0;
    dl1 = dlValue1 / 60.0;
    dl2 = dlValue2 / 60.0;
    dl3 = dlValue3 / 60.0;
    dl4 = dlValue4 / 60.0;
    dl5 = dlValue5 / 60.0;
    other = 24 - schoolValue - sleepValue -  homework1 - homework2 - homework3 - homework4 - ec1 - ec2 - ec3 - dl1 - dl2 - dl3 - dl4 - dl5;
    otherMinutes = (24*60) - (schoolValue*60) - (sleepValue*60) - hwValue1 - hwValue2 - hwValue3 - hwValue4 - ecValue1 - ecValue2 - ecValue3 - dlValue1 - dlValue2 - dlValue3 - dlValue4 - dlValue5;


    if (schoolStored != " " && schoolStored != undefined){
        document.getElementById('schoolstats').innerHTML = "School hours: " + schoolStored + " hours";
    } else {
        document.getElementById('schoolstats').innerHTML = " "
    }
    
    if (sleepStored != " " && sleepStored != undefined){
        document.getElementById('sleepstats').innerHTML = "Sleep Hours: " + sleepStored + " hours";
    } else {
        document.getElementById('sleepstats').innerHTML = " ";
    }

    if (otherMinutes > 0){
        hours = Math.abs(otherMinutes) / 60;
        minutes = Math.abs(otherMinutes);
        hoursSplit = Math.trunc(hours)
        minutesSplit = minutes % 60;
        if (hoursSplit == 0 && minutesSplit != 0){
            if (minutesSplit == 1 && hoursSplit == 0){
                document.getElementById('extrastats').innerHTML = "Unused Time:  "  + minutesSplit +  " minute";
            } else if (minutesSplit > 1 && hoursSplit == 0){
                document.getElementById('extrastats').innerHTML = "Unused Time: "  + minutesSplit +  " minutes";
            }
        } else if (minutesSplit == 0 && hoursSplit != 0){
            if (hoursSplit == 1 && minutesSplit == 0){
                document.getElementById('extrastats').innerHTML = "Unused Time:  "  + hoursSplit +  " hour";

            } else if (hoursSplit > 1 && minutesSplit == 0){
                document.getElementById('extrastats').innerHTML = "Unused Time: "  + hoursSplit +  " hours";
            }
        } else {
            if (hoursSplit == 1 && minutesSplit > 1){
                document.getElementById('extrastats').innerHTML = "Unused Time:  "  + hoursSplit +  " hour and " + minutesSplit + " minutes ";
            } else if (hoursSplit > 1 && minutesSplit == 1){
                document.getElementById('extrastats').innerHTML = "Unused Time: "  + hoursSplit +  " hours and " + minutesSplit + " minute ";
            } else if (hoursSplit > 1 && minutesSplit > 1){
                document.getElementById('extrastats').innerHTML = "Unused Time: "  + hoursSplit +  " hours and " + minutesSplit + " minutes ";

            }
        }
    } else {
        document.getElementById('extrastats').innerHTML = " ";
    }


    //display alert if total time over 24 hours
    if (other < 0){
        hours = Math.abs(otherMinutes) / 60;
        minutes = Math.abs(otherMinutes);
        other = 0;
        hoursSplit = Math.trunc(hours)
        minutesSplit = minutes % 60;
        str1 = "Warning!";
        if (hoursSplit == 0 && minutesSplit != 0){
            if (minutesSplit == 1 && hoursSplit == 0){
                document.getElementById('alertOvertime').innerHTML = str1.bold() + " You are "  + minutesSplit +  " minute over the 24 hour limit!";
                $("#alertOvertime").show();
            } else if (minutesSplit > 1 && hoursSplit == 0){
                document.getElementById('alertOvertime').innerHTML = str1.bold() + " You are "  + minutesSplit +  " minutes over the 24 hour limit!";
                $("#alertOvertime").show();
            }
        } else if (minutesSplit == 0 && hoursSplit != 0){
            if (hoursSplit == 1 && minutesSplit == 0){
                document.getElementById('alertOvertime').innerHTML = str1.bold() + " You are "  + hoursSplit +  " hour over the 24 hour limit!";
                $("#alertOvertime").show();
            } else if (hoursSplit > 1 && minutesSplit == 0){
                document.getElementById('alertOvertime').innerHTML = str1.bold() + " You are "  + hoursSplit +  " hours over the 24 hour limit!";
                $("#alertOvertime").show();
            }
        } else{
            if (hoursSplit == 1 && minutesSplit > 1){
                document.getElementById('alertOvertime').innerHTML = str1.bold() + " You are "  + hoursSplit +  " hour and " + minutesSplit + " minutes " + "over the 24 hour limit!";
                $("#alertOvertime").show();
            } else if (hoursSplit > 1 && minutesSplit == 1){
                document.getElementById('alertOvertime').innerHTML = str1.bold() + " You are "  + hoursSplit +  " hours and " + minutesSplit + " minute " + "over the 24 hour limit!";
                $("#alertOvertime").show();
            } else if (hoursSplit > 1 && minutesSplit > 1){
                document.getElementById('alertOvertime').innerHTML = str1.bold() + " You are "  + hoursSplit +  " hours and " + minutesSplit + " minutes " + "over the 24 hour limit!";
                $("#alertOvertime").show();
            }
        }
        
    }

    if ((hwStored1 == undefined && hwStored2 == undefined && hwStored3 == undefined) || (hwStored1 == undefined && hwStored2 == undefined && hwStored4 == undefined) || (hwStored2 == undefined && hwStored3 == undefined && hwStored4 == undefined) || (hwStored1 == undefined && hwStored3 == undefined && hwStored4 == undefined)){
        $("#alertSame").hide();

    } else if ((hwStored1 == " " && hwStored2 == " " && hwStored3 == " ") || (hwStored1 == " " && hwStored2 == " " && hwStored4 == " ") || (hwStored2 == " " && hwStored3 == " " && hwStored4 == " ") || (hwStored1 == " " && hwStored3 == " " && hwStored4 == " ")){
        $("#alertSame").hide();

    } else if ((hwStored1 != undefined && hwStored2 != undefined && hwStored1 != " " && hwStored2 != " ") && (hwStored3 == " " || hwStored3 == undefined) && (hwStored4 == undefined || hwStored4 == " ")){
        if (hwStored1 == hwStored2 && hwStored1 != " " && hwStored2 != " "){
            $("#alertSame").show();
        } else {
            $("#alertSame").hide();
        }
    } else if ((hwStored1 != undefined && hwStored3 != undefined && hwStored1 != " " && hwStored3 != " ") && (hwStored2 == " " ||  hwStored2 == undefined) && (hwStored4 == undefined || hwStored4 == " ")){
        if (hwStored1 == hwStored3 && hwStored1 != " " && hwStored3 != " "){
            $("#alertSame").show();
        } else {
            $("#alertSame").hide();
        }
    }  else if ((hwStored1 != undefined && hwStored4 != undefined && hwStored1 != " " && hwStored4 != " ") && (hwStored2 == " " || hwStored2 == undefined) && (hwStored3 == undefined || hwStored3 == " ")){
        if (hwStored1 == hwStored4){
            $("#alertSame").show();
        } else {
            $("#alertSame").hide();
        }
    } else if ((hwStored2 != undefined && hwStored3 != undefined && hwStored2 != " " && hwStored3 != " ") && (hwStored1 == " " || hwStored1 == undefined) && (hwStored4 == undefined || hwStored4 == " ")){
        if (hwStored2 == hwStored3){
            $("#alertSame").show();
        } else {
            $("#alertSame").hide();
        }
    }  else if ((hwStored2 != undefined && hwStored4 != undefined && hwStored2 != " " && hwStored4 != " ") && (hwStored1 == " " || hwStored1 == undefined) && (hwStored3 == undefined || hwStored3 == " ")){
        if (hwStored2 == hwStored4){
            $("#alertSame").show();
        } else {
            $("#alertSame").hide();
        }
    } else if ((hwStored3 != undefined && hwStored4 != undefined && hwStored1 == undefined && hwStored2 == undefined) || (hwStored3 != " " && hwStored4 != " " && hwStored1 == " " && hwStored2 == " ")){
        if (hwStored3 == hwStored4 && hwStored3 != " " && hwStored4 != " "){
            $("#alertSame").show();
        } else {
            $("#alertSame").hide();
        }
    } else if ((hwStored1 != undefined && hwStored2 != undefined && hwStored3 != undefined && hwStored1 != " " && hwStored2 != " " && hwStored3 != " ") && (hwStored4 == " " || hwStored4 == undefined)){
        if ((hwStored1 == hwStored2) || (hwStored1 == hwStored3) || (hwStored2 == hwStored3)){
            $("#alertSame").show();
        } else {
            $("#alertSame").hide();
        }
    }  else if ((hwStored1 != undefined && hwStored4 != undefined && hwStored2 != undefined && hwStored1 != " " && hwStored4 != " " && hwStored2 != " ") && (hwStored3 == " "|| hwStored3 == undefined)){
        if ((hwStored1 == hwStored2) || (hwStored1 == hwStored4) || (hwStored2 == hwStored4)){
            $("#alertSame").show();
        } else {
            $("#alertSame").hide();
        }
    } else if ((hwStored3 != undefined && hwStored4 != undefined && hwStored1 != undefined && hwStored3 != " " && hwStored4 != " " && hwStored1 != " ") && (hwStored2 == " " || hwStored2 == undefined)){
        if ((hwStored1 == hwStored3) || (hwStored1 == hwStored4) || (hwStored3 == hwStored4)){
            $("#alertSame").show();
        } else {
            $("#alertSame").hide();
        }
    }  else if ((hwStored2 != undefined && hwStored3 != undefined && hwStored4 != undefined && hwStored2 != " " && hwStored3 != " " && hwStored4 != " ") && (hwStored1 == " " || hwStored1 == undefined)){
        if ((hwStored2 == hwStored3) || (hwStored2 == hwStored4) || (hwStored3 == hwStored4)){
            $("#alertSame").show();
        } else {
            $("#alertSame").hide();
        }
    } else if ((hwStored2 != undefined && hwStored3 != undefined && hwStored4 != undefined && hwStored1 != undefined) || (hwStored2 != " " && hwStored3 != " " && hwStored4 != " " && hwStored1 != " ")){
        if ((hwStored1 == hwStored2) || (hwStored1 == hwStored3) || (hwStored1 == hwStored4) || (hwStored2 == hwStored3) || (hwStored2 == hwStored4) || (hwStored3 == hwStored4)){
            $("#alertSame").show();
        } else {
            $("#alertSame").hide();
        }
    }


    //display the average homework time if at least three homework dropdowns filled out
    if (homework1 != 0 || homework2 != 0 || homework3 != 0 || homework4 != 0){
        hwTotal = (homework1*60) + (homework2*60) + (homework3*60) + (homework4*60);
        hwHours = Math.trunc(hwTotal/60);
        hwMinutes = hwTotal % 60;
        hwMinutesF = Math.round(hwMinutes);
        if (hwHours == 0){
            if (hwMinutesF == 1){
                document.getElementById('hwstats').innerHTML = "Total number of homework hours:  "  + hwMinutesF + " minute";      
            } else {
                document.getElementById('hwstats').innerHTML = "Total number of homework hours:  "  + hwMinutesF + " minutes";
            }
            
        } else if (hwMinutesF == 0){
            if (hwHours == 1){
                document.getElementById('hwstats').innerHTML = "Total number of homework hours:  "  + hwHours + " hour";
            } else {
                document.getElementById('hwstats').innerHTML = "Total number of homework hours:  "  + hwHours + " hours";
            }
        } else{
            if (hwHours == 1 && hwMinutesF != 0){
                document.getElementById('hwstats').innerHTML = "Total number of homework hours:  "  + hwHours + " hour and " + hwMinutesF + " minutes";

            } else if (hwHours == 1 && hwMinutesF == 1){
                document.getElementById('hwstats').innerHTML = "Total number of homework hours:  "  + hwHours + " hour and " + hwMinutesF + " minute";

            } else {
                document.getElementById('hwstats').innerHTML = "Total number of homework hours:  "  + hwHours + " hours and " + hwMinutesF + " minutes";

            }
        }
    } else {
        document.getElementById('hwstats').innerHTML = " ";
    }

    
    //display the average extracurricular time if at least one ec range slider is filled out
    if (ec1 != 0 || ec2 != 0 || ec3 != 0){
        ecTotal = (ec1*60) + (ec2*60) + (ec3*60);
        ecHours = Math.trunc(ecTotal/60);
        ecMinutes = ecTotal % 60;
        ecMinutesF = Math.round(ecMinutes);
        if (ecHours == 0){
            if (ecMinutesF == 1){
                document.getElementById('ecstats').innerHTML = "Total number of extracurricular hours:  "  + ecMinutesF + " minute";
            } else {
                document.getElementById('ecstats').innerHTML = "Total number of extracurricular hours:  "  + ecMinutesF + " minutes";
            }
        } else if (ecMinutesF == 0){
            if (ecHours == 1){
                document.getElementById('ecstats').innerHTML = "Total number of extracurricular hours:  "  + ecHours + " hour";
            } else {
                document.getElementById('ecstats').innerHTML = "Total number of extracurricular hours:  "  + ecHours + " hours";
            }
        } else{
            if (ecHours == 1 && ecMinutesF != 0){
                document.getElementById('ecstats').innerHTML = "Total number of extracurricular hours:  "  + ecHours + " hour and " + ecMinutesF + " minutes";
            } else if (ecHours == 1 && ecMinutesF == 1){
                document.getElementById('ecstats').innerHTML = "Total number of extracurricular hours:  "  + ecHours + " hour and " + ecMinutesF + " minute";
            } else {
                document.getElementById('ecstats').innerHTML = "Total number of extracurricular hours:  "  + ecHours + " hours and " + ecMinutesF + " minutes";
            }
        }
    } else {
        document.getElementById('ecstats').innerHTML = " ";
    }

    if (dl1 != 0 || dl2 != 0 || dl3 != 0 || dl4 != 0 || dl5 != 0){
        dlTotal = (dl1*60) + (dl2*60) + (dl3*60) + (dl4*60) + (dl5*60);
        dlHours = Math.trunc(dlTotal/60);
        dlMinutes = dlTotal % 60;
        dlMinutesF = Math.round(dlMinutes);
        if (dlHours == 0){
            if (dlMinutesF == 1){
                document.getElementById('dlstats').innerHTML = "Total number of daily living hours:  "  + dlMinutesF + " minute";
            } else {
                document.getElementById('dlstats').innerHTML = "Total number of daily living hours:  "  + dlMinutesF + " minutes";
            }
        } else if (dlMinutesF == 0){
            if (dlHours == 1){
                document.getElementById('dlstats').innerHTML = "Total number of daily living hours:  "  + dlHours + " hour";
            } else {
                document.getElementById('dlstats').innerHTML = "Total number of daily living hours:  "  + dlHours + " hours";
            }
        } else{
            if (dlHours == 1 && dlMinutesF != 0){
                document.getElementById('dlstats').innerHTML = "Total number of daily living hours:  "  + dlHours + " hour and " + dlMinutesF + " minutes";
            } else if (dlHours == 1 && dlMinutesF == 1){
                document.getElementById('dlstats').innerHTML = "Total number of daily living hours:  "  + dlHours + " hour and " + dlMinutesF + " minute";
            } else {
                document.getElementById('dlstats').innerHTML = "Total number of daily living hours:  "  + dlHours + " hours and " + dlMinutesF + " minutes";
            }
        }
    } else {
        document.getElementById('dlstats').innerHTML = " ";
    }

    if ($('#alertOvertime').is(":visible") || $('#alertSame').is(":visible")) {
      document.getElementById("printButton").style.visibility = 'hidden';
    } else {
        document.getElementById("printButton").style.visibility = 'visible';
    }
    
    
    //chart data and properties
    var data = google.visualization.arrayToDataTable([
        ['Activity', 'Hours per Day'],
        ['Unused Time', other],
        ['School',     schoolValue],
        ['Sleep',       sleepValue],
        ['Class 1 - '+hwStored1,  homework1],
        ['Class 2 - '+hwStored2,  homework2],
        ['Class 3 - '+hwStored3,  homework3],
        ['Class 4 - '+hwStored4,  homework4],
        ['EC 1', ec1],
        ['EC 2', ec2],
        ['EC 3', ec3],
        ['Necessities', dl1],
        ['Family Time', dl2],
        ['Downtime', dl3],
        ['Work', dl4],
        ['Other', dl5]
    ]);

    var options = {  
        width: 600,
        height: 325,
        position: 'center',
        backgroundColor: '#d3e5ff',
        fontName: 'amiri',
        fontSize: 12.5,
        is3D: true,
        slices: {0: {color: '#e3e4e6'}, 1:{color: '#4EC7FF'}, 2:{color: '#00A7FA'}, 3: {color: '#0098E4'}, 4:{color: '#008ACE'}, 5:{color: '#006A9F'}, 6:{color:'#005F8F'}, 7: {color:'#EB3269'}, 8:{color: '#FF2E8C'}, 9:{color: '#FF509F'},  10:{color: '#FF6AD5'}, 11:{color: '#C774E8'}, 12:{color: '#AD8CFF'}, 13:{color: '#8795E8'}, 14:{color: '#94D0FF'}},
        pieSliceText: 'label',
        chartArea: {left:0,top:10, right:0, bottom:10, width:"100%"}
        };

    
    //display chart
    var container = document.getElementById('piechart');
    var chart = new google.visualization.PieChart(container);
    chart.draw(data, options);
}


//make chart responsive
$(window).resize(function(){
    drawChart();
});
