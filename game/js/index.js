

// 检测打开网页的设备
function isPc() {
    let userAgentInfo = navigator.userAgent;
    console.log(typeof userAgentInfo);
    console.log(userAgentInfo);
    let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod", "Windows"];
    let result = '';
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            result = Agents[v];
            break;
        }
    }
    return result;
}

// 生成随机坐标
function randomXY(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min, 10);
}

$(document).ready(function () {

    let result = isPc();
    $('#device').html('当前设备为' + result);
    // 隐藏游戏
    $('#game-div').hide();
    // 显示home
    $('#home-div').show();
    $('#device').show();

    // 初始化画布
    let canvas1 = document.getElementById('canvas');
    let ctx1 = canvas1.getContext('2d');
    let canvas2 = document.getElementById('game');
    let ctx2 = canvas2.getContext('2d');
    let ref1, alpha, beta;

    // 首页上的运动方块
    let moveRect = {
        x: 45,
        y: 45,
        vx: 1,
        vy: 2,
        draw: function () {
            ctx1.fillStyle = '#FF5500';
            ctx1.strokeStyle = '#AA2A00';
            ctx1.fillRect(this.x, this.y, 10, 10);
            ctx1.strokeRect(this.x, this.y, 10, 10);
        }
    }

    // 首页动画
    function aniHome() {
        // 清除上一帧动画：重新绘制背景
        ctx1.clearRect(0, 0, 100, 100);
        moveRect.draw();
        moveRect.x += moveRect.vx;
        moveRect.y += moveRect.vy;
        if (moveRect.x > 85 || moveRect.x < 5) {
            moveRect.vx = -moveRect.vx;
        }
        if (moveRect.y > 85 || moveRect.y < 5) {
            moveRect.vy = -moveRect.vy;
        }
        ref1 = window.requestAnimationFrame(aniHome);
    }
    // 开始动画
    window.requestAnimationFrame(aniHome)

    $('.home-button').on('click', function () {
        // 暂停首页动画
        window.cancelAnimationFrame(ref1);

        // 隐藏首页
        $('#home-div').hide();
        // 显示游戏页面
        $('#game-div').show();
    });

    // 游戏运动方块
    let gameRect = {
        x: randomXY(15, 310 - 15),
        y: randomXY(15, 310 - 15),
        vx: 5,
        vy: 5,
        width: 20,
        height: 20,
        draw: function () {
            ctx2.fillStyle = '#F00';
            ctx2.strokeStyle = '#F00';
            ctx2.fillRect(this.x, this.y, this.width, this.height);
            ctx2.strokeRect(this.x, this.y, this.width, this.height);
        }
    }
    // gameRect.draw();

    // 游戏开始

    function beginGame() {

    }

});
