var input_list = [];
var answer_list = [];
for(var i = 1 ; true ; i ++) {
    if(temp1["input#"+i]!=undefined){
        // console.log(i);
        input_list.push(temp1["input#"+i].replaceAll("\r","").replaceAll("\n",""))
        answer_list.push(temp1["answer#"+i].replaceAll("\r","").replaceAll("\n",""))
    } else {
        break;
    }
}
document.getElementsByTagName("code")[1].innerHTML = "";
var all_code = "";
var appendCode = (code) => {
    all_code += code+"\n";
    document.getElementsByTagName("code")[1].innerHTML += "<br>"+code;
}
appendCode("#include<bits/stdc++.h>")
appendCode("using namespace std;")
appendCode("int main(){")
appendCode("string s;getline(cin,s);")
appendCode("    if(s == \""+input_list[0]+"\") cout<<\""+answer_list[0]+"\";")
for(i in input_list) {
    if(i == 0) continue;
    appendCode("    else if(s == \""+input_list[i]+"\") cout<<\""+answer_list[i]+"\";")
}
appendCode("}")
console.log(all_code)