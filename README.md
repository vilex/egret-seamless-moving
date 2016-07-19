## 无缝循环滚动
- #### 示例
```
    // 具体参数说明可查看源码注释
    var smvo:SeamLessMovingVo = new SeamLessMovingVo();
    smvo.speed = 2;
    smvo.size = 640;
    smvo.direction = 'u';
    smvo.movingImages = [
        displayObject,
        displayObject,
        displayObject
    ]

    var sm:SeamLessMoving = new SeamLessMoving(smvo);
    this.addChild(sm);
    sm.start();
```
