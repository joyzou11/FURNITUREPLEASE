document.addEventListener("DOMContentLoaded", () => {
    const snowContainer = document.getElementById("snow-container");
    const snowflakeCount = 150; // 雪花数量
    console.log("Snowfall script is running!");

    for (let i = 0; i < snowflakeCount; i++) {
        createSnowflake();
    }

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");

        // 随机从屏幕四周某个位置生成
        let edge = Math.floor(Math.random() * 4);
        let startX, startY, moveX, moveY;

        switch (edge) {
            case 0: // 从顶部落下
                startX = Math.random() * window.innerWidth;
                startY = -10;
                moveX = (Math.random() - 0.5) * 200; // 横向偏移
                moveY = window.innerHeight + 20;
                break;
            case 1: // 从底部上升
                startX = Math.random() * window.innerWidth;
                startY = window.innerHeight + 10;
                moveX = (Math.random() - 0.5) * 200;
                moveY = -window.innerHeight - 20;
                break;
            case 2: // 从左侧飘入
                startX = -10;
                startY = Math.random() * window.innerHeight;
                moveX = window.innerWidth + 20;
                moveY = (Math.random() - 0.5) * 200;
                break;
            case 3: // 从右侧飘入
                startX = window.innerWidth + 10;
                startY = Math.random() * window.innerHeight;
                moveX = -window.innerWidth - 20;
                moveY = (Math.random() - 0.5) * 200;
                break;
        }
         snowflake.style.opacity = Math.random();

        // 设置雪花初始位置
        snowflake.style.left = `${startX}px`;
        snowflake.style.top = `${startY}px`;

        // 计算动画时长 & 速度
        let duration = Math.random() * 9 + 3; // 3 ~ 8 秒飘落时间
        snowflake.style.animationDuration = `${duration}s`;

        // 设置随机移动距离
        snowflake.style.setProperty("--x-move", `${moveX}px`);
        snowflake.style.setProperty("--y-move", `${moveY}px`);

        snowContainer.appendChild(snowflake);

        // 动画结束后删除雪花 & 重新生成
        setTimeout(() => {
            snowflake.remove();
            createSnowflake();
        }, duration * 1000);
    }
});