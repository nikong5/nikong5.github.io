/*↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ ALL ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓*/
$(function() {
	$("#table-weapon").bootstrapTable(weaponFunc());

	$.get('input/weapon.csv',function(data){
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
					var strWeapon = objArr[5];
					var strSkill1 = objArr[8];
					var strSkill1Name = objArr[9];
					var strAbility1 = objArr[10];
					var strAbility1Name = objArr[11];
					var strAbility2 = objArr[12];
					var strAbility2Name = objArr[13];
					var strHp = objArr[6];
					var strAtk = objArr[7];
					var strType = objArr[14];

					obj["icon"] = "<img src='img/weapon/"+strIcon+"' width='23' height='23'>";
					obj["name"] = strName;
					obj["rare"] = "<img src='img/character/"+strRare+"' width='13' height='13'>";
					obj["element"] = "<img src='img/character/"+strElement+"' width='13' height='13'>";
					obj["weapon"] = "<img src='img/character/"+strWeapon+"' width='13' height='13'>";
					obj["skill1"] = "<img src='img/weapon/"+strSkill1+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strSkill1Name+"</nobr>";
					obj["ability1"] = "<img src='img/weapon/"+strAbility1+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strAbility1Name+"</nobr>";
					obj["ability2"] = "<img src='img/weapon/"+strAbility2+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strAbility2Name+"</nobr>";
					obj["hp"] = strHp;
					obj["atk"] = strAtk;
					obj["type"] = "<img src='img/character/"+strType+"' width='15' height='15'>";
					dataList.push(obj);
				}
			}
		}
		console.log(dataList);

		$("#table-weapon").bootstrapTable("load", dataList);
  });
});

function weaponFunc() {
	var table = {
		pagination: true, //设置为 true 会在表格底部显示分页条
		pageSize: 50, //如果设置了分页，页面数据条数
		cache: true,
		search: true, //是否启用搜索框
		uniqueId: "icon",
		sortable: false, //是否启用排序
		sortOrder: "", //排序方式
		sortName: "", //需要排序的字段
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
				field: 'weapon',
				title: '武器',
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
				title: '技1',
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
function weaponFuncBranchSelect(selElement,selWeapon) {
	$("#table-weapon").bootstrapTable(weaponFunc());

	$.get('input/weapon.csv',function(data){
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
					var strWeapon = objArr[5];
					var strSkill1 = objArr[8];
					var strSkill1Name = objArr[9];
					var strAbility1 = objArr[10];
					var strAbility1Name = objArr[11];
					var strAbility2 = objArr[12];
					var strAbility2Name = objArr[13];
					var strHp = objArr[6];
					var strAtk = objArr[7];
					var strType = objArr[14];

					obj["icon"] = "<img src='img/weapon/"+strIcon+"' width='23' height='23'>";
					obj["name"] = strName;
					obj["rare"] = "<img src='img/character/"+strRare+"' width='13' height='13'>";
					obj["element"] = "<img src='img/character/"+strElement+"' width='13' height='13'>";
					obj["weapon"] = "<img src='img/character/"+strWeapon+"' width='13' height='13'>";
					obj["skill1"] = "<img src='img/weapon/"+strSkill1+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strSkill1Name+"</nobr>";
					obj["ability1"] = "<img src='img/weapon/"+strAbility1+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strAbility1Name+"</nobr>";
					obj["ability2"] = "<img src='img/weapon/"+strAbility2+"' width='23' height='23'>"+"<br>"+"<nobr style='font-size:7px;margin-left:-10px;'>"+strAbility2Name+"</nobr>";
					obj["hp"] = strHp;
					obj["atk"] = strAtk;
					obj["type"] = "<img src='img/character/"+strType+"' width='15' height='15'>";

					if(strElement==selElement || strWeapon==selWeapon || selElement=='ALL'){
						dataList.push(obj);
					}
				}
			}
		}
		console.log(dataList);

		$("#table-weapon").bootstrapTable("load", dataList);
  });
}
/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ BRANCH SELECT ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/
