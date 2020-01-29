new Vue({
    el:'#app',
    methods: {
        click:function Click(x, y) {
            if (this.game[x][y] ) {
                return;
            }
            this.game[x][y] = 'X';

            this.$forceUpdate();
        },
        reset:function Reset() {
            this.game = [
                ['','',''],
                ['','',''],
                ['','','']
            ];
            this.$forceUpdate();
        }
    },
    data() {
        return {
            message:"Welcome to Tic Tac Toe!",
            winner:null,
            game:[
                ['X','X',''],
                ['','X',''],
                ['','','X']
            ]
        }
    },
})