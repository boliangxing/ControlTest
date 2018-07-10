var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var RockerUI=(function(_super){
		function RockerUI(){
			
		    this.knob=null;

			RockerUI.__super.call(this);
		}

		CLASS$(RockerUI,'ui.RockerUI',_super);
		var __proto__=RockerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RockerUI.uiView);

		}

		RockerUI.uiView={"type":"View","props":{"width":300,"height":300},"child":[{"type":"Image","props":{"y":100,"x":94,"var":"knob","skin":"comp/bg.png"}}]};
		return RockerUI;
	})(View);