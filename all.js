
window.DeviceOrientationEvent.requestPermission()
    .then(state => {
        if (state === "granted") {//允许
            alert("允许使用陀螺仪：", state)
            if (window.DeviceOrientationEvent) {
                window.addEventListener('deviceorientation', function (event) {
                    var a = document.getElementById('alpha'),
                        b = document.getElementById('beta'),
                        g = document.getElementById('gamma'),
                        alpha = event.alpha,
                        beta = event.beta,
                        gamma = event.gamma;

                    a.innerHTML = Math.round(alpha);
                    b.innerHTML = Math.round(beta);
                    g.innerHTML = Math.round(gamma);

                }, false);
            } else {
                document.querySelector('body').innerHTML = '你的瀏覽器不支援喔';
            }
        } else if (state === "denied") {//拒绝
            alert("拒绝使用陀螺仪：", state)
        } else if (state === "prompt") {
            alert("用户进行其他操作：", state)
        }
    }) 