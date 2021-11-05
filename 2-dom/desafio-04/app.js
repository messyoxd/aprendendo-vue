new Vue(
	{
	el: '#desafio',
	data: {
		classe1: 'destaque',
		c1: 'c1',
		classe3: '',
		classe4: '',
		setC1: false,
		cor5: '',
		estilo5: {
			width: '100px',
			height: '100px',
		},
		width: '0',
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 == 'destaque' ?
					this.classe1 = 'encolher' :
					this.classe1 = 'destaque' 
			}, 1000);
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 500);			
		}
	}
})
