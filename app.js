$(document).ready(function(){
	var nextItem='cross';
	var itemsSelected={};
	var maxRow=3;
	var maxCol=3;
// First register event handler for the button clicks
	$('.box').on('click',function(){
		id=$(this).attr('id');
		rowIndex=id.substr(0,1);
		columnIndex = id.substr(2,1);
		//itemsSelected.push({id:nextItem});
		itemsSelected[id]=nextItem;
		$(this).addClass(nextItem);
		if (checkGameOver(rowIndex,columnIndex,nextItem)){
			alert('Game over');
			$('.box').off('click');
		}
		if(nextItem === 'cross'){
			nextItem = 'round';
		}else{
			nextItem = 'cross';
		}
		$(this).off('click');

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

});

