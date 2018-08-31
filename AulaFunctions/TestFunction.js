function mult(x,y){
   console.log("function mult(x,y){...");
   return x*y;
}
var resultmult = mult("preto","branco");
alert( resultmult );

function SkullGirls(characters){
	var sk;
	for(sk = 0;sk < characters.length;sk++){
		console.log(characters[sk]);
	}
}

var SkullGirlsCharacters = ["Cerebella","Parasoul","Valentine","Eliza","Filia","Squigly","Peacock"];

SkullGirls(SkullGirlsCharacters);
console.log("Number of Characters in SkullGirlsCharacters :"+SkullGirlsCharacters.length);