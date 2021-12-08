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