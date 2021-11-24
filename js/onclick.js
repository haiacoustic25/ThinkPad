var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var heads = $$(".content__menu--list-head")
var lists = $$(".content__menu--list-selection")
var iconPlus = $$(".content__menu--list-icon-plus")
var iconMinus = $$(".content__menu--list-icon-minus")

//click hiển thị list
heads.forEach((e,index) => {
    var list = lists[index-1]
    var plus = iconPlus[index-1]
    var minus = iconMinus[index-1]
    e.onclick =() => {
        if(list.style.display == 'none') {
            list.style.display = 'block';
            plus.classList.remove('active')
            minus.classList.add('active')
        }
        else {
            list.style.display = 'none';    
            minus.classList.remove('active')
            plus.classList.add('active')
        } 
    }
})

// click hiển thị lên bộ lọc được áp dụng
var filter = $(".content__menu--list-display");
var checkBoxs = $$(".check-list__box");
var listTexts = $$(".check-list__text");
var nameProducts = $$(".product__info--name")


checkBoxs.forEach((e,index) => {
    var text = listTexts[index];
    filter.innerHTML ="";

    e.onclick = () => {
        if(e.checked === true){
            
            filter.innerHTML 
            += '<li class="display-item"><span class = "display-item__text" >'
            +text.innerText+
            '</span><i class="display-item__icon fas fa-times"></i></li>';
        }
        var removeItems = $$(".display-item__icon")
        var items = $$(".display-item") 
        var itemTexts = $$(".display-item__text")

        removeItems.forEach((a,indexItem) => {
            var item = items[indexItem];
            var itemText = itemTexts[indexItem];

            if(e.checked===false && text.innerText === itemText.innerText){
                item.style.display ='none';
            }
            a.onclick = () => {
                item.style.display ='none';
                checkBoxs.forEach((b,indexBox) => {
                    text = listTexts[indexBox];
                    if(text.innerText === itemText.innerText) {
                        b.checked = false;
                    }
                })
            }
        })

        // lọc sản phẩm
        var arrayFilter = []
        
        items.forEach((value,index) => {
            arrayFilter[index] = value.outerText;
        })
        
        arrayFilter.forEach((valueProduct) => {
            nameProducts.forEach((nameProduct) => {
                if(nameProduct.innerText.indexOf(valueProduct) > -1 || nameProduct.parentElement.parentElement.style.display ==='block' ) {
                    nameProduct.parentElement.parentElement.style.display ='block'
                }
                else nameProduct.parentElement.parentElement.style.display ='none'
            })
        })
    }
})

//phần xóa bộ lọc
var remove = $(".content__menu--remove")

remove.onclick = () => {
    filter.innerHTML ="";
    checkBoxs.forEach((e,index) => {
        if(e.checked === true) e.checked = false;
    })
    nameProducts.forEach((nameProduct) => {
        nameProduct.parentElement.parentElement.style.display ='block'
    })
}





