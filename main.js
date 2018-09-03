//添加offset类
        let specialTags = document.querySelectorAll('[data-x]') //选择有[data-x]的元素
        for(let i = 0; i<specialTags.length;i++){
            specialTags[i].classList.add('offset')
        }

       
        findClosest()

        //判断用户是否滚动页面
        window.onscroll = function(x) {
            if (window.scrollY > 0) {
                topNavBar.classList.add('sticky')
            } else {
                topNavBar.classList.remove('sticky')
            }
            findClosest()
        }

        function findClosest() {
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

        let aTags = document.querySelectorAll('nav.menu > ul > li > a')

        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
        for (let i = 0; i < aTags.length; i++) {
            aTags[i].onclick = function(b) {
                b.preventDefault()
                let a = b.currentTarget
                let href = a.getAttribute('href')
                let element = document.querySelector(href)
                let top = element.offsetTop


                let currentTop = window.scrollY
                let targetTop = top - 70
                let s = targetTop - currentTop
                var coords = {
                    y: currentTop
                };
                var t = Math.abs((s / 100) * 300)
                if (t > 500) {
                    t = 500
                }
                var tween = new TWEEN.Tween(coords)
                    .to({
                        y: targetTop
                    }, t)
                    .easing(TWEEN.Easing.Quadratic.InOut)
                    .onUpdate(function() {
                        window.scrollTo(0, coords.y)
                    })
                    .start();
            }
        }