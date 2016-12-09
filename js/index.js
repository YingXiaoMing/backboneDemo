$(function(){
	var Test = Backbone.Model.extend({
		defaults:{
			content : ''
		}
	});
	var TestLine = Backbone.Collection.extend({
		model : Test
	});
	//实例化一个集合类data
	var data = new TestLine({
		content : 'hello,xiaoming'
	});
	var AppView = Backbone.View.extend({
		el : $("body"),
		initialize : function(){
			$("#appView").html(data.models[0].get("content"));
		}
	});
	var app = new AppView;
});
