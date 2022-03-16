var searchButton = document.querySelector(".search-button");
searchButton.addEventListener('click', function() {

fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=599e0889d56045f4bbff7bc47af4dd32' )

  .then(response => response.json())
  .then((data) => { 
    var inputKeyword = document.querySelector(".input-keyword");
    const card = document.querySelector(".row"); 
    let card1 = " ";
    console.log(inputKeyword);
    data.articles.forEach((d)=>{
        card1=`<div class="col-6 col-md-4 mb-4"> 
                  <div class="card" >
                      <img src="${d.urlToImage}" class="card-img-top" alt="">
                        <div class="card-body" id="data">
                              <h5 class="card-title">${d.title}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">${d.description}</h6>
                              <stong> <i> <p class="card-author mb-2 text-muted">${d.author}</p> </i> </stong>
                              <u> <p class="card-publisheadAt mb-2 text-muted">${d.publishedAt}</p> </u>
                              <a href="#" class="btn  btn-primary btn-tampil" 
                              data-bs-toggle="modal" data-bs-target="#detailbutton" data-url="${d.url}">Show details</a>
                          </div>
                    </div>
              </div>`;
          card.innerHTML += card1;
   });
 });
});