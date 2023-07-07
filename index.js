$(document).ready(function() {

    function changeLanguage(indexLang, actItem) {
        $(document).find('.header__lang-btn_active').removeClass('header__lang-btn_active')
        $(actItem).addClass('header__lang-btn_active')
    }
    let lang = $(document).find('.header__lang-btn')
    $(lang).each(function(i, item) {
        $(item).click(function() {
                changeLanguage(i, item)
        })
        })

})