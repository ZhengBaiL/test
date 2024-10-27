var picture = document.querySelectorAll(".selected");
var points = document.querySelectorAll("#list li");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var container = document.getElementById("container");
var current = 0;
// 切换方法
function autoPlay(ind) {
    console.log(ind);
    // 清空所有样式
    for(var i=0;i<points.length;i++) {
        points[i].className = '';
        picture[i].className = 'selected';
    }
    // 添加对应项样式
    points[ind].className = 'active';
    picture[ind].className = 'selected choose'
}

// 点击points 切换图片
for(var i=0;i<points.length;i++) {
    points[i].index = i;
    points[i].onclick = function() {
        current = this.index;
        autoPlay(current)
    }
}

// 点击上一页
prev.onclick = function() {
    current--;
    if(current < 0) {
       current = picture.length - 1;
    }
    autoPlay(current);
}

// 点击下一页
next.onclick = function() {
    current++;
    if(current > picture.length - 1) {
        current = 0;
    }
    autoPlay(current);
}

// 自动轮播
var timer = setInterval(function(){
    next.onclick()
},1000);

// 鼠标划过
container.onmousemove = function() {
    prev.style.display = 'block';
    next.style.display = 'block';
    clearInterval(timer);
}

// 鼠标划出
container.onmouseout = function() {
    prev.style.display = 'none';
    next.style.display = 'none';
    timer = setInterval(function(){
        next.onclick()
    },1000);
}