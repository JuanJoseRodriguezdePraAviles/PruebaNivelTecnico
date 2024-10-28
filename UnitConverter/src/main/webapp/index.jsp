<! DOCTYPE html>
<html>

<head>

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" type="text/css" href="css/styles.css" />
</head>
<body>
	<header>
		<div class="center">
			<img src="./images/Exchange.png" alt="Exchange icon"/>
			<h1>unit converter</h1>
		</div>
	</header>
	<div id="converterBox" class="center">
		<div id="convertText" class="textWhite row">convert</div>
		<div class="row">
			<select name="units" id="units" class="textWhite">
				<option value="kmMiles">km &rarr; miles</option>
				<option value="milesKm">miles &rarr; km</option>
				<option value="metersFoots">meters &rarr; foots</option>
				<option value="footsMeters">foots &rarr; meters</option>
				<option value="cmInches">cm &rarr; inches</option>
				<option value="inchesCm">inches &rarr; cm</option>
			</select>
			<img id="exchangeWhite" src="./images/ExchangeWhite.png" alt="Exchange icon" onclick="exchangeUnits()"/>
			<input type="number" id="quantity" class="textWhite" name="quantity" min="0" max="999999">
			<div id="firstUnit"  class="textWhite">
			</div>
		</div>
		<div class="row">
			<img src="./images/Icon.png" alt="Like icon" onclick="save()"/>
			<div id="resultUnit" class="textWhite"></div>
			<div id="result" class="textWhite"></div>
			
		</div>
	</div>
	<div id="saveBox" class="center">
		<div id="saveText">saved</div>
		<div id="savedData"></div>
		
	</div>
	<footer>
		<div>Terms of Service</div>
		<div>Privacy Policy</div>
	</footer>
</body>
<script src="js/mainPage.js"></script>
</html>
