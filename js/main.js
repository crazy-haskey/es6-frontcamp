/**
 * Getting data from NY Times books
 * 
 * [description]
 * @param  {Function} response) {                   if (response.status ! [description]
 * @return {[type]}             [description]
 */
fetch('http://api.nytimes.com/svc/books/v3/lists/e-book-fiction.json?api-key=0c76f166750334dc4791277e58ce985c:9:74938552')  
  .then(  
    function(response) {  
      //if errorr => STOPworking
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      }
    //contenue to next step
      return response.json();  
    }  
  ).then(
    function(data) {   
      //foreach books genereta dom structure
        data.results.books.forEach((x) => {
          document.body.insertAdjacentHTML('beforeend', `
            <div class="container-fluid">
            <img src="${x.book_image}"></img>
            <h4>${x.title}</h4>
            <span>${x.author}</span>
            <p>${x.description}</p>
            </div>
          `);
        });
      }
  );