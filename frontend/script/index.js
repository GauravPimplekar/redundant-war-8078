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
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        "name": "Hyundai Grand i10 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "22899",
        "exprice": "24799",
        "city": "Bangalore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/hyundai_santro.jpg",
        "name": "Hyundai Santro",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "20999",
        "exprice": "22899",
        "city": "Bangalore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_eon.jpg",
        "name": "Hyundai eon",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "16099",
        "exprice": "17799",
        "city": "Bangalore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/SUV_new/Hyundai_creta.jpg",
        "name": "Hyundai creta",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "35099",
        "exprice": "38299",
        "city": "Bangalore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/hyundai_santro.jpg",
        "name": "Hyundai Santro",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "15799",
        "exprice": "17699",
        "city": "Bangalore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Sedan_new/Hyundai_verna.jpg",
        "name": "Hyundai verna",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33899",
        "exprice": "37499",
        "city": "Bangalore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/Hyundai_verna.jpg",
        "name": "Hyundai verna",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33899",
        "exprice": "16099",
        "city": "Bangalore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        "name": "Hyundai Grand i10 ",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "20999",
        "exprice": "22899",
        "city": "Bangalore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_elite_i20.jpg",
        "name": "Hyundai elite i20 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "20299",
        "exprice": "22599",
        "city": "Bangalore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_Venue.jpg",
        "name": "Hyundai Venue ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "27899",
        "exprice": "30699",
        "city": "Bangalore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Hatchback_new/Hyundai_elite_i20.jpg",
        "name": "Hyundai elite i20",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "24699",
        "exprice": "27399",
        "city": "Bangalore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/hyundai_xcent.jpg",
        "name": "Hyundai xcent",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "18899",
        "exprice": "21399",
        "city": "Bangalore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_creta.jpg",
        "name": "Hyundai creta",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "42499",
        "exprice": "46799",
        "city": "Bangalore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        "name": "Hyundai Grand i10 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "22899",
        "exprice": "24799",
        "city": "Hyderabad",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/hyundai_santro.jpg",
        "name": "Hyundai Santro",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "20999",
        "exprice": "22899",
        "city": "Hyderabad",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_eon.jpg",
        "name": "Hyundai eon",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "16099",
        "exprice": "17799",
        "city": "Hyderabad",
        "model": "VI",
        "id": 1
    },
    
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/Hyundai_verna.jpg",
        "name": "Hyundai verna",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33899",
        "exprice": "16099",
        "city": "Hyderabad",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        "name": "Hyundai Grand i10 ",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "20999",
        "exprice": "22899",
        "city": "Hyderabad",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_elite_i20.jpg",
        "name": "Hyundai elite i20 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "20299",
        "exprice": "22599",
        "city": "Hyderabad",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_Venue.jpg",
        "name": "Hyundai Venue ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "27899",
        "exprice": "30699",
        "city": "Hyderabad",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Hatchback_new/Hyundai_elite_i20.jpg",
        "name": "Hyundai elite i20",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "24699",
        "exprice": "27399",
        "city": "Hyderabad",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/hyundai_xcent.jpg",
        "name": "Hyundai xcent",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "18899",
        "exprice": "21399",
        "city": "Hyderabad",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_creta.jpg",
        "name": "Hyundai creta",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "42499",
        "exprice": "46799",
        "city": "Hyderabad",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        "name": "Hyundai Grand i10 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "22899",
        "exprice": "24799",
        "city": "Mumbai",
        "model": "VI",
        "id": 1
    },
    
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Sedan_new/Hyundai_verna.jpg",
        "name": "Hyundai verna",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33899",
        "exprice": "37499",
        "city": "Mumbai",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/Hyundai_verna.jpg",
        "name": "Hyundai verna",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33899",
        "exprice": "16099",
        "city": "Mumbai",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        "name": "Hyundai Grand i10 ",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "20999",
        "exprice": "22899",
        "city": "Mumbai",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_elite_i20.jpg",
        "name": "Hyundai elite i20 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "20299",
        "exprice": "22599",
        "city": "Mumbai",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_Venue.jpg",
        "name": "Hyundai Venue ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "27899",
        "exprice": "30699",
        "city": "Mumbai",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Hatchback_new/Hyundai_elite_i20.jpg",
        "name": "Hyundai elite i20",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "24699",
        "exprice": "27399",
        "city": "Mumbai",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/hyundai_xcent.jpg",
        "name": "Hyundai xcent",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "18899",
        "exprice": "21399",
        "city": "Mumbai",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_creta.jpg",
        "name": "Hyundai creta",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "42499",
        "exprice": "46799",
        "city": "Mumbai",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        "name": "Hyundai Grand i10 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "22899",
        "exprice": "24799",
        "city": "Delhi-NCR",
        "model": "VI",
        "id": 1
    },
    
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        "name": "Hyundai Grand i10 ",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "20999",
        "exprice": "22899",
        "city": "Delhi-NCR",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_elite_i20.jpg",
        "name": "Hyundai elite i20 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "20299",
        "exprice": "22599",
        "city": "Delhi-NCR",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_Venue.jpg",
        "name": "Hyundai Venue ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "27899",
        "exprice": "30699",
        "city": "Delhi-NCR",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Hatchback_new/Hyundai_elite_i20.jpg",
        "name": "Hyundai elite i20",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "24699",
        "exprice": "27399",
        "city": "Delhi-NCR",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/hyundai_xcent.jpg",
        "name": "Hyundai xcent",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "18899",
        "exprice": "21399",
        "city": "Delhi-NCR",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_creta.jpg",
        "name": "Hyundai creta",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "42499",
        "exprice": "46799",
        "city": "Delhi-NCR",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        "name": "Hyundai Grand i10 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "22899",
        "exprice": "24799",
        "city": "Chennai",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/hyundai_santro.jpg",
        "name": "Hyundai Santro",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "20999",
        "exprice": "22899",
        "city": "Chennai",
        "model": "VI",
        "id": 1
    },
    
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_elite_i20.jpg",
        "name": "Hyundai elite i20 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "20299",
        "exprice": "22599",
        "city": "Chennai",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_Venue.jpg",
        "name": "Hyundai Venue ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "27899",
        "exprice": "30699",
        "city": "Chennai",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Hatchback_new/Hyundai_elite_i20.jpg",
        "name": "Hyundai elite i20",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "24699",
        "exprice": "27399",
        "city": "Chennai",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/hyundai_xcent.jpg",
        "name": "Hyundai xcent",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "18899",
        "exprice": "21399",
        "city": "Chennai",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_creta.jpg",
        "name": "Hyundai creta",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "42499",
        "exprice": "46799",
        "city": "Chennai",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        "name": "Hyundai Grand i10 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "22899",
        "exprice": "24799",
        "city": "Pune",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/hyundai_santro.jpg",
        "name": "Hyundai Santro",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "20999",
        "exprice": "22899",
        "city": "Pune",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_eon.jpg",
        "name": "Hyundai eon",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "16099",
        "exprice": "17799",
        "city": "Pune",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/SUV_new/Hyundai_creta.jpg",
        "name": "Hyundai creta",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "35099",
        "exprice": "38299",
        "city": "Pune",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/hyundai_santro.jpg",
        "name": "Hyundai Santro",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "15799",
        "exprice": "17699",
        "city": "Pune",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Sedan_new/Hyundai_verna.jpg",
        "name": "Hyundai verna",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33899",
        "exprice": "37499",
        "city": "Pune",
        "model": "VI",
        "id": 1
    },
    
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_creta.jpg",
        "name": "Hyundai creta",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "42499",
        "exprice": "46799",
        "city": "Pune",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        "name": "Hyundai Grand i10 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "22899",
        "exprice": "24799",
        "city": "Kolkata",
        "model": "VI",
        "id": 1
    },
    
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/SUV_new/Hyundai_creta.jpg",
        "name": "Hyundai creta",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "35099",
        "exprice": "38299",
        "city": "Kolkata",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/hyundai_santro.jpg",
        "name": "Hyundai Santro",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "15799",
        "exprice": "17699",
        "city": "Kolkata",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Sedan_new/Hyundai_verna.jpg",
        "name": "Hyundai verna",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33899",
        "exprice": "37499",
        "city": "Kolkata",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/Hyundai_verna.jpg",
        "name": "Hyundai verna",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33899",
        "exprice": "16099",
        "city": "Kolkata",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        "name": "Hyundai Grand i10 ",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "20999",
        "exprice": "22899",
        "city": "Kolkata",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_elite_i20.jpg",
        "name": "Hyundai elite i20 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "20299",
        "exprice": "22599",
        "city": "Kolkata",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_Venue.jpg",
        "name": "Hyundai Venue ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "27899",
        "exprice": "30699",
        "city": "Kolkata",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Hatchback_new/Hyundai_elite_i20.jpg",
        "name": "Hyundai elite i20",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "24699",
        "exprice": "27399",
        "city": "Kolkata",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/hyundai_xcent.jpg",
        "name": "Hyundai xcent",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "18899",
        "exprice": "21399",
        "city": "Kolkata",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_creta.jpg",
        "name": "Hyundai creta",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "42499",
        "exprice": "46799",
        "city": "Kolkata",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        "name": "Hyundai Grand i10 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "22899",
        "exprice": "24799",
        "city": "Ahmedabad",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/hyundai_santro.jpg",
        "name": "Hyundai Santro",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "20999",
        "exprice": "22899",
        "city": "Ahmedabad",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_eon.jpg",
        "name": "Hyundai eon",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "16099",
        "exprice": "17799",
        "city": "Ahmedabad",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/SUV_new/Hyundai_creta.jpg",
        "name": "Hyundai creta",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "35099",
        "exprice": "38299",
        "city": "Ahmedabad",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/hyundai_santro.jpg",
        "name": "Hyundai Santro",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "15799",
        "exprice": "17699",
        "city": "Bhubaneswar",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Sedan_new/Hyundai_verna.jpg",
        "name": "Hyundai verna",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33899",
        "exprice": "37499",
        "city": "Bhubaneswar",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/Hyundai_verna.jpg",
        "name": "Hyundai verna",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33899",
        "exprice": "16099",
        "city": "Bhubaneswar",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        "name": "Hyundai Grand i10 ",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "20999",
        "exprice": "22899",
        "city": "Bhubaneswar",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_elite_i20.jpg",
        "name": "Hyundai elite i20 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "20299",
        "exprice": "22599",
        "city": "Bhubaneswar",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_Venue.jpg",
        "name": "Hyundai Venue ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "27899",
        "exprice": "30699",
        "city": "Bhubaneswar",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Hatchback_new/Hyundai_elite_i20.jpg",
        "name": "Hyundai elite i20",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "24699",
        "exprice": "27399",
        "city": "Chandigarh",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/hyundai_xcent.jpg",
        "name": "Hyundai xcent",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "18899",
        "exprice": "21399",
        "city": "Chandigarh",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_creta.jpg",
        "name": "Hyundai creta",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "42499",
        "exprice": "46799",
        "city": "Chandigarh",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        "name": "Hyundai Grand i10 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "22899",
        "exprice": "24799",
        "city": "Coimbatore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/hyundai_santro.jpg",
        "name": "Hyundai Santro",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "20999",
        "exprice": "22899",
        "city": "Coimbatore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_eon.jpg",
        "name": "Hyundai eon",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "16099",
        "exprice": "17799",
        "city": "Jaipur",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/SUV_new/Hyundai_creta.jpg",
        "name": "Hyundai creta",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "35099",
        "exprice": "38299",
        "city": "Jaipur",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/hyundai_santro.jpg",
        "name": "Hyundai Santro",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "15799",
        "exprice": "17699",
        "city": "Jaipur",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Sedan_new/Hyundai_verna.jpg",
        "name": "Hyundai verna",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33899",
        "exprice": "37499",
        "city": "Kochi",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/Hyundai_verna.jpg",
        "name": "Hyundai verna",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "33899",
        "exprice": "16099",
        "city": "Kochi",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        "name": "Hyundai Grand i10 ",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "20999",
        "exprice": "22899",
        "city": "Mangalore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_elite_i20.jpg",
        "name": "Hyundai elite i20 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "20299",
        "exprice": "22599",
        "city": "Mangalore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_Venue.jpg",
        "name": "Hyundai Venue ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "27899",
        "exprice": "30699",
        "city": "Mangalore",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Hatchback_new/Hyundai_elite_i20.jpg",
        "name": "Hyundai elite i20",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "24699",
        "exprice": "27399",
        "city": "Nagpur",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/hyundai_xcent.jpg",
        "name": "Hyundai xcent",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "18899",
        "exprice": "21399",
        "city": "Nagpur",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_creta.jpg",
        "name": "Hyundai creta",
        "type": "Diesel",
        "grear": "Automatic",
        "unbox": "Unboxed",
        "price": "42499",
        "exprice": "46799",
        "city": "Nagpur",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        "name": "Hyundai Grand i10 ",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "22899",
        "exprice": "24799",
        "city": "Vizag",
        "model": "VI",
        "id": 1
    },
    {
        "img": "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/hyundai_santro.jpg",
        "name": "Hyundai Santro",
        "type": "Diesel",
        "grear": "Manual",
        "unbox": "Unboxed",
        "price": "20999",
        "exprice": "22899",
        "city": "Vizag",
        "model": "VI",
        "id": 1
    },
]



function x(id) {
    return document.createElement(id)
}

function append(data, c) {
    let container = document.querySelector("#container")
    container.innerHTML = null
    container.innerHTML = `<h3>${data.length} Unboxed Hyndai cars for subscription in ${c}<h3>`
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

        div.addEventListener("click",carsdetail())

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

function carsdetail(){
    window.location.href = "."
}

