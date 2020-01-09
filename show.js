function show(i,j,randnumber){
	var numberc=$("#number-"+i+"-"+j);
	numberc.css("background-color",numberbackcolor(randnumber));
	numberc.css("color",numbercolor(randnumber));
	numberc.text(randnumber);
	numberc.animate({
		width:"100px",
		height:"100px",
		top:gettop(i,j),
		left:getleft(i,j)},50);
}

function showmove(rx,ry,lx,ly){
	var numberc=$("#number-"+rx+"-"+ry);
	numberc.animate({
		top:gettop(lx,ly),
		left:getleft(lx,ly)
	},200);
	
}

function updatescore(){
	$("#score").text(score);
}
