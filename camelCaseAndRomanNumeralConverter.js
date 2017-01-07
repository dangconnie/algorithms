// Case Convert
// Write a function caseConvert that accepts two arguments. The first is a string, the second is type. If the type is "camelcase" then convert the string to camelcase (each word except the first is capitalized, no spaces). If type is "snakecase" then convert the string to snakecase (each word is separated by a - and all lowercase). As a bonus, accept a string or an array. If it's an array, use .join and proceed accordingly.
// function caseConvert(str, conversionType){
//  //Your code here!!
//  return convertedStr;
// } 


function caseConvert(str, conversionType){
	if(conversionType === 'camelcase'){
		var spaceIndex = str.split("-");
		for (var i = 1; i < spaceIndex.length; i++) {
			spaceIndex[i] = spaceIndex[i].replace(spaceIndex[i][0], spaceIndex[i][0].toUpperCase())
		}
		var string = spaceIndex.join('')
		console.log(string)
	}else if(conversionType === 'snakecase'){
		while(str.indexOf('-')!= -1){
			str = str.replace('-', '_');
		}
		console.log(str)
	}
}

// Write a Roman numeral converter. The program should be passed an integer and return the correct Roman numeral.
// If you finish early, please do the reverse. Accept a roman numeral, and convert it to an integer
// Rules: http://www.factmonster.com/ipka/A0769547.html
// Your converter should work up to 1009

var outcomeMatrix = [
	['','I','II','III','IV','V','VI','VII','VIII','IX'],
	['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
	['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
]


function decToRoman (decInput) {
	var romanOutput = ''
	if(decInput>=1000){
	var factorsOf1000 = Math.floor(decInput/1000)
	decInput -= (factorsOf1000*1000)
	}
	if(decInput>=100){
	var factorsOf100 = Math.floor(decInput/100)
	decInput -= (factorsOf100*100)
	}
	if(decInput>=10){
	var factorsOf10 = Math.floor(decInput/10)
	decInput -= (factorsOf10*10)
	}
	if(decInput>=1){
	var factorsOf1 = Math.floor(decInput/1)
	decInput -= (factorsOf1)
	}

	var romanNumeralMatrix = [
		["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
		["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
		["","I","II","III","IV","V","VI","VII","VIII","IX"]
	];
	var mAdd = "";
	var romanNumber = [];
	for (var i = 0; i < factorsOf1000; i++) {
		mAdd += "M";
		if(i == (factorsOf1000 - 1)){
			romanNumber.push(mAdd)
		}
	};
	romanNumber.push(romanNumeralMatrix[0][factorsOf100]);
	romanNumber.push(romanNumeralMatrix[1][factorsOf10]);
	romanNumber.push(romanNumeralMatrix[2][factorsOf1]);
	var tempString = romanNumber.join("");
	console.log(tempString);
}
decToRoman(1944);


// var SandraTheApe = `

// //          SANDRA THE APE		
// //                 _
// //             ,.-" "-.,
// //            /   ===   \
// //           /  =======  \
// //        __|  (o)   (0)  |__
// //       / _|    .---.    |_ \
// //      | /.----/ O O \----.\ |
// //       \/     |     |     \/
// //       |                   |
// //       |                   |
// //       |                   |
// //       _\   -.,_____,.-   /_
// //   ,.-"  "-.,_________,.-"  "-.,
// //  /          |       |          \
// // |           l.     .l           |
// // |            |     |            |		   --
// // l.           |     |           .			  --
// //  |           l.   .l           | \,		 --
// //  l.           |   |           .l   \,	--
// //   |           |   |           |      \,--
// //   l.          |   |          .l        |
// //    |          |   |          |         |
// //    |          |---|          |         |
// //    |          |   |          |         |
// //    /"-.,__,.-"\   /"-.,__,.-"\"-.,_,.-"\
// //   |            \ /            |         |
// //   |             |             |         |
// //    \__|__|__|__/ \__|__|__|__/ \_|__|__/  

//    `;

// console.log(SandraTheApe);



//PAUL, I SAVED YOUR CODE DOWN HERE JUST IN CASE
function decToRoman2 (decInput) {
	var romanOutput = ''
	if(decInput>=1000){
	var factorsOf1000 = Math.floor(decInput/1000)
	decInput -= (factorsOf1000*1000)
	}
	if(decInput>=500){
	console.log(decInput);
	var factorsOf500 = Math.floor(decInput/500)
	decInput -= (factorsOf500*500)
	}	
	if(decInput>=100){
	var factorsOf100 = Math.floor(decInput/100)
	decInput -= (factorsOf100*100)
	}
	if(decInput>=50){
	var factorsOf50 = Math.floor(decInput/50)
	decInput -= (factorsOf50*50)
	}	
	if(decInput>=10){
	var factorsOf10 = Math.floor(decInput/10)
	decInput -= (factorsOf10*10)
	}
	if(decInput>=5){
	var factorsOf5 = Math.floor(decInput/5)
	decInput -= (factorsOf5*5)
	}
	if(decInput>=1){
	var factorsOf1 = Math.floor(decInput/1)
	decInput -= (factorsOf1)
	}

	for(let i = 0; i<factorsOf1000; i++){romanOutput += "M"}
	if((factorsOf500===1)&&(factorsOf100===4)){
		romanOutput += "CM"
	}else{
		for(let i = 0; i<factorsOf500; i++){romanOutput += "D"};	
		if(factorsOf10===4){romanOutput += "CD"
		}else{
			for(let i = 0; i<factorsOf100; i++){romanOutput += "C"}
		}
	}		
	if((factorsOf50===1)&&(factorsOf10===4)){
		romanOutput += "XC"
	}else{
		for(let i = 0; i<factorsOf50; i++){romanOutput += "L"};	
		if(factorsOf10===4){romanOutput += "XL"
		}else{
			for(let i = 0; i<factorsOf10; i++){romanOutput += "X"}
		}
	}		
	if((factorsOf5===1)&&(factorsOf1===4)){
		romanOutput += "IX"
	}else{
		for(let i = 0; i<factorsOf5; i++){romanOutput += "V"};	
		if(factorsOf1===4){romanOutput += "IV"
		}else{
			for(let i = 0; i<factorsOf1; i++){romanOutput += "I"}
		}

	
}



