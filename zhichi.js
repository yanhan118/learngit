function gettop(i,j){
	
		return 20+i*120;
	
}
function getleft(i,j){
	
		return 20+j*120;
	
}
function nospace(border){
	for(var i=0;i<4;i++)
	for(var j=0;j<4;j++)
	if(border[i][j]==0)
	return false;
	
	return true;
}
function numberbackcolor(number){
	switch(number){
	case 2:return "#FFFFCC" ;break;
	case 4:return "#FFCCCC" ;break;
	case 8:return "#FF99FF" ;break;
	case 16:return "#FF6666" ;break;
	case 32:return "#FF0033" ;break;
	case 64:return "#99FF66" ;break;
	case 128:return "#99CC66" ;break;
	case 256:return "#999966" ;break;
	case 512:return "#996666" ;break;
	case 1024:return "#993366" ;break;
	case 2048:return "#990066" ;break;
	case 4096:return "#330066" ;break;
	case 8192:return "#000000" ;break;
}
return "black";
}
	
function numbercolor(number){
	if(number<=4){
	return "#33FF00";
	}else{
		return "white";
	}
	
}
function noblack(row,col1,col2,border){
	for(var i=col2+1;i<col1;i++){
	if(border[row][i]!=0)
	return false;
	}
	return true;
}
function nolblack(h,col1,col2,border){
	for(var i=col2+1;i<col1;i++){
	if(border[i][h]!=0)
	return false;
	}
	return true;
}
function canmoveleft(border){
	for(var i=0;i<4;i++)
	for(var j=1;j<4;j++){
		if(border[i][j-1]==0||border[i][j-1]==border[i][j])
		return true;
	}
	return false;
}
function canmoveright(border){
	for(var i=0;i<4;i++)
	for(var j=2;j>=0;j--){
		if(border[i][j+1]==0||border[i][j+1]==border[i][j])
		return true;
	}
	return false;
}
function canmoveup(border){
	
	for(var j=0;j<4;j++)
	for(var i=1;i<4;i++){
		if(border[i-1][j]==0||border[i-1][j]==border[i][j])
		return true;
	}
	return false;
}
function canmovedown(border){
	for(var j=0;j<4;j++)
	for(var i=2;i>0;i--){
		if(border[i+1][j]==0||border[i+1][j]==border[i][j])
		return true;
	}
	return false;
}
function nomove(){
	if(canmoveleft(border)||canmoveright(border)||canmoveup(border)||canmovedown()){
		return false;
	}
	return true;
}
