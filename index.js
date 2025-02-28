import processData from "./nomor-1.js";
import getDataFromServer from "./nomor-2.js";
import fetchDataAPI from "./nomor-3.js";
import { reverseWords, cekPalindrom } from "./nomor-4.js";
import divideAndSort from "./nomor-5.js";
import main from "./nomor-6.js";


function weeklyTaskDenis(){
  processData()
  getDataFromServer(true, processData)
  fetchDataAPI()
  reverseWords("fazztrack")
  cekPalindrom("kasur rusak")
  divideAndSort(5956560159466056)
  main()
}

weeklyTaskDenis()
