
var continueinvite = (body)=>{
    
}

var autoInvite = ()=>{
    var buttonList = document.getElementsByTagName("button");
    for(key in buttonList) {
        if(buttonList[key].innerHTML == "邀请回答") {
            buttonList[key].click();
        }
    }
}   