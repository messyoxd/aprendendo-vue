new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        resultado: "",
    },
    computed:{
        resultado(){
            return this.valor == 37 ?
            'Valor Igual' :
            'Valor Diferente'
        }
    },
    watch: {
        resultado(){
            setInterval(() => {
                this.valor = 0
            }, 5000);
        }
    }
});