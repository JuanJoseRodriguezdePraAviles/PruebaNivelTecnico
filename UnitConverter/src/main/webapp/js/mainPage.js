function round(num) {
  var m = Number((Math.abs(num) * 100).toPrecision(15));
  return Math.round(m) / 100 * Math.sign(num);
}

function calculateResult(){
	
	var numberInput = parseFloat(document.getElementById("quantity").value);
	
	var conversion = document.getElementById("units").value;
	console.log(conversion);
	
	var convertedUnit ="";
	if(conversion == "kmMiles"){
		convertedUnit = numberInput * 0.621371;
		document.getElementById("firstUnit").innerHTML = "km";
		document.getElementById("resultUnit").innerHTML = "miles";
	} else if(conversion == "milesKm") {
		convertedUnit = numberInput * 1.609644;
		document.getElementById("firstUnit").innerHTML = "miles";
		document.getElementById("resultUnit").innerHTML = "km";
	} else if(conversion == "metersFoots") {
		convertedUnit = numberInput * 3.28;
		document.getElementById("firstUnit").innerHTML = "m";
		document.getElementById("resultUnit").innerHTML = "foots";
	} else if(conversion == "footsMeters") {
		convertedUnit = numberInput * 0.3048;
		document.getElementById("firstUnit").innerHTML = "foots";
		document.getElementById("resultUnit").innerHTML = "m";
	} else if(conversion == "cmInches") {
		convertedUnit = numberInput * 0.3937;
		document.getElementById("firstUnit").innerHTML = "cm";
		document.getElementById("resultUnit").innerHTML = "inches";
	} else if(conversion == "inchesCm") {
		convertedUnit = numberInput * 2.54;
		document.getElementById("firstUnit").innerHTML = "inches";
		document.getElementById("resultUnit").innerHTML = "cm";
	}
	
	if(isNaN(numberInput)){
		document.getElementById("result").innerHTML = "";
		document.getElementById("resultUnit").innerHTML = "";
	} else {
		document.getElementById("result").innerHTML = round(convertedUnit);
	}
	
}



setInterval(calculateResult, 200);

function exchangeUnits() {
	if(document.getElementById("units").value == "kmMiles"){
		document.getElementById("units").value = "milesKm";
	} else if(document.getElementById("units").value == "milesKm"){
		document.getElementById("units").value = "kmMiles";
	} else if(document.getElementById("units").value == "metersFoots"){
		document.getElementById("units").value = "footsMeters";
    } else if(document.getElementById("units").value == "footsMeters"){
		document.getElementById("units").value = "metersFoots";
	} else if(document.getElementById("units").value == "cmInches"){
		document.getElementById("units").value = "inchesCm";
    } else if(document.getElementById("units").value == "inchesCm"){
		document.getElementById("units").value = "cmInches";
	}
}

function save() {
	
	console.log("save function");
	var dataToSave = {
		conversion: document.getElementById("units").value,
		input: document.getElementById("quantity").value,
		result: document.getElementById("result").innerHTML
	}
	var idCandidate = 0;
	while(localStorage.getItem("Conversion"+idCandidate) != null){
		idCandidate++;
	}
	
	localStorage.setItem("Conversion"+idCandidate, JSON.stringify(dataToSave)); 
	
	
}

function load() {
	
	const dataList = [];
	for (let i = 0; i < localStorage.length; i++) { 
		dataList[i] = JSON.parse(localStorage.getItem("Conversion"+i));
	}
	var stringResult ="";
	console.log("Dato: "+ dataList[0]);
	var unitInput;
	var unitResult;
	
	var itemsFound=0;
	var i = 0;
	while(itemsFound < dataList.length){
		
		if(dataList[i]!=null){
			if(dataList[i].conversion=="kmMiles"){
				unitInput = "km";
				unitResult = "miles";
			} else if(dataList[i].conversion=="milesKm") {
				unitInput = "miles";
				unitResult = "km";
			} else if(dataList[i].conversion=="metersFoots") {
				unitInput = "meters";
				unitResult = "foots";
			} else if(dataList[i].conversion=="footsMeters") {
				unitInput = "foots";
				unitResult = "meters";
			} 	else if(dataList[i].conversion=="cmInches") {
				unitInput = "cm";
				unitResult = "inches";
			}	else if(dataList[i].conversion=="inchesCm") {
				unitInput = "inches";
				unitResult = "cm";
			}
			
			stringResult+="<div id="+i+" class="+"loadedData"+">"+
			dataList[i].input + " " +
			unitInput +" &rarr; "+
			dataList[i].result + " " + unitResult +
			"<img src="+"./images/Cross.png"+" id="+"cross"+" onclick=deleteData("+i+")></div>";
			itemsFound++;
		}
		i++;
		
	}
	
	var saveBox = document.getElementById("savedData");
	saveBox.innerHTML = stringResult;
	
}
setInterval(load, 2000);

/*
function deleteData(id){
	console.log("DeleteData function called" + id);
	localStorage.removeItem("Conversion"+id);
	
}*/
