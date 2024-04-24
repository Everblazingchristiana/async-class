// async function fetchData() {
//     //a asynchronous operation goes in here//

//      //await keyword//
//     const data = await fetch("https://jsonplaceholder.typicode.com/photos")
//     const response = await data.json()
//     console.log(response)
// }

// const fetchData2 = async () => {
//     //asynchronous operation goes in here//
// }

// //await keyword//


const fetchAlbum = async () => {
    try{
        const data2 = await fetch ("https://jsonplaceholder.typicode.com/photos")
        const res = await data2.json()
        console.log(res)

    } catch (error) {
        console.log(error)

    }
}

// fetchData()
fetchAlbum()
