var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var pageNumbers = $$(".product__page--list-number")
var pageProducts = $$(".product__list--page")
var pageIconLeft = $(".product__page--list-icon-left")
var pageIconRight = $(".product__page--list-icon-right")

pageNumbers.forEach((number,index) => {
    number.onclick = () => {
        var pageProduct = pageProducts[index]; 
        $(".product__page--list-number.active").classList.remove("active");
        number.classList.add("active");
        $(".product__list--page.active").classList.remove("active");
        pageProduct.classList.add("active");
        $(".product__control").scrollIntoView({behavior: 'smooth'})
    }
})



