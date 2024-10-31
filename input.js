let ota = document.getElementById('ota')

fetch('https://jsonplaceholder.typicode.com/users    ')
    .then((response) => response.json())
    .then((data) => getdata(data));

function getdata(params) {
    console.log(params);

    params.map((item) => {
        let div = document.createElement('div')
        let h3 = document.createElement('h3')
        let tel = document.createElement('p')
        let web = document.createElement('h4')
        let ema = document.createElement('p')
        let username = document.createElement('h2')
        let street = document.createElement('h5')
        let suite = document.createElement('h4')
        let city = document.createElement('h3')
        let zipcode = document.createElement('p')
        let geo = document.createElement('p')
        let lat = document.createElement('p')
        let lng = document.createElement('p')
        h3.innerHTML = 'Ism : ' + item.name
        tel.innerHTML = 'Tel : ' + item.phone     
        web.innerHTML = 'Web : ' + item.website
        ema.innerHTML = 'Ema : ' + item.email
        username.innerHTML = 'Username : ' +item.username 
        street.innerHTML = 'Street : ' +item.address.street
        suite.innerHTML = 'Suite : ' +item.address.suite 
        city.innerHTML = 'City : ' +item.address.city 
        zipcode.innerHTML = 'Zipcode : ' +item.address.zipcode 
        geo.innerHTML = 'Geo : ' +item.address.geo.lat 
        lng.innerHTML = 'Lng : ' +item.address.geo.lng 
        div.appendChild(h3)
        div.appendChild(tel)
        div.appendChild(web)
        div.appendChild(ema)
        div.appendChild(username )
        div.appendChild(street)
        div.appendChild(suite)
        div.appendChild(city)
        div.appendChild(zipcode)
        div.appendChild(geo)
        div.appendChild(lat)
        div.appendChild(lng)

        div.classList.add('box')

        ota.appendChild(div)
    })

}