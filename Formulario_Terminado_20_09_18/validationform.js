function fuckingvalidation(){
	var nome = document.forms["forma"]["nome"].value;
	if (nome == "") {
		alert ("Nome deve ser preenchido");
	
	}
	
}
function cpfvalidation(){
	var cpf = document.forms["forma"]["cpf"].value;
	if (cpf == "") {
		alert ("CPF deve ser preenchido");
	
	}
	
}
function validatedocument(){
	var doc = document.forms["forma"]["doc"].value;
	if (doc == "") {
		alert ("Tipo de documento deve ser preenchido");
	
	}
	
}
function validadenum(){
	var num = document.forms["forma"]["num"].value;
	if (num == "") {
		alert ("Número do documento deve ser preenchido");
	
	}
	
}
