var border=new Array();
var score=0;
$(document).ready(function(){
	playgame();
})

function playgame(){
	init();
   creatnumber();
   creatnumber();
	
}
function init(){
	for(var i=0;i<4;i++)
	for(var j=0;j<4;j++){
		var fang=$("#s-"+i+"-"+j);
		fang.css("top",gettop(i,j));
		fang.css("left",getleft(i,j));
	
	}
	for(var i=0;i<4;i++){
	border[i]=new Array();
	for(var j=0;j<4;j++)
	border[i][j]=0;
	}
	update();
}



function update(){
	
	$(".numberc").remove();
	for(var i=0;i<4;i++)
	for(var j=0;j<4;j++){
	$("#context").append(' <div class ="numberc" id ="number-'+i+'-'+j+ '"> </ div> ')
	var thenumber=$('#number-'+i+'-'+j);
	     

	if(border[i][j]==0){
		thenumber.css('height','0px');
		thenumber.css('width','0px');
		thenumber.css('top',gettop(i,j)+50);
		thenumber.css('left',getleft(i,j)+50);
		
	}else{
		thenumber.css('height','100px');
		thenumber.css('width','100px');
		thenumber.css('top',gettop(i,j));
		thenumber.css('left',getleft(i,j));
		thenumber.css('background-color',numberbackcolor(border[i][j]));
		thenumber.css('color',numbercolor(border[i][j]));
		thenumber.text(border[i][j]);
	}
	
}
}

function creatnumber(){
	if(nospace(border)){
		return false;
	}
	var randx=parseInt(Math.floor(Math.random()*4))
	var randy=parseInt(Math.floor(Math.random()*4))
	while(true){
	if(border[randx][randy]==0)
		break;
		
		randx=parseInt(Math.floor(Math.random()*4))
		randy=parseInt(Math.floor(Math.random()*4))
	}
	var randnumber=Math.random()<0.5?2:4;
	border[randx][randy]=randnumber;
	show(randx,randy,randnumber);

	return true;

}
$(document).keydown(function(event){
	switch(event.keyCode){
	case 37:
	if(moveleft()){
	creatnumber();
	gameover();}
	break;
	case 38:
	if(moveup()){
	creatnumber();
	gameover();}
	break;
	case 39:
	if(moveright()){
	creatnumber();
	gameover();}
	break;
	case 40:
	if(movedown()){
	creatnumber();
	gameover();}
	break;
	default:
	break;
	}
});

function moveleft(){
	if(!canmoveleft(border))
	return false;
	
	for(var i=0;i<4;i++)
	for(var j=1;j<4;j++){
		if(border[i][j]!=0){
		for(var k=0;k<j;k++){
		if(border[i][k]==0&&noblack(i,j,k,border)){
		showmove(i,j,i,k);
		border[i][k]=border[i][j];
		border[i][j]=0;
		continue;
		}else if(border[i][k]==border[i][j]&&noblack(i,j,k,border)){
			showmove(i,j,i,k);
			border[i][k]+=border[i][j];
			border[i][j]=0;
			score+=border[i][k];
			updatescore();
			continue;
		}
		
		}
		}
	}
    setTimeout("update()",200);
 
	return true;
}
function moveright(){
	if(!canmoveright(border))
	return false;
	
	for(var i=0;i<4;i++)
	for(var j=2;j>=0;j--){
		if(border[i][j]!=0){
		for(var k=3;k>j;k--){
		if(border[i][k]==0&&noblack(i,k,j,border)){
		showmove(i,j,i,k);
		border[i][k]=border[i][j];
		border[i][j]=0;
		continue;
		}else if(border[i][k]==border[i][j]&&noblack(i,j,k,border)){
			showmove(i,j,i,k);
			border[i][k]+=border[i][j];
			border[i][j]=0;
			score+=border[i][k];
			updatescore();
			continue;
		}
		
		}
		}
	}
    setTimeout("update()",200);
 
	return true;
}
function moveup(){
	if(!canmoveup(border))
	return false;
	
	
	for(var j=0;j<4;j++)
	for(var i=1;i<4;i++){
		if(border[i][j]!=0){
		for(var k=0;k<i;k++){
		if(border[k][j]==0&&noblack(j,i,k,border)){
		showmove(i,j,k,j);
		border[k][j]=border[i][j];
		border[i][j]=0;
		continue;
		}else if(border[k][j]==border[i][j]&&noblack(j,i,k,border)){
			showmove(i,j,k,j);
			border[k][j]+=border[i][j];
			border[i][j]=0;
			score+=border[k][j];
			updatescore();
			continue;
		}
		
		}
		}
	}
    setTimeout("update()",200);
 
	return true;
}
function movedown(){
	if(!canmovedown(border))
	return false;
	
	
	
	for(var i=2;i>=0;i--)
	for(var j=0;j<4;j++){
		if(border[i][j]!=0){
		for(var k=3;k>i;k--){
		if(border[k][j]==0&&noblack(j,k,i,border)){
		showmove(i,j,k,j);
		border[k][j]=border[i][j];
		border[i][j]=0;
		continue;
		}else if(border[k][j]==border[i][j]&&noblack(j,i,k,border)){
			showmove(i,j,k,j);
			border[k][j]+=border[i][j];
			border[i][j]=0;
			score+=border[k][j];
			updatescore();
			continue;
		}
		
		}
		}
	}
    setTimeout("update()",200);
 
	return true;
}

function gameover(){
	if(nospace(border)||nomove(border)){
		alert("游戏结束");
	}
	
}
