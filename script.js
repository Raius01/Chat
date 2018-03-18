var field=document.getElementById("field"),
chat=document.getElementById("chat"),
nik=document.getElementById("nik");

var ws= new WebSocket("ws://localhost:591/");

ws.onmessage=function(message){
	var string = message,
		stop = string.split(" "),
		cenz = "голова";
	for (var i = 1; i < stop.length; i++) {
		if (stop[i] = cenz) {
			message = "найденно запрещенное слово";
		};
	};

	chat.value=nik.value+ message.data+"\n"+chat.value;

};
ws.onopen=function(){
	
	field.addEventListener("keydown",function(event){
		
		if (event.which==13) {
			ws.send(field.value);
			field.value="";
		}
	});
};