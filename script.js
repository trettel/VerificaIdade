function Verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('#txtano')
    let res = document.querySelector('#tela')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados cadastrados')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero  = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 12){
                img.setAttribute('src','foto-bebe-m.png')
            }
            else if(idade < 21){
                img.setAttribute('src','foto-jovem-m.png')
            }
            else if(idade <= 50){
                img.setAttribute('src','foto-adulto-m.png')
            }
            else{
                img.setAttribute('src','foto-idoso-m.png')
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','foto-bebe-f.png')
            }
            else if(idade < 21){
                img.setAttribute('src','foto-jovem-f.png')
            }
            else if(idade <= 50){
                img.setAttribute('src','foto-adulto-f.png')
            }
            else{
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
            
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
    }
    




 