let url = "https://striveschool-api.herokuapp.com/api/product/";


const params = new URLSearchParams(location.search)
const id = params.get("id")
console.log(id)



window.onload = async () => {
    try {
      if (id !== null) {
      
  
        let res = await fetch(url + "/" + id,
        {
            headers: new Headers({
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzJmOWU3MzczODAwMTUzNzQzNzYiLCJpYXQiOjE2NzQxMzAxNjksImV4cCI6MTY3NTMzOTc2OX0.Hq3t7gcaz0MoCv--tv_kJ1P7dcFP2ffVoTRq_hGxS9E",
            }),
          })
        
        if(res.ok) {
          let { name, description, price, image,brand } = await res.json()
          document.querySelector("#itemPrice").value = price
          document.querySelector("#itemName").value = name
          document.querySelector("#itemBrand").value = brand
          document.querySelector("#itemImage").value = image
          document.querySelector("#itemDescription").value = description
        } 
         
        
      } 
  
    } catch (error) {
      console.log(error)
  
    }
  }
  
const postItem = async (itemToPost) => {
  try {
    itemToPost.preventDefault();
    const name = document.querySelector("#itemName").value;
    const brand = document.querySelector("#itemBrand").value;
    const imageUrl = document.querySelector("#itemImage").value;
    const price = document.querySelector("#itemPrice").value;
    const description = document.querySelector("#itemDescription").value;
    let newItem = { name, brand, imageUrl, price, description };
    

    let options = {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: new Headers({
        "Content-type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzJmOWU3MzczODAwMTUzNzQzNzYiLCJpYXQiOjE2NzQxMzAxNjksImV4cCI6MTY3NTMzOTc2OX0.Hq3t7gcaz0MoCv--tv_kJ1P7dcFP2ffVoTRq_hGxS9E",
      }),
    };

    let res = await fetch(url, options);
    let resJson = await res.json();
    console.log(resJson)
  } catch (err) {
    console.log(err);
  }
};




const editItem= async (itemToEdit) => {
  try {
    itemToEdit.preventDefault()
    
    
    const editedItem = {
        name : document.querySelector("#itemName").value,
         brand : document.querySelector("#itemBrand").value,
         imageUrl : document.querySelector("#itemImage").value,
         price : document.querySelector("#itemPrice").value,
         description : document.querySelector("#itemDescription").value
    }
    const res = await fetch(url + "/" + id, {
      
      method: "PUT",  
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzJmOWU3MzczODAwMTUzNzQzNzYiLCJpYXQiOjE2NzQxMzAxNjksImV4cCI6MTY3NTMzOTc2OX0.Hq3t7gcaz0MoCv--tv_kJ1P7dcFP2ffVoTRq_hGxS9E",
      }),
      body: JSON.stringify(editedItem),
    })
  
  } catch (error) {
    console.log(error)
  }
}