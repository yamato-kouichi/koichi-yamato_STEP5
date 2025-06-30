let colors = ["lightblue", "lightgreen", "lightcoral"]
let count = 0
let countTable = 0
let countTable2 =0
let countLoop = 1
document.addEventListener("DOMContentLoaded",function(){
    let colorButton = document.getElementById("colorButton");
    let pushButton = document.getElementById("pushbutton");
    let pushbutton2 = document.getElementById("pushbutton2");
    pushButton.addEventListener("click",buttonClick);
    pushbutton2.addEventListener("click",buttonClick2);
    colorButton.addEventListener("click",colorChange);
    }
)

function buttonClick(){
    // 非表示にする処理
    if( countTable === 2){
        pushbutton.style.display = "none";
    }else{
        pushbutton.style.display = "inline-block"
    }
    let msg = document.getElementById("out");
    let textbox = document.getElementById("textbox");

    let table = document.getElementById("table");
    let newRow = table.insertRow();
    let displayCell = newRow.insertCell(0);

    const buttonCell = newRow.insertCell(1);
    const deleteButton = document.createElement("button"); 

    // 入力の処理
    if (textbox.value !== ""){
        msg.classList.toggle("highlight")
    msg.innerText = textbox.value;
    console.log(countLoop)
    
    // 削除ボタンの処理
    deleteButton.textContent = "削除";
    deleteButton.onclick = function(){
        table.deleteRow(newRow.rowIndex - 1);
        countTable = countTable -1

        if (countTable <= 3){
            pushbutton.style.display = "inline-block"
        }
    }
    //削除ボタンの表示
    buttonCell.appendChild(deleteButton)

    displayCell.innerText = textbox.value;

    // テーブルのカウント追加
    countTable = (countTable + 1) ;

}else{
    // 入力していない場合の処理
        alert("入力値が空です。");
    }
    countLoop = countLoop + 1

    if(countLoop > 5){
        countLoop = 1
    }
}
function colorChange(){
    console.log (colors[count])
        document.body.style.backgroundColor = colors[count];
    count = (count + 1)% colors.length;
}

//設問６，７
function buttonClick2(){


    let msg2 = document.getElementById("out2");
    let textbox2 = document.getElementById("textbox2");

    let table2 = document.getElementById("table2");
    let newRow2 = table2.insertRow();
    let displayCell2 = newRow2.insertCell(0);

    const buttonCell2 = newRow2.insertCell(1);
    const deleteButton2 = document.createElement("button2"); 
    
    //順に消える処理
    if (countTable2 >= 2 && countTable2){
        table2.deleteRow(0)
    }else{

        msg2.innerText = textbox2.value;
    }

    // 入力の処理
    if (textbox2.value !== ""){
    msg2.innerText = textbox2.value;

    console.log(countLoop)
    // 削除ボタンの処理
    deleteButton2.textContent = "削除";
    deleteButton2.onclick = function(){
        table2.deleteRow(newRow2.rowIndex - 1);
        countTable2 = countTable2 -1

    }
    //削除ボタンの表示
    buttonCell2.appendChild(deleteButton2)

    displayCell2.innerText = textbox2.value;

    // テーブルのカウント追加
    countTable2 = (countTable2 + 1) ;

}else{
    // 入力していない場合の処理
        alert("入力値が空です。");
    }
    countLoop = countLoop + 1
    if(countLoop > 5){
        countLoop = 1
    }
}
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

