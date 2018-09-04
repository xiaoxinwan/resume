!function() { //添加offset类
    let specialTags = document.querySelectorAll('[data-x]') //选择有[data-x]的元素
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }


    findClosestAndRemoveOffset()
    window.addEventListener('scroll', function() {
        findClosestAndRemoveOffset()
    })







    function findClosestAndRemoveOffset() {
        let specialTags = document.querySelectorAll('[data-x]') //选择有[data-x]的元素
        let minIndex = 0
        for (let i = 1; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                //判断谁离顶部最近
                minIndex = i
            }
        }
        specialTags[minIndex].classList.remove('offset')
        for (let i = 0; i < specialTags.length; i++) {
            specialTags[i].classList.remove('active')
        }
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let brotherAndMe = li.parentNode.children
        for (let i = 0; i < brotherAndMe.length; i++) {
            brotherAndMe[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }

    let liTags = document.querySelectorAll('nav.menu > ul > li')
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function(x) {
            x.currentTarget.classList.add('active')
        }

        liTags[i].onmouseleave = function(x) {
            x.currentTarget.classList.remove('active')
        }
    }
}.call()