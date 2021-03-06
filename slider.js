$(() => {
    let arr = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]
    let src = 0
    let timer
    $("#slider")
        .css({
            position: 'relative',
            width: "80%",
            height: "60vh",
            margin: "10vh auto",
            boxShadow: "0 0 10px #000",
            background: `url('img/${arr[src]}') center/cover`,
            overflow: "hidden"
        })
        .append('<div id="slide"></div>')
        .click(function(e) {
            change( (e.pageX > $(window).width() / 2) ? 1 : -1 )
        })
        //.mouseenter(function() { clearTimeout(timer) })
        //.mouseleave(function() { timer = setTimeout(change, 3000) })

    $('#slide').css({
        position: "absolute",
        width: "100%",
        height: "100%",
    })

    timer = setTimeout(change, 3000)

    function change(direction = 1) {
        clearTimeout(timer)
        src += direction
        if ( src < 0 ) src = arr.length - 1
        if ( src >= arr.length ) src = 0
        $('#slide')
            .css({
                left: direction * $("#slider").width(),
                background: `url('img/${arr[src]}') center/cover`
            })
            .animate({
                left: 0
            }, 1000, function() {
                $('#slider').css({
                    background: `url('img/${arr[src]}') center/cover`
                })
            })
        timer = setTimeout(change, 3000)
    }
})
