var carne = 400
var cerveja = 700
var bebida = 1000

var result = document.getElementById('result')

function calculation() {
   
    let adults = document.getElementById('adults').value
    let kids = document.getElementById('kids').value
    let hours = document.getElementById('hours').value

    // Sempre que a duração for maior ou igual que 6h vai aumentar a quantidade de carne, bebida...
    if (hours >= 6) {

        carne = 650
        cerveja = 1000
        bebida = 1500

    }

    let quantCarne = carne * adults + (carne /2 * kids)
    let quantCerv = cerveja * adults
    let quantBebida = bebida * adults + (bebida /2 * kids)

    result.innerHTML = `<p>${quantCarne/1000} Kg de Carne</p>`
    result.innerHTML += `<p>${Math.ceil(quantCerv/350)} Latas (350 ml) de Cerveja</p>`
    result.innerHTML += `<p>${Math.ceil(quantBebida/2000)} Garrafas (2 Litros) de Refrigerante</p>`
    result.innerHTML += `<p>Bom churrasco!</p>`

}