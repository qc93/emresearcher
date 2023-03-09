function openTab(evt, tabName) {
  // 获取所有选项卡标签和内容区域
  var tablinks = document.querySelectorAll(".tablinks");
  var tabcontents = document.querySelectorAll(".tabcontent");

  // 隐藏所有内容区域
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("show");
    tabcontents[i].style.display = "none";
  }

  // 取消所有标签的活动状态
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // 显示新选中的内容区域和标签的活动状态
  var newContent = document.getElementById(tabName);
  newContent.style.display = "block";
  newContent.classList.add("show");
  evt.currentTarget.classList.add("active");
}


// 给所有标签添加点击事件处理程序
var tabButtons = document.getElementsByClassName("tablinks");
for (var i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener("click", function(evt) {
    openTab(evt, this.dataset.tab);
  });
}
