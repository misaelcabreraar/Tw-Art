/*function agregarSentimiento(text){
    let pagina = "https://api.meaningcloud.com/sentiment-2.1?key=143d556c90b3089eabca85de2b60591f&of=json&txt=" + text +"&lang=en";
    var request = require('request');
    request(pagina,function(error,response,body){
        if(!error && response.statusCode == 200){
            var data=JSON.parse(body);
            return data.score_tag;
        }
    })
    console.log(request);
}

agregarSentimiento("It sucks");
*/
function agregarSentimiento(){
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","https://hackaton3-misaelcabreraar.c9users.io:8081/info",false);
    xmlhttp.send()
    if(xmlhttp.status==200){
        console.log(xmlhttp.responseText);
    }
}

agregarSentimiento();