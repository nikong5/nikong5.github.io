/*↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ ALL ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓*/
$(function() {
	$("#table-servant").bootstrapTable(servantFunc());

	$.get('input/servant.csv',function(data){
		var dataList = [];
		var csv = $.csv.toArrays(data);
		if(!$.isEmptyObject(csv) && csv.length > 1) {
			for(var key = 1, len = csv.length; key < len; key++) {
				var values = csv[key];
				if(!$.isEmptyObject(values)) {
					var obj = {};
					var objArr = (String(values)).split(",");
					
					var strNo = objArr[12];
					var strClass = objArr[20];
					var strClassName = strClass.substring(strClass.lastIndexOf("/")+1);
					var strIcon = objArr[12];
					var strIconName = strIcon.substring(strClass.lastIndexOf("/")+1);
					var strHogu = objArr[18];
					var strHoguIcon = strHogu.substring(strClass.lastIndexOf("/")+1);
					var strHoguName = objArr[19];
					var strCard1 = objArr[13];
					var strCard1Name = strCard1.substring(strClass.lastIndexOf("/")+1);
					var strCard2 = objArr[14];
					var strCard2Name = strCard2.substring(strClass.lastIndexOf("/")+1);
					var strCard3 = objArr[15];
					var strCard3Name = strCard3.substring(strClass.lastIndexOf("/")+1);
					var strCard4 = objArr[16];
					var strCard4Name = strCard4.substring(strClass.lastIndexOf("/")+1);
					var strCard5 = objArr[17];
					var strCard5Name = strCard5.substring(strClass.lastIndexOf("/")+1);

					obj["no"] = (strNo.substring(strNo.lastIndexOf("/")+8)).substring(0,3);
					obj["class"] = "<img src='img/servant/"+strClassName+"' width='20' height='20'>";
					obj["icon"] = "<img src='img/servant/"+strIconName+"' width='28' height='30'>";
					obj["name"] = objArr[1];
					obj["hogu"] = "<img src='img/servant/"+strHoguIcon+"' width='20' height='20'>"+"<br>"+"<nobr style='font-size:7px;margin-left:2px;'>"+strHoguName+"</nobr>";
					obj["card"] = "<nobr><img src='img/servant/"+strCard1Name+"' width='15' height='15'>"+"<img src='img/servant/"+strCard2Name+"' width='15' height='15'>"+"<img src='img/servant/"+strCard3Name+"' width='15' height='15'>"+"<img src='img/servant/"+strCard4Name+"' width='15' height='15'>"+"<img src='img/servant/"+strCard5Name+"' width='15' height='15'></nobr>";
					obj["type"] = objArr[7];
					obj["hp"] = "<nobr style='margin-right:10px;'>"+objArr[9]+"</nobr>";
					obj["atk"] = objArr[10];
					obj["rare"] = objArr[8];
					dataList.push(obj);
				}
			}
		}
		console.log(dataList);
		$("#table-servant").bootstrapTable("load", dataList);
	});
});

function servantFunc() {
	var table = {
		pagination: true, //设置为 true 会在表格底部显示分页条
		pageSize: 50, //如果设置了分页，页面数据条数
		cache: true,
		search: true, //是否启用搜索框
		uniqueId: "no",
		sortable: true, //是否启用排序
		sortOrder: "desc", //排序方式
		sortName: "no", //需要排序的字段
		onClickRow:function(row) {
			//window.open("input/servant/"+row.no+".html",row.name,"fullscreen=no,width=350,height=500,resizable=no");
			window.location.href = "servant_detail.html?sno="+row.no;
		},
		columns: [{
				field: 'no',
				title: 'NO',
				width: 35
			},
			{
				field: 'class',
				title: '职阶',
				width: 40
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
				field: 'hogu',
				title: '宝具',
				width: 40
			},
			{
				field: 'card',
				title: '配卡',
				width: 100
			},
			{
				field: 'type',
				title: '属性',
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
				field: 'rare',
				title: '获取方式',
				width: 90
			}]
	}
	return table;
};
/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ ALL ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/

/*↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ BRANCH SELECT ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓*/
function servantFuncBranchSelect(selClassName) {
	$("#table-servant").bootstrapTable(servantFunc());

	$.get('input/servant.csv',function(data){
		var dataList = [];
		var csv = $.csv.toArrays(data);
		if(!$.isEmptyObject(csv) && csv.length > 1) {
			for(var key = 1, len = csv.length; key < len; key++) {
				var values = csv[key];
				if(!$.isEmptyObject(values)) {
					var obj = {};
					var objArr = (String(values)).split(",");
					
					var strNo = objArr[12];
					var strClass = objArr[20];
					var strClassName = strClass.substring(strClass.lastIndexOf("/")+1);
					var strClassNameNoColor = strClassName.substring(2,strClassName.length-4);
					var strIcon = objArr[12];
					var strIconName = strIcon.substring(strClass.lastIndexOf("/")+1);
					var strHogu = objArr[18];
					var strHoguIcon = strHogu.substring(strClass.lastIndexOf("/")+1);
					var strHoguName = objArr[19];
					var strCard1 = objArr[13];
					var strCard1Name = strCard1.substring(strClass.lastIndexOf("/")+1);
					var strCard2 = objArr[14];
					var strCard2Name = strCard2.substring(strClass.lastIndexOf("/")+1);
					var strCard3 = objArr[15];
					var strCard3Name = strCard3.substring(strClass.lastIndexOf("/")+1);
					var strCard4 = objArr[16];
					var strCard4Name = strCard4.substring(strClass.lastIndexOf("/")+1);
					var strCard5 = objArr[17];
					var strCard5Name = strCard5.substring(strClass.lastIndexOf("/")+1);

					obj["no"] = (strNo.substring(strNo.lastIndexOf("/")+8)).substring(0,3);
					obj["class"] = "<img src='img/servant/"+strClassName+"' width='20' height='20'>";
					obj["icon"] = "<img src='img/servant/"+strIconName+"' width='28' height='30'>";
					obj["name"] = objArr[1];
					obj["hogu"] = "<img src='img/servant/"+strHoguIcon+"' width='20' height='20'>"+"<br>"+"<nobr style='font-size:7px;margin-left:2px;'>"+strHoguName+"</nobr>";
					obj["card"] = "<nobr><img src='img/servant/"+strCard1Name+"' width='15' height='15'>"+"<img src='img/servant/"+strCard2Name+"' width='15' height='15'>"+"<img src='img/servant/"+strCard3Name+"' width='15' height='15'>"+"<img src='img/servant/"+strCard4Name+"' width='15' height='15'>"+"<img src='img/servant/"+strCard5Name+"' width='15' height='15'></nobr>";
					obj["type"] = objArr[7];
					obj["hp"] = "<nobr style='margin-right:10px;'>"+objArr[9]+"</nobr>";
					obj["atk"] = objArr[10];
					obj["rare"] = objArr[8];

					if(strClassNameNoColor==selClassName || selClassName=='ALL'){
						dataList.push(obj);
					}
				}
			}
		}
		console.log(dataList);

		$("#table-servant").bootstrapTable("load", dataList);
  });
}
/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ BRANCH SELECT ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/
