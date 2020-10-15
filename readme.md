演示demo

1. [小猫转眼](https://wuyve.github.io/gyroscope-game/index.html)

简介: 转动手机，小猫的眼睛会跟随手机陀螺仪方向转动。

2. [别碰边儿](https://wuyve.github.io/gyroscope-game/game/index.html?t=256562)

简介：转动手机，让游戏中的方块不要触碰到边上，否则游戏结束。

# 陀螺仪

## 3个值: alpha、beta 和 gamma

alpha: 手机水平放置时，绕Z轴旋转的角度，0°-360°。

beta: 手机水平放置时，绕X轴旋转的角度，-180°-180°。

gamma: 手机水平放置时，绕Y轴旋转的角度，-90°-90°

# canvas

## 画椭圆

ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)是后来添加的，

参数的意思：(起点x.起点y,半径x,半径y,旋转的角度，起始角，结果角，顺时针还是逆时针)

## 画圆
ctx.arc(x, y, radius, startAngle, endAngle, Boolean)
圆心坐标: (x, y)
半径: radius
起始角度: startAngle
结束角度: endAngle
是否逆时针旋转: false 代表顺时针旋转

作者：我只会吃饭
链接：https://www.jianshu.com/p/f4c9f248f9f0
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。