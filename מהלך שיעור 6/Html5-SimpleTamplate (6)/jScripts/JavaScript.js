
function fun() {
    document.getElementById("result").innerHTML = "";
    var Text1 = document.getElementById("Text1").value;
    var Text2 = document.getElementById("Text2").value;
    var place = 0;
    var letter = 0;
    var num = 0;
    if (Text1.length > 5 && Text2.length == 1) {
       
        while (place < Text1.length) {
            place++;            
            if (Text1[letter] == Text2) {
            num++;
            }
            letter++;
        }
        if (num >= 3) {
            document.getElementById("result").innerHTML = "התו " + Text2 + " מופיע " + num + " פעמים " + "!!!";
        }
        else {
            document.getElementById("result").innerHTML = "התו " + Text2 + " מופיע " + num + " פעמים ";
        }

    }
    else {
        alert("הזינו משפט המכיל יותר מ-5 תווים, ותו אחד")
    }
}
function fun2() {
    document.getElementById("result").innerHTML = "";
    var Text1 = document.getElementById("Text1").value;
    var Text2 = document.getElementById("Text2").value;
    var place = 0;

    if (Text1.length > 5 && Text2.length == 1) {
        while (Text1[place] != Text2 && place <= Text1.length) {
            place++;
        }
        if (place <= Text1.length) {
            place++;
            document.getElementById("result2").innerHTML = place;
        }
        else {
            alert("התו לא נמצא במשפט");

        }

    }
    else {
        alert("הזינו משפט המכיל יותר מ - 5 תווים ותו אחד");
    }

}