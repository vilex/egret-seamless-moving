class SeamLessMoving extends egret.DisplayObjectContainer {
	
	private vo:SeamLessMovingVo = null;

	// x || y
	private axis : string = 'x';
	// 1 || -1
	private reverse:number = 1;

	constructor(vo:SeamLessMovingVo) {
		super();
		this.vo = vo;
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	}

	

	private onAddToStage(event: egret.Event):void{
		this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
		this.initConfig();

		var vo = this.vo;
		var images = vo.movingImages;
		for(var i = 0; i < images.length; i++){
			images[i][this.axis] = i * vo.size;
			this.addChild(images[i]);
		}
	}

	public start():void{
		this.removeEventListener(egret.Event.ENTER_FRAME,this.update,this);
        this.addEventListener(egret.Event.ENTER_FRAME,this.update,this);
	}
	
	public pause(): void {
        this.removeEventListener(egret.Event.ENTER_FRAME,this.update,this);
    }

	public update():void{
		var vo = this.vo;
		var images = vo.movingImages;
		var image:egret.DisplayObject;
		for(var i = 0; i < images.length; i++){
			image = images[i];
			image[this.axis] += vo.speed * this.reverse;
			this.resetImage(image);
		}
	}


	private resetImage(image):void{
		var vo = this.vo;
		var dir = vo.direction;
		var len = vo.movingImages.length;
		
		if(this.reverse == 1) {
			if(image[this.axis] > vo.size){
				image[this.axis] -= len * vo.size;
			}
		}else{
			if(image[this.axis] < -vo.size){
				image[this.axis] += len * vo.size;
			}
		}
	}

	private initConfig():void{
		var dir = this.vo.direction;
		switch(dir){
			case 'u':
				this.axis = 'y';
				this.reverse = -1;
				break;
			case 'd':
				this.axis = 'y';
				this.reverse = 1;
				break;
			case 'l':
				this.axis = 'x';
				this.reverse = -1;
				break;
			case 'r':
				this.axis = 'x';
				this.reverse = 1;
				break;
		}
	}


}