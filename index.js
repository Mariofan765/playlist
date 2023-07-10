$(document).ready(function() {
    let arr = [
        {
            autor: 'Macintosh',
            track: '420',
            time: '7:29'
        },
        {
            autor: 'LYRIQ',
            track: 'Почему?',
            time: '3:29'
        },
        {
            autor: 'Градусы',
            track: 'Кто ты?',
            time: '4:29'
        },
        {
            autor: 'Буерак',
            track: 'Культ тела',
            time: '3:29'
        },
        {
            autor: 'ГСПД',
            track: 'У России три пути',
            time: '2:29'
        }
    ]
    let template = `
        <div class="popup">
        <input class="popup__close" type="button" value="X">
        <div class="popup__forms">
            
        </div>
        <input class="popup__submit" type="button">
        </div>`
    let formArr = $(document).find('.header__form-btn')
    let lang = $(document).find('.header__lang-btn')
    let body = $(document).find('body');
    let popups = [
        {
            key: 'reg',
            name: '',
            password: '',
            confirmPass: '',
            submitBtnVal: 'Зарегаться'
        },
        {
            key: 'log',
            login: '',
            password: '',
            submitBtnVal: 'Залогаться'
        }
    ]
        $(lang).each((i, item) => {
            $(item).click(function() {
                findBlock(item)
            })
        })
    let artist = $(document).find('.header__menu-btn')
        $(artist).each((i, item) => {
            $(item).on('click', () => {
                findBlock(item)
            })
        })
    function findBlock(item) {
        let block = $(item).parent()
        changeBtn(block, item)
    }
    function changeBtn(block, item) {
        $(block).find('input').each((i, item) => {
            if($(item).hasClass('active-btn')) {
                $(item).removeClass('active-btn')
            }
        })
        $(item).addClass('active-btn')
    }
    function choosePopup(itemBtn) {
        $(itemBtn).each((i, item) => {
            $(item).on('click', () => {
                openPopup($(item).attr(`data-form`))
            })
        })

    }
    function openPopup(keys) {
        $(popups).each((i, item) => {
            if(item.key === keys) {
               $(body).html(`${$(body).html()} ${generatePopup(template, keys)}`)
            }
        })
    }
    function generatePopup (template, key) {
        let typeForm = popups.findIndex(function (item) {
            return item.key;
        })
        console.log(typeForm)
        let forms = $(template).find('.popup__forms')
        switch (typeForm) {
            case typeForm = 0:
                console.log(forms)
            break;
            case typeForm = 1:
                console.log('penis')
            break;
        }
        return template;
    }
    choosePopup(formArr)
})
// function findBlock(block) {
//     console.log(block)
//     let classEl = $(block).attr('class').split(' ')[0].slice(8, 12)
//     console.log(classEl)
//     changeBtn(block, classEl)
// }
// function changeBtn(block, actItem) {
//     $(document).find(`.header__${actItem}-btn`).removeClass(`header__${actItem}-btn_active`)
//     $(block).addClass(`header__${actItem}-btn_active`)
// }