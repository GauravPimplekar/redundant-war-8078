// async function getData(){
//     let url = `http://127.0.0.1:3000/api/Unboxed-car`
//     let res = await fetch(url,{
//         method:"GET",

//         headers:{
//             "Content-Type":"application/json"
//         }
//     })
//     let data =await res.json()
//     console.log(data)
//     // append(data)
// }





let Unboxedcar = [
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20Scorpio/Front%20right.jpg",
        "name": "Mahindra Scorpio ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33199",
        "exprice": "39099",
        "city": "Bangalore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/SUV_new/Mahindra_marazzo.jpg",
        "name": "Mahindra Marazzo",
        "type": "manual",
        "grear": "Diesel",
        "unbox": "Unboxed",
        "price": "28099",
        "exprice": "31999",
        "city": "Bangalore",
        "model": "XA",
        "id": 2
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20300/Front%20right.jpg",
        "name": "Mahindra XUV300 ",
        "type": "Petrol",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "26599",
        "exprice": "29399",
        "city": "Bangalore",
        "model": "XAI",
        "id": 3
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20300/Front%20right.jpg",
        "name": "Mahindra XUV300 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "27699",
        "exprice": "30499",
        "city": "Bangalore",
        "model": "AWE",
        "id": 4
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20300/Front%20right.jpg",
        "name": "Mahindra XUV300 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "29199",
        "exprice": "31999",
        "city": "Hyderabad",
        "model": "XA",
        "id": 5
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20300/Front%20right.jpg",
        "name": "Mahindra XUV300",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "29199",
        "exprice": "31999",
        "city": "Hyderabad",
        "model": "WE",
        "id": 6
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/SUV_new/Mahindra_Scorpio.jpg",
        "name": "Mahindra Scorpio ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "35099",
        "exprice": "39099",
        "city": "Mumbai",
        "model": "FWE",
        "id": 7
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20300/Front%20right.jpg",
        "name": "Mahindra XUV300 ",
        "type": "Petrol",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "25399",
        "exprice": "28199",
        "city": "Mumbai",
        "model": "J7",
        "id": 8
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20Marazzo/Front%20right.jpg",
        "name": "Mahindra Marazzo ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "24699",
        "exprice": "28599",
        "city": "Mumbai",
        "model": "AX",
        "id": 9
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20500/Front%20right.jpg",
        "name": "Mahindra XUV500 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "34599",
        "exprice": "38599",
        "city": "Mumbai",
        "model": "XWE",
        "id": 10
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20300/Front%20right.jpg",
        "name": "Mahindra XUV300",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "25199",
        "exprice": "27999",
        "city": "Mumbai",
        "model": "XE",
        "id": 11
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20Scorpio/Front%20right.jpg",
        "name": "Mahindra Scorpio",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "34799",
        "exprice": "38799",
        "city": "Delhi-NCR",
        "model": "FWE",
        "id": 12
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20Marazzo/Front%20right.jpg",
        "name": "Mahindra Marazzo ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "26899",
        "exprice": "30799",
        "city": "Delhi-NCR",
        "model": "KW",
        "id": 13
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20500/Front%20right.jpg",
        "name": "Mahindra XUV500 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "39899",
        "exprice": "43899",
        "city": "Delhi-NCR",
        "model": "W5",
        "id": 14
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20300/Front%20right.jpg",
        "name": "Mahindra XUV300 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "24799",
        "exprice": "27599",
        "city": "Delhi-NCR",
        "model": "WE",
        "id": 15
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20Scorpio/Front%20right.jpg",
        "name": "Mahindra Scorpio ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33399",
        "exprice": "37399",
        "city": "Chennai",
        "model": "X7",
        "id": 16
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20300/Front%20right.jpg",
        "name": "Mahindra XUV300 ",
        "type": "Petrol",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "25599",
        "exprice": "28399",
        "city": "Chennai",
        "model": "J7",
        "id": 17
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20Marazzo/Front%20right.jpg",
        "name": "Mahindra Marazzo ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "30199",
        "exprice": "34099",
        "city": "Chennai",
        "model": "KW",
        "id": 18
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20500/Front%20right.jpg",
        "name": "Mahindra XUV500 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "39899",
        "exprice": "43899",
        "city": "Pune",
        "model": "W7",
        "id": 19
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/SUV_new/Mahindra_Scorpio.jpg",
        "name": "Mahindra Scorpio ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33399",
        "exprice": "37399",
        "city": "Pune",
        "model": "XE",
        "id": 20
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20300/Front%20right.jpg",
        "name": "Mahindra XUV300",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "28899",
        "exprice": "31699",
        "city": "Pune",
        "model": "WE",
        "id": 21
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20500/Front%20right.jpg",
        "name": "Mahindra XUV500 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "38999",
        "exprice": "42999",
        "city": "Kolkata",
        "model": "W5",
        "id": 22
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20Scorpio/Front%20right.jpg",
        "name": "Mahindra Scorpio",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "37199",
        "exprice": "41199",
        "city": "Kolkata",
        "model": "XE",
        "id": 23
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20Scorpio/Front%20right.jpg",
        "name": "Mahindra Scorpio",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33399",
        "exprice": "37399",
        "city": "Ahmedabad",
        "model": "XE",
        "id": 24
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20Marazzo/Front%20right.jpg",
        "name": "Mahindra Marazzo ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "30499",
        "exprice": "34399",
        "city": "Bhubaneswar",
        "model": "KW",
        "id": 25
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20Marazzo/Front%20right.jpg",
        "name": "Mahindra Marazzo ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33299",
        "exprice": "37199",
        "city": "Chandigarh",
        "model": "KW",
        "id": 26
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20300/Front%20right.jpg",
        "name": "Mahindra XUV300",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "24299",
        "exprice": "27099",
        "city": "Chandigarh",
        "model": "WE",
        "id": 27
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20500/Front%20right.jpg",
        "name": "Mahindra XUV500 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33999",
        "exprice": "37999",
        "city": "Chandigarh",
        "model": "W5",
        "id": 28
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20Scorpio/Front%20right.jpg",
        "name": "Mahindra Scorpio",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33399",
        "exprice": "37399",
        "city": "Coimbatore",
        "model": "XE",
        "id": 29
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20300/Front%20right.jpg",
        "name": "Mahindra XUV300",
        "type": "Petrol",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "22799",
        "exprice": "25599",
        "city": "Jaipur",
        "model": "WE",
        "id": 31
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20500/Front%20right.jpg",
        "name": "Mahindra XUV500 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "36899",
        "exprice": "40899",
        "city": "Jaipur",
        "model": "W5",
        "id": 32
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20Scorpio/Front%20right.jpg",
        "name": "Mahindra Scorpio",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "28799",
        "exprice": "32799",
        "city": "Jaipur",
        "model": "XE",
        "id": 33
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20Marazzo/Front%20right.jpg",
        "name": "Mahindra Marazzo ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "30499",
        "exprice": "34399",
        "city": "Kochi",
        "model": "KW",
        "id": 34
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20Scorpio/Front%20right.jpg",
        "name": "Mahindra Scorpio",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "32399",
        "exprice": "36399",
        "city": "Mangalore",
        "model": "XE",
        "id": 35
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20Scorpio/Front%20right.jpg",
        "name": "Mahindra Scorpio",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "29299",
        "exprice": "33299",
        "city": "Nagpur",
        "model": "XE",
        "id": 36
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20300/Front%20right.jpg",
        "name": "Mahindra XUV300",
        "type": "Petrol",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "25399",
        "exprice": "28199",
        "city": "Vizag",
        "model": "WE",
        "id": 37
    },
    {
        "img": "https://lt-car-images.s3.ap-south-1.amazonaws.com/Mahindra%20XUV%20300/Front%20right.jpg",
        "name": "Mahindra XUV300",
        "type": "Petrol",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "22799",
        "exprice": "25599",
        "city": "Vizag",
        "model": "WE",
        "id": 38
    }
]



function x(id) {
    return document.createElement(id)
}

function append(data, c) {
    let container = document.querySelector("#container")
    container.innerHTML = null
    container.innerHTML = `<h3>${data.length} Unboxed Mahindra cars for subscription in ${c}<h3>`
    data.forEach((el) => {
        let img = x("img")
        img.src = el.img
        let name = x("h2")
        name.innerText = el.name
        let type = x("p")
        type.style.color = "gray"
        let unbox = x('p')
        unbox.innerText = el.unbox
        unbox.style.color = "gray"
        type.innerText = el.type
        let gear = x("p")
        gear.innerText = el.grear
        gear.style.color = "gray"
        let cardetail = x('div')
        let price = x('h3')
        price.innerText = `₹ ${el.price}/month`
        
        let exprice = x('h2')
        let s = x("s")
        s.innerText = `₹ ${el.exprice}`
        exprice.append(s)
        let pricedetail = x('div')
        pricedetail.append(price, exprice)
        let div = x('div')
        img.setAttribute('class', 'card')
        let petrol = x('img')
        petrol.src = "https://www.revv.co.in/grapheneImages/CarsAndPricing/transmission-icon.svg"
        let gearimg = x('img')
        gearimg.src = "https://www.revv.co.in/grapheneImages/CarsAndPricing/automatic-icon.svg"
        let detail = x('div')
        detail.setAttribute('class', 'detail')
        detail.append(petrol, type, gearimg, gear)
        cardetail.append(name, unbox, detail)
        cardetail.setAttribute("id",'carname')

        div.append(img, cardetail, pricedetail)
        container.append(div)
    })
}

function SearchByCity() {
    let data = document.querySelector('#option1').value
    
    filter(data)
}

function filter(city) {



    let data = Unboxedcar.filter((el) => {
        if (el.city == city) {
            return el
        }

    })
    append(data, city)
    
    console.log(data)
}



