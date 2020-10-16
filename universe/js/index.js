$(document).ready(function () {
    let sun = new Image();
    let earth = new Image();
    let moon = new Image();
    let carImg = new Image();
    let treeImg = new Image();

    let car_x = 250, car_y = 150;
    let tree_x = 0, tree_y = 30;

    // 初始化
    function init() {
        sun.src = './img/sun.png';
        sun.width = 50;
        sun.height = 50;
        earth.src = './img/earth.png';
        moon.src = './img/moon.png';
        carImg.src = './img/car.png';
        treeImg.src = './img/tree.png';
        window.requestAnimationFrame(draw);
        balanceCar();
        drawTree();
    }
    let sunWidth = 150, sunHeight = 150;
    let vx = 0.5, vy = 0.5;
    let x = 115, y = 115;

    function draw() {
        // 定义宇宙画布
        let universe = document.getElementById('universe');
        let uni_ctx = universe.getContext('2d');

        uni_ctx.globalCompositeOperation = 'destination-over';
        uni_ctx.clearRect(0, 0, 300, 300);

        uni_ctx.strokeStyle = 'rgba(0,153,255,0.4)';

        uni_ctx.save();
        uni_ctx.translate(150, 150);

        // Earth
        var time = new Date();
        uni_ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
        uni_ctx.translate(105, 0);
        uni_ctx.drawImage(earth, -27, -27, 50, 50);

        // Moon
        uni_ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
        uni_ctx.translate(0, 28.5);
        uni_ctx.drawImage(moon, -10, -10, 25, 25);

        uni_ctx.restore();

        uni_ctx.beginPath();
        uni_ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // 地球运动轨迹
        uni_ctx.stroke();

        // Sun
        uni_ctx.drawImage(sun, x, y, sunWidth, sunHeight);
        sunWidth += vx, sunHeight += vy;
        x = 150 - sunWidth / 2, y = 150 - sunHeight / 2;
        if (sunWidth > 200 || sunWidth < 150) {
            vx = -vx, vy = -vy
        }
        window.requestAnimationFrame(draw);
    }
    init();

    // 运动的平衡车
    function balanceCar() {
        let car = document.getElementById('car');
        let ctx_car = car.getContext('2d');
        ctx_car.clearRect(0, 150, 300, 300);

        // 画路径
        ctx_car.strokeStyle = "#CCC";
        ctx_car.beginPath();
        ctx_car.moveTo(300, 250);
        ctx_car.lineTo(70, 310)
        ctx_car.stroke();
        ctx_car.save();

        ctx_car.beginPath();
        ctx_car.moveTo(300, 230);
        ctx_car.lineTo(70, 290)
        ctx_car.stroke();
        ctx_car.save();

        let car_vx = -2, car_vy = .5;
        ctx_car.drawImage(carImg, car_x, car_y, 50, 100);
        car_x += car_vx, car_y += car_vy;
        if (car_x < 70 || car_y > 280) {
            car_x = 250, car_y = 150;
        }
        window.requestAnimationFrame(balanceCar);
    }

    // 画树
    function drawTree() {
        let tree_canvas = document.getElementById('car');
        let ctx_tree = tree_canvas.getContext('2d');
        setTimeout(function () {
            while (tree_x < 320) {
                ctx_tree.drawImage(treeImg, tree_x, tree_y, 80, 80);
                tree_x += 80;
                tree_y -= 5;
            }
        }, 200);
    }
});
