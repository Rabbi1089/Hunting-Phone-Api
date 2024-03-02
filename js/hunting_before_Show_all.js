//console.log('hunting js')

const loadPhone = async (phoneName) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneName}`);
    const data = await response.json();
    const phones = data.data
    //console.log(phones)
    displayPhone(phones)
}

const displayPhone = (phones) => {

    // step  : 1  get container by id
    const phoneContainer = document.getElementById('phone-container')
    //Clear phone container before search;
    phoneContainer.textContent = '';
  //display show all button if more than 12 product
  const showAll = document.getElementById('show-all');
  if(phones.length > 12) {
    showAll.classList.remove('hidden')
  }else{
    showAll.classList.add('hidden')
  }


  //This will show only 12 item (slice)
  console.log(phones.length)
  phones = phones.slice(0,12)

    
  

    phones.forEach(phone => {
        // step  : 2 create a div
   
        const phoneCart = document.createElement('div');
        phoneCart.classList = `card card-compact w-96 bg-base-100 shadow-xl`;

        //step  : 3 set innerhtml


        phoneCart.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>${phone.slug}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `

        //Step 4 : append  child
        phoneContainer.appendChild(phoneCart)


    });

    //off loading spiner
    loadingSpinner(false);
}
loadPhone()


const handleSearch = () => {
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText)
}
handleSearch()

const handleSearch2 = () => {
loadingSpinner(true);
const searchField = document.getElementById('seacrh2')
const searchText = searchField.value;
console.log(searchText)
loadPhone(searchText)
}

const loadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spinner');
  if(isLoading){
    loadingSpinner.classList.remove('hidden')
  }else{
    loadingSpinner.classList.add('hidden')
  }
  
}

// const handleShowAll = () => {
//   handleSearch2();
// }