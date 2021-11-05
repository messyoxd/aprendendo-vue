new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertar(){
            alert('Alerta!')
        },
        setValor(e){
            this.valor = e.target.value
        }
    },
})