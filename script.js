function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (formAno.value.length < 4 || formAno.value>ano){
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formSex[0].checked){
            gen = 'Masculino'
            if (idade < 12){
                img.setAttribute('src', 'menino.png')
            } else if (idade>=12 && idade<18){
                img.setAttribute('src', 'rapaz.png')
            } else if (idade>=18 && idade<60){
                img.setAttribute('src', 'homem.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }
        } else {
            gen = 'Feminino'
            if (idade < 12){
                img.setAttribute('src', 'menina.png')
            } else if (idade>=12 && idade<18){
                img.setAttribute('src', 'moca.png')
            } else if (idade>=18 && idade<60){
                img.setAttribute('src', 'mulher.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML = `Você tem ${idade} e é do gênero ${gen}`
        res.appendChild(img)
    }
}