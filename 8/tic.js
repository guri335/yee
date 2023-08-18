const state = {
    scores: {
        player1: 0,
        player2: 0
    },
    squares: Array(9).fill(null),
    xisnext: true,
};

function calculatewinner(squares) {
    const winning_lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winning_lines.length; i++) {
        const [a, b, c] = winning_lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            showwinner(squares[a]);
            setTimeout(() => resetBoard(squares[a]), 1000)
            return squares[a];
        }
    }
    if (!squares.includes(null)) {
        showwinner(null);
        setTimeout(() => resetBoard(null), 1000)
        return
    }
    return null;
}
function resetBoard(winner) {
    if (winner) {
        winner === 'X'? state.scores.player1++ : state.scores.player2++ ;
    }
    state.squares = Array(9).fill(null);
    state.xisnext=true;
    $("#player1score").text(state.scores.player1)
    $("#player2score").text(state.scores.player2)
    renderboard();
}
function showwinner(winner) {
    const alert_box = $("#alert-box")
    if (winner) {
        if (winner === 'X') {
            winner = "Player 1"
        }
        else {
            winner = "Player 2"
        }
        alert_box.html(`${winner} <strong>Won!</strong>`)
    }
    else {
        alert_box.html(`It's a Draw!`);
    }
    alert_box.slideDown();
    setTimeout(() => alert_box.slideUp(), 1000);
}
function render_square(index) {
    const val = state.squares[index] ? state.squares[index] : "&nbsp;";
    return `<div value=${index} class="box col-lg-4 col-md-4 col-sm-4 col-xs-4" onclick="boxclick(${index})">${val}</div>`
}
function renderboard() {
    let board_html = ''
    for (let i = 0; i < 9; i++) {
        board_html += render_square(i)
    }
    $("#board").html(board_html); 
    calculatewinner(state.squares)
}
function boxclick(index) {
    const squares = state.squares;
    if (calculatewinner(squares) || squares[index]) {
        return;
    }
    squares[index] = state.xisnext ? 'X' : '0'
    state.squares = squares;
    state.xisnext = !state.xisnext;
    renderboard();
}

function resetGame() {
    state.scores.player1 = 0
    state.scores.player2 = 0
    resetBoard(null);
}

$(() => {
    renderboard();
    $("#alert-box").slideUp(0.0001);
    $("#clear").on("click", ()=>resetBoard(null))
    $("#reset").on("click", ()=>resetGame())

})