const search_lists = document.querySelector('.search-lists');
const input = document.querySelector('input');
input.addEventListener('keyup',function(){
     if(this.value==='朱慧慧'){
        search_lists.style.display = 'block';
     }else{
        search_lists.style.display = 'none';
     }  
});
let hour = 0;
let minute = 0;
let second = 0;
const pointers = document.querySelectorAll('.pointer');
const numberDivs = document.querySelectorAll('.numbers div');
const numberSpans = document.querySelectorAll('.numbers div span');
//数字块旋转
for(let i = 0;i<numberDivs.length;i++){
    numberDivs[i].style.transform = 'rotate('+(i+1)*30+'deg)';
}
//调整数字角度
for(let j = 0;j<numberSpans.length;j++){
    numberSpans[j].style.transform='rotate('+(j+1)*-30+'deg)';
}

///更新时间
function updateTime(){
    const now = new Date();
    const hours = now.getHours()%12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    hour = (hours + minutes/60 + seconds/60/60)*30;
    minute = (minutes + seconds/60)*360/60;
    second = seconds*360/60; 


}

//设置旋转
document.addEventListener('DOMContentLoaded',function(){
    updateTime();
    function rotatePointers(){
        pointers[0].style.transform = 'rotate('+hour+'deg)';
        pointers[1].style.transform = 'rotate('+minute+'deg)';
        pointers[2].style.transform = 'rotate('+second+'deg)';
        hour+=360/12/60/60;
        minute+=360/60/60;
        second+=360/60;
        setTimeout(rotatePointers,1000);
    }
    rotatePointers();

});