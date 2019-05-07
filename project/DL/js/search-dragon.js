/*↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ ALL ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓*/
$(function() {
	$("#table-dragon").bootstrapTable(dragonFunc());

	$.get('input/dragon.csv',function(data){
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
					var strElement = objArr[4];
					var strSkill1 = objArr[7];
					var strSkill1Name = objArr[8];
					var strAbility1 = objArr[9];
					var strAbility1Name = objArr[10];
					var strAbility2 = objArr[11];
					var strAbility2Name = objArr[12];
					var strHp = objArr[5];
					var strAtk = objArr[6];
					var strType = objArr[13];

					obj["icon"] = "<img src='img/dragon/"+strIcon+"' width='23' height='23'>";
					obj["name"] = strName;
					obj["rare"] = "<img src='img/dragon/"+strRare+"' width='13' height='13'>";
					obj["element"] = "<img src='img/dragon/"+strElement+"' width='13' height='13'>";
					obj["skill1"] = "<img src='img/dragon/"+strSkill1+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strSkill1Name+"</nobr>";
					obj["ability1"] = "<img src='img/dragon/"+strAbility1+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strAbility1Name+"</nobr>";
					obj["ability2"] = "<img src='img/dragon/"+strAbility2+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strAbility2Name+"</nobr>";
					obj["hp"] = strHp;
					obj["atk"] = strAtk;
					obj["type"] = "<img src='img/dragon/"+strType+"' width='15' height='15'>";
					dataList.push(obj);
				}
			}
		}
		console.log(dataList);

		$("#table-dragon").bootstrapTable("load", dataList);
  });
});

function dragonFunc() {
	var table = {
		pagination: true, //设置为 true 会在表格底部显示分页条
		pageSize: 50, //如果设置了分页，页面数据条数
		cache: true,
		search: true, //是否启用搜索框
		uniqueId: "icon",
		sortable: true, //是否启用排序
		sortOrder: "desc", //排序方式
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
				field: 'element',
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
				field: 'type',
				title: '类型',
				width: 40
			},
			{
				field: 'skill1',
				title: '技能',
				width: 50
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
			}]
	}
	return table;
};
/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ ALL ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/

/*↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ BRANCH SELECT ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓*/
function dragonFuncBranchSelect(selElement,selType) {
	$("#table-dragon").bootstrapTable(dragonFunc());

	$.get('input/dragon.csv',function(data){
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
					var strElement = objArr[4];
					var strSkill1 = objArr[7];
					var strSkill1Name = objArr[8];
					var strAbility1 = objArr[9];
					var strAbility1Name = objArr[10];
					var strAbility2 = objArr[11];
					var strAbility2Name = objArr[12];
					var strHp = objArr[5];
					var strAtk = objArr[6];
					var strType = objArr[13];

					if(strElement==selElement){
						obj["icon"] = "<img src='img/dragon/"+strIcon+"' width='23' height='23'>";
						obj["name"] = strName;
						obj["rare"] = "<img src='img/dragon/"+strRare+"' width='13' height='13'>";
						obj["element"] = "<img src='img/dragon/"+strElement+"' width='13' height='13'>";
						obj["skill1"] = "<img src='img/dragon/"+strSkill1+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strSkill1Name+"</nobr>";
						obj["ability1"] = "<img src='img/dragon/"+strAbility1+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strAbility1Name+"</nobr>";
						obj["ability2"] = "<img src='img/dragon/"+strAbility2+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strAbility2Name+"</nobr>";
						obj["hp"] = strHp;
						obj["atk"] = strAtk;
						obj["type"] = "<img src='img/dragon/"+strType+"' width='15' height='15'>";
						dataList.push(obj);
					}

					if(strType==selType){
						obj["icon"] = "<img src='img/dragon/"+strIcon+"' width='23' height='23'>";
						obj["name"] = strName;
						obj["rare"] = "<img src='img/dragon/"+strRare+"' width='13' height='13'>";
						obj["element"] = "<img src='img/dragon/"+strElement+"' width='13' height='13'>";
						obj["skill1"] = "<img src='img/dragon/"+strSkill1+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strSkill1Name+"</nobr>";
						obj["ability1"] = "<img src='img/dragon/"+strAbility1+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strAbility1Name+"</nobr>";
						obj["ability2"] = "<img src='img/dragon/"+strAbility2+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strAbility2Name+"</nobr>";
						obj["hp"] = strHp;
						obj["atk"] = strAtk;
						obj["type"] = "<img src='img/dragon/"+strType+"' width='15' height='15'>";
						dataList.push(obj);
					}
				}
			}
		}
		console.log(dataList);

		$("#table-dragon").bootstrapTable("load", dataList);
  });
}
/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ BRANCH SELECT ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/
