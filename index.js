import processData from "./nomor-1";
import getDataFromServer from "./nomor-2";
import fetchDataAPI from "./nomor-3";
import { reverseWords, cekPalindrom } from "./nomor-4";
import divideAndSort from "./nomor-5";
import main from "./nomor-6";


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
