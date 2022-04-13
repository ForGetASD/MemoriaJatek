window.addEventListener("load", init)

function ID(elem) {
    return document.getElementById(elem)
}
function $(elem) {
    return document.querySelectorAll(elem)
}
function $1(elem) {
    return document.querySelector(elem)
}
function Class(elem){
    return document.getElementsByClassName(elem)
}

//const kepekt = ["kepek/kep1.jpg", "kepek/kep2.jpg", "kepek/kep3.jpg", "kepek/kep4.jpg", "kepek/kep5.jpg", "kepek/kep6.jpg", "kepek/kep7.jpg", "kepek/kep8.jpg", "kepek/kep9.jpg", "kepek/kep10.jpg", "kepek/kep11.jpg", "kepek/kep12.jpg", "kepek/kep13.jpg", "kepek/kep14.jpg", "kepek/kep15.jpg", "kepek/kep16.jpg", "kepek/kep17.jpg", "kepek/kep18.jpg", "kepek/kep19.jpg", "kepek/kep20.jpg"]
const kepekt = ["kepek/kep1.jpg", "kepek/kep2.jpg", "kepek/kep3.jpg", "kepek/kep4.jpg", "kepek/kep5.jpg", "kepek/kep1.jpg", "kepek/kep2.jpg", "kepek/kep3.jpg", "kepek/kep4.jpg", "kepek/kep5.jpg"]
const hatter = "kepek/hatter.jpg"


//let kepek = ""

function init(){
    //for (let i = 0; i < 2; i++)
        //for (let index = 1; index <= 5; index++) {
            //kepek += '<div><img src="kepek/kep'+index+'.jpg" alt="1"></div>'
            //$1("article").innerHTML = kepek
        //}
        const galeria = $1("article")
        let txt = ""
        kepekt.forEach(function(elem, index){
            txt += `<div><img id="${index}" src="${hatter}" alt="szorny"></div>`
        })
        galeria.innerHTML = txt
        
        const kepElemTomb = $("article div img")

        kepElemTomb.forEach(function(elem){
            elem.addEventListener("click", megfordit)
            //elem.addEventListener("click", egyforma)
        })
}

const kivalasztottTomb = []
function megfordit(){
    const hatter = "kepek/hatter.jpg"
    console.log(event.target.id)
    let aktualisElem = event.target.id
    event.target.src = kepekt[aktualisElem]

    kivalasztottTomb.push(aktualisElem)
    console.log(kivalasztottTomb)

    if (kivalasztottTomb.length === 2) {
        let feltetel = kepekt[kivalasztottTomb[0]] === kepekt[kivalasztottTomb[1]]
        console.log(feltetel)
        if (!feltetel) {
            setTimeout(function(){
                kivalasztottTomb.forEach(function(elem){
                    ID(elem).src = hatter;
                })
                kivalasztottTomb.splice(0)
            }, 1000)
        }else{
            setTimeout(function(){
                kivalasztottTomb.forEach(function(elem){
                    ID(elem).style.display = "none"
                })
                kivalasztottTomb.splice(0)
            }, 1000)
        }
    }
}