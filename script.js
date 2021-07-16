function computer() {
    const comp = Math.floor(Math.random() * 3) + 1;
    if (comp == 1) return 'gajah';
    if (comp == 2) return 'orang';
    return 'semut';
}

function result(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG!';

}

const gajah = document.querySelector('.gajah');
gajah.addEventListener('click', function () {
    const cChoose = computer();
    const pChoose = gajah.className;
    const resultGamae = result(cChoose,pChoose);
    const imgComputer = document.querySelector('.komputer')
    imgComputer.setAttribute('src', 'img-suwit-jawa/img/'+ cChoose +'.png')

    const results = document.querySelector('.info');
    results.innerHTML = resultGamae;
})

const orang = document.querySelector('.orang');
orang.addEventListener('click', function () {
    const cChoose = computer();
    const pChoose = orang.className;
    const resultGamae = result(cChoose,pChoose);
    const imgComputer = document.querySelector('.komputer')
    imgComputer.setAttribute('src', 'img-suwit-jawa/img/'+ cChoose +'.png')

    const results = document.querySelector('.info');
    results.innerHTML = resultGamae;
})

const semut = document.querySelector('.semut');
semut.addEventListener('click', function () {
    const cChoose = computer();
    const pChoose = semut.className;
    const resultGamae = result(cChoose,pChoose);
    console.log(resultGamae);

    const imgComputer = document.querySelector('.komputer')
    imgComputer.setAttribute('src', 'img-suwit-jawa/img/'+ cChoose +'.png')

    const results = document.querySelector('.info');
    results.innerHTML = resultGamae;
})