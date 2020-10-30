function change(id){
    var dot1 = document.getElementById("data_1");
    var dot2 = document.getElementById("data_2");
    var dot3 = document.getElementById("data_3");
    var dot4 = document.getElementById("data_4");
    var dot5 = document.getElementById("data_5");
    
    var data_came = document.getElementById(id);

    var text_data = document.getElementById("text_1");
    var text_Da = "";

    if(id == "data_1"){
        bar_1.style.width = "100%";
        bar_2.style.width = "50%";
        text_Da += "<div class='col-md-6'>"
        text_Da += "</div>"
        text_Da += "<p> ปลั๊กอิน Amp Designer มากขึ้น <sup> 1</sup> <span style='font-size: 80px;'>65%</span></p>"

        text_data.innerHTML = text_Da;
    }
    if(id == "data_2"){
        bar_1.style.width = "100%";
        bar_2.style.width = "60%";
        text_Da += "<div class='col-md-6'>"
        text_Da += "</div>"
        text_Da += "<p> แปลง ProRes เร็วขึ้น <sup> 2</sup> <span style='font-size: 80px;'>40%</span></p>"
        text_data.innerHTML = text_Da;
    }
    if(id == "data_3"){
        bar_1.style.width = "100%";
        bar_2.style.width = "65%";
        text_Da += "<div class='col-md-6'>"
        text_Da += "</div>"
        text_Da += "<p> เรนเดอร์ด้วย Arnold เร็วขึ้น<sup> 3</sup> <span style='font-size: 80px;'>35%</span></p>"
        text_data.innerHTML = text_Da;
    }
    if(id == "data_4"){
        bar_1.style.width = "100%";
        bar_2.style.width = "70%";
        text_Da += "<div class='col-md-6'>"
        text_Da += "</div>"
        text_Da += "<p> เวลาในการสร้างโดยใช้ Xcode เร็วขึ้น <sup> 4</sup> <span style='font-size: 80px;'>25%</span></p>"
        text_data.innerHTML = text_Da;
    }
    if(id == "data_5"){
        bar_1.style.width = "100%";
        bar_2.style.width = "70%";
        text_Da += "<div class='col-md-6'>"
        text_Da += "</div>"
        text_Da += "<p> จำลองระบบพลวัตได้เร็วขึ้น <sup> 5</sup> <span style='font-size: 80px;'>20%</span></p>"
        text_data.innerHTML = text_Da;
    }
}
function changeph(id){
    var dot1 = document.getElementById("data_1");
    var dot2 = document.getElementById("data_2");
    var dot3 = document.getElementById("data_3");
    var dot4 = document.getElementById("data_4");
    var dot5 = document.getElementById("data_5");
    
    var data_came = document.getElementById(id);

    var text_data1 = document.getElementById("text_7");
    var text_Data = "";

    if(id == "data_1"){
        bar_5.style.width = "100%";
        bar_6.style.width = "50%";
        text_Data += "<div class='col-md-6'>"
        text_Data += "</div>"
        text_Data += "<p> ปลั๊กอิน Amp Designer มากขึ้น <sup> 1</sup> <span style='font-size: 80px;'>65%</span></p>"
        text_data1.innerHTML = text_Data;
    }
    if(id == "data_2"){
        bar_5.style.width = "100%";
        bar_6.style.width = "60%";
        text_Data += "<div class='col-md-6'>"
        text_Data += "</div>"
        text_Data += "<p> แปลง ProRes เร็วขึ้น <sup> 2</sup><br> <span style='font-size: 80px;'>40%</span></p>"
        text_data1.innerHTML = text_Data;
    }
    if(id == "data_3"){
        bar_5.style.width = "100%";
        bar_6.style.width = "65%";
        text_Data += "<div class='col-md-6'>"
        text_Data += "</div>"
        text_Data += "<p> เรนเดอร์ด้วย Arnold เร็วขึ้น<sup> 3</sup> <span style='font-size: 80px;'>35%</span></p>"
        text_data1.innerHTML = text_Data;
    }
    if(id == "data_4"){
        bar_5.style.width = "100%";
        bar_6.style.width = "70%";
        text_Data += "<div class='col-md-6'>"
        text_Data += "</div>"
        text_Data += "<p> เวลาในการสร้างโดยใช้ Xcode เร็วขึ้น <sup> 4</sup> <span style='font-size: 80px;'>25%</span></p>"
        text_data1.innerHTML = text_Data;
    }
    if(id == "data_5"){
        bar_5.style.width = "100%";
        bar_6.style.width = "70%";
        text_Data += "<div class='col-md-6'>"
        text_Data += "</div>"
        text_Data += "<p> จำลองระบบพลวัตได้เร็วขึ้น <sup> 5</sup> <span style='font-size: 80px;'>20%</span></p>"
        text_data1.innerHTML = text_Data;
    }
}