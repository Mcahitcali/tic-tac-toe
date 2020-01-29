new Vue({
  el: '#app',
  methods: {
    //Maybe you can better algorithm
    checkWin: function checkWin() {
      for (let i = 0; i < 3; i++) {
        if (this.game[0][i] !== '' &&
          this.game[0][i] === this.game[1][i] &&
          this.game[0][i] === this.game[2][i]
        ) {
          return true;
        }
      }
      for (let i = 0; i < 3; i++) {
        if (this.game[i][0] !== '' &&
          this.game[i][0] === this.game[i][1] &&
          this.game[i][0] === this.game[i][2]
        ) {
          return true;
        }
      }
      if (this.game[0][0] !== '' &&
        this.game[0][0] === this.game[1][1] &&
        this.game[0][0] === this.game[2][2]
      ) {
        return true;
      }
      if (this.game[0][2] !== '' &&
        this.game[0][2] === this.game[1][1] &&
        this.game[0][2] === this.game[2][0]
      ) {
        return true;
      }
      return false;
    },
    computerMove: function computerMove() {
      while (true) {
        var indexX = Math.floor(Math.random() * 3);
        var indexY = Math.floor(Math.random() * 3);
        if (this.isEmpty(indexX, indexY)) {
          this.game[indexX][indexY] = 'O';
          break;
        }
      }
    },
    isEmpty: function isEmpty(x, y) {
      if (this.game[x][y] === '') {
        return true;
      }
      return false;
    },
    click: function Click(x, y) {
      if (this.game[x][y] || this.winner ) {
        return;
      }

      this.game[x][y] = 'X';
      if (this.checkWin()) {
        console.log('Won!');
        this.message = "Great!You won!";
        this.winner = 'X';
      }
      else
      {
          this.computerMove();
          if (this.checkWin())
          {
            this.message = "Sad :(  Defeated!";
            this.winner = 'O';
          }
      }

      this.$forceUpdate();
    },
    reset: function Reset() {
      this.game = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
      this.winner = null;
      this.message = 'Welcome to Tic Tac Toe!';
      this.$forceUpdate();
    }
  },
  data() {
    return {
      message: 'Welcome to Tic Tac Toe!',
      winner: null,//for multiplayer and check is done
      game: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ]
    };
  }
});
