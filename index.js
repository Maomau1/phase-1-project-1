function createSlide(show){
    //create variables for the elements that will form show card
    const article = document.createElement('article');
    article.className="show-post";
    const header = document.createElement('header');
    const h2 = document.createElement('h2');
    const ul = document.createElement('ul');
    const p = document.createElement('p');
    const div = document.createElement('div');
    const img = document.createElement('img');
    const h5 = document.createElement('h5');
    const button = document.createElement('button');

    article.append(header);
    article.append(ul);
    header.append(h2);
    header.append(h5);
    ul.appendChild(img);
    ul.appendChild(div)
    ul.appendChild(button);
    
    img.src = show.image.medium;
    h2.textContent = show.name;
    h5.textContent = show.genres;
    const h51 = document.createElement('span');
    const heart = ' ♥';
    h51.textContent=`${heart}`;
    
    h5.appendChild(h51);
    
    button.textContent = 'see more'
    button.className = 'btn';
      
    document.querySelector('main').appendChild(article);
    
    const seeMoreBtn = button.addEventListener('click',buttonHandle);
    const zoom = img.addEventListener('dblclick', zoomHandle)
    const heartRating = h51.addEventListener('mouseover', ratingHandle)

    function ratingHandle(){
        if(h51.innerText ==heart){
            h51.innerText=` ${heart}: ${show.rating.average}`
            h51.className='activated-heart'
        }
        else{
            h51.innerText=heart
            h51.className='';
        }
    }
    function zoomHandle(){
        if(img.src == show.image.original){
            img.src = show.image.medium;
        }
        else{
            img.src = show.image.original
        }
    }
    function buttonHandle (){
        if(button.textContent=='see more') {
            ul.append(p)
            p.className='seeMore'
            p.innerHTML=show.summary;
            button.textContent= 'see less';
        }
        else if(button.textContent=='see less'){
            console.log(ul)
            p.remove();
            button.textContent='see more';
        }
    }   
}

initialize()

function fetchShow(show) {
    displayShow(show)
    //console.log(show);
}

    function fetchAPI () {
    return (
        fetch("https://api.tvmaze.com/shows")
        .then(resp => resp.json())
        .then(data => data.forEach(show => createSlide(show))))
    }

function initialize() {
   fetchAPI()
    // allShows.forEach(show => displayShow(show))
}
/* function filterShows(show,filter){
    if (!show.genres.includes(`${filter}`)) {
        ul.remove();
    }
}
//let allGenres = [];
//console.log(allGenres)*/

