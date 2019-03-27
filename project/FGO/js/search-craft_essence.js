$(function() {
	$("#table-gainianlizhuang").bootstrapTable(craftFunc());

	$.get('input/craft_essence.csv',function(data){
		var dataList = [];
		var csv = $.csv.toArrays(data);
		if(!$.isEmptyObject(csv) && csv.length > 1) {
			for(var key = 1, len = csv.length; key < len; key++) {
				var values = csv[key];
				if(!$.isEmptyObject(values)) {
					var obj = {};
					var objArr = (String(values)).split(",");
					
					var strNo = objArr[18];
					var strIcon = objArr[12];
					var indexIcon = strIcon.lastIndexOf("\/");
					var strIconName = strIcon.substring(indexIcon + 1, strIcon.length); //截取最后一个斜杠后的字符串
					obj["no"] = readIntoArray(strNo)[2]-1;
					obj["icon"] = "<img src='img/gainianlizhuang/"+strIconName+"' width='23' height='23'>";
					obj["name"] = objArr[2];
					obj["cost"] = objArr[5];
					obj["hp"] = objArr[6]+"<br>"+objArr[7];
					obj["atk"] = objArr[8]+"<br>"+objArr[9];
					obj["comment"] = objArr[10]+"<br>"+objArr[11];
					dataList.push(obj);
				}
			}
		}
		console.log(dataList);
		$("#table-gainianlizhuang").bootstrapTable("load", dataList);
    });
});

function craftFunc() {
	var table = {
		pagination: true, //设置为 true 会在表格底部显示分页条
		pageSize: 50, //如果设置了分页，页面数据条数
		cache: true,
		search: true, //是否启用搜索框
		//showToggle:true, //是否显示 切换试图（table/card）按钮
		//checkboxHeader:true, //设置false 将在列头隐藏check-all checkbox
		//uniqueId: "id",
		//searchText:"搜索", //初始化搜索文字
		//selectItemName: "id",
		//showHeader:true, //是否显示列头
		//showFooter:false, //是否显示列脚
		//showRefresh: true, //是否显示 刷新按钮
		//showColumns: true, //是否显示 内容列下拉框
		sortable: true, //是否启用排序
		sortOrder: "asc", //排序方式
		sortName: "no", //需要排序的字段
		//clickToSelect:false, //设置true 将在点击行时，自动选择rediobox 和 checkbox

		//columns: [{
		//		field: 'id',
		//		title: 'ID',
		//		sortable: true,
		//		formatter: function(val, row, index) {
		//			return index + 1;
		//		}
		//	}, 
		columns: [{
				field: 'no',
				title: 'NO',
				width: 35
			},
			{
				field: 'icon',
				title: '图标',
				width: 50
			},
			{
				field: 'name',
				title: '名称',
				width: 100
			},
			{
				field: 'cost',
				title: 'COS',
				width: 40
			},
			{
				field: 'hp',
				title: 'HP',
				width: 40
			},
			{
				field: 'atk',
				title: 'ATK',
				width: 40
			},
			{
				field: 'comment',
				title: '详细',
				width: 270
			}],
	}
	return table;
};
