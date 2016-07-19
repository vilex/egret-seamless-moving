class SeamLessMovingVo {
	/**
	 * 移动速度
	 * 这会和调用 update 方法的频率有关
	 */
	public speed:number = 1;
	/**
	 * 显示对象大小
	 * 如果设置的是上下滚动，则这个值应该等同于显示对象的高度
	 * 如果设置的是左右滚动，则这个值应该等同于显示对象的宽度
	 * @type {number}
	 */
	public size:number = 0;
	/**
	 * 滚动方向
	 * u : 向上
	 * d : 向下
	 * l : 向左
	 * y : 向右
	 */
	public direction:string = 'd';
	/**
	 * 需要滚动的元素数组
	 * 可以是图片
	 * 也可是其它显示对象
	 */
	public movingImages:egret.DisplayObject[] = null;
	/**
	 * 是否使用内置enterframe
	 * 如果不使用请帧事件或timer调用 update 方法 ， 暂停功能自行处理
	 * 如果使用内置enterframe, 调用 start 方法开始执行， pause 方法暂停
	 * @type {boolean}
	 */
	public isUseBuiltInEnterFrame:boolean = true;
}