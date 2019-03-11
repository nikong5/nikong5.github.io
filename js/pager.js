function subPage(listcount,clickbutton,listitem){
	$(listitem).hide();
	for(var count=0;count<listcount;count++){
		$(listitem).eq(count).show();
	}
	count=0;
	$(clickbutton).click(function(){
		$(this).addClass("f-theme").siblings().removeClass("f-theme");
		$(listitem).hide();
		var val=parseInt($(this).text());
		if(!isNaN(val)){
			var begin=(val-1)*listcount,end=begin+listcount;count=val-1;
			for(var i=begin;i<end;i++){
				$(listitem).eq(i).show();
			}
		}else if($(this).index()==0){
			if(count<1){
				count=1;
				console.log("已经是第一页了");
			}
			var begin=(count-1)*listcount,end=begin+listcount;
			for(var i=begin;i<end;i++){
				$(listitem).eq(i).show();
			}
			count--;
		}else if($(this).index()==($(clickbutton).length-1)){
			if(count>=$(clickbutton).length-3){
				count=$(clickbutton).length-4;
				console.log("已经是最后一页了");
			}
			var begin=(count+1)*listcount,end=begin+listcount;
			for(var i=begin;i<end;i++){
				$(listitem).eq(i).show();
			}
			count++;
		}
	})
}
