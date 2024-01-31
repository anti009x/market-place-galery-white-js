
const container = document.querySelector('.container')

const big = document.querySelector('.big')


container.addEventListener ('click',function(e){
    if(e.target.className == 'child'){
        big.src = e.target.src;
    }
})