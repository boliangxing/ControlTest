
    function Example_roleControl(){
        //初始化引擎
        var WebGL = laya.webgl.WebGL;
        Laya.init(300, 300, WebGL);
        //画布垂直居中对齐
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        //画布水平居中对齐
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        //等比缩放
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
        //自动横屏，游戏的水平方向始终与浏览器屏幕较短边保持垂直
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
                Example_roleControl.rocker = new RockerView();
        Laya.stage.addChild(Example_roleControl.rocker);
        Laya.loader.load("res/atlas/comp.atlas");


    }

Example_roleControl();

