if(localStorage.getItem('theme') === 'dark'){
    $('.dark').addClass('active')
    $('.light').removeClass('active')
    $('body').addClass('dark-theme')
    $('body').removeClass('light-theme')
}else if(localStorage.getItem('theme') === 'light'){
    $('.light').addClass('active')
    $('.dark').removeClass('active')
    $('body').addClass('light-theme')
    $('body').removeClass('dark-theme')
}

$('.dark').on('click' , ()=>{
    localStorage.setItem('theme' , 'dark')
    $('body').addClass('dark-theme')
    $('body').removeClass('light-theme')
})
$('.light').on('click' , ()=>{
    localStorage.setItem('theme' , 'light')
    $('body').removeClass('dark-theme')
    $('body').addClass('light-theme')
})