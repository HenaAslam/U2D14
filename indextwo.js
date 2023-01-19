const url = "https://striveschool-api.herokuapp.com/api/product/";

window.onload = async () => {
    await getItems()
  }

const getItems = async () => {
    try {
        let options = {
            headers: new Headers({
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzJmOWU3MzczODAwMTUzNzQzNzYiLCJpYXQiOjE2NzQxMzAxNjksImV4cCI6MTY3NTMzOTc2OX0.Hq3t7gcaz0MoCv--tv_kJ1P7dcFP2ffVoTRq_hGxS9E",
            }),
          };
      const res = await fetch(url,options)
      const items = await res.json() 
      renderItems(items)
    } catch (error) {
      //handleError(error)
    }
  }
  
  
  const renderItems = (arrayOfItems) => {
    const ul = document.querySelector("ul.ul")
    ul.innerHTML = ""
    arrayOfItems.forEach((singleEvent) => {
      const { name, description,imageUrl, price, _id ,brand} = singleEvent
      
      ul.innerHTML += `<li class="list-group-item w-50">
      <div class='row align-items-center justify-content-between p-3'>
        <div class='col col-6'>
        <h3> ${name} </h3>
              <p> ${description} </p>
              ${
                price !== null
                  ? `<span class="badge badge-pill badge-warning">${price} $</span>`
                  : ""
              }
              <span class="badge badge-pill badge-info">${brand}</span>
              <span class="badge badge-pill badge-info">${imageUrl}</span>
              <span class="badge badge-pill badge-info">${_id}</span>
              <a href='./index.html?id=${_id}' class='btn btn-primary m-1'> <i class="bi bi-pencil-square"></i> </a>

        </div> 
         
      </div>
              
              
          </li>`
    })
  }