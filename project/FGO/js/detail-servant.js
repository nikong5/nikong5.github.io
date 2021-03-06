$(function() {
	$("#table-base").bootstrapTable(baseFunc());
	$("#table-hogu").bootstrapTable(hoguFunc());
	$("#table-skill-1").bootstrapTable(skillActiveFunc());
	$("#table-skill-2").bootstrapTable(skillActiveFunc());
	$("#table-skill-3").bootstrapTable(skillActiveFunc());
	$("#table-skill-passive").bootstrapTable(skillPassiveFunc());
	$("#table-tegong").bootstrapTable(tegongFunc());
	$("#table-beitegong").bootstrapTable(beitegongFunc());

	//servant no
	var sno = getUrlParam("sno");

	//base info
	$.get('input/servant/'+sno+'/'+sno+'_base.csv',function(data){
		var dataList = [];
		var csv = $.csv.toArrays(data);
		if(!$.isEmptyObject(csv) && csv.length > 1) {
			for(var key = 1, len = csv.length; key < len; key++) {
				var values = csv[key];
				if(!$.isEmptyObject(values)) {
					var obj = {};
					var objArr = (String(values)).split(":");
					
					obj["col1"] = objArr[0].bold();
                    obj["col2"] = objArr[1];
                    obj["col3"] = objArr[2].bold();
                    obj["col4"] = objArr[3];
					dataList.push(obj);
				}
			}
		}
		// console.log(dataList);
        $("#table-base").bootstrapTable("load", dataList);
	});

	//hogu info
	$.get('input/servant/'+sno+'/'+sno+'_hogu.csv',function(data){
		var dataList = [];
		var csv = $.csv.toArrays(data);
		if(!$.isEmptyObject(csv) && csv.length > 1) {
			//hogu type
			var htype = csv[1];
			if(!$.isEmptyObject(htype)) {
				$("#hogu-type").text(htype);
			}
			//hogu detail
			for(var key = 2, len = csv.length; key < len; key++) {
				var values = csv[key];
				if(!$.isEmptyObject(values)) {
					var obj = {};
					var objArr = (String(values)).split(":");
					
                    obj["col1"] = objArr[0];
					dataList.push(obj);
				}
			}
		}
		// console.log(dataList);
        $("#table-hogu").bootstrapTable("load", dataList);
	});

	//skill 1
	$.get('input/servant/'+sno+'/'+sno+'_skill_1.csv',function(data){
		var dataList = [];
		var csv = $.csv.toArrays(data);
		if(!$.isEmptyObject(csv) && csv.length > 1) {
			//charge time
			var ctime = csv[1];
			if(!$.isEmptyObject(ctime)) {
				$("#skill-charge-1").text(ctime);
			}
			//skill 1 detail
			for(var key = 2, len = csv.length; key < len; key++) {
				var values = csv[key];
				if(!$.isEmptyObject(values)) {
					var obj = {};
					var objArr = (String(values)).split(":");
					
                    obj["col1"] = objArr[0];
					dataList.push(obj);
				}
			}
			
		}
		// console.log(dataList);
        $("#table-skill-1").bootstrapTable("load", dataList);
	});

	//skill 2
	$.get('input/servant/'+sno+'/'+sno+'_skill_2.csv',function(data){
		var dataList = [];
		var csv = $.csv.toArrays(data);
		if(!$.isEmptyObject(csv) && csv.length > 1) {
			//charge time
			var ctime = csv[1];
			if(!$.isEmptyObject(ctime)) {
				$("#skill-charge-2").text(ctime);
			}
			//skill 2 detail
			for(var key = 2, len = csv.length; key < len; key++) {
				var values = csv[key];
				if(!$.isEmptyObject(values)) {
					var obj = {};
					var objArr = (String(values)).split(":");
					
                    obj["col1"] = objArr[0];
					dataList.push(obj);
				}
			}
			
		}
		// console.log(dataList);
        $("#table-skill-2").bootstrapTable("load", dataList);
	});

	//skill 3
	$.get('input/servant/'+sno+'/'+sno+'_skill_3.csv',function(data){
		var dataList = [];
		var csv = $.csv.toArrays(data);
		if(!$.isEmptyObject(csv) && csv.length > 1) {
			//charge time
			var ctime = csv[1];
			if(!$.isEmptyObject(ctime)) {
				$("#skill-charge-3").text(ctime);
			}
			//skill 3 detail
			for(var key = 2, len = csv.length; key < len; key++) {
				var values = csv[key];
				if(!$.isEmptyObject(values)) {
					var obj = {};
					var objArr = (String(values)).split(":");
					
                    obj["col1"] = objArr[0];
					dataList.push(obj);
				}
			}
			
		}
		// console.log(dataList);
        $("#table-skill-3").bootstrapTable("load", dataList);
	});

	//passive skill info
	$.get('input/servant/'+sno+'/'+sno+'_skill_passive.csv',function(data){
		var dataList = [];
		var csv = $.csv.toArrays(data);
		if(!$.isEmptyObject(csv) && csv.length > 1) {
			for(var key = 1, len = csv.length; key < len; key++) {
				var values = csv[key];
				if(!$.isEmptyObject(values)) {
					var obj = {};
					var objArr = (String(values)).split(":");
					
                    obj["col1"] = objArr[0];
					dataList.push(obj);
				}
			}
		}
		// console.log(dataList);
		$("#table-skill-passive").bootstrapTable("load", dataList);
	});

	//tegong list
	$.get('input/servant/'+sno+'/'+sno+'_tegong.csv',function(data){
		var dataList = [];
		var csv = $.csv.toArrays(data);
		if(!$.isEmptyObject(csv) && csv.length > 1) {
			for(var key = 1, len = csv.length; key < len; key++) {
				var values = csv[key];
				if(!$.isEmptyObject(values)) {
					var objArr = (String(values)).split(":");

					//get tegong servant
					$.get('input/servant/tegong/'+objArr[1]+'.csv',function(data){
						var csv = $.csv.toArrays(data);
						if(!$.isEmptyObject(csv) && csv.length > 1) {
							for(var key = 1, len = csv.length; key < len; key++) {
								var values = csv[key];
								if(!$.isEmptyObject(values)) {
									var obj = {};
									var objArrT = (String(values)).split(":");
									
									obj["col1"] = objArrT[0];
									dataList.push(obj);
								}
							}
						}
						// console.log(dataList);
						$("#table-tegong").bootstrapTable("load", dataList);
					});

				}
			}
		}		
	});

	//beitegong list
	$.get('input/servant/'+sno+'/'+sno+'_beitegong.csv',function(data){
		var dataList = [];
		var csv = $.csv.toArrays(data);
		if(!$.isEmptyObject(csv) && csv.length > 1) {
			for(var key = 1, len = csv.length; key < len; key++) {
				var values = csv[key];
				if(!$.isEmptyObject(values)) {
					var objArr = (String(values)).split(":");

					//get tegong servant
					$.get('input/servant/beitegong/'+objArr[1]+'.csv',function(data){
						var csv = $.csv.toArrays(data);
						if(!$.isEmptyObject(csv) && csv.length > 1) {
							for(var key = 1, len = csv.length; key < len; key++) {
								var values = csv[key];
								if(!$.isEmptyObject(values)) {
									var obj = {};
									var objArrT = (String(values)).split(":");
									
									obj["col1"] = objArrT[0];
									dataList.push(obj);
								}
							}
						}
						// console.log(dataList);
						$("#table-beitegong").bootstrapTable("load", dataList);
					});

				}
			}
		}		
	});

});

function baseFunc() {
	var table = {
        cache: true,
        showHeader: false,
		columns: [{
				field: 'col1',
                width: 20
			},
			{
				field: 'col2',
				width: 40
			},
			{
				field: 'col3',
				width: 20
			},
			{
				field: 'col4',
				width: 60
			}]
	}
	return table;
};

function hoguFunc() {
	var table = {
        cache: true,
		showHeader: false,
		classes: 'table-bordered table-striped',
		columns: [{
				field: 'col1',
				align: 'center'
			}]
	}
	return table;
};

function skill1Func() {
	var table = {
        cache: true,
        showHeader: false,
		classes: 'table-bordered table-striped',
		columns: [{
				field: 'col1',
				align: 'center'
			}]
	}
	return table;
};

function skillActiveFunc() {
	var table = {
        cache: true,
        showHeader: false,
		classes: 'table-bordered table-striped',
		columns: [{
				field: 'col1',
				align: 'center'
			}]
	}
	return table;
};

function skillPassiveFunc() {
	var table = {
        cache: true,
        showHeader: false,
		classes: 'table-bordered table-striped',
		columns: [{
				field: 'col1',
				align: 'center'
			}]
	}
	return table;
};

function tegongFunc() {
	var table = {
        cache: true,
		showHeader: false,
		columns: [{
				field: 'col1'
			}]
	}
	return table;
};

function beitegongFunc() {
	var table = {
        cache: true,
		showHeader: false,
		columns: [{
				field: 'col1'
			}]
	}
	return table;
};

//get param from URL
function getUrlParam(k) {
	var regExp = new RegExp('([?]|&)' + k + '=([^&]*)(&|$)');
	var result = window.location.href.match(regExp);
	if (result) {
		return decodeURIComponent(result[2]);
	} else {
		return null;
	}
}
