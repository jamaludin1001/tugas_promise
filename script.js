var searchButton = document.querySelector(".search-button");

  function search(){
    var inputKeyword = document.querySelector(".input-keyword").value;

    const contentNews = document.querySelector("#content-news"); 

    contentNews.innerHTML="";
          fetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=599e0889d56045f4bbff7bc47af4dd32&q=" + inputKeyword)

          .then(response => response.json())
          .then((data) => { 
    
              let card1 = " ";
              data.articles.forEach((d)=>{
                  card1=`<div class="col-6 col-md-4 mb-4"> 
                            <div class="card" >
                                <img src="${d.urlToImage}" class="card-img-top" alt="">
                                  <div class="card-body" id="data">
                                        <h5 class="card-title">${d.title}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">${d.description}</h6>
                                        <stong> <i> <p class="card-author mb-2 text-muted">${d.author}</p> </i> </stong>
                                        <u> <p class="card-publisheadAt mb-2 text-muted">${d.publishedAt}</p> </u>
                                        <a href="${d.url}" class="btn btn-primary" target="_blank">Show Detail</a>
                                    </div>
                              </div>
                        </div>`;
                    contentNews.innerHTML += card1;
            });
          });
          }
search();