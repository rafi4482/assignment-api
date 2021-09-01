console.log('hello')

const searchBook = ()=>{

const searchField=document.getElementById('search-field')
const searchText=searchField.value
// console.log(searchText)
searchField.value=''
const url=`http://openlibrary.org/search.json?q=${searchText}`
fetch(url)
.then(res=>res.json())
.then(data=>display(data.docs))
}


const display = doc =>{

console.log(doc)
const searchResult = document.getElementById('search-result')
searchResult.innerHTML=''
doc.forEach(docu=>{
 
console.log(docu)
const div = document.createElement('div')

/* <p> Total Results Found:${doc.length}</p> */
div.classList.add('col')
div.innerHTML =`
<div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${docu.cover_i}-L.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Book Author:${docu.author_name} Book Title:${docu.title}</h5>
          <p class="card-text">Book Publisher:${docu.publisher}</p>
          <p> First Publish Year:${docu.first_publish_year}</p>
          </div>
      </div>

`

searchResult.appendChild(div)

})

}