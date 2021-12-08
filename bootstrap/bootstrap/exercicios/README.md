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