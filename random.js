var numberofdog;

function random() {
    
	numberofdog = Math.floor(Math.random() * 8 + 1)
    document.getElementById("number").innerHTML = numberofdog;
    
}
    
function showstart() {
    
    document.getElementById("start").innerHTML = "你选中了";
}
    
function showend() {
    
    document.getElementById("end").innerHTML = "号狗子";
}

function showdogname() {
	if (numberofdog == 1) {
		document.getElementById("dogname").innerHTML = "老司机";
	} else if (numberofdog == 2) {
		document.getElementById("dogname").innerHTML = "TaiwanOMG";
	} else if (numberofdog == 3) {
		document.getElementById("dogname").innerHTML = "龙一";
	} else if (numberofdog == 4) {
		document.getElementById("dogname").innerHTML = "小鬼";
	} else if (numberofdog == 5) {
		document.getElementById("dogname").innerHTML = "石头";
	} else if (numberofdog == 6) {
		document.getElementById("dogname").innerHTML = "老鬼";
	} else if (numberofdog == 7) {
		document.getElementById("dogname").innerHTML = "阿杰";
	} else {
		document.getElementById("dogname").innerHTML = "晓杰";
	}
}

function showpic() {
	if (numberofdog == 1) {
		document.getElementById("imgClickAndChange").src="Images/js-1.jpg";
		document.getElementById("imgClickAndChangeLink").href="Dogs/dog1.html";
	} else if (numberofdog == 2) {
		document.getElementById("imgClickAndChange").src="Images/js-2.jpg";
		document.getElementById("imgClickAndChangeLink").href="Dogs/dog2.html";
	} else if (numberofdog == 3) {
		document.getElementById("imgClickAndChange").src="Images/js-3.jpg";
		document.getElementById("imgClickAndChangeLink").href="Dogs/dog3.html";
	} else if (numberofdog == 4) {
		document.getElementById("imgClickAndChange").src="Images/js-4.jpg";
		document.getElementById("imgClickAndChangeLink").href="Dogs/dog4.html";
	} else if (numberofdog == 5) {
		document.getElementById("imgClickAndChange").src="Images/cn66-1.jpg";
		document.getElementById("imgClickAndChangeLink").href="Dogs/dog5.html";
	} else if (numberofdog == 6) {
		document.getElementById("imgClickAndChange").src="Images/cn66-2.jpg";
		document.getElementById("imgClickAndChangeLink").href="Dogs/dog6.html";
	} else if (numberofdog == 7) {
		document.getElementById("imgClickAndChange").src="Images/cn66-3.jpg";
		document.getElementById("imgClickAndChangeLink").href="Dogs/dog7.html";
	} else {
		document.getElementById("imgClickAndChange").src="Images/cn66-4.jpg";
		document.getElementById("imgClickAndChangeLink").href="Dogs/dog8.html";
	}
}