const generate=document.querySelector('#Generate');
const extract=document.querySelector('#Extract');
const pallete=document.querySelector('.pallete');
let store="";
//selecting and creating important variables or elements

//generating random hexacodes
function generateColor(){
    const temp='abcdef0123456789';
    let color='#';
    for(let i=0;i<6;i++){
        color+=temp[Math.floor(Math.random()*temp.length)];
    }

    return color;
}


//creating pallete
function generatePallete(){
    pallete.innerHTML="";
    store="";
    for(let i=0;i<5;i++){
        let colHex=generateColor();


        let color=document.createElement('div');
        let span=document.createElement('span');
        let bold=document.createElement('b');
        let icon2=document.createElement('i');

        color.className='color';
        span.className='color';
        bold.className='b';
        icon2.className="icon1"
        icon2.title="Copy me!";
        icon2.className="bi bi-clipboard";

        span.appendChild(bold);
        span.appendChild(icon2);
        color.appendChild(span);
        pallete.appendChild(color);

        bold.innerHTML=colHex;
        span.style.backgroundColor= colHex;
        store+=`${colHex} `;



        icon2.addEventListener('click',(e)=>{
            var el=document.createElement('input');
            el.value=colHex;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            // let targetI=e.target.parentNode.parentNode.querySelector('input[name="color"]');
            // targetI.select();
            // console.log(targetI.parentNode.parentNode);
            // document.execCommand('copy');
            notification(`Color ${colHex} is copied!!`);
        })
    }
    console.log(store);
}


generate.addEventListener('click', generatePallete);

//notification
function notification(msg){
    let old=document.querySelector('.alert');
    if(old){
        old.parentNode.removeChild(old);
    }
    const alert=document.createElement('div');
    alert.className='alert';
    alert.innerHTML=msg;
    document.body.appendChild(alert);
    setTimeout(()=>alert.classList.add('active'),1);
    setTimeout(()=>alert.classList.remove('active'),1000);
}

generatePallete();

///extracting
extract.addEventListener('click',function(){
    var el=document.createElement('input');
    el.value=store;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    notification("Copied");
});



