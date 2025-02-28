function fetchData(status) {
  if (typeof status !== 'boolean') return "parameter harus boolean true atau false"
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (status === true) {
              resolve("Data berhasil diambil");
          } else {
              reject("Gagal mengambil data");
          }
      }, 3000);
  });
}

///////////////////////////////////////////////////////////////////////////////////

// then-catch
/*
  - adalah promise chaining dimana bertujuan untuk menghandle kondisi 
  dari sebuah promise apakah dia resolve atau reject
  - jika kode resolve maka akan ditanagni di method .then()
  - begitupun sebaliknya, jika kode reject maka akan ditangkap di method .catch()
*/
fetchData(true)
  .then((hasil) => console.log(`Hasil: ${hasil}`))
  .catch((error) => console.log(`Error: ${error}`));

///////////////////////////////////////////////////////////////////////////////////

// Async-Await with try catch
/*
  - async-await adalah syntatic sugar dari promise
  - kita bisa menulis kode asynchronous dengan gaya synchronous
  - async digunakan untuk melabeli fungsi bahwa dia asynchronous
  - await dipakai untuk menunggu data promise selesai terlebih dahulu

*/
async function processData() {
  try {
      const isSuccess = false
      const data = await fetchData(isSuccess);
      console.log(`Hasil: ${data}`);
  } catch (error) {
      console.log("Error:", error);
  }
}

export default processData

///////////////////////////////////////////////////////////////////////////////////
