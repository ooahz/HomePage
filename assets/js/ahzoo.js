/*
 * Ahzoo HomePage
 * (c) Ahzoo
 * Last Update: 2021/2/12
 * Modify by Ahzoo
 * Home Page：ahzoo.cn
*/
function changetxt(){if(document.getElementById("z-title").innerText=="清 梦") {document.getElementById("z-title").innerText="Ahzoo";document.getElementById("z-centerText").innerText="都还没开始尝试，不要提前担心结局";$('#a-topLeft svg').children().css('fill', '#ed8936');document.getElementById("z-title").style.color="#ed8936";}else{document.getElementById("z-title").innerText="清 梦";document.getElementById("z-centerText").innerText="醉后不知天在水，满船清梦压星河";$('#a-topLeft svg').children().css('fill', '#4299e1');document.getElementById("z-title").style.color="#4299e1";}
}