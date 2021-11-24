var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var products = $$(".grid-item")
var sortIncrease = $(".product__sort-increase")
var sortReduction = $(".product__sort-reduction")
var arrayProducts = [];
var boolean 

products.forEach((product,index) => {
    arrayProducts[index] = {
    img: $$(".product__img")[index],
    name:$$(".product__info--name")[index],
    option:$$(".product__info--option")[index],
    priceText : $$(".product__info--price-text")[index],
    priceNumber : $$(".product__info--price-number")[index],
    priceOld : $$(".product__info--price-old")[index],
    promotion: $$(".product__info--promotion")[index]
   }
})


sortIncrease.onclick = () => {
    boolean = false;
    sortIncrease.style.color = '#6bd9f0'
    sortReduction.style.color = 'black'

    arrayProducts.sort(function(a,b){
        if(a.priceNumber.innerText < b.priceNumber.innerText ) return -1;
        if(a.priceNumber.innerText > b.priceNumber.innerText) return 1;
        return 0;
    })
    setTimeout(()=>{
        $(".product__control").scrollIntoView({behavior: 'smooth'})
        products.forEach((product,index) => {
            product.innerHTML = "";
            product.innerHTML +=
            arrayProducts[index].img.outerHTML +
            '<div class="product__info">'+
            '<div class="product__info--name">'+ arrayProducts[index].name.innerText + '</div>'+
            '<div class="product__info--option">' + arrayProducts[index].option.outerHTML +'</div>' +
            '<div class="product__info--price">' +
                '<div class="product__info--price-text">Giá từ:</div>' +
                '<div class="product__info--price-number">' + arrayProducts[index].priceNumber.innerText+ '</div>'+
            '</div>' +
            arrayProducts[index].priceOld.outerHTML+
            '<div class="product__info--promotion">' +
                arrayProducts[index].promotion.outerHTML +
            '</div>' + 
            '</div>'
        })
    },1000)
    
    
}

sortReduction.onclick = () => {
    sortReduction.style.color = '#6bd9f0'
    sortIncrease.style.color = 'black'
    
    arrayProducts.sort(function(a,b){
        if(a.priceNumber.innerText > b.priceNumber.innerText ) return -1;
        if(a.priceNumber.innerText < b.priceNumber.innerText) return 1;
        return 0;
    })
    setTimeout(() =>{
        $(".product__control").scrollIntoView({behavior: 'smooth'})
        products.forEach((product,index) => {
            product.innerHTML = "";
            product.innerHTML +=
            arrayProducts[index].img.outerHTML +
            '<div class="product__info">'+
            '<div class="product__info--name">'+ arrayProducts[index].name.innerText + '</div>'+
            '<div class="product__info--option">' + arrayProducts[index].option.outerHTML +'</div>' +
            '<div class="product__info--price">' +
                '<div class="product__info--price-text">Giá từ:</div>' +
                '<div class="product__info--price-number">' + arrayProducts[index].priceNumber.innerText+ '</div>'+
            '</div>' +
            arrayProducts[index].priceOld.outerHTML+
            '<div class="product__info--promotion">' +
                arrayProducts[index].promotion.outerHTML +
            '</div>' + 
            '</div>'
        })
    },1000)
     
}






