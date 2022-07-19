const grafik= document.querySelector("#chart").getContext('2d');

// grafik oluştur

new Chart(grafik,{
type:'line',
data:{
    labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'],
    datasets:[
        {
        label:'BTC',
        data:[29374,33745,49641,59095,57828,36684,39794,48884,48116,61565,65488],
        borderColor:'red',
        borderWidht:2
    },
    {
        label:'ETH',
        data:[31564,44745,33641,89095,47828,56684,69794,48884,58116,71565,36488],
        borderColor:'blue',
        borderWidht:2
    }

    ]
},
options:{
    responsive:true
}

})




// show or hide sidebar


const menuBtn=document.querySelector('#menu-btn');
const closeBtn=document.querySelector('#close-btn');
const sidebar=document.querySelector('aside');

menuBtn.addEventListener('click',()=>{
sidebar.style.display='block';

})

closeBtn.addEventListener('click',()=>{
    sidebar.style.display='none';
    
 })


 //change theme

 const themeBtn=document.querySelector(".theme-btn");

 themeBtn.addEventListener('click',()=>{

    document.body.classList.toggle("dark-theme");
    themeBtn.querySelector('span:first-child').classList.toggle("active");
    themeBtn.querySelector('span:last-child').classList.toggle("active");

 });