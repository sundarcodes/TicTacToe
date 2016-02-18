$(document).ready(function(){

var nextItem;
var itemsSelected;
var maxRow=3;
var maxCol=3;
var lastItemSelected;
var lastTypeSelected;

init();

function init(){
	nextItem='cross';
	itemsSelected={}
	// First register event handler for the clicks on the boxes
	$('.box').on('click',function(){
		lastItemSelected=this;
		lastTypeSelected=nextItem;
		id=$(this).attr('id');
		rowIndex=id.substr(0,1);
		columnIndex = id.substr(2,1);
		if (itemsSelected[id]){
			return;
		}
		itemsSelected[id]=nextItem;
		$(this).addClass(nextItem);
		console.log(this);
		if (checkGameOver(rowIndex,columnIndex,nextItem)){
			alert('Game over');
			$('.box').off('click');
		}
		if(nextItem === 'cross'){
			nextItem = 'round';
		}else{
			nextItem = 'cross';
		}

});	

}

// Register for clicks on reset and undo button
$('#reset').click(function(){
	reset();
});

// Register for clicks on reset and undo button
$('#undo').click(function(){
	doUndo();
});


// Check game over or not
function checkGameOver(rowIndex,columnIndex,type){
	// Check if all boxes in same row has same type as passed.
	if (isAllRowSame(rowIndex,type)){
		return true;
	}// Check if all boxes in same column has same type as passed.
	else if(isAllColumnSame(columnIndex,type)){
		return true;
	}// Check if all boxes in diagonal from left to right
	else if(isAllLeftToRightDiagonalSame(type)){
		return true;
	}
	// Check if all boxes in diagonal from right to left
}

function isAllRowSame(rowIndex,type){
	// console.log(type);
	// console.log(itemsSelected);
	for(i=1;i<=maxRow;i++){
		index=rowIndex+'-'+i;
		if (itemsSelected[index] != type){
			return false;
		}
	}
	return true;
}
function isAllColumnSame(columnIndex,type){
	for(i=1;i<=maxCol;i++){
		index=i+'-'+columnIndex;
		// console.log(index);
		if (itemsSelected[index] != type){
			return false;
		}
	}
	return true;
}
function isAllLeftToRightDiagonalSame(type){
	for(i=1;i<=maxRow;i++){
		index=i+'-'+i;
		// console.log(index);
		if (itemsSelected[index] != type){
			return false;
		}
	}
	return true;
}
function isAllRightToLeftDiagonalSame(type){
	for(i=1;i<=maxRow;i++){
		index=i+'-'+i;
		// console.log(index);
		if (itemsSelected[index] != type){
			return false;
		}
	}
	return true;
}	

function doUndo(){
	$(lastItemSelected).removeClass(lastTypeSelected);
	nextItem=lastTypeSelected;
	// Remove from the selectedItems
	delete itemsSelected[$(lastItemSelected).attr('id')];
}

function reset(){
	$('.box').removeClass('cross');
	$('.box').removeClass('round');
	$('.box').off('click');
	init();
}
});


