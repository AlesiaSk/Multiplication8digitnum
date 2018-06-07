/* Автор - Скороход Алеся
Автор функции createTable() - Александр Якутин*/

function addNulls(numb, num){
	var a="";
	for (var i = 0; i < (num - numb.length); i++){

        a +="0";
        
	}
	return a + numb;
}

function addEndNull(numb, num){
	var a="";
	for (var i = 0; i < num ; i++){

        a +="0";
        
	}
	return numb + a;
}

function sum(num1, num2){

	if (num1.length > num2.length){
		num2 = addNulls(num2, num1.length);
	}
	if (num2.length > num1.length){
		num1 = addNulls(num1, num2.length);
	}
	var output = [];
	var answer = "";
	var answer1 = "";
	var transfer= "0";
    for (var i = 0, len = num1.length; i < len; i += 1) {
    output.push(+num1.charAt(i));    
	}
	var output2 = [];
    for (var i = 0, len = num2.length; i < len; i += 1) {
    output2.push(+num2.charAt(i));    
	}
	var i = output.length -1;
	while ( i >= 0){
		if (output[i] == "0" && output2[i] == "0" && transfer== "0"){
			answer = "0" + answer;
		}
		else if (output[i] == "1" && output2[i] == "0" && transfer== "0"){
			answer = "1" + answer;
		}
		else if (output[i] == "0" && output2[i] == "1" && transfer== "0"){
			answer = "1" + answer;
		}
		else if (output[i] == "1" && output2[i] == "1" && transfer== "0"){
			answer = "0" + answer;
			transfer= "1";
		}
		else if (output[i] == "0" && output2[i] == "0" && transfer== "1"){
			answer = "1" + answer;
			transfer= "0";
		}
		else if (output[i] == "1" && output2[i] == "0" && transfer== "1"){
			answer = "0" + answer;
		}
		else if (output[i] == "0" && output2[i] == "1" && transfer== "1"){
			answer = "0" + answer;
		}
		else if (output[i] == "1" && output2[i] == "1" && transfer== "1"){
			answer = "1" + answer;
		}
		i--;
	}
	if (transfer== "1"){
		answer = "1" + answer;
		transfer= "0";
	}
	var output3 = [];
    for (var i = 0, len = answer.length; i < len; i += 1) {
    output3.push(+answer.charAt(i));    
	}
	for (var i = (output3.length -1); i > (-1); i -=1){
		if(output3[i] == "1"){
		answer1 += "1";
		}
		else{
			answer1 += "0";
			}
	}
    return answer;
    
}

function mult(num1, num2){
	
	var answer = "";
   
		if (num2 == "1"){
			answer = num1;
		}

		else{
			answer = "00000000"
		}
	
    return answer;

}


function createTable(rowNum){
	var body=document.querySelector("body"),
		table=document.querySelector("table"),
		height=60,
		width=6000,
		rows= rowNum,
		columns=26,
		tableRow = "",
		tableData = "",
		tableHeader = "",
		firstTable = document.querySelector("table");

	table=document.createElement("table");
	table.setAttribute("width",width);
	table.setAttribute("border","1px")
	table.setAttribute("bordercolor","black");
	table.setAttribute("align","center");

	tableRow=document.createElement("tr");
	tableHeader=document.createElement("th");
	tableHeader.setAttribute("rowspan","2");
	text=document.createTextNode("Tacts");
	tableHeader.appendChild(text);
	tableRow.appendChild(tableHeader);

	for (var i = 0; i < 8; i++){
		tableHeader=document.createElement('th');
		tableHeader.setAttribute("colspan","3");
		text=document.createTextNode('Stage '+(i+1));
		tableHeader.appendChild(text);
		tableRow.appendChild(tableHeader);
	}

	tableHeader=document.createElement("th");
	tableHeader.setAttribute("rowspan","2");
	text=document.createTextNode("Result");
	tableHeader.appendChild(text);
	tableRow.appendChild(tableHeader);

	table.appendChild(tableRow);
	tableRow=document.createElement("tr");

	for (var i=7;i>=0;i--){
		
		tableHeader=document.createElement("th");
		text=document.createTextNode("A*B["+i+"]");
		tableHeader.appendChild(text);
		tableRow.appendChild(tableHeader);

		tableHeader=document.createElement("th");
		text=document.createTextNode("Shift");
		tableHeader.appendChild(text);
		tableRow.appendChild(tableHeader);

		tableHeader=document.createElement("th");
		text=document.createTextNode("Sum+A*B["+i+"]");
		tableHeader.appendChild(text);
		tableRow.appendChild(tableHeader);
	}

	table.appendChild(tableRow);

	for (var rowNum = 0; rowNum < rows; rowNum++){
		tableRow = document.createElement("tr");
		for (var colNum = 0; colNum < columns; colNum++){
			tableData=document.createElement("td");
			tableData.id = ((rowNum + 1) + "." + (colNum+1));
			tableRow.appendChild(tableData);
			tableData.setAttribute("height",height);
		}
		table.appendChild(tableRow);
	}

	table.appendChild(tableRow);

	if (firstTable == null) {
		return body.appendChild(table);
	} else {
		var newTable = body.appendChild(table);
		return document.body.replaceChild(newTable, firstTable);
	}
}


function main(){

    var a = document.getElementById("Numb1").value;
    var b = document.getElementById("Numb2").value;
	var t = document.getElementById("Tacts").value; 
	

	var r = 0;
	var num1 = [];
	var num2 = [];
	for (var i = 0; i < a.length + 1; i++){
		if(a.charAt(i)==="," || i == a.length){
			num1.push(a.substring(r ,i));
			r = i + 1;
		}
	}
	r = 0;
	for (var i = 0; i < b.length + 1; i++){
		if(b.charAt(i)==="," || i == b.length){
			num2.push(b.substring(r ,i));
			r = i + 1;
		}
	}
    var aBinary = (+a).toString(2); 
    var bBinary = (+b).toString(2);
    var answer = a*b;
    var answerBinary = (+answer).toString(2); 
    var output = [];
    for (var i = 0, len = bBinary.toString().length; i < len; i += 1) {
    output.push(+bBinary.toString().charAt(i));   
    }
    var a8 = addNulls(aBinary, 8); 
    var b8 = addNulls(bBinary, 8);        
	var b8Binary = b8.toString(); 
	var forTable = 0;
	for (var k = 1; k <= num1.length; k++){
    if (num1.length == k){
		createTable(8 + forTable);
		for(var i = 1; i <= (8 + forTable); i++){
			document.getElementById(i+"."+1).innerHTML="Tacts: "+(i*t);
		}
	 }
	 forTable++;
	}
   
	for (var w = 0; w < num1.length; w++){
		if ((+num2[w]).toString(2).length != 8){
			var b8 = addNulls((+num2[w]).toString(2),8);
		}
		if ((+num1[w]).toString(2).length != 8){
			var a8 = addNulls((+num1[w]).toString(2),8);
		}
		var Sum = "0000000000000000";
		var S;
		var Mul;
		var output = [];
		for (var i = 0; i < (+num2[w]).toString(2).length; i += 1) {
		output.push(+(+num2[w]).toString(2).charAt(i)); 
		}
		document.getElementById(1+"."+1).innerHTML += "<p>A[1]<sub>10</sub>="+num1[w]+"</p><p>A[1]<sub>2</sub>="+a8+"</p><p>B[1]<sub>10</sub>="+num2[w]+"</p></p>B[1]<sub>2</sub>="+b8+"</p>";
		var k = w + 1;
		var z = 1;
		var m =7;
		var j = 0;
		for (var i = 2; i < 25; i += 3){
			
			var M = mult((+num1[w]).toString(2), output[output.length -z]);
			document.getElementById(k +"."+i).innerHTML += "<p>A[1]<sub>2</sub> = "+a8+"</p></p>B[1]<sub>2</sub> = "+b8+"</p><p>Sum = "+Sum+"</p></p><p>A[1]*B[1]["+m+"] = "+ M+"</p>";
			Mul = M;
			M = addEndNull(M, j);
			document.getElementById(k +"."+(i + 1)).innerHTML += "<p>A[1]<sub>2</sub> = "+a8+"</p></p>B[1]<sub>2</sub> = "+b8+"</p><p>Sum = "+Sum+"</p></p><p>A[1]*B[1]["+m+"] = "+ Mul+"</p><p>A[1]*B[1]["+m+"] = "+ M+"</p>";
			S = Sum;
			Sum = sum(Sum, M);
			document.getElementById(k +"."+ (i + 2)).innerHTML += "<p>A[1]<sub>2</sub> = "+a8+"</p></p>B[1]<sub>2</sub> = "+b8+"</p><p>Sum = "+S+"</p></p><p>Sum + A[1]*B[1]["+m+"] = "+Sum+"</p>";
			
			if (i == 23){
				document.getElementById(k +"."+ (i+3)).innerHTML += "<p>Result =  "+parseInt(Sum,2)+"<sub>10</sub> = "+Sum+"<sub>2</sub></p>";
			}
			k++;
			m--;
			j++;
			z++;
		}
	}
	
	
   
}