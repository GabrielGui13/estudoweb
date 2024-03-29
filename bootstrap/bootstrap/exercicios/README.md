## Tipografia

* **"h1"** -- **"h6"** => utiliza classes de h1 a h6 para aplicar o mesmo estilo
* **"display-1"** -- "display-6" => tipografias maiores que os headings
* **"blockquote"** => estilo da citação
* **"blockquote-footer"** => estilo do autor da citação
* **"text-center"** / "text-left" / "text-right" => alinhamento do texto
* **"list-unstyled"** => remove o list-style de uma lista (não conta com children)
* **"list-inline"** & "list-inline-item" => declaração de uma lista em linha e seus componentes

## Espaçamento
_Os valores vão de 1 a 5, sendo 0 o default, valores diferentes não são aplicados_

* **"p-0"** -- **"p-5"** / **"m-0"** -- **"m-5"** => padding/margin total
* **"px-0"** -- **"px-5"** / **"mx-0"** -- **"mx-5"** => padding/margin no eixo x (horizontal)
* **"py-0"** -- **"py-5"** / **"my-0"** -- **"my-5"** => padding/margin no eixo y (vertical)
* **"pt-0"** -- **"pt-5"** / **"mt-0"** -- **"mt-5"** => padding/margin top
* **"pb-0"** -- **"pb-5"** / **"mb-0"** -- **"mb-5"** => padding/margin bottom
* **"pl-0"** -- **"pl-5"** / **"ml-0"** -- **"ml-5"** => padding/margin left
* **"pr-0"** -- **"pr-5"** / **"mr-0"** -- **"mr-5"** => padding/margin right
* **"mx-auto"** => centralização horizontal
* **"d-block"** => display block
* **"d-inline"** => display inline


## Título e Breadcrumb
* **"jumbotron"** => bloco de apresentação inicial
* **"lead"** => segue dentro do jumbotron e segue a identidade
* **"breadcrumb"** => inicia um bloco de breadcrumb, geralmente em uma lista
* **"breadcrumb-item"** => marca cada caminho do breadcrumb, geralmente é um li com um a com o href dentro
* **"active"** => item do breadcrumb que você se encontra


## Cores
Prefixos:
* **"text-"** => textos
* **"bg-"** => plano de fundo, background
* **"alert-"** => div de mensagem, ou alerta para o usuário
* **"btn-"** => botão com intenções diferentes

Valores:
* **"primary"** => cor primária do tema
* **"secondary"** => cor secundária do tema
* **"success"** => cor de sucesso do tema, geralmente verde
* **"danger"** => cor de perigo, erro do tema, geralmente vermelho
* **"warning"** => cor de alerta, aviso, cuidado, geralmente amarelo
* **"info"** => cor de informação, mensagem, geralmente verde azulado claro
* **"light"** => cor branca creme ou cinza claro
* **"dark"** => cor cinza escuro quase preto
* **"white"** => cor majoritariamente branca
* **"muted"** => cor apagada, parecido com o disabled
* **"transparent"** => sem cor, não disponível a todos os prefixos


## Flex
Habilitar flexbox:
* **"d-flex"** => habilita o display flex do elemento
* **"d-inline-flex"** => habilita o display flex do elemento com display inline
* **"d-sm-flex"** / "d-sm-inline-flex" => habilita o flex apenas para dispositivos que nao sejam pequenos
* **"d-md-flex"** / "d-md-inline-flex" => habilita o flex apenas para dispositivos que nao sejam medios
* **"d-lg-flex"** / "d-lg-inline-flex" => habilita o flex apenas para dispositivos que nao sejam grandes
* **"d-xl-flex"** / "d-xl-inline-flex" => habilita o flex apenas para dispositivos que nao sejam muito grandes
* **"d-xxl-flex"** / "d-xxl-inline-flex" => habilita o flex apenas para dispositivos que nao sejam extremamente grandes

Direção:

_Tambem conta com as variações 
responsivas sm, md, lg, xl e xxl_
* **"flex-row"** => habilita a direcao do flex para ser em linha (padrao)
* **"flex-row-reverse"** => habilita a direcao do flex para ser em linha mas em orientacao reversa
* **"flex-column"** => habilita a direcao do flex para ser em coluna
* **"flex-column-reverse"** => habilita a direcao do flex para ser em coluna mas em orientacao reversa

Alinhamento:

_**justify-content** alinha no eixo principal, **align-items** alinha no eixo perpendicular, **align-self** alinha o proprio elemento flex. Tambem conta com as variações 
responsivas sm, md, lg, xl e xxl_
* **"justify-content-start"** => justify-content: start; alinha os elementos no comeco do flex
* **"justify-content-end"** => justify-content: end; alinha os elementos no final do flex
* **"justify-content-center"** => justify-content: center; alinha os elementos no centro do flex
* **"justify-content-between"** => justify-content: between; alinha os elementos no centro com o espacamento igual, porem colados nas margens
* **"justify-content-around"** => justify-content: start; alinha os elementos no centro com o espacamento igual, porem com metade do espacamento original das margens
* **"justify-content-evenly"** => justify-content: start; alinha os elementos no centro com o espacamento igual, tanto entre os elementos, quanto das margens

* **"align-items-start"** => align-items: start; alinha os elementos no comeco do eixo perpendicular
* **"align-items-end"** => align-items: end; alinha os elementos no final do eixo perpendicular
* **"align-items-center"** => align-items: center; alinha os elementos no centro do eixo perpendicular
* **"align-items-baseline"** => align-items: baseline; alinha os elementos na base do eixo perpendicular
* **"align-items-stretch"** => align-items: stretch; alonga/distroce os elementos para caber em toda a extensao do eixo perpendicular flex

* **"align-self-start"** => align-self: start; alinha o elemento unicamente selecionado no inicio
* **"align-self-end"** => align-self: end; alinha o elemento unicamente selecionado no final
* **"align-self-center"** => align-self: center; alinha o elemento unicamente selecionado no centro
* **"align-self-baseline"** => align-self: baseline; alinha o elemento unicamente selecionado na base
* **"align-self-stretch"** => align-self: stretch; alonga/distorce o elemento unicamente selecionado por toda a extensao do eixo perpendicular

* **"flex-nowrap"** => forca os elementos flex a nao quebrarem a linha ao ultrapassar o overflow (padrao)
* **"flex-wrap"** => forca os elementos flex a quebrarem a linha ao ultrapassar o overflow
* **"flex-wrap-reverse"** => forca os elementos flex a quebrarem a linha ao ultrapassar o overflow

* **"flex-fill"** => forca o comprimento do elemento a se esticar de acordo com seu conteudo, ou comprimentos iguais que nao infrinjam o border-box

* **"flex-grow"** => forca o comprimento do elemento a se esticar e ocupar todo o espaco disponivel restante, e os outros elementos flex usam apenas o espaco necessario, ao utilizar o sufixo '-1', ele usa todo o espaco que for possivel

* **"flex-shrink"** => forca o comprimento do elemento a se espremer se necessario, ao utilizar o sufixo '-1', ele forca o conteudo dentro do elemento flex a descer a linha

Ordem:

_Os valores vão de 1 a 5, sendo 0 o default, valores diferentes não são aplicados, a menos que seja adicionado css adicional customizado_

* **"order-0"** -- **"order-5"** => muda a ordem visual dos elementos flex


## Imagens
* **"img-thumbnail"** => imagem fica responsiva e com algumas bordas
* **"img-fluid"** => imagem fica responsiva
* **"rounded"** => deixa circular, tem outros valores adicionais, como circle por exemplo


## Float

_Tambem conta com as variações 
responsivas sm, md, lg, xl e xxl_
* **"float-left"** => flutua a esquerda
* **"float-right"** => flutua a esquerda
* **"float-none"** => tira a flutuacao


## Grid

_As colunas estao sempre divididas em 12 colunas, pois pode fazer as divisoes por 1, 2, 3, 4, 6, 12. Por padrao, a classe col sozinha funciona apenas em dispositivos muito pequenos, ou extra small (xm). Tambem conta com as variações 
responsivas sm, md, lg, xl e xxl_

Grid Basico:
* **"container-fluid"** => inicia o grid, apenas container seria um tamanho fixo, fluid se adapta ao tamanho da tela
* **"row"** => inicia uma linha
* **"col"** / **"col-1"** -- **"col-12"** => inicia uma coluna, se apenas colocar col, ele divide os espacos dos elementos de forma igualitaria, ao selecionar os numeros, ele utiliza x espacos do grid
* **"col-4" + "col-5" + "col"** => o primeiro elemento ocupa 4 'fatias' das 12 colunas, o segundo ocupa 5, e o ultimo ocupa o restante, que seriam 3 colunas

Grid Responsivo:
* **"col-12 col-sm-6 col-md-4 col-lg-2 col-xl-1"** => nesse exemplo, por padrao (extra small devices), cada celula vai ocupar a linha inteira, pois vai ocupar 12 fatias, quando a tela for pequena, cada celula ocupara 6 parcelas, o que nao significa que todas serao na mesma linha, ja que as celulas estao uma atras da outra, quando preencher o espaco quebra a linha, em telas medias, ocupara 4 fatias cada, em telas largas, 2 fatias, e finalmente em uma tela longa, cada celula ocupara 1 parcela das 12 totais
* **"w-100"** => ao inserir uma div 'fantasma' com w-100 (width: 100%;), ela auto completa o restante da linha do grid sem nada visivel e a proxima celula cai embaixo
* **"col-3 + col-3 + col-7"** => outra forma que ocorreria um quebra de linha seria em uma situacao que ja tem duas celulas ocupando 6 fatias (3 de cada), e é colocada uma celula ocupando 7 fatias, ao calcular daria 13, e iria passar das 12 colunas padrao, o que faria o elemento que ocupa 7 fatias pulasse pra baixo
* **"order-5 + order-12 + order-1"** => assim como no flexbox, o grid tambem tem o sistema de order (1 a 12), nesse exemplo eh considerado a ordem dos numeros, o elemento com menor numero fica a frente sempre, o order-1 ficaria antes de todos, depois o order-5, e depois o order-12, no entanto caso houvesse um quarto elemento sem a classe order, ele ficaria a frente de todos, inclusive do order 1
* **"align-self-{start/center/end}"** => por baixo dos panos o grid do bootstrap funciona como um display flex, dessa forma as propriedades self se aplicam tambem



## Botões
_Tambem conta com as variações 
responsivas sm, md, lg, xl e xxl. Alem de tambem possuir as variacoes de cores (primary, secondary, success, etc)_

* **"btn"** => para definir o button como um botão do bootstrap, uma tag "a" com o atributo role="button", ou uma tag label, para criar alguns grupos
* **"btn-*"** => para colocar uma cor específica padrão no botão 
* **"btn-outline-*"** => para que o botão tenha apenas a borda e fique da forma normal no hover do mouse
* **"btn-lg"** / "btn-sm" => tamanho do botão maior (lg) ou menor (sm)
* **"active"** => o botão vai ter a aparência de como se tivesse pressionado
* **"disabled"** / [disabled] => utilizado apenas se for uma tag a, serve para dar a aparência de desabilitado, nas tags buttons apenas o atributo disabled já aplica a estilização
* **[data-toggle="button"]** => atributo utilizado para que o botão mude para ativo ou não a cada clique, efeito de interruptor

#### Grupo de botões
* **"btn-group"** => colocada em uma div que vai envolver labels com tags btn do bootstrap, vai fazer com que os botões (button, a, label) fiquem "colados" um no outro
* **"btn-group btn-group-toggle" + [data-toggle="buttons"]** => btn-group para juntar os botões, btn-group-toggle para manipular o comportamento por javascript, e [data-toggle="buttons"] vai servir para conseguir gerenciar labels que tenham inputs (radio ou checkbox) dentro deles, para que tenham a estilização do botão, mas o comportamento de radio ou checkbox.

#### Dropdown
* **"dropdown"** => colocada em uma div que envolve outros elementos para habilitar o dropdown
* **"dropdown-toggle"** + [data-toggle="dropdown"] => colocados em um botão dentro da div para servir como o trigger do dropdown
* **"dropdown-menu"** => a div que vai ter os itens do dropdown, ela que vai aparecer e desaparecer no trigger do dropdown
* **"dropdown-item"** => classe dada aos itens (geralmente "a") que ficam dentro da div do dropdown-menu para ser os itens que vão aparecer no trigger do dropdown


## Barra de progresso
_Tambem conta com as variações de cores com bg-*(primary, secondary, success, etc)_
* **"progress"** => div que envolve a progress bar, eh o background, o 100% em cinza
* **"progress-bar"** => dentro da div progress, eh o que define o tamanho da progress bar com o atributo [width="x%"], pode ter multiplas progress bar dentro de uma div progress
* **"progress-bar-striped"** => o mesmo da progress bar mas eh listrada
* **"progress-bar-animated"** => o mesmo da progress bar listrada mas se move da direita para a esquerda


## Alertas
_Tambem conta com as variações de cores com alert-*(primary, secondary, success, etc)_
* **"alert"** => para configurar a div como um alert, porem necessita de uma cor (ex: "alert-success")
* **"alert-link"** => colocado dentro de um alert, classe de uma tag "a" geralmente, para estilizar um link
* **"alert-heading"** => colocado em um uma tag h1, h2, h3, etc dentro de um alert, para deixar o alerta mais complexo
* **"alert-dismissible"** => serve para configurar o alert de forma que ele pode ser fechado, no entando para funcionar necessita de um button dentro dele com o atributo * [data-dismiss="alert"], e de preferencia com a classe "close" para estilizar da maneira correta. Na div do alert as classes "fade" e "show" vao servir para aplicar animacao nas acoes


## Paginação

* **"pagination"** => inicia um bloco de paginação ul
* **"page-item"** => geralmente usado na li para indicar um item da paginacao (anterior, 1, 2, 3, proximo)
* **"page-link"** => geralmente usado na tag a dentro de uma li para indicar a rota da paginacao
* **"pagination-sm" / "pagination-lg"** => usados na ul para definir o tamanho do bloco de paginacao
* **"active" / "disabled"** => usados na li para indicar qual a pagina ativa ou impossibilitar a escolha de alguma pagina


## Tooltip
Importante lembrar que os tooltips so sao ativados mediante ativacao via jquery(v4) e javascript(v5)

* **[data-bs-toggle="tooltip"]** => para definir que um botao especifico tenha tooltip (para funcionar na v4 precisa retirar o -bs-)
* **[data-bs-placement="top"/"left"/"bottom"/"right"]** => para definir para qual direcao o tooltip abre (para funcionar na v4 precisa retirar o -bs-)
* **[title="x"]** => atributo para definir o conteudo do tooltip


## Slider

* **"carousel"** => usado em uma div maior para ativar o carousel, acompanhado sempre de uma id unica para configurar os controladores, e a classe slide para animar a mudanca de imagens
* **[data-bs-ride="carousel"]** => tambem usado na div carousel para definir a funcao da div (para funcionar na v4 precisa retirar o -bs-)
* **"carousel-inner"** => div interna onde cada imagem/slide vai ser inserido
* **"carousel-item"** => atribuido a cada div que represente uma imagem/slide, dentro deles geralmente tem uma tag img com d-block e as margens, tamanhos, etc. O active define qual ta ativa no momento
* **"carousel-control-prev" / "carousel-control-next"** => classes colocadas em um button(v5) ou um a(v4) para definir o proximo slide e o anterior, dentro deles ha um span com a classe "carousel-control-prev-icon" ou "carousel-control-next-icon" para pegar os icones das setas, sao acompanhados de [data-bs-slide="prev"/"next"] (para funcionar na v4 precisa retirar o -bs-), o [role/type="button"](v4/v5), e um [href/data-bs-target="#id-do-carousel"](v4/v5)
* **"carousel-indicators"** => utilizado para colocar os botoes de baixo para acessar cada imagem, usa-se um "ol"(v4) ou uma "div"(v5)
* **[data-bs-target="#id-do-carousel"]** => utilizado dentro de uma li (v4) ou um button (v5) para cada item de dentro da div carousel-indicators, faz a conexao com o carousel (para funcionar na v4 precisa retirar o -bs-)
* **[data-bs-slide-to="0"]** => representa qual o item que cada botaozinho tera relacao para com as imagens, cada um deve ter um valor diferente, organizado de forma crescente comecando pelo 0, a quantidade de imagens dira a quantidade de elementos dos botoes (para funcionar na v4 precisa retirar o -bs-)
* **"carousel-caption"** => utilizado para colocar uma legenda para cada slide, eh inserido dentro da div de "carousel-item" geralmente com as classes "d-none d-md-block" para ser fiel a responsividade


## Accordion

No exemplo do projeto, foi criado uma div maior com a classe "card", e tinham varias divs dentro com a classe "card-header" para mostrar uma pergunta por fora, cada card-header tinha dentro dele um h5 com um botao e um texto que serviam como trigger para mostrar o elemento abaixo deles, que era o "card-body" em uma div escondida com a classe collapse envolvendo ela, e o trigger para mostrar ou nao era os anteriores.
* **[data-bs-toggle="collapse"]** => usado para definir uma tag a, ou um botao com btn-link, para ser o trigger do elemento com a classe collapse (para funcionar na v4 precisa retirar o -bs-)
* **[href/data-bs-target="#id-do-elemento-com-collapse"]** => serve para realacionar o trigger com o elemento que vai ser chamado, pode ser utilizado um a ou um button (para funcionar na v4 precisa retirar o -bs-)
* **"collapse"** => classe utilizada para definir uma div em que seu conteudo sera colapsado, esta div tambem acompanha uma id unica, onde ela eh chamada no href ou data-bs-target, para relacionar quais elementos vao colapsar ou nao
* **[data-bs-parent="#id-do-parent-do-collapse"]** => caso os elementos do collapse e suas referencias estejam dentro de uma unica div parente, o data-bs-parent pode ser utilizado para fazer a referencia, eh utilizado na mesma div da classe "collapse" (para funcionar na v4 precisa retirar o -bs-)


## Formulário

* **"container-fluid"** => não é necessariamente uma classe dos formulários, mas é importante colocá-la na tag "form" para que o formulário ocupe sempre 100% da largura da tela
* **"form-inline"** => utilizado na tag "form" para definir um pequeno formulário que fique na mesma linha 
* **"form-row"** => utilizado para envolver um conjunto de labels, inputs, divs, etc. Funciona como um "row" mas por estar dentro de um form, é utilizado "form-row" semanticamente, dentro dele geralmente é criada uma outra div para envolver tudo e delimitar os tamanhos com "col-12" ou etc.
* **"form-group"** => div que envolve as labels e inputs em primeiro lugar, dentro dele que é gerado os grupos de inputs, o conjunto de label e input com textos adicionais, ou label com select e option, ou checkboxes, é utilizado geralmente depois da div "col-12" que é envolvida pela "form-row" 
* **"form-control"** => classe de estilização padrão utilizada nos inputs, select, etc. Pode ser acompanhado de "-lg" e "sm" para que seu tamanho seja maior ou menor
* **"input-group"** => usado semanticamente em uma div para envolver algumas particularidades nos inputs, como um quadrado com o ícone "@" logo antes do input para representar um input de email
* **"input-group-prepend"** => div que vai inserir um pequeno espaço antes da div para colocar algum caractere ou ícone geralmente
* **"input-group-text"** => usado dentro da div "input-group-prepend" para definir o conteúdo deste pequeno bloco de informação antes do input
* **"form-text"** => pequeno texto geralmente colocado abaixo dos inputs em uma tag "small", para representar pequenas informações ou mensagens de erro, acompanhado geralmente de um "text-muted" para definir sua cor
* **"form-check"** => utilizado no lugar de "form-group" quando se trata de blocos do formulário que contém radio e checkbox para fazer a estilização da sequência dos inputs
* **"form-check-input"** => utilizado nos inputs radio e checkbox para aplicar a estilização padrão
* **"form-check-label"** => utilizado nas labels após os inputs, para descrever o que cada marcação do radio ou checkbox representa
* **"disabled"** => usado para aplicar a estilização de um input desabilitado, deve ser utilizado na div geral ("form-group" ou "form-check") para aplicar essa aparência, obviamente para funcionar o input deve ter também o atributo [disabled], para que não funcione, e a classe "disabled" para que tenha a aparência que não funciona
* **"form-control-plaintext"** => utilizado em um input que possua o atributo [readonly], vai servir para tirar a estilização de bloco de input padrão 

#### Validação

* **[novalidate]** => atributo nativo que desabilita as mensagens tooltip padrão do browser, como o "Preencha este campo" para um input required
* **"was-validated"** => classe aplicada no form que vai aplicar as estilizações em cada input se ele estiver válido ou não, sublinhado e cores vermelhas quando um input required estiver vazio por exemplo, e tudo ver de quando digitar algo e ele estiver válido
* **checkValidity()** => função da própria API do javascript que faz a validação dos campos do formulário, pode ser utilizado para enviar ou não um formulário, ou fazer coisas específicas para cada input, por trás dos panos, a classe "was-validated" utiliza essa função para validar os campos e colocar as respectivas cores
* **"valid-feedback" / "valid-tooltip"** => classe utilizada em um elemento logo após um input para mostrar uma mensagem de aprovação caso o campo esteja válido, caso esteja inválido ele não é mostrado, o feedback é um texto simples verde e o tooltip é um pequeno bloco de cor verde e texto branco, ele só funciona com a presença da classe "was-validated" no form
* **"invalid-feedback" / "invalid-tooltip"** => classe utilizada em um elemento logo após um input para mostrar uma mensagem de reprovação caso o campo esteja inválido, caso esteja válido ele não é mostrado, o feedback é um texto simples vermelho e o tooltip é um pequeno bloco de cor vermelha e texto branco, ele só funciona com a presença da classe "was-validated" no form

 