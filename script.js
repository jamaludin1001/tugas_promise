
  //const searchButton = document.querySelector('.search-button');
  //searchButton.addEventListener('click', function(){

//    const inputKeyword = document.querySelector('input-keyword');
  //   fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=599e0889d56045f4bbff7bc47af4dd32'+ inputKeyword.value) 
    //    .then(response => response.json())
      //  .then(response => console.log(response));
  //})




 // const data = fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=599e0889d56045f4bbff7bc47af4dd32');
 // data
   // .then(res => {
   //     card += ` <div class="col-6 col-md-4 mb-2"> 
       //               <div class="card" >
       //                  <img src="" class="card-img-top" alt="">
       //                   <div class="card-body" id="data">s
       //                        <h5 class="card-title">${res.title}</h5>
       //                        <h6 class="card-subtitle mb-2 text-muted">${res.description}</h6>
       //                       <a href="#" class="btn btn-primary">Show details</a>
       //                    </div>
       //                </div>
        //          </div>`;
        //card.innerHTML += card;
 //  })
  
  //  .finally(() => {
       
  //  });
 //
//data.map ((d) => {
   // card += ` <div class="col-6 col-md-4 mb-2"> 
     //               <div class="card" >
     //                   <img src="" class="card-img-top" alt="">
       //                 <div class="card-body" id="data">s
         //                   <h5 class="card-title">${d.title}</h5>
           //                 <h6 class="card-subtitle mb-2 text-muted">${d.description}</h6>
             //               <a href="#" class="btn btn-primary">Show details</a>
               //         </div>
                 //   </div>
              //  </div>`;
              https://newsapi.org/v2/everything?q=bitcoin&apiKey=599e0889d56045f4bbff7bc47af4dd32         // news_container.innerHTML+=card;
  //});
//});

var searchButton = document.querySelector(".search-button");
searchButton.addEventListener('click', function() {


fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=599e0889d56045f4bbff7bc47af4dd32'  )

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