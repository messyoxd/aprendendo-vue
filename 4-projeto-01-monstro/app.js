new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        playerAtk: { 'min': 3, 'max': 5, 'spc_min': 5, 'spc_max': 10 },
        monsterLife: 100,
        monsterAtk: { 'min': 3, 'max': 8 },
        logs: []
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        attack(spc) {
            if (!spc) {
                this.hurt('monsterLife',
                    this.getRandom(this.playerAtk['min'], this.playerAtk['max']),
                    'Jogador',
                    'Monstro',
                    'player')
            } else {
                this.hurt('monsterLife',
                    this.getRandom(this.playerAtk['spc_min'], this.playerAtk['spc_max']),
                    'Jogador',
                    'Monstro',
                    'player')
            }
            if(this.monsterLife > 0)
                this.monsterAttack()
        },
        monsterAttack() {
            this.hurt('playerLife',
                this.getRandom(this.monsterAtk['min'], this.monsterAtk['max']),
                'Monstro',
                'Jogador',
                'monster')
        },
        hurt(atr, value, source, target, cls) {
            this[atr] -= value
            if (this[atr] < 0){
                this[atr] = 0
                this.registerLog(`${source} matou ${target}`, cls)
            }
            else{

                this.registerLog(`${source} atingiu ${target} com ${value}`, cls)
            }
        },
        heal() {
            const cura = (this.getRandom(this.monsterAtk['min'], this.monsterAtk['max']) * 2)
            this.playerLife += cura
            this.registerLog(`Jogador curou ${cura}`, 'player')
            if (this.playerLife > 100)
                this.playerLife = 100
            this.monsterAttack()
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        }
    },
    watch: {
        hasResult(value) {
            if (value) {
                this.running = false
            }
        }
    },
})