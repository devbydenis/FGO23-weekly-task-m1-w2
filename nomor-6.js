import readline from 'readline'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import consola from 'consola'

// supaya bisa pake __dirname dan __filename di ES Module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// bikin folder 'personData' buat nampung filenya
const personDataDir = path.join(__dirname, 'personData')
if (!fs.existsSync(personDataDir)) {  //existSync buat ngecek foldernya udh ada atau belum secara synchronous
  fs.mkdirSync(personDataDir) // kalo ada kita bikin pake mkdirSync secara synchronous
}

// bikin interface readline buat interaksi input dan output user di terminalnya
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// bikin fungsi untuk menampilkan menu. menunya bisa milih opsi 1-4
function showMenu() {
  consola.box('<<<<< Simple QnA CLI App >>>>>') // nampilin judul didalam kotak
  consola.info("1. Create new file")
  consola.info("2. Read file")
  consola.info("3. Delete file")
  consola.info("4. Keluar")
}

//buat fungsi create file
function createFile() {
  rl.question("Insert your file name without extension! (fileName): ", (fileName) => {
    const filePath = path.join(personDataDir, `${fileName}.txt`)
    if (fs.existsSync(filePath)) { // cek apakah file yg dibikin udh ada atau belom
      consola.error(`file ${fileName}.txt is already exist!`)
      main() // balik ke menu utama
      return  
    }

    rl.question("Insert file with content: ", (fileContent) => {
      fs.writeFileSync(filePath, fileContent, 'utf-8') // kita bikin file
      consola.success(`file ${fileName}.txt success to create!`)
      main() // balik ke menu utama
    })
  })
}

// buat fungsi membaca file
function readFile() {
  rl.question("Insert your file name without extension! (fileName): ", (fileName) => {
    const filePath = path.join(personDataDir, `${fileName}.txt`)
    if (!fs.existsSync(filePath)) {
      consola.error(`file ${fileName}.txt is not found`)
      main() // balik ke menu utama
      return
    }

    const contentFile = fs.readFileSync(filePath, 'utf-8') // baca filenya
    consola.box(`the content of ${fileName}.txt :`) // tampilin judul waktu buka filenya
    consola.log(contentFile) // tampilin isi filenya
    main()
  })
}

function deleteFile() {
  rl.question("Insert your file name without extension! (fileName): ", (fileName) => {
    const filePath = path.join(personDataDir, `${fileName}.txt`)
    if (!fs.existsSync(filePath)) {
      consola.error(`file ${fileName}.txt is not found`)
      main() // balik menu utama
      return // keluar dari function
    }

    fs.unlinkSync(filePath); // hapus file secara synchronous
    consola.success(`file ${fileName}.txt is success to delete!`)
    main() // balik menu utama
  })
}



function main() {
  setTimeout(() => {
    showMenu() // tampilkan menu dulu
    rl.question("Choose option from 1 to 4: ", (choice) => {
      switch (choice) {
        case '1':
          createFile()
          break;
        case '2':
          readFile()
          break;
        case '3':
          deleteFile()
          break;
        case '4':
          consola.info("Thanks for use! see you!.") // keluar dari app
          rl.close() // tutup interface rl
          break
        default:
          consola.error('option is invalid! try again!.')
          main() // balik ke menu 
          break;
      }
  })
  }, 3000);
}

export default main