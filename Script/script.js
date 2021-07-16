


const resutado=document.getElementById('resp');




function mutiplica(){

	const numero = document.getElementById('num-1').value;
	const numero2 =document.getElementById('num-2').value;


	const res = numero * numero2;

	document.getElementById('resp').innerHTML = res;


	console.log(res);


}


function divisao(){

	var numero = document.getElementById('num-1').value;
	var numero2 =document.getElementById('num-2').value;


	const res = numero / numero2;

	document.getElementById('resp').innerHTML=res;

	console.log(res);



}


function diminue(){

	var numero = document.getElementById('num-1').value;
	var numero2 =document.getElementById('num-2').value;


	var res = numero - numero2;

	document.getElementById('resp').innerHTML=res;

	console.log(res);



}

function soma(){
	var numero = document.getElementById('num-1').value;
	var numero2 =document.getElementById('num-2').value;

	var res = parseInt(numero) + parseInt(numero2);

	document.getElementById('resp').innerHTML=res;

	console.log(res);


}



