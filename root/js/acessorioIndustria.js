var btnSelecao1 = document.getElementById('btn-selecao-1');
var btnSelecao2 = document.getElementById('btn-selecao-2');
var btnSelecao3 = document.getElementById('btn-selecao-3');
var btnSelecao4 = document.getElementById('btn-selecao-4');
var btnSelecao5 = document.getElementById('btn-selecao-5');
var btnSelecao6 = document.getElementById('btn-selecao-6');
var btnSelecao7 = document.getElementById('btn-selecao-7');
var btnSelecao8 = document.getElementById('btn-selecao-8');
var btnSelecao9 = document.getElementById('btn-selecao-9');
var btnSelecao10 = document.getElementById('btn-selecao-10');
var btnSelecao11 = document.getElementById('btn-selecao-11');
var btnSelecao12 = document.getElementById('btn-selecao-12');
var descricaoProduto = document.getElementById('descricaoProduto');
var ValTit = document.getElementById('Val-tit');
var modal1 = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('modal3');
var modal4 = document.getElementById('modal4');
var modal5 = document.getElementById('modal5');
var tmpl1 = document.getElementById("cont-seletor-primeiro").innerHTML;
var tmpl2 = document.getElementById("cont-seletor-segundo").innerHTML;
var tmpl3 = document.getElementById("cont-seletor-terceiro").innerHTML;
var btnAnterior = document.getElementById('anterior');
var btnProximo = document.getElementById('proximo');
var semimg = 'Selecione uma imagem';




document.getElementById('content').innerHTML = tmpl1;
btnAnterior.addEventListener('click', function(e) {
    var impreso = document.getElementById('content').innerHTML;
    if (impreso == tmpl1) {
        document.getElementById('content').innerHTML = tmpl2;
    } else if (impreso == tmpl2) {
        document.getElementById('content').innerHTML = tmpl1;
    }
});
btnProximo.addEventListener('click', function(e) {
    var impreso = document.getElementById('content').innerHTML;
    if (impreso == tmpl1) {
        document.getElementById('content').innerHTML = tmpl2;
    } else if (impreso == tmpl2) {
        document.getElementById('content').innerHTML = tmpl1;
    }
});

function btnValvulas() {
    ValTit.innerHTML = 'Válvulas'
    btnSelecao1.innerHTML = 'Válvula de esfera ferro alta pressão';
    btnSelecao2.innerHTML = 'Válvula de esfera ferro baixa pressão';
    btnSelecao3.innerHTML = 'Válvula de esfera aço inox';
    btnSelecao4.innerHTML = 'Válvula esfera mini';
    btnSelecao5.innerHTML = 'Válvula borboleta';
    btnSelecao6.innerHTML = 'Válvula de gaveta';
    btnSelecao7.innerHTML = 'Válvula Anti-retorno PVC';
    btnSelecao8.innerHTML = 'Válvula Anti-retorno Latão Vertical';
    btnSelecao9.innerHTML = 'Válvula Anti-retorno Latão Horizontal';
    btnSelecao10.innerHTML = 'Válvula Captação Pvc';
    btnSelecao11.innerHTML = 'Válvula Captação Latão';
    btnSelecao12.innerHTML = 'Válvula agulha';
    descricaoProduto.innerHTML = 'Válvula de esfera de ferro alta pressão – indicado para sistema de alta pressão que utilizam de fechamentos manuais. Válvula de esfera com bloqueio manual para gás, ar, água e outros fluidos.';
    limparClass();
    $('.cont-industria').addClass('cont-industria-valvulas-1');
    escondeBtnSelecao();
    $('#btn-selecao-5').removeClass('display-none');
    $('#btn-selecao-6').removeClass('display-none');
    $('#btn-selecao-7').removeClass('display-none');
    $('#btn-selecao-8').removeClass('display-none');
    $('#btn-selecao-9').removeClass('display-none');
    $('#btn-selecao-10').removeClass('display-none');
    $('#btn-selecao-11').removeClass('display-none');
    $('#btn-selecao-12').removeClass('display-none');
    removeImg();
    modal5.innerHTML = '<img src="/root/img/cont-industria/valvulas/Válvula - valvulas de esfera aço carbono alta pressão.jpg" alt="">';
    removeClassbacgclickacessorioind();
    btnSelecao1.classList.add("bacg-click-acessorio-ind");
    btnSelecao1.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'Válvula de esfera de ferro alta pressão – indicado para sistema de alta pressão que utilizam de fechamentos manuais. Válvula de esfera com bloqueio manual para gás, ar, água e outros fluidos.';
        $('.cont-industria').addClass('cont-industria-valvulas-1');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/valvulas/Válvula - valvulas de esfera aço carbono alta pressão.jpg" alt="">';
        limpaContImgBtnModal1();

    });
    btnSelecao2.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'indicado para sistema de baixa pressão que utilizam de fechamentos manuais. Válvula de esfera com bloqueio manual para gás, ar, água e outros fluidos.';
        $('.cont-industria').addClass('cont-industria-valvulas-2');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/valvulas/Válvula- valvulas de esfera aço carbono baixa pressão.jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao3.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'Indicado para aplicações onde necessitam da não contaminação do fluido interno que esteja passando dentro ela, como produtos alimentícios.';
        $('.cont-industria').addClass('cont-industria-valvulas-3');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/valvulas/Válvula - valvula  de esfera aço inox.jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao4.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'Possuem passagem reduzida devido ao seu corpo possuir pouco matéria e tamanho físico. Construção em latão, com corpo cromado, possui rosca gás BSP e acionamento através de borboleta de alumínio. Indicado apenas para aplicações em sistema de baixa pressão de trabalho.'
        $('.cont-industria').addClass('cont-industria-valvulas-4');
        removeImg();
        modal3.innerHTML = '<img src="/root/img/cont-industria/valvulas/VALVULA DE ESFERA (2).jpg" alt="">';
        modal4.innerHTML = '<img src="/root/img/cont-industria/valvulas/VALVULA DE ESFERA.jpg" alt="">';
        modal5.innerHTML = '<img src="/root/img/cont-industria/valvulas/VALVÚLA DE ESFERA.jpg" alt="">';
        limpaContImgBtnModal1();
        $('.cont-btn-modal-3').addClass('cont-btn-modal');
        $('.cont-btn-modal-4').addClass('cont-btn-modal');


    });
    btnSelecao5.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'A válvula borboleta é constituída de uma haste que adentra a sede circular as válvulas e, uma vez no interior da sede, a haste assume a forma de disco impedindo a passagem de fluidos. Disco de fechamento esse, podendo ser de ferro ou aço inox variando de sua aplicação.'
        $('.cont-industria').addClass('cont-industria-valvulas-5');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/valvulas/Válvula - valvula Borboleta.jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao6.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'Uma válvula de gaveta é uma válvula que se abre levantando uma porta/cunha redonda ou retangular para fora do trajeto do fluido. A característica distinta de uma válvula de gaveta é que a superfície de vedação entre a "gaveta" e sua sede é plana, então, válvulas de gaveta são usadas frequentemente quando é desejado um fluxo em linha reta e restrição mínima.'
        $('.cont-industria').addClass('cont-industria-valvulas-6');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/valvulas/Válvula - valvula de Gaveta.jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao7.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'Válvulas Anti-Retorno ou de Retenção são desenvolvidas para permitirem o fluxo livre em um sentido e bloquear o fluxo no sentido oposto. As válvulas que possuem sua estrutura de PVC são indicadas para sistemas de baixa pressão.'
        $('.cont-industria').addClass('cont-industria-valvulas-7');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/valvulas/Válvula - valvula Anti-retorno PVC (1).jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao8.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'Desenvolvida para retenção de fluido em fluxos de tubulações verticais. Possui sistema de vedação em borracha nitrílica proporcionando assim uma vedação perfeita no seu fechamento através de uma mola que está no interior do corpo da válvula.'
        $('.cont-industria').addClass('cont-industria-valvulas-8');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/valvulas/Válvula - valvula Anti-retorno Latão Horizontal (1).jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao9.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'Desenvolvida para retenção de fluido em fluxos de tubulações horizontais. Possui sistema de vedação em borracha nitrílica proporcionando assim uma vedação perfeita no seu fechamento. Esta válvula não possui mola para auxílio de sua vedação.'
        $('.cont-industria').addClass('cont-industria-valvulas-9');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/valvulas/Válvula - valvula Anti-retorno Latão Horizontal (1).jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao10.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'Válvula de Captação ou Sucção em PVC com mola interna, para assegurar o retorno da válvula para a posição fechada, mesmo em ângulos inclinados. Aplicação indicada em poço artesiano, rede de distribuição de água e sistema de captação de água (recalque).'
        $('.cont-industria').addClass('cont-industria-valvulas-10');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/valvulas/Válvula - valvula Captação Pvc (1).jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao11.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'Válvula de Captação ou Sucção em latão com mola interna, para assegurar o retorno da válvula para a posição fechada, mesmo em ângulos inclinados. Aplicação indicada em poço artesiano, rede de distribuição de água e sistema de captação de água (recalque).'
        $('.cont-industria').addClass('cont-industria-valvulas-11');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/valvulas/Válvula - valvula Captação Latão (1).jpg" alt=""></img>';
        limpaContImgBtnModal1();

    });
    btnSelecao12.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'Também conhecido como registro de agulha, é um tipo de válvula usada quando se deseja um fino controle do fluxo. As válvulas agulham recebem este nome porque são projetadas com agulha de metal, na maioria das vezes, produzidas de aço inoxidável, bronze ou outras ligas de aço. Seu sistema de vedação é feito com o próprio metal através de uma haste e um volante.'
        $('.cont-industria').addClass('cont-industria-valvulas-12');
        removeImg();
        limpaContImgBtnModal1();
    });
}
btnValvulas();

function btnMontagemINdustrial() {
    ValTit.innerHTML = 'Acessórios para Montagem Industrial';
    btnSelecao1.innerHTML = 'Adesivo de silicone';
    btnSelecao2.innerHTML = 'Veda rosca líquido';
    btnSelecao3.innerHTML = 'Fita veda rosca';
    btnSelecao4.innerHTML = 'Desengripante';
    btnSelecao5.innerHTML = 'Trava rosca';
    btnSelecao6.innerHTML = 'Desengraxante';
    btnSelecao7.innerHTML = 'Grafite spray';
    descricaoProduto.innerHTML = 'É um adesivo de silicone multiuso flexível de cura acética, ideal para reparar uma grande variedade de materiais como: vidro, metais, madeira, alumínio, policarbonatos e outros.';
    limparClass();
    $('.cont-industria').addClass('cont-industria-montagem-industrial-1');
    escondeBtnSelecao();
    $('#btn-selecao-5').removeClass('display-none');
    $('#btn-selecao-6').removeClass('display-none');
    $('#btn-selecao-7').removeClass('display-none');
    removeClassbacgclickacessorioind();
    limpaContImgBtnModal1();
    btnSelecao1.classList.add("bacg-click-acessorio-ind");
    removeImg();
    modal4.innerHTML = '<img src="/root/img/cont-industria/acessorioPMontagemIndustrial/ADESIVO DE SILICONE.jpg" alt="">';
    modal5.innerHTML = '<img src="/root/img/cont-industria/acessorioPMontagemIndustrial/ADESIVO DE SILICONE PARA O MOTOR.jpg" alt="">';
    limpaContImgBtnModal1();
    $('.cont-btn-modal-4').addClass('cont-btn-modal');
    btnSelecao1.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'É um adesivo de silicone multiuso flexível de cura acética, ideal para reparar uma grande variedade de materiais como: vidro, metais, madeira, alumínio, policarbonatos e outros.';
        $('.cont-industria').addClass('cont-industria-montagem-industrial-1');
        removeImg();
        modal4.innerHTML = '<img src="/root/img/cont-industria/acessorioPMontagemIndustrial/ADESIVO DE SILICONE.jpg" alt="">';
        modal5.innerHTML = '<img src="/root/img/cont-industria/acessorioPMontagemIndustrial/ADESIVO DE SILICONE PARA O MOTOR.jpg" alt="">';
        limpaContImgBtnModal1();
        $('.cont-btn-modal-4').addClass('cont-btn-modal');
    });
    btnSelecao2.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'Vedante à base de borracha sintética, para vedação de roscas em tubos, flanges e conexões de metal e PVC rígido. Pode ainda ser utilizado em tubulação de vácuo, água quente e outras aplicações na área industrial';
        $('.cont-industria').addClass('cont-industria-montagem-industrial-2');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/acessorioPMontagemIndustrial/VEDA ROSCA LÍQUIDO (CATEGORIA 7) (1).jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao3.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'A fita veda-rosca é uma fita, geralmente branca usada na vendagem de tubulações de líquidos ou gases. Por ser composta de um material bastante estável, pode ser usada para isolar uma variedade grande de materiais.';
        $('.cont-industria').addClass('cont-industria-montagem-industrial-3');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/acessorioPMontagemIndustrial/FITA VEDA ROSCA.jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao4.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'Possui uma formulação exclusiva que o torna um lubrificante multiuso, atuando em toda área da construção civil, onde há a necessidade de lubrificação e proteção contra o efeito da oxidação em materiais, equipamentos e superfícies metálicas. Age como antioxidante eliminando a água da superfície. Forma um filme aderente, diminuindo o atrito e o desgaste entre as peças.'
        $('.cont-industria').addClass('cont-industria-montagem-industrial-4');
        removeImg();
        modal4.innerHTML = '<img src="/root/img/cont-industria/acessorioPMontagemIndustrial/LUBRIFICANTE SPRAY.jpg" alt="">';
        modal5.innerHTML = '<img src="/root/img/cont-industria/acessorioPMontagemIndustrial/DESENGRIPANTE.jpg" alt="">';
        limpaContImgBtnModal1();
        $('.cont-btn-modal-4').addClass('cont-btn-modal');
    });
    btnSelecao5.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'é um adesivo de torque alto, com média viscosidade. Indicado para travamento de porcas, parafusos e prisioneiros tratados ou não (zincados, cadmiados, etc.), preenche as folgas existentes entre as peças. Possui forte poder de travamento, evitando o afrouxamento acidental.';
        $('.cont-industria').addClass('cont-industria-montagem-industrial-5');
        removeImg();
        modal4.innerHTML = '<img src="/root/img/cont-industria/acessorioPMontagemIndustrial/TRAVA ROSCA (2).jpg" alt="">';
        modal5.innerHTML = '<img src="/root/img/cont-industria/acessorioPMontagemIndustrial/TRAVA ROSCA.jpg" alt="">';
        limpaContImgBtnModal1();
        $('.cont-btn-modal-4').addClass('cont-btn-modal');
    });
    btnSelecao6.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'É indicado para remoção de graxas e sujeira nas mãos e em superfícies, rodas de alumínio, panelas engorduradas, coifas, exaustores, couros, madeiras, pinturas de parede, geladeiras, cromados, borrachas, etc.';
        $('.cont-industria').addClass('cont-industria-montagem-industrial-6');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/acessorioPMontagemIndustrial/GEL DESENGRAXANTE.jpg" alt="">';
        limpaContImgBtnModal1();

    });
    btnSelecao7.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'Possui uma baixa granulação e proporciona uma lubrificação seca de alta performance. Forma uma fina película seca, facilitando o deslizamento entre as partes.';
        $('.cont-industria').addClass('cont-industria-montagem-industrial-7');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/acessorioPMontagemIndustrial/GRAFITE-SPRAY.jpg" alt="">';
        limpaContImgBtnModal1();

    });
};

function btnAcessoriosOficinas() {
    ValTit.innerHTML = 'Acessórios para Oficinas, Pinturas e Borracharias';
    btnSelecao1.innerHTML = 'Pistola de ar';
    btnSelecao2.innerHTML = 'Pistola de pintura';
    btnSelecao3.innerHTML = 'Calibradores para pneu';
    btnSelecao4.innerHTML = 'Enchedores para pneu';
    btnSelecao5.innerHTML = 'Chave saca filtros';
    descricaoProduto.innerHTML = 'As pistolas de ar de limpezas são ideias para uso frequentes por serem bastante confortáveis. Resistente e fácil de usar, possui corpo com formato de pistola que permite o usuário trabalhar por mais tempo, fabricada em alumínio (apenas o revestimento do cabo é feito em plástico).';
    limparClass();
    $('.cont-industria').addClass('cont-industria-pintura-1');
    escondeBtnSelecao();
    $('#btn-selecao-5').removeClass('display-none');
    removeClassbacgclickacessorioind();
    btnSelecao1.classList.add("bacg-click-acessorio-ind");
    removeImg();
    modal5.innerHTML = '<img src="/root/img/cont-industria/Aces p oficinas otimizado/PISTOLA DE AR.jpg" alt="">';

    limpaContImgBtnModal1();
    btnSelecao1.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'As pistolas de ar de limpezas são ideias para uso frequentes por serem bastante confortáveis. Resistente e fácil de usar, possui corpo com formato de pistola que permite o usuário trabalhar por mais tempo, fabricada em alumínio (apenas o revestimento do cabo é feito em plástico).';
        limparClass();
        $('.cont-industria').addClass('cont-industria-pintura-1');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/Aces p oficinas otimizado/PISTOLA DE AR.jpg" alt="">';
        limpaContImgBtnModal1();
    });

    btnSelecao2.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'Pistola de pintura para de alta produção com revolucionaria, indicado para uso profissional em funilarias, marcenarias, serralherias e para outras diversas aplicações. Possui regulagem do fluxo de ar e da vazão de tinta e controle do jato.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-pintura-2');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/pintura/PULVERIZADOR.jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao3.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'A uma ferramenta ideal, apropriada e segura para fazer uma calibragem precisa, erros na calibragem pode gerar desgastes no pneu. P possui corpo de alumínio resistente.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-pintura-3');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/pintura/CALIBRADORES.jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao4.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'Possui entrada de ar rosca fêmea, com bico duplo de encher dependendo de sua aplicação e cabo emborrachado. Também possuímos outro modelo no qual é indicado a calibradores, sendo assim é possível conectar a mangueira direto no enchedor de pneu';
        limparClass();
        $('.cont-industria').addClass('cont-industria-pintura-4');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/pintura/BICO DE TRAVA PARA ENCHER PNEUS.jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao5.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'Chave saca filtro de corrente regulável especial, produto de ótima qualidade e garantindo a melhor fixação para extração do filtro. Possui cabo emborrachado e adaptável em qualquer tamanho e diâmetro de filtro de óleo.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-pintura-5');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/pintura/SACA FILTRO DE ÓLEO.jpg" alt=""></img>';
        limpaContImgBtnModal1();
    });


};

function btnLavacao() {
    ValTit.innerHTML = 'Acessórios para Lavação e Engraxadeiras';
    btnSelecao1.innerHTML = 'Acopladores para graxa';
    btnSelecao2.innerHTML = 'Esguicho de água';
    btnSelecao3.innerHTML = 'Engraxadeiras';
    btnSelecao4.innerHTML = 'Mangueira para engraxadeiras';
    btnSelecao5.innerHTML = 'Comando de graxas';
    btnSelecao6.innerHTML = 'Graxadeiras';
    descricaoProduto.innerHTML = 'Acoplador para comando de graxas, bombas propulsoras ou manuais. Dispõe bico fino, de alta resistência e com a possibilidade de possuir válvula de retenção em seu corpo.';
    limparClass();
    $('.cont-industria').addClass('cont-industria-lavacao-1');
    escondeBtnSelecao();
    $('#btn-selecao-2').removeClass('display-none');
    $('#btn-selecao-3').removeClass('display-none');
    $('#btn-selecao-4').removeClass('display-none');
    $('#btn-selecao-5').removeClass('display-none');
    $('#btn-selecao-6').removeClass('display-none');
    removeClassbacgclickacessorioind();
    btnSelecao1.classList.add("bacg-click-acessorio-ind");
    removeImg();
    modal5.innerHTML = '<img src="/root/img/cont-industria/mangueira/MANGUEIRA TERMICA DE ALUMINIO (CATEGORIA 12) (1).jpg" alt="">';
    limpaContImgBtnModal1();
    btnSelecao1.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'Acoplador para comando de graxas, bombas propulsoras ou manuais. Dispõe bico fino, de alta resistência e com a possibilidade de possuir válvula de retenção em seu corpo.';
        $('.cont-industria').addClass('cont-industria-lavacao-1');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/acesPlavacao/ACOPLADORES PRA GRAXA.jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao2.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'O esguicho regulável de 1/2" é um acessório para lavagem de automóveis, motos, caminhões e entre outros. É um esguicho regulável excêntrico, com cabeça, porcas e corpo em aço.';
        $('.cont-industria').addClass('cont-industria-lavacao-2');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/acesPlavacao/ESGUICHO DE ÁGUA.jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao3.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'Bomba manual para graxa com tampa fabricada em alumínio para máxima resistência e durabilidade. Produzida com chapa espessa que garante longa vida a sua bomba e contém filtro que bloqueia impurezas para uma lubrificação mais. Além disso possui disco raspador com mola de alta compressão.';
        $('.cont-industria').addClass('cont-industria-lavacao-3');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/acesPlavacao/ENGRAXADEIRAS.jpg" alt=""></img>';
        limpaContImgBtnModal1();

    });
    btnSelecao4.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'Mangueira com terminais fixos utilizada em conjunto com propulsora de graxa manuais. Podendo ser confeccionadas conforme a necessidade da aplicação, com comprimento e conexos diversos.';
        $('.cont-industria').addClass('cont-industria-lavacao-4');
        removeImg();

        limpaContImgBtnModal1();

    });
    btnSelecao5.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'Os comandos de graxas são necessários para aplicação da graxa no local desejado. Possui corpo de ferro, acabamento zincado e seu gatilho anatômico para melhor uso, é utilizado apenas em propulsoras de graxas pneumáticas.';
        $('.cont-industria').addClass('cont-industria-lavacao-5');
        removeImg();

        limpaContImgBtnModal1();

    });
    btnSelecao6.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'Indicado para facilitar a lubrificação em máquinas, embarcações e equipamentos em geral. Evita o retorno da graxa e protege o ponto de lubrificação de impurezas do ambiente externo. Podem ser encontrados com diversas roscas e diversos modelos.';
        $('.cont-industria').addClass('cont-industria-lavacao-6');
        removeImg();
    });
};

function btnCoreias() {
    ValTit.innerHTML = 'Correias Industriais';
    btnSelecao1.innerHTML = 'Correia A';
    btnSelecao2.innerHTML = 'Correia B';
    btnSelecao3.innerHTML = 'Correia C';
    btnSelecao4.innerHTML = 'Correia 3L';
    descricaoProduto.innerHTML = 'É uma cinta de material flexível, normalmente feita de camadas de lonas e borracha vulcanizada, que serve para transmitir a força e movimento de uma polia ou engrenagem para outras. É importante adquirir a correia correta e entender qual o tipo de polia que vai fazê-la se movimentar. As Correias possuem 13mm de largura externa e 8,15mm de largura interna.';
    limparClass();
    $('.cont-industria').addClass('cont-industria-coreias-1');
    escondeBtnSelecao();
    removeClassbacgclickacessorioind();
    btnSelecao1.classList.add("bacg-click-acessorio-ind");
    removeImg();
    limpaContImgBtnModal1();
    modal5.innerHTML = '<img src="/root/img/cont-industria/coreias/Correia A.jpg" alt="">';
    limpaContImgBtnModal1();
    btnSelecao1.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'É uma cinta de material flexível, normalmente feita de camadas de lonas e borracha vulcanizada, que serve para transmitir a força e movimento de uma polia ou engrenagem para outras. É importante adquirir a correia correta e entender qual o tipo de polia que vai fazê-la se movimentar. As Correias possuem 13mm de largura externa e 8,15mm de largura interna.';
        $('.cont-industria').addClass('cont-industria-coreias-1');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/coreias/Correia A.jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao2.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'É uma cinta de material flexível, normalmente feita de camadas de lonas e borracha vulcanizada, que serve para transmitir a força e movimento de uma polia ou engrenagem para outras. É importante adquirir a correia correta e entender qual o tipo de polia que vai fazê-la se movimentar. As Correias possuem 17mm de largura externa e 10,60mm de largura interna.';
        $('.cont-industria').addClass('cont-industria-coreias-2');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/coreias/correia B.jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao3.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'É uma cinta de material flexível, normalmente feita de camadas de lonas e borracha vulcanizada, que serve para transmitir a força e movimento de uma polia ou engrenagem para outras. É importante adquirir a correia correta e entender qual o tipo de polia que vai fazê-la se movimentar. As Correias possuem 22mm de largura externa e 13,60mm de largura interna.';
        $('.cont-industria').addClass('cont-industria-coreias-3');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/coreias/Correia C.jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao4.addEventListener('click', function(e) {
        limparClass();
        descricaoProduto.innerHTML = 'É uma cinta de material flexível, normalmente feita de camadas de lonas e borracha vulcanizada, que serve para transmitir a força e movimento de uma polia ou engrenagem para outras. É importante adquirir a correia correta e entender qual o tipo de polia que vai fazê-la se movimentar. As Correias possuem 10mm de largura externa e 6,10mm de largura interna.';
        $('.cont-industria').addClass('cont-industria-coreias-4');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/coreias/correia 3L.jpg" alt=""></img>';
        limpaContImgBtnModal1();
    });
};

function btnEquipamentosHidraulicos() {
    ValTit.innerHTML = 'Equipamentos Hidráulicos';
    btnSelecao1.innerHTML = 'Cilindros';
    btnSelecao2.innerHTML = 'Comandos hidráulicos';
    btnSelecao3.innerHTML = 'Bombas hidráulicas';
    btnSelecao4.innerHTML = 'Motores hidráulicos';
    btnSelecao5.innerHTML = 'Válvulas hidráulica';
    descricaoProduto.innerHTML = 'No segmento hidráulico, um cilindro é um atuador mecânico, que é usado para aplicar uma força através de um percurso linear. O cilindro hidráulico recebe a energia do fluido pressurizado por uma bomba hidráulica. O cilindro converte essa energia recebida em energia mecânica. O fluido é enviado para o cilindro por uma válvula direcional ou comando.';
    limparClass();
    escondeBtnSelecao();
    removeClassbacgclickacessorioind();
    $('#btn-selecao-5').removeClass('display-none');
    btnSelecao1.classList.add("bacg-click-acessorio-ind");
    $('.cont-industria').addClass('cont-industria-hidraulicos-1');
    removeImg();
    modal5.innerHTML = '<img src="/root/img/cont-industria/equipind/CILINDROS HIDRAULICOS (CATEGORIA 5) (1).jpg">';
    limpaContImgBtnModal1();
    btnSelecao1.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'No segmento hidráulico, um cilindro é um atuador mecânico, que é usado para aplicar uma força através de um percurso linear. O cilindro hidráulico recebe a energia do fluido pressurizado por uma bomba hidráulica. O cilindro converte essa energia recebida em energia mecânica. O fluido é enviado para o cilindro por uma válvula direcional ou comando.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-hidraulicos-1');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/equipind/CILINDROS HIDRAULICOS (CATEGORIA 5) (1).jpg">';
        limpaContImgBtnModal1();
    });
    btnSelecao2.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'No segmento hidráulico, um cilindro é um atuador mecânico, que é usado para aplicar uma força através de um percurso linear. O cilindro hidráulico recebe a energia do fluido pressurizado por uma bomba hidráulica. O cilindro converte essa energia recebida em energia mecânica. O fluido é enviado para o cilindro por uma válvula direcional ou comando.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-hidraulicos-2');
        removeImg();
        modal4.innerHTML = '<img src="/root/img/cont-industria/equipind/comandos/COMANDOS HIDRAULICOS (1).jpg" alt="">';
        modal5.innerHTML = '<img src="/root/img/cont-industria/equipind/comandos/COMANDOS HIDRAULICOS (2) (1).jpg" alt="">';
        limpaContImgBtnModal1();
        $('.cont-btn-modal-4').addClass('cont-btn-modal');
    });
    btnSelecao3.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'A bomba hidráulica é um componente do circuito hidráulico, acionada por motores a combustão ou elétricos, transmitindo essa energia através do fluido hidráulico. O equipamento é extremamente requisitado por indústrias dos mais variados segmentos, como por exemplo, na construção civil, sendo utilizada em escavadeiras, tratores, embarcações, entre outros';
        limparClass();
        $('.cont-industria').addClass('cont-industria-hidraulicos-3');
        removeImg();
        modal2.innerHTML = '<img src="/root/img/cont-industria/equipind/bombas/BOMBA HIDRAULICAS.jpg" alt="">';
        modal3.innerHTML = '<img src="/root/img/cont-industria/equipind/bombas/BOMBA HIDRAULICAS (2).jpg" alt="">';
        modal4.innerHTML = '<img src="/root/img/cont-industria/equipind/bombas/BOMBA HIDRAULICAS (3).jpg" alt="">';
        modal5.innerHTML = '<img src="/root/img/cont-industria/equipind/bombas/BOMBA HIDRAULICAS (4).jpg" alt="">';
        limpaContImgBtnModal1();

        $('.cont-btn-modal-2').addClass('cont-btn-modal');
        $('.cont-btn-modal-3').addClass('cont-btn-modal');
        $('.cont-btn-modal-4').addClass('cont-btn-modal');
    });
    btnSelecao4.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'O motor hidráulico está presente em equipamentos como máquinas de siderurgia, mineração, construção, automação industrial, colheitadeiras de cana e de outros produtos agrícolas, tratores, entre outros.  o motor hidráulico é apenas mais um item que trabalha em conjunto com bombas, válvulas e comandos hidráulicos para tornar atividades industriais mais rápidas e precisas.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-hidraulicos-4');
        removeImg();
        modal3.innerHTML = '<img src="/root/img/cont-industria/equipind/motores/MOTOR HIDRAULICO (1).jpg" alt="">';
        modal4.innerHTML = '<img src="/root/img/cont-industria/equipind/motores/MOTORES HIDRAULICOS (1).jpg" alt="">';
        modal5.innerHTML = '<img src="/root/img/cont-industria/equipind/motores/motores hidraulicos (2) (1).jpg" alt="">';
        limpaContImgBtnModal1();
        $('.cont-btn-modal-3').addClass('cont-btn-modal');
        $('.cont-btn-modal-4').addClass('cont-btn-modal');
    });
    btnSelecao5.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'O motor hidráulico é apenas mais um item que trabalha em conjunto com bombas, válvulas e comandos hidráulicos para tornar atividades industriais mais rápidas e precisas.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-hidraulicos-5');
        removeImg();
        modal3.innerHTML = '<img src="/root/img/cont-industria/equipind/valvulas/VALVULAS HIDRAULICAS (1) (1).jpg" alt="">';
        modal4.innerHTML = '<img src="/root/img/cont-industria/equipind/valvulas/VALVULAS HIDRAULICAS (2) (1).jpg" alt="">';
        modal5.innerHTML = '<img src="/root/img/cont-industria/equipind/valvulas/VALVULAS HIDRAULICAS (3) (1).jpg" alt="">';
        limpaContImgBtnModal1();
        $('.cont-btn-modal-3').addClass('cont-btn-modal');
        $('.cont-btn-modal-4').addClass('cont-btn-modal');
    });


};

function btnConjuntosPneumaticos() {
    ValTit.innerHTML = 'Conjuntos Pneumáticos';
    btnSelecao1.innerHTML = 'Conectores pneumáticos';
    btnSelecao2.innerHTML = 'Filtros e lubrificadores pneumáticos';
    btnSelecao3.innerHTML = 'Válvulas pneumáticas';
    btnSelecao4.innerHTML = 'Engates rápidos';
    btnSelecao5.innerHTML = 'Manometros';
    descricaoProduto.innerHTML = 'Os conectores pneumáticos possuem diversas aplicações na área industrial e também hospitalar, ou seja, qualquer local que utiliza sistema de ar comprimido. É geralmente utilizado em sistemas pressurizados de ar comprimido, mas também podem ser usados em outros sistemas gasosos.';
    limparClass();
    $('.cont-industria').addClass('cont-industria-pneumatico-1');
    escondeBtnSelecao();
    $('#btn-selecao-5').removeClass('display-none');
    removeClassbacgclickacessorioind();
    btnSelecao1.classList.add("bacg-click-acessorio-ind");
    modal1.innerHTML = '<img src="/root/img/cont-industria/pneusmatico/conecto/CONECTORES PNEUMATICOS (2) (1).jpg" alt="">';
    modal2.innerHTML = '<img src="/root/img/cont-industria/pneusmatico/conecto/CONECTORES PNEUMATICOS (3) (1).jpg" alt="">';
    modal3.innerHTML = '<img src="/root/img/cont-industria/pneusmatico/conecto/CONECTORES PNEUMATICOS (5) (1).jpg" alt="">';
    modal4.innerHTML = '<img src="/root/img/cont-industria/pneusmatico/conecto/CONECTORES PNEUMATICOS (7) (1).jpg" alt="">';
    modal5.innerHTML = '<img src="/root/img/cont-industria/pneusmatico/conecto/CONECTORES PNEUMATICOS (8) (1).jpg" alt="">';
    limpaContImgBtnModal1();
    $('.cont-btn-modal-1').addClass('cont-btn-modal');
    $('.cont-btn-modal-2').addClass('cont-btn-modal');
    $('.cont-btn-modal-3').addClass('cont-btn-modal');
    $('.cont-btn-modal-4').addClass('cont-btn-modal');
    btnSelecao1.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'Os conectores pneumáticos possuem diversas aplicações na área industrial e também hospitalar, ou seja, qualquer local que utiliza sistema de ar comprimido. É geralmente utilizado em sistemas pressurizados de ar comprimido, mas também podem ser usados em outros sistemas gasosos.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-pneumatico-1');
        modal1.innerHTML = '<img src="/root/img/cont-industria/pneusmatico/conecto/CONECTORES PNEUMATICOS (2) (1).jpg" alt="">';
        modal2.innerHTML = '<img src="/root/img/cont-industria/pneusmatico/conecto/CONECTORES PNEUMATICOS (3) (1).jpg" alt="">';
        modal3.innerHTML = '<img src="/root/img/cont-industria/pneusmatico/conecto/CONECTORES PNEUMATICOS (5) (1).jpg" alt="">';
        modal4.innerHTML = '<img src="/root/img/cont-industria/pneusmatico/conecto/CONECTORES PNEUMATICOS (7) (1).jpg" alt="">';
        modal5.innerHTML = '<img src="/root/img/cont-industria/pneusmatico/conecto/CONECTORES PNEUMATICOS (8) (1).jpg" alt="">';
        $('.cont-btn-modal-1').addClass('cont-btn-modal');
        $('.cont-btn-modal-2').addClass('cont-btn-modal');
        $('.cont-btn-modal-3').addClass('cont-btn-modal');
        $('.cont-btn-modal-4').addClass('cont-btn-modal');
    });
    btnSelecao2.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'Filtro regulador de ar e lubrificador de ar pneumáticos são partes integrantes de uma unidade de preparação de ar pneumático, que tem como objetivo evitar que partículas de pó e ferrugem, e também umidade, se condense nas tubulações e tragam falhas às ferramentas pneumáticas presentes no local.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-pneumatico-2');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/pneusmatico/FILTROS E LUBRIFICADORRES PNEUMATICOS (1).jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao3.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'As válvulas pneumáticas são componentes de circuito pneumático designadas para controlar e  manipular o fluxo de ar comprimido (direção, pressão e/ou vazão do ar). Podendo ser de controle direcional, reguladora de fluxo, reguladora de pressão e de bloqueio.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-pneumatico-3');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/pneusmatico/VALVULAS PNEUMATICOS (1).jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao4.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'O engate rápido pneumático é utilizado em linhas de ar comprimido e em sistemas pneumáticos. Sua utilização facilita a manutenção da rede de ar e de seus equipamentos, também agiliza a troca de ferramentas pneumáticas de uma determinada linha.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-pneumatico-4');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/pneusmatico/ENGATES RAPIDOS (2) (1) (1).jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao5.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'Manômetro para compressor de ar é um instrumento importante utilizado para medir e manter o controle da quantidade de ar armazenado no compressor. O manômetro é conectado diretamente no equipamento e pode ser substituído facilmente. Basta desrosquear o manômetro com o compressor vazio.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-pneumatico-5');
        removeImg();
        limpaContImgBtnModal1();

    });



};

function btnConexoesHidraulicas() {
    ValTit.innerHTML = 'Conexões hidráulicas';
    btnSelecao1.innerHTML = 'Conexões galvonizadas';
    btnSelecao2.innerHTML = 'Engate rápido hidráulico';
    btnSelecao3.innerHTML = 'Conexões inox';
    btnSelecao4.innerHTML = 'Terminais para flexíveis';
    btnSelecao5.innerHTML = 'Adaptadores hidráulicos';
    descricaoProduto.innerHTML = 'As conexões galvanizadas estão presentes em redes de água fria e quente, em redes de ar comprimido, prevenção e combate a incêndios e redes de sistemas óleo hidráulicos, podendo ser de alta ou baixa pressão. São fabricadas em ferro maleável e possui padrão de rosca BSP ou NPT.';
    limparClass();
    $('.cont-industria').addClass('cont-industria-hidraulica-1');
    escondeBtnSelecao();
    $('#btn-selecao-5').removeClass('display-none');
    //remove a segunda cor do botão
    removeClassbacgclickacessorioind();
    btnSelecao1.classList.add("bacg-click-acessorio-ind");
    modal1.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/conexGalv/CONEXOES GALVONIZADAS.jpg">';
    modal2.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/conexGalv/CONEXOES GALVONIZADAS (2).jpg">';
    modal3.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/conexGalv/CONEXOES GALVONIZADAS (3).jpg">';
    modal4.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/conexGalv/CONEXOES GALVONIZADAS (4).jpg">';
    modal5.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/conexGalv/CONEXOES GALVONIZADAS (5).jpg"></img>';
    limpaContImgBtnModal1();
    $('.cont-btn-modal-1').addClass('cont-btn-modal');
    $('.cont-btn-modal-2').addClass('cont-btn-modal');
    $('.cont-btn-modal-3').addClass('cont-btn-modal');
    $('.cont-btn-modal-4').addClass('cont-btn-modal');
    btnSelecao1.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'As conexões galvanizadas estão presentes em redes de água fria e quente, em redes de ar comprimido, prevenção e combate a incêndios e redes de sistemas óleo hidráulicos, podendo ser de alta ou baixa pressão. São fabricadas em ferro maleável e possui padrão de rosca BSP ou NPT.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-hidraulica-1');
        modal1.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/conexGalv/CONEXOES GALVONIZADAS.jpg">';
        modal2.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/conexGalv/CONEXOES GALVONIZADAS (2).jpg">';
        modal3.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/conexGalv/CONEXOES GALVONIZADAS (3).jpg">';
        modal4.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/conexGalv/CONEXOES GALVONIZADAS (4).jpg">';
        modal5.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/conexGalv/CONEXOES GALVONIZADAS (5).jpg"></img>';
        $('.cont-btn-modal-1').addClass('cont-btn-modal');
        $('.cont-btn-modal-2').addClass('cont-btn-modal');
        $('.cont-btn-modal-3').addClass('cont-btn-modal');
        $('.cont-btn-modal-4').addClass('cont-btn-modal');
    });
    btnSelecao2.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'Engate rápido hidráulico é uma peça que permite fazer a conexão e a desconexão imediata em um sistema de circuito hidráulico, sem o uso de ferramentas específicas. Ou seja, esses processos são realizados de forma manual.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-hidraulica-2');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/engatRapido/ENGATE RAPIDO HIDRAULICO (1).jpg">';
        limpaContImgBtnModal1();

    });
    btnSelecao3.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'As conexões de aço inox são muito utilizada pelas indústrias químicas, petroquímicas, indústrias de papel, alimentos, embarcações etc. Ela possui uma enorme resistência à oxidação e, em casos específicos, como nas indústrias alimentícias, podem ser usadas como conexões aço inox sanitárias polidas interna e externamente. Possuem alta resistência e durabilidade em ambientes agressivos e condições extremas.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-hidraulica-3');
        modal1.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/conexInox/CONEXÃO DE INOX.jpg">';
        modal2.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/conexInox/CONEXÕES INOX (2).jpg">';
        modal3.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/conexInox/CONEXÕES INOX (3).jpg">';
        modal4.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/conexInox/CONEXÕES INOX (4).jpg">';
        modal5.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/conexInox/CONEXÕES INOX (5).jpg">';
        $('.cont-btn-modal-1').addClass('cont-btn-modal');
        $('.cont-btn-modal-2').addClass('cont-btn-modal');
        $('.cont-btn-modal-3').addClass('cont-btn-modal');
        $('.cont-btn-modal-4').addClass('cont-btn-modal');
    });
    btnSelecao4.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'Os terminais hidráulicos, são utilizados na montagem e confecção de flexíveis em diversas situações e segmentos.  Podendo ser utilizadas nos sistemas de máquinas interligando as mangueiras, cilindros, atuadores rotativos, acumuladores, motores, bombas, comandos direcionais múltiplos, direções hidrostáticas, unidades hidráulicas, válvulas proporcionais e válvulas direcionais.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-hidraulica-4');
        modal1.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/treminaisFlexiveis/TERMINAIS PARA FLEXIVEIS.jpg">';
        modal2.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/treminaisFlexiveis/TERMINAIS PARA FLEXIVEIS (10).jpg">';
        modal3.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/treminaisFlexiveis/TERMINAIS PARA FLEXIVEIS (11).jpg">';
        modal4.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/treminaisFlexiveis/TERMINAIS PARA FLEXIVEIS (12).jpg">';
        modal5.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/treminaisFlexiveis/TERMINAIS PARA FLEXIVEIS (8).jpg">';
        $('.cont-btn-modal-1').addClass('cont-btn-modal');
        $('.cont-btn-modal-2').addClass('cont-btn-modal');
        $('.cont-btn-modal-3').addClass('cont-btn-modal');
        $('.cont-btn-modal-4').addClass('cont-btn-modal');
    });
    btnSelecao5.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'Servem para compor a mangueira ou tubo na montagem, facilitando a instalação e retirada para futuras manutenções. Os adaptadores são fornecidos com variados tipos de roscas. As peças são sólidas (sem soldas), garantindo assim maior segurança em sua aplicação. Podendo ser utilizados em sistemas de baixa pressão e nos que demandam uma grande pressão de trabalho.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-hidraulica-5');
        modal1.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/adapHidraulicos/adapitador1.jpg">';
        modal2.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/adapHidraulicos/adapitador2.jpg">';
        modal3.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/adapHidraulicos/adapitador3.jpg">';
        modal4.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/adapHidraulicos/adaptador.jpg">';
        modal5.innerHTML = '<img src="/root/img/cont-industria/conexindustriais/adapHidraulicos/adaptador4.jpg">';
        $('.cont-btn-modal-1').addClass('cont-btn-modal');
        $('.cont-btn-modal-2').addClass('cont-btn-modal');
        $('.cont-btn-modal-3').addClass('cont-btn-modal');
        $('.cont-btn-modal-4').addClass('cont-btn-modal');
    });
};

function btnFiltrosAcessorios() {
    ValTit.innerHTML = 'Filtros e acessórios';
    btnSelecao1.innerHTML = 'Filtros Hidráulicos Sucção';
    btnSelecao2.innerHTML = 'Filtros Hidráulicos de Retorno';
    btnSelecao3.innerHTML = 'Visor de  Tarnque';
    btnSelecao4.innerHTML = 'Bocal De Enchimento';
    btnSelecao5.innerHTML = 'Elementos Filtrantes';
    descricaoProduto.innerHTML = 'O elemento filtrante de óleo é capaz de retirar partículas contaminadas dos sistemas hidráulicos e, assim, pode ser encontrado em vários seguimentos industriais e navais, por isso é disponível em diversos modelos e tamanhos a fim de atender as demandas da necessidade.';
    limparClass();
    $('.cont-industria').addClass('cont-industria-filtros-1');
    escondeBtnSelecao();
    $('#btn-selecao-5').removeClass('display-none');
    removeClassbacgclickacessorioind();
    btnSelecao1.classList.add("bacg-click-acessorio-ind");
    limparClass();
    $('.cont-industria').addClass('cont-industria-filtros-1');
    removeImg();
    modal5.innerHTML = '<img src="/root/img/cont-industria/filtro/FILTROSHIDRAULICOSSUCCAO.jpg">';
    limpaContImgBtnModal1();
    btnSelecao1.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'O elemento filtrante de óleo é capaz de retirar partículas contaminadas dos sistemas hidráulicos e, assim, pode ser encontrado em vários seguimentos industriais e navais, por isso é disponível em diversos modelos e tamanhos a fim de atender as demandas da necessidade.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-filtros-1');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/filtro/FILTROSHIDRAULICOSSUCCAO.jpg">';
    });
    btnSelecao2.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'A função dos filtros de retorno é impedir que as partículas que penetram pela vedação das hastes de cilindros e as geradas pelo sistema atinjam o reservatório e entrem novamente em circulação. São aplicados na parte externa dos reservatórios hidráulicos e possuem elementos filtrantes descartáveis em seu corpo interno.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-filtros-2');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/filtro/FILTROHIDRAULICODERETORNO.jpg">';
        limpaContImgBtnModal1();
    });
    btnSelecao3.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'O indicador de nível permite rápida verificação do nível de óleo do seu reservatório. Especialmente projetado para todos os tipos de óleo mineral a base de petróleo, esses indicadores possibilitam a mais completa e econômica proteção de reservatórios hidráulicos';
        limparClass();
        $('.cont-industria').addClass('cont-industria-filtros-3');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/filtro/VISORTANQUE.jpg">';
        limpaContImgBtnModal1();
    });
    btnSelecao4.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'Além da função de abastecimento do reservatório, também possui a função de respiro. Possui um cesto que permite a retenção de grandes contaminantes como cavacos, parafusos, porcas, entre outros que possam cair dentro do reservatório.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-filtros-4');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/filtro/BOCALDEENCHIENTO.jpg"></img>';
        limpaContImgBtnModal1();
    });
    btnSelecao5.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'O elemento filtrante de óleo é capaz de retirar partículas contaminadas dos sistemas hidráulicos e, assim, pode ser encontrado em vários seguimentos industriais e navais, por isso é disponível em diversos modelos e tamanhos a fim de atender as demandas da necessidade.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-filtros-5');
        removeImg();
        limpaContImgBtnModal1();

    });
};

function btnMangueirasDiversas() {
    ValTit.innerHTML = 'Mangueiras diversas';
    btnSelecao1.innerHTML = 'Mangueira térmica alumínio';
    btnSelecao2.innerHTML = 'Mangueira tubo FX';
    btnSelecao3.innerHTML = 'Mangueira lava auto';
    btnSelecao4.innerHTML = 'Mangueira oxigênio/acetileno';
    btnSelecao5.innerHTML = 'Mangueira Vácuo Ar Cinza';
    descricaoProduto.innerHTML = 'trata-se de um revestimento em mangueiras que tem por finalidade um aumento considerável na vida útil das mangueiras, tornando-se mais duráveis e consequentemente aumentando seu custo benefício. Pode ser utilizada também como uma espécie de duto de ar, para aplicações do qual necessitam de entrada ou saída de ar quente.';
    limparClass();
    $('.cont-industria').addClass('cont-industria-maqueiras-1');
    escondeBtnSelecao();
    $('#btn-selecao-5').removeClass('display-none');
    //remove a segunda cor do botão
    removeClassbacgclickacessorioind();
    btnSelecao1.classList.add("bacg-click-acessorio-ind");
    removeImg();
    modal5.innerHTML = '<img src="/root/img/cont-industria/mangueira/MANGUEIRA TERMICA DE ALUMINIO (CATEGORIA 12) (1).jpg" alt="">';
    limpaContImgBtnModal1();

    btnSelecao1.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'trata-se de um revestimento em mangueiras que tem por finalidade um aumento considerável na vida útil das mangueiras, tornando-se mais duráveis e consequentemente aumentando seu custo benefício. Pode ser utilizada também como uma espécie de duto de ar, para aplicações do qual necessitam de entrada ou saída de ar quente.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-maqueiras-1');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/mangueira/MANGUEIRA TERMICA DE ALUMINIO (CATEGORIA 12) (1).jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao2.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'Trata-se de um tubo de borracha com espiral de aço e suas extremidades são lisas, para que se possa ter um maior aperto no ato de sua ficção. Pode ser utilizada em diversas ocasiões, como em rede coletora de ar automotiva ou industrial, e radiadores, suspiros de motores entre outros. Não é aconselhado sua aplicação em sistemas, no qual o tubo possui contato com derivados de petróleo devido a sua composição e matéria prima.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-maqueiras-2');
        removeImg();
        modal2.innerHTML = '<img src="/root/img/cont-industria/mangueira/tubo-fx/TUBO FX - MANGUEIRA PX (4) (1).jpg" alt="">';
        modal3.innerHTML = '<img src="/root/img/cont-industria/mangueira/tubo-fx/TUBO FX - MANGUEIRA PX (3) (1).jpg" alt="">';
        modal4.innerHTML = '<img src="/root/img/cont-industria/mangueira/tubo-fx/TUBO FX - MANGUEIRA PX (2) (1).jpg" alt="">';
        modal5.innerHTML = '<img src="/root/img/cont-industria/mangueira/tubo-fx/TUBO FX - MANGUEIRA PX (1).jpg" alt="">';
        limpaContImgBtnModal1();
        $('.cont-btn-modal-2').addClass('cont-btn-modal');
        $('.cont-btn-modal-3').addClass('cont-btn-modal');
        $('.cont-btn-modal-4').addClass('cont-btn-modal');
    });
    btnSelecao3.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'Recomendada para a lavagem de automóveis, caminhões, ônibus, tratores e implementos agrícolas com alta pressão. Possuem alta espessura de parede em relação ao diâmetro, o que resulta em excelente flexibilidade.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-maqueiras-3');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/mangueira/MANGUEIRA LAVA AUTO.jpg" alt="">';
        limpaContImgBtnModal1();
    });
    btnSelecao4.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'Mangueira dupla flexível para solda Oxigenio e Acetileno é indicada para processos de soldagem em geral, utilizadas em equipamentos normatizados de solda. Sua função é conduzir os gases até o ponto de solda. Composta por duas mangueiras, verde (oxigênio) e vermelha (acetileno).';
        limparClass();
        $('.cont-industria').addClass('cont-industria-maqueiras-4');
        removeImg();
        modal5.innerHTML = '<img src="/root/img/cont-industria/mangueira/MANGUEIRA OXIGÊNIO_ACETILENO (1).jpg" alt="">';
        limpaContImgBtnModal1();

    });
    btnSelecao5.addEventListener('click', function(e) {
        descricaoProduto.innerHTML = 'É uma mangueira de PVC com espiral rígido, indicado em serviços de aspiração industrial como por exemplo madeireiras e indústrias de tecelagens. Possui boa flexibilidade, excelente resistência a partículas em suspensão, possui seu interior liso para evitar que detritos acabem obstruindo a sua passagem, e facilitando assim o aperto através de abraçadeiras externas a mangueira. Pode ser aplicado em sistemas condutores de ar, gases, coletores de pó, exaustores e entradas de ar em geral.';
        limparClass();
        $('.cont-industria').addClass('cont-industria-maqueiras-5');
        removeImg();
        modal3.innerHTML = '<img src="/root/img/cont-industria/mangueira/cibza/MANGUEIRA CINZA (3) (1).jpg" alt="">';
        modal4.innerHTML = '<img src="/root/img/cont-industria/mangueira/cibza/MANGUEIRA CINZA (2) (1).jpg" alt="">';
        modal5.innerHTML = '<img src="/root/img/cont-industria/mangueira/cibza/MANGUEIRA CINZA (1).jpg" alt="">';
        limpaContImgBtnModal1();
        $('.cont-btn-modal-3').addClass('cont-btn-modal');
        $('.cont-btn-modal-4').addClass('cont-btn-modal');
    });
};
btnSelecao1.addEventListener('click', function(e) {
    removeClassBacgClickAcessorioInd();
    btnSelecao1.classList.add("bacg-click-acessorio-ind");
});
btnSelecao2.addEventListener('click', function(e) {
    removeClassBacgClickAcessorioInd();
    btnSelecao2.classList.add("bacg-click-acessorio-ind");
});
btnSelecao3.addEventListener('click', function(e) {
    removeClassBacgClickAcessorioInd();
    btnSelecao3.classList.add("bacg-click-acessorio-ind");
});
btnSelecao4.addEventListener('click', function(e) {
    removeClassBacgClickAcessorioInd();
    btnSelecao4.classList.add("bacg-click-acessorio-ind");
});
btnSelecao5.addEventListener('click', function(e) {
    removeClassBacgClickAcessorioInd();
    btnSelecao5.classList.add("bacg-click-acessorio-ind");
});
btnSelecao6.addEventListener('click', function(e) {
    removeClassBacgClickAcessorioInd();
    btnSelecao6.classList.add("bacg-click-acessorio-ind");
});
btnSelecao7.addEventListener('click', function(e) {
    removeClassBacgClickAcessorioInd();
    btnSelecao7.classList.add("bacg-click-acessorio-ind");
});
btnSelecao8.addEventListener('click', function(e) {
    removeClassBacgClickAcessorioInd();
    btnSelecao8.classList.add("bacg-click-acessorio-ind");
});
btnSelecao9.addEventListener('click', function(e) {
    removeClassBacgClickAcessorioInd();
    btnSelecao9.classList.add("bacg-click-acessorio-ind");
});
btnSelecao10.addEventListener('click', function(e) {
    removeClassBacgClickAcessorioInd();
    btnSelecao10.classList.add("bacg-click-acessorio-ind");
});
btnSelecao11.addEventListener('click', function(e) {
    removeClassBacgClickAcessorioInd();
    btnSelecao11.classList.add("bacg-click-acessorio-ind");
});
btnSelecao12.addEventListener('click', function(e) {
    removeClassBacgClickAcessorioInd();
    btnSelecao12.classList.add("bacg-click-acessorio-ind");
});

function removeClassBacgClickAcessorioInd() {
    btnSelecao1.classList.remove("bacg-click-acessorio-ind");
    btnSelecao2.classList.remove("bacg-click-acessorio-ind");
    btnSelecao3.classList.remove("bacg-click-acessorio-ind");
    btnSelecao4.classList.remove("bacg-click-acessorio-ind");
    btnSelecao5.classList.remove("bacg-click-acessorio-ind");
    btnSelecao6.classList.remove("bacg-click-acessorio-ind");
    btnSelecao7.classList.remove("bacg-click-acessorio-ind");
    btnSelecao8.classList.remove("bacg-click-acessorio-ind");
    btnSelecao9.classList.remove("bacg-click-acessorio-ind");
    btnSelecao10.classList.remove("bacg-click-acessorio-ind");
    btnSelecao11.classList.remove("bacg-click-acessorio-ind");
    btnSelecao12.classList.remove("bacg-click-acessorio-ind");
};

function escondeBtnSelecao() {

    $('#btn-selecao-5').addClass('display-none');
    $('#btn-selecao-6').addClass('display-none');
    $('#btn-selecao-7').addClass('display-none');
    $('#btn-selecao-8').addClass('display-none');
    $('#btn-selecao-9').addClass('display-none');
    $('#btn-selecao-10').addClass('display-none');
    $('#btn-selecao-11').addClass('display-none');
    $('#btn-selecao-12').addClass('display-none');
};

function removeImg() {
    modal1.innerHTML = semimg;
    modal2.innerHTML = semimg;
    modal3.innerHTML = semimg;
    modal4.innerHTML = semimg;
    modal5.innerHTML = semimg;
};

function removeClassbacgclickacessorioind() {
    btnSelecao1.classList.remove("bacg-click-acessorio-ind");
    btnSelecao2.classList.remove("bacg-click-acessorio-ind");
    btnSelecao3.classList.remove("bacg-click-acessorio-ind");
    btnSelecao4.classList.remove("bacg-click-acessorio-ind");
    btnSelecao5.classList.remove("bacg-click-acessorio-ind");
    btnSelecao6.classList.remove("bacg-click-acessorio-ind");
    btnSelecao7.classList.remove("bacg-click-acessorio-ind");
    btnSelecao8.classList.remove("bacg-click-acessorio-ind");
    btnSelecao9.classList.remove("bacg-click-acessorio-ind");
    btnSelecao10.classList.remove("bacg-click-acessorio-ind");
    btnSelecao11.classList.remove("bacg-click-acessorio-ind");
    btnSelecao12.classList.remove("bacg-click-acessorio-ind");
};

function limparClass() {
    $('.cont-industria').removeClass('cont-industria-valvulas-1');
    $('.cont-industria').removeClass('cont-industria-valvulas-2');
    $('.cont-industria').removeClass('cont-industria-valvulas-3');
    $('.cont-industria').removeClass('cont-industria-valvulas-4');
    $('.cont-industria').removeClass('cont-industria-valvulas-5');
    $('.cont-industria').removeClass('cont-industria-valvulas-6');
    $('.cont-industria').removeClass('cont-industria-valvulas-7');
    $('.cont-industria').removeClass('cont-industria-valvulas-8');
    $('.cont-industria').removeClass('cont-industria-valvulas-9');
    $('.cont-industria').removeClass('cont-industria-valvulas-10');
    $('.cont-industria').removeClass('cont-industria-valvulas-11');
    $('.cont-industria').removeClass('cont-industria-valvulas-12');
    //montagem industrial
    $('.cont-industria').removeClass('cont-industria-montagem-industrial-1');
    $('.cont-industria').removeClass('cont-industria-montagem-industrial-2');
    $('.cont-industria').removeClass('cont-industria-montagem-industrial-3');
    $('.cont-industria').removeClass('cont-industria-montagem-industrial-4');
    $('.cont-industria').removeClass('cont-industria-montagem-industrial-5');
    $('.cont-industria').removeClass('cont-industria-montagem-industrial-6');
    $('.cont-industria').removeClass('cont-industria-montagem-industrial-7');
    //pintura 
    $('.cont-industria').removeClass('cont-industria-pintura-1');
    $('.cont-industria').removeClass('cont-industria-pintura-2');
    $('.cont-industria').removeClass('cont-industria-pintura-3');
    $('.cont-industria').removeClass('cont-industria-pintura-4');
    $('.cont-industria').removeClass('cont-industria-pintura-5');
    //lavacao
    $('.cont-industria').removeClass('cont-industria-lavacao-1');
    $('.cont-industria').removeClass('cont-industria-lavacao-2');
    $('.cont-industria').removeClass('cont-industria-lavacao-3');
    $('.cont-industria').removeClass('cont-industria-lavacao-4');
    $('.cont-industria').removeClass('cont-industria-lavacao-5');
    $('.cont-industria').removeClass('cont-industria-lavacao-6');
    //coreias
    $('.cont-industria').removeClass('cont-industria-coreias-1');
    $('.cont-industria').removeClass('cont-industria-coreias-2');
    $('.cont-industria').removeClass('cont-industria-coreias-3');
    $('.cont-industria').removeClass('cont-industria-coreias-4');
    // equipamentos hidraulicos
    $('.cont-industria').removeClass('cont-industria-hidraulicos-1');
    $('.cont-industria').removeClass('cont-industria-hidraulicos-2');
    $('.cont-industria').removeClass('cont-industria-hidraulicos-3');
    $('.cont-industria').removeClass('cont-industria-hidraulicos-4');
    $('.cont-industria').removeClass('cont-industria-hidraulicos-5');
    //pneumatico
    $('.cont-industria').removeClass('cont-industria-pneumatico-1');
    $('.cont-industria').removeClass('cont-industria-pneumatico-2');
    $('.cont-industria').removeClass('cont-industria-pneumatico-3');
    $('.cont-industria').removeClass('cont-industria-pneumatico-4');
    $('.cont-industria').removeClass('cont-industria-pneumatico-5');
    //conexao hidraullica
    $('.cont-industria').removeClass('cont-industria-hidraulica-1');
    $('.cont-industria').removeClass('cont-industria-hidraulica-2');
    $('.cont-industria').removeClass('cont-industria-hidraulica-3');
    $('.cont-industria').removeClass('cont-industria-hidraulica-4');
    $('.cont-industria').removeClass('cont-industria-hidraulica-5');
    //filtros
    $('.cont-industria').removeClass('cont-industria-filtros-1');
    $('.cont-industria').removeClass('cont-industria-filtros-2');
    $('.cont-industria').removeClass('cont-industria-filtros-3');
    $('.cont-industria').removeClass('cont-industria-filtros-4');
    $('.cont-industria').removeClass('cont-industria-filtros-5');
    //mangueiras
    $('.cont-industria').removeClass('cont-industria-maqueiras-1');
    $('.cont-industria').removeClass('cont-industria-maqueiras-2');
    $('.cont-industria').removeClass('cont-industria-maqueiras-3');
    $('.cont-industria').removeClass('cont-industria-maqueiras-4');
    $('.cont-industria').removeClass('cont-industria-maqueiras-5');
};

function limpaContImgBtnModal1() {

    $('.cont-btn-modal-1').removeClass('cont-btn-modal');
    $('.cont-btn-modal-2').removeClass('cont-btn-modal');
    $('.cont-btn-modal-3').removeClass('cont-btn-modal');
    $('.cont-btn-modal-4').removeClass('cont-btn-modal');

};