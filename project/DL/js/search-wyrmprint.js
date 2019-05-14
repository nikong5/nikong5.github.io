/*↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ ALL ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓*/
$(function() {
	$("#table-wyrmprint").bootstrapTable(wyrmprintFunc());

	$.get('input/wyrmprint.csv',function(data){
		var dataList = [];
		var csv = $.csv.toArrays(data);
		if(!$.isEmptyObject(csv) && csv.length > 1) {
			for(var key = 1, len = csv.length; key < len; key++) {
				var values = csv[key];
				if(!$.isEmptyObject(values)) {
					var obj = {};
					var objArr = (String(values)).split(",");
					
					var strIcon = objArr[2];
					var strName = objArr[1];
					var strRare = objArr[3];
					var strAbility1 = objArr[6];
					var strAbility1Name = objArr[7];
					var strAbility2 = objArr[8];
					var strAbility2Name = objArr[9];
					var strAbility3 = objArr[10];
					var strAbility3Name = objArr[11];
					var strHp = objArr[4];
					var strAtk = objArr[5];
					var strType = objArr[12];

					obj["icon"] = "<img src='img/wyrmprint/"+strIcon+"' width='23' height='23'>";
					obj["name"] = strName;
					obj["rare"] = "<img src='img/wyrmprint/"+strRare+"' width='13' height='13'>";
					obj["ability1"] = "<img src='img/wyrmprint/"+strAbility1+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strAbility1Name+"</nobr>";
					obj["ability2"] = "<img src='img/wyrmprint/"+strAbility2+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strAbility2Name+"</nobr>";
					obj["ability3"] = "<img src='img/wyrmprint/"+strAbility3+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strAbility3Name+"</nobr>";
					obj["hp"] = strHp;
					obj["atk"] = strAtk;
					obj["type"] = "<img src='img/wyrmprint/"+strType+"' width='15' height='15'>";
					dataList.push(obj);
				}
			}
		}
		console.log(dataList);

		$("#table-wyrmprint").bootstrapTable("load", dataList);
  });
});

function wyrmprintFunc() {
	var table = {
		pagination: true, //设置为 true 会在表格底部显示分页条
		pageSize: 50, //如果设置了分页，页面数据条数
		cache: true,
		search: true, //是否启用搜索框
		uniqueId: "icon",
		sortable: true, //是否启用排序
		sortOrder: "asc", //排序方式
		sortName: "icon", //需要排序的字段
		columns: [
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
				field: 'rare',
				title: '稀有',
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
				field: 'type',
				title: '类型',
				width: 40
			},
			{
				field: 'ability1',
				title: '被1',
				width: 50
			},
			{
				field: 'ability2',
				title: '被2',
				width: 50
			},
			{
				field: 'ability3',
				title: '被3',
				width: 50
			}]
	}
	return table;
};
/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ ALL ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/

/*↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ BRANCH SELECT ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓*/
function wyrmprintFuncBranchSelect(selAnti,selType) {
	$("#table-wyrmprint").bootstrapTable(wyrmprintFunc());

	$.get('input/wyrmprint.csv',function(data){
		var dataList = [];
		var csv = $.csv.toArrays(data);
		if(!$.isEmptyObject(csv) && csv.length > 1) {
			for(var key = 1, len = csv.length; key < len; key++) {
				var values = csv[key];
				if(!$.isEmptyObject(values)) {
					var obj = {};
					var objArr = (String(values)).split(",");
					
					var strIcon = objArr[2];
					var strName = objArr[1];
					var strRare = objArr[3];
					var strAbility1 = objArr[6];
					var strAbility1Name = objArr[7];
					var strAbility2 = objArr[8];
					var strAbility2Name = objArr[9];
					var strAbility3 = objArr[10];
					var strAbility3Name = objArr[11];
					var strHp = objArr[4];
					var strAtk = objArr[5];
					var strType = objArr[12];
					var strAnti1 = objArr[13];
					var strAnti2 = objArr[14];
					var strAnti3 = objArr[15];

					obj["icon"] = "<img src='img/wyrmprint/"+strIcon+"' width='23' height='23'>";
					obj["name"] = strName;
					obj["rare"] = "<img src='img/wyrmprint/"+strRare+"' width='13' height='13'>";
					obj["ability1"] = "<img src='img/wyrmprint/"+strAbility1+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strAbility1Name+"</nobr>";
					obj["ability2"] = "<img src='img/wyrmprint/"+strAbility2+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strAbility2Name+"</nobr>";
					obj["ability3"] = "<img src='img/wyrmprint/"+strAbility3+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strAbility3Name+"</nobr>";
					obj["hp"] = strHp;
					obj["atk"] = strAtk;
					obj["type"] = "<img src='img/wyrmprint/"+strType+"' width='15' height='15'>";

					if(strAnti1==selAnti || strAnti2==selAnti || strAnti3==selAnti || strType.indexOf(selType)>-1 || selType=='ALL'){
						dataList.push(obj);
					}
				}
			}
		}
		console.log(dataList);

		$("#table-wyrmprint").bootstrapTable("load", dataList);
  });
}
/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ BRANCH SELECT ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/
