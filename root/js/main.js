document.querySelectorAll('[link-atributo]').forEach(link => {
    link.onclick = function(e) {
        e.preventDefault()
        fetch(link.getAttribute('link-atributo'))
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
    }
});
// logo
$(function() {

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 60) {
            $(".logo").removeClass("none");
            $(".wthas").addClass("wthsPositionafter");
            $(".wthas").removeClass("wthsPositionahover");



        } else {
            $(".wthas").removeClass("wthsPositionafter");
            $(".wthas").addClass("wthsPositionahover");


            $(".logo").addClass("none");

        }
    });
});

//cor navegação
//home


$('.home').click(function() {
    if ($('.home').hasClass('navCorPrinc')) {


        $('.home').addClass('navCorSecund');

        //retira cor dos outros
        $('.historia').removeClass('navCorSecund');
        $('.trabalho').removeClass('navCorSecund');
        $('.produtos').removeClass('navCorSecund');
        $('.servicos').removeClass('navCorSecund');
        $('.fale').removeClass('navCorSecund');
        //add selected-menu
        $('.home').addClass('selected-menu');
        $('.historia').removeClass('selected-menu');
        $('.trabalho').removeClass('selected-menu');
        $('.fale').removeClass('selected-menu');
        $('.produtos').removeClass('selected-menu');
        $('.servicos').removeClass('selected-menu');

        $('#collapseServicos').removeClass('show');
        $('#collapseProdutos').removeClass('show');



    } else if (!$('.home').hasClass('navCorPrinc')) {
        $('.home').removeClass('navCorSecund');

        //retira cor dos outros
        $('.historia').removeClass('navCorSecund');
        $('.trabalho').removeClass('navCorSecund');
        $('.produtos').removeClass('navCorSecund');
        $('.servicos').removeClass('navCorSecund');
        $('.fale').removeClass('navCorSecund');
        //add selected-menu
        $('.home').addClass('selected-menu');
        $('.historia').removeClass('selected-menu');
        $('.trabalho').removeClass('selected-menu');
        $('.fale').removeClass('selected-menu');
        $('.produtos').removeClass('selected-menu');
        $('.servicos').removeClass('selected-menu');


    };



});
//história
$('.historia').click(function() {
    if ($('.historia').hasClass('navCorPrinc')) {

        $('.historia').addClass('navCorSecund');



        $('.home').removeClass('navCorSecund');
        $('.trabalho').removeClass('navCorSecund');
        $('.produtos').removeClass('navCorSecund');
        $('.servicos').removeClass('navCorSecund');
        $('.fale').removeClass('navCorSecund');

        //add selected-menu
        $('.historia').addClass('selected-menu');
        $('.home').removeClass('selected-menu');
        $('.trabalho').removeClass('selected-menu');
        $('.fale').removeClass('selected-menu');
        $('.produtos').removeClass('selected-menu');
        $('.servicos').removeClass('selected-menu');

        $('#collapseServicos').removeClass('show');
        $('#collapseProdutos').removeClass('show');



    } else {
        $('.historia').removeClass('navCorSecund');

        $('.home').removeClass('navCorSecund');
        $('.trabalho').removeClass('navCorSecund');
        $('.produtos').removeClass('navCorSecund');
        $('.servicos').removeClass('navCorSecund');
        $('.fale').removeClass('navCorSecund');

        //add selected-menu
        $('.historia').addClass('selected-menu');
        $('.home').removeClass('selected-menu');
        $('.trabalho').removeClass('selected-menu');
        $('.fale').removeClass('selected-menu');
        $('.produtos').removeClass('selected-menu');
        $('.servicos').removeClass('selected-menu');

    };


});
$('.trabalho').click(function() {
    if ($('.trabalho').hasClass('navCorPrinc')) {
        $('.trabalho').addClass('navCorSecund');



        $('.home').removeClass('navCorSecund');
        $('.historia').removeClass('navCorSecund');

        $('.produtos').removeClass('navCorSecund');
        $('.servicos').removeClass('navCorSecund');
        $('.fale').removeClass('navCorSecund');

        //add selected-menu
        $('.trabalho').addClass('selected-menu');
        $('.historia').removeClass('selected-menu');
        $('.home').removeClass('selected-menu');
        $('.fale').removeClass('selected-menu');
        $('.produtos').removeClass('selected-menu');
        $('.servicos').removeClass('selected-menu');

        $('#collapseServicos').removeClass('show');
        $('#collapseProdutos').removeClass('show');


    } else {
        $('.trabalho').removeClass('navCorSecund');

        $('.home').removeClass('navCorSecund');
        $('.historia').removeClass('navCorSecund');

        $('.produtos').removeClass('navCorSecund');
        $('.servicos').removeClass('navCorSecund');
        $('.fale').removeClass('navCorSecund');

        //add selected-menu
        $('.trabalho').addClass('selected-menu');
        $('.historia').removeClass('selected-menu');
        $('.home').removeClass('selected-menu');
        $('.fale').removeClass('selected-menu');
        $('.produtos').removeClass('selected-menu');
        $('.servicos').removeClass('selected-menu');

    };


});
$('.produtos').click(function() {

    if (!$('.produtos').hasClass('navCorSecund')) {
        $('.produtos').addClass('selected-menu');
        $('.servicos').removeClass('selected-menu');

        $('.produtos').addClass('navCorSecund');
        $('.servicos').removeClass('navCorSecund');

        $('#collapseProdutos').addClass('show');
        $('#collapseServicos').removeClass('show');





    } else {
        $('.produtos').removeClass('navCorSecund');
        $('.produtos').removeClass('selected-menu');
        $('#collapseProdutos').removeClass('show');
    }




});
$('.servicos').click(function() {
    if (!$('.servicos').hasClass('navCorSecund')) {
        $('.servicos').addClass('selected-menu');
        $('.servicos').addClass('navCorSecund');
        $('.produtos').removeClass('selected-menu');
        $('.produtos').removeClass('navCorSecund');

        $('.home').removeClass('navCorSecund');
        $('.historia').removeClass('navCorSecund');
        $('.trabalho').removeClass('navCorSecund');
        $('.produtos').removeClass('navCorSecund');
        $('.fale').removeClass('navCorSecund');

        $('.home').removeClass('selected-menu');
        $('.historia').removeClass('selected-menu');
        $('.trabalho').removeClass('selected-menu');
        $('.produtos').removeClass('selected-menu');
        $('.fale').removeClass('selected-menu');
        $('#collapseProdutos').removeClass('show');


    } else {



    };


});
$('.fale').click(function() {
    if ($('.fale').hasClass('navCorPrinc')) {
        $('.fale').addClass('navCorSecund');

        $('.fale').addClass('selected-menu');


        $('.home').removeClass('navCorSecund');
        $('.historia').removeClass('navCorSecund');
        $('.trabalho').removeClass('navCorSecund');
        $('.produtos').removeClass('navCorSecund');
        $('.servicos').removeClass('navCorSecund');

        //add selected-menu
        $('.fale').addClass('selected-menu');
        $('.historia').removeClass('selected-menu');
        $('.home').removeClass('selected-menu');
        $('.trabalho').removeClass('selected-menu');
        $('.produtos').removeClass('selected-menu');
        $('.servicos').removeClass('selected-menu');


        $('#collapseServicos').removeClass('show');
        $('#collapseProdutos').removeClass('show');

    } else {
        $('.fale').removeClass('navCorSecund');

        $('.fale').addClass('selected-menu');


        $('.home').removeClass('navCorSecund');
        $('.historia').removeClass('navCorSecund');
        $('.trabalho').removeClass('navCorSecund');
        $('.produtos').removeClass('navCorSecund');
        $('.servicos').removeClass('navCorSecund');

        //add selected-menu
        $('.fale').addClass('selected-menu');
        $('.historia').removeClass('selected-menu');
        $('.home').removeClass('selected-menu');
        $('.trabalho').removeClass('selected-menu');
        $('.produtos').removeClass('selected-menu');
        $('.servicos').removeClass('selected-menu');

    };


});
$('#check').change(function() {
    if ($('.barra').hasClass('barraAberta')) {
        $('.barra').removeClass('barraAberta');
    } else {
        $('.barra').addClass('barraAberta');
    }
})
$('.linkNavMob').click(function() {
    $('.barra').removeClass('barraAberta');
    $('.hamburguer').removeClass('hamburguerPos')

})



$('.hamburguer').click(function() {
        console.log('entrou')
        if ($('.hamburguer').hasClass('hamburguerPos')) {
            $('.hamburguer').removeClass('hamburguerPos')

            console.log('if')

        } else {
            $('.hamburguer').addClass('hamburguerPos')
            console.log('else')

        }
    })
    /*
    $('#produtos').mouseover(function() {

        $('#collapseProdutos').addClass('show');
        $('.produtos').addClass('navCorSecund');

    })
    $('#produtos' && '#collapseProdutos').mouseout(function() {

        $('#collapseProdutos').removeClass('show');
        $('.produtos').removeClass('navCorSecund');


    })

    $('#servicos').mouseover(function() {

        $('#collapseServicos').addClass('show');
        $('.servicos').addClass('navCorSecund');

    })
    $('#servicos' && '#collapseServicos').mouseout(function() {

        $('#collapseServicos').removeClass('show');
        $('.servicos').removeClass('navCorSecund');

    })

    */
console.log('Desenvolvido Carlos Alexandre Leutz');
console.log('Meu Github')
console.log('https://github.com/Carlos-Alexandre-Leutz')
console.log('Meu instagram')
console.log('https://www.instagram.com/carlosalexandreleutz/?hl=pt-br')
console.log('Sobre Mim')
console.log('https://carlos-alexandre-leutz.github.io/MyNewResumeSPA/#/')
console.log('Contato')