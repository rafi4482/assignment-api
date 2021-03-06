const error1= document.getElementById('error-message')

// taking input
const searchBook = ()=>{
const searchField=document.getElementById('search-field')
const searchText=searchField.value
if(searchText===""){
  error1.innerText='search field cannot be empty'
  return
}
error1.innerText=''
searchField.value=''
const url=`https://openlibrary.org/search.json?q=${searchText}`
fetch(url)
.then(res=>res.json())
.then(data=>display(data))
}
// display data
const display = doc =>{
const searchResult = document.getElementById('search-result')
searchResult.innerHTML=''
if(doc.docs.length===0){
  error1.innerText="nothing found"
}
doc.docs.forEach(docu=>{
const div = document.createElement('div')
const bn = document.getElementById('booknumber')
bn.innerText=`Total Results Found:${doc.numFound}`;
div.classList.add('col')
div.innerHTML =`
<div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${docu.cover_i}-L.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${docu.title}</h5>
          <p><b>Book Author:</b>${docu.author_name}</p>
          <p><b>Book Publisher:</b>${docu.publisher}</p>
          <p><b>First Publish Year:</b>${docu.first_publish_year}</p>
          </div>
      </div>
`
searchResult.appendChild(div)
})
}