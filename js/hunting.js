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

}
loadPhone()


const handleSearch = () => {
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText)
}
handleSearch()


