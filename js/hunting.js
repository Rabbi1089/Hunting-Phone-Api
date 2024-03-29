


const loadPhone = async (phoneName='oppo' , isShowAll) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneName}`);
    const data = await response.json();
    const phones = data.data
    //console.log(phones)
    displayPhone(phones, isShowAll)
}
loadPhone()
const displayPhone = (phones , isShowAll) => {
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
  //console.log(phones.length)
  //console.log('Is show all : ', isShowAll)
  if(!isShowAll){
    phones = phones.slice(0,12);
  }

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
          <div class="card-actions justify-center">
            <button class="btn btn-primary" onclick="showDetail('${phone.slug}')">Show-Details</button>
          </div>
        </div>
        `

        //Step 4 : append  child
        phoneContainer.appendChild(phoneCart)


    });

    //off loading spiner
    loadingSpinner(false);
}


//Show Detail in a modal

const showDetail = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  const phone_Detail = data.data;
  showPhoneDetails(phone_Detail)
}


const showPhoneDetails = (phoneDetail) =>{
  console.log(phoneDetail)
  const phoneName = document.getElementById('show-Detail-phone-Name');
  phoneName.innerText = phoneDetail.name;

  const showDetailContainer = document.getElementById('show-Detail-container')
  showDetailContainer.innerHTML = `
  <img src="${phoneDetail.image}" alt="">
  <p><span>Stroage :${phoneDetail?.mainFeatures?.
    storage} </span></p>
    <p>releaseDate : ${phoneDetail?.releaseDate}</p>
    <p>Others Feature : <br>
    Bluetooth : ${phoneDetail?.others?.Bluetooth}<br>
    USB : ${phoneDetail?.others?.USB}<br>
    WLAN : ${phoneDetail?.others?.Bluetooth}<br>
    </p>
  `
  
  showDetailModal.showModal()
}



const handleSearch = () => {
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    //console.log(searchText)
    loadPhone(searchText)
}
handleSearch()

const handleSearch2 = (isShowAll) => {
loadingSpinner(true);
const searchField = document.getElementById('seacrh2')
const searchText = searchField.value;
//console.log(searchText)
loadPhone(searchText, isShowAll)
}

const loadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spinner');
  if(isLoading){
    loadingSpinner.classList.remove('hidden')
  }else{
    loadingSpinner.classList.add('hidden')
  }
  
}

const handleShowAll = () => {
  handleSearch2(true);
}


if(document.readyState){
  loadPhone();
}
