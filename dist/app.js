
document.onload = window.sessionStorage.setItem( 'count', 0 );
const sliderContent = document.getElementById( "sliderContent" );
const radioControls = document.getElementById( "radioControls" );
const sliderContainer = document.getElementById( "sliderContainer" );

const data = [
    {
        backgroundImg: '../img/sliderMainImg.png',
    },
    {
        backgroundImg: '../img/sliderMainImg.png',
    },
    {
        backgroundImg: '../img/sliderMainImg.png',
    },
    {
        backgroundImg: '../img/sliderMainImg.png',
    }
]

function nextSlide( data ) {
    let elem = document.querySelector('.singleSlide');
    elem.classList.remove('slide-in-right');
    elem.classList.add('slide-out-left');

    sessionStorage.count < data.length - 1 ? sessionStorage.count++ : sessionStorage.count = 0

    setTimeout(() => {
        elem.classList.remove('slide-out-left');
        setTimeout(() => {
            show( data );
        }, 400)
        
        elem.classList.add('slide-in-right');
    }, 400 )
}

function show( data ) {
    let mySliderHtml;
    let count = sessionStorage.count

    mySliderHtml =
        `<div class="singleSlide" style="background-image:url( ${ data[ count ].backgroundImg })">
        </div>`
    sliderContent.innerHTML = mySliderHtml;
}

function thumbnail(){
    radioControls.innerHTML += `<div class="dot"></div>`;
    selectTumb();
}

function selectTumb() {
    let tumbs = document.querySelectorAll( ".dot" );
    let dots = [];

    for( let i = 0; i < tumbs.length; i++ ){
        dots[ i ] = tumbs[ i ]
    }
    dots.forEach(( element, indOf ) => {
        element.addEventListener( "click" , () => tumbnailsActive( indOf ))
    })    
}

const tumbnailsActive = ( indOf ) => {
    sessionStorage.count = indOf;
    show( data )
}

show( data );
data.forEach( thumbnail );
setInterval( () => { nextSlide( data ); }, 3000 );