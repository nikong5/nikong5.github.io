$(function() {
	$("#table-zhilingwenzhang").bootstrapTable(codeFunc());

	$.get('input/command_code.csv',function(data){
		var dataList = [];
		var csv = $.csv.toArrays(data);
		if(!$.isEmptyObject(csv) && csv.length > 1) {
			for(var key = 1, len = csv.length; key < len; key++) {
				var values = csv[key];
				if(!$.isEmptyObject(values)) {
					var obj = {};
					var objArr = (String(values)).split(",");
					
					var strNo = objArr[11];
					var strIcon = objArr[8];
					var indexIcon = strIcon.lastIndexOf("\/");
					var strIconName = strIcon.substring(indexIcon + 1, strIcon.length); //截取最后一个斜杠后的字符串
					obj["no"] = readIntoArray(strNo)[2]-1;
					obj["icon"] = "<img src='img/zhilingwenzhang/"+strIconName+"' width='28' height='28'>";
					obj["name"] = objArr[2];
					obj["detail"] = objArr[4];
					obj["get"] = objArr[6];
					dataList.push(obj);
				}
			}
		}
		console.log(dataList);
		$("#table-zhilingwenzhang").bootstrapTable("load", dataList);
    });
});

function codeFunc() {
	var table = {
		pagination: true, //设置为 true 会在表格底部显示分页条
		pageSize: 50, //如果设置了分页，页面数据条数
		cache: true,
		search: true, //是否启用搜索框
		//showToggle:true, //是否显示 切换试图（table/card）按钮
		//checkboxHeader:true, //设置false 将在列头隐藏check-all checkbox
		uniqueId: "no",
		//searchText:"搜索", //初始化搜索文字
		//selectItemName: "id",
		//showHeader:true, //是否显示列头
		//showFooter:false, //是否显示列脚
		//showRefresh: true, //是否显示 刷新按钮
		//showColumns: true, //是否显示 内容列下拉框
		sortable: true, //是否启用排序
		sortOrder: "desc", //排序方式
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
				field: 'detail',
				title: '效果',
				width: 270
			},
			{
				field: 'get',
				title: '获取途径',
				width: 100
			}]
	}
	return table;
};
