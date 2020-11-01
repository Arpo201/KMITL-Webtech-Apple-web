// com1
function change(id){
    var dotone = document.getElementById("data_for_1");
    var dottwo = document.getElementById("data_for_2");
    var dotthree = document.getElementById("data_for_3");
    var dotfour = document.getElementById("data_for_4");
    var dotfive = document.getElementById("data_for_5");
    
    var data_came = document.getElementById(id);

    var text_data = document.getElementById("text_1");
    var text_Da = "";

    if(id == "data_for_1"){
        bar_1.style.width = "100%";
        bar_2.style.width = "50%";
        text_Da += "<div class='col-md-6'>"
        text_Da += "</div>"
        text_Da += "<p> ปลั๊กอิน Amp Designer มากขึ้น <sup> 1</sup> <span style='font-size: 80px;'>65%</span></p>"

        text_data.innerHTML = text_Da;
    }
    if(id == "data_for_2"){
        bar_1.style.width = "100%";
        bar_2.style.width = "60%";
        text_Da += "<div class='col-md-6'>"
        text_Da += "</div>"
        text_Da += "<p> แปลง ProRes เร็วขึ้น <sup> 2</sup> <span style='font-size: 80px;'>40%</span></p>"
        text_data.innerHTML = text_Da;
    }
    if(id == "data_for_3"){
        bar_1.style.width = "100%";
        bar_2.style.width = "65%";
        text_Da += "<div class='col-md-6'>"
        text_Da += "</div>"
        text_Da += "<p> เรนเดอร์ด้วย Arnold เร็วขึ้น<sup> 3</sup> <span style='font-size: 80px;'>35%</span></p>"
        text_data.innerHTML = text_Da;
    }
    if(id == "data_for_4"){
        bar_1.style.width = "100%";
        bar_2.style.width = "70%";
        text_Da += "<div class='col-md-6'>"
        text_Da += "</div>"
        text_Da += "<p> เวลาในการสร้างโดยใช้ Xcode เร็วขึ้น <sup> 4</sup> <span style='font-size: 80px;'>25%</span></p>"
        text_data.innerHTML = text_Da;
    }
    if(id == "data_for_5"){
        bar_1.style.width = "100%";
        bar_2.style.width = "70%";
        text_Da += "<div class='col-md-6'>"
        text_Da += "</div>"
        text_Da += "<p> จำลองระบบพลวัตได้เร็วขึ้น <sup> 5</sup> <span style='font-size: 80px;'>20%</span></p>"
        text_data.innerHTML = text_Da;
    }
}
// ph1
function changeph(id1){
    var dot1 = document.getElementById("data_1");
    var dot2 = document.getElementById("data_2");
    var dot3 = document.getElementById("data_3");
    var dot4 = document.getElementById("data_4");
    var dot5 = document.getElementById("data_5");
    
    var data_came = document.getElementById(id1);

    var text_data1 = document.getElementById("text_7");
    var text_Data = "";

    if(id1 == "data_1"){
        bar_5.style.width = "100%";
        bar_6.style.width = "50%";
        text_Data += "<div class='col-md-6'>"
        text_Data += "</div>"
        text_Data += "<p> ปลั๊กอิน Amp Designer มากขึ้น <sup> 1</sup> <span style='font-size: 80px;'>65%</span></p>"
        text_data1.innerHTML = text_Data;
    }
    if(id1 == "data_2"){
        bar_5.style.width = "100%";
        bar_6.style.width = "60%";
        text_Data += "<div class='col-md-6'>"
        text_Data += "</div>"
        text_Data += "<p> แปลง ProRes เร็วขึ้น <sup> 2</sup><br> <span style='font-size: 80px;'>40%</span></p>"
        text_data1.innerHTML = text_Data;
    }
    if(id1 == "data_3"){
        bar_5.style.width = "100%";
        bar_6.style.width = "65%";
        text_Data += "<div class='col-md-6'>"
        text_Data += "</div>"
        text_Data += "<p> เรนเดอร์ด้วย Arnold เร็วขึ้น<sup> 3</sup> <span style='font-size: 80px;'>35%</span></p>"
        text_data1.innerHTML = text_Data;
    }
    if(id1 == "data_4"){
        bar_5.style.width = "100%";
        bar_6.style.width = "70%";
        text_Data += "<div class='col-md-6'>"
        text_Data += "</div>"
        text_Data += "<p> เวลาในการสร้างโดยใช้ Xcode เร็วขึ้น <sup> 4</sup> <span style='font-size: 80px;'>25%</span></p>"
        text_data1.innerHTML = text_Data;
    }
    if(id1 == "data_5"){
        bar_5.style.width = "100%";
        bar_6.style.width = "70%";
        text_Data += "<div class='col-md-6'>"
        text_Data += "</div>"
        text_Data += "<p> จำลองระบบพลวัตได้เร็วขึ้น <sup> 5</sup> <span style='font-size: 80px;'>20%</span></p>"
        text_data1.innerHTML = text_Data;
    }
}
// com2
function changeto(id2){
    var dot_1 = document.getElementById("d_1");
    var dot_2 = document.getElementById("d_2");
    var dot_3 = document.getElementById("d_3");
    var dot_4 = document.getElementById("d_4");
    var dot_5 = document.getElementById("d_5");

    var data_came = document.getElementById(id2);

    var text_d2 = document.getElementById("t_1");
    var text_D = "";

    if(id2 == "d_1"){
        bar1.style.width = "100%"
        bar2.style.width = "50%"
        text_D += "<div class='col-md-6'>"
        text_D += "</div>"
        text_D += "<p>เรนเดอร์ด้วย ProRender เร็วขึ้น <sup> 8</sup> <span style='font-size: 80px;'>55%</span></p>"
        text_d2.innerHTML = text_D;
    }
    if(id2 == "d_2"){
        bar1.style.width = "100%"
        bar2.style.width = "60%"
        text_D += "<div class='col-md-6'>"
        text_D += "</div>"
        text_D += "<p>แสดงตัวอย่าง Fly‑through เร็วขึ้น<sup> 9</sup> <span style='font-size: 80px;'>50%</span></p>"
        text_d2.innerHTML = text_D;
    }
    if(id2 == "d_3"){
        bar1.style.width = "100%"
        bar2.style.width = "50%"
        text_D += "<div class='col-md-6'>"
        text_D += "</div>"
        text_D += "<p>แสดงตัวอย่าง Fly‑through เร็วขึ้น<sup> 9</sup> <span style='font-size: 80px;'>45%</span></p>"
        text_d2.innerHTML = text_D;
    }
    if(id2 == "d_4"){
        bar1.style.width = "100%"
        bar2.style.width = "60%"
        text_D += "<div class='col-md-6'>"
        text_D += "</div>"
        text_D += "<p>แสดงตัวอย่าง Fly‑through เร็วขึ้น<sup> 9</sup> <span style='font-size: 80px;'>35%</span></p>"
        text_d2.innerHTML = text_D;
    }
    if(id2 == "d_5"){
        bar1.style.width = "100%"
        bar2.style.width = "50%"
        text_D += "<div class='col-md-6'>"
        text_D += "</div>"
        text_D += "<p>แสดงตัวอย่าง Fly‑through เร็วขึ้น<sup> 9</sup> <span style='font-size: 80px;'>30%</span></p>"
        text_d2.innerHTML = text_D;
    }
}
// ph2
function changetoph(id2){
    var d1 = document.getElementById("d_11");
    var d2 = document.getElementById("d_12");
    var d3 = document.getElementById("d_13");
    var d4 = document.getElementById("d_14");
    var d5 = document.getElementById("d_15");

    var data_came2 = document.getElementById(id2);

    var text_d2ph = document.getElementById("text_20");
    var text_D_2 = "";

    if(id2 == "d_11"){
        b_1.style.width = "100%"
        b_2.style.width = "50%"
        text_D_2 += "<div class='col-md-6'>"
        text_D_2 += "</div>"
        text_D_2 += "<p>เรนเดอร์ด้วย ProRender เร็วขึ้น <sup> 8</sup> <span style='font-size: 80px;'>55%</span></p>"
        text_d2ph.innerHTML = text_D_2;
    }
    if(id2 == "d_12"){
        b_1.style.width = "100%"
        b_2.style.width = "60%"
        text_D_2 += "<div class='col-md-6'>"
        text_D_2 += "</div>"
        text_D_2 += "<p>แสดงตัวอย่าง Fly‑through เร็วขึ้น<sup> 9</sup> <span style='font-size: 80px;'>50%</span></p>"
        text_d2ph.innerHTML = text_D_2;
    }
    if(id2 == "d_13"){
        b_1.style.width = "100%"
        b_2.style.width = "50%"
        text_D_2 += "<div class='col-md-6'>"
        text_D_2 += "</div>"
        text_D_2 += "<p>แสดงตัวอย่าง Fly‑through เร็วขึ้น<sup> 9</sup> <span style='font-size: 80px;'>45%</span></p>"
        text_d2ph.innerHTML = text_D_2;
    }
    if(id2 == "d_14"){
        b_1.style.width = "100%"
        b_2.style.width = "50%"
        text_D_2 += "<div class='col-md-6'>"
        text_D_2 += "</div>"
        text_D_2 += "<p>แสดงตัวอย่าง Fly‑through เร็วขึ้น<sup> 9</sup> <span style='font-size: 80px;'>35%</span></p>"
        text_d2ph.innerHTML = text_D_2;
    }
    if(id2 == "d_15"){
        b_1.style.width = "100%"
        b_2.style.width = "50%"
        text_D_2 += "<div class='col-md-6'>"
        text_D_2 += "</div>"
        text_D_2 += "<p>แสดงตัวอย่าง Fly‑through เร็วขึ้น<sup> 9</sup> <span style='font-size: 80px;'>30%</span></p>"
        text_d2ph.innerHTML = text_D_2;
    }
}