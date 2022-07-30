document.querySelector('input#rangebtn').addEventListener('change', e => {
    console.dir(e.target.value)
    document.querySelector('label#labelrangebtn').textContent = e.target.value
})
document.querySelector('input#rangebtn2').addEventListener('change', e => {
    console.dir(e.target.value)
    document.querySelector('label#labelrangebtn2').textContent = e.target.value
})

let cont = 1;
let subcont = 1;

const handleContinuar = e => {
    if(!document.querySelector(`div#part${cont}`)) return
    if(cont != 1) {
        document.querySelector(`div#part${cont-1}`).style.display = 'none'
    }
    if(cont == 39) {
        document.querySelector('#btnContinuar').style.display = 'none'
    }

    let obj = document.querySelector(`div#part${cont}`)
    let subobj = document.querySelector(`h2#part${cont}_${subcont}`)

    let body = document.querySelector('body').style
    if (cont >= 3) {
        body.backgroundColor = '#279614';
        obj.style.color = '#fff';
    }
    if (cont >= 4) {
        body.backgroundColor = '#14967c';
    }
    if (cont >= 10) {
        body.backgroundColor = '#f75f00';
        obj.style.color = '#000';
    }
    if (cont >= 12 && subcont >= 2) {
        body.backgroundColor = '#14967c';
    }
    if (cont >= 14) {
        body.backgroundColor = '#ffffff';
    }
    if (cont == 15) {
        body.backgroundColor = '#f7d600';
    }
    if (cont == 18) {
        body.backgroundColor = '#f7d600';
        obj.style.color = '#000';
    }
    if (cont >= 19) {
        body.backgroundColor = '#14967c';
        obj.style.color = '#fff';
        if (subcont == 2 && cont < 24) body.backgroundColor = '#000000';
        if (cont == 26 && subcont == 4) body.backgroundColor = '#000000';
    }
    if (cont == 25) {
        body.backgroundColor = '#f7d600';
        obj.style.color = '#000';
    }
    if (cont == 28 && subcont == 2) {
        body.backgroundColor = '#f7d600';
        obj.style.color = '#000';
    }
    if (cont == 30 && subcont >= 2) {
        body.backgroundColor = '#279614';
        obj.style.color = '#fff';
    }
    if (cont == 30 && subcont >= 5) {
        body.backgroundColor = '#14967c';
        obj.style.color = '#fff';
    }
    if (cont >= 31) {
        body.backgroundColor = '#ffffff';
        obj.style.color = '#000';
        if (cont == 31 && subcont >= 3) {
            body.backgroundColor = '#14967c';
            obj.style.color = '#fff';
        }
    }
    if (cont >= 33 && cont <= 34) {
        body.backgroundColor = '#f70c00';
        obj.style.color = '#fff';
    }

    obj.style.display = 'flex'
    setTimeout(() => {
        obj.style.filter = 'opacity(100%)'
    })
    subobj.style.filter = 'opacity(100%)'

    subcont++
    if(!document.querySelector(`h2#part${cont}_${subcont}`)) {
        subcont = 1;
        cont++
    }
}

handleContinuar()

const handleSubmit = e => {
    e.preventDefault();

    let form = document.querySelector('form')
    console.dir(form)
    let data = {
        _1estado_inicial: (form[0].checked) ? 'bem' : 'mal',
        _2escala_inicial: form[2].value,
        _3estado_final: (form[3].checked) ? 'bem' : 'mal',
        _4escala_final: form[5].value
    }
    
    fetch('https://api.sheetmonkey.io/form/qtQihSEJh6hyw9gxbwhCfj', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(() => window.location.reload())
}

document.querySelector('form').addEventListener('submit', handleSubmit)

document.querySelector('#btnContinuar').addEventListener('click', handleContinuar)