(function($) {
	$.fn.temporizador = function(opcoes) {
		const opcoesFinais = $.extend({
			mensagem: 'Em breve!',
			horario: '23:59:00'
		}, opcoes) //o que tiver diferente do segundo parametro (valor original), ele substitui no primeiro, seria um objeto base para caso não venha um por parametro

		const horaDezena = $('<span class="digito">').html('0')
		const horaUnidade = $('<span class="digito">').html('0')
		const minutoDezena = $('<span class="digito">').html('0')
		const minutoUnidade = $('<span class="digito">').html('0')
		const segundoDezena = $('<span class="digito">').html('0')
		const segundoUnidade = $('<span class="digito">').html('0')

		const separadorHora = $('<span class="separador">').html(':')
		const separadorMinuto = $('<span class="separador">').html(':')
		const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

		$(this).addClass('temporizador')
		$(this).append(horaDezena, horaUnidade, separadorHora,
		minutoDezena, minutoUnidade, separadorMinuto,
		segundoDezena, segundoUnidade, mensagem)

		const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/) //o que esta entre () sao chamados grupos de captura, seleciona cada um unitariamente
		const horarioAlvo = regex.exec(opcoesFinais.horario)

		let temporizador = setInterval(() => {
			const agora = new Date()
			const alvo = new Date()
			alvo.setHours(horarioAlvo[1])
			alvo.setMinutes(horarioAlvo[2])
			alvo.setSeconds(horarioAlvo[3])

			const diferencaEmMili = alvo.getTime() - agora.getTime()

			if (diferencaEmMili >= 0) {
				const diferenca = regex.exec(new Date(diferencaEmMili).toISOString()) //usa a mesma regex para pegar os numeros com digitos

				horaDezena.html(diferenca[1][0]) //pegou o indice da hora, e depois o indice do primeiro digito da hora
				horaUnidade.html(diferenca[1][1])
				minutoDezena.html(diferenca[2][0])
				minutoUnidade.html(diferenca[2][1])
				segundoDezena.html(diferenca[3][0])
				segundoUnidade.html(diferenca[3][1])

				//coloca cada um funcionando
			}
			else {
				clearInterval(temporizador) //para de monitorar a hora
			}
		}, 1000)

		return this
	}
})(jQuery)