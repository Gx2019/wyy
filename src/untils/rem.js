function font() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'
}

font() //项目初始化就运行一次


window.onresize = font //适配不同的尺寸 重新计算当前视口