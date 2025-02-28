// No 3
// Program 1 (Menggunakan Promise)
const url = "https://jsonplaceholder.typicode.com/users"
fetch(url)
    .then((response) => {
        if (!response.ok) throw new Error("response was not ok")
        return response.json();
    })
    .then((data) => {
        let cities = [];
        for (const element of data) {
            cities.push(element.address.city);
        }
        const sortedCities = cities.sort()
        console.log(sortedCities);
    })
    .catch((error) => {
        if (error instanceof Error) console.log(error.message)
    });

// Program 2 (Menggunakan async-await)
async function fetchDataAPI() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("response was not ok")

        const data = await response.json();
        let cities = [];
        for (const element of data) {
            cities.push(element.address.city);
        }

        const sortedCities = cities.sort()
        console.log(sortedCities);
    } catch (error) {
        if (error instanceof Error) console.log(error.message)
    }
}

export default fetchDataAPI
