import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
    const pronoun = ["the", "our"];
    const adj = ["big", "small", "huge", "tiny"];
    const noun = ["dog", "runner", "flower", "cat"];
    const extension = [".com", ".net"];
    const combinations = [];
        for (const p of pronoun) {
            for (const a of adj){
                for (const n of noun){
                    for (const e of extension){
                        combinations.push(p +  a + n + e);
                    }
                }
            }
        }
   combinations.forEach(domain => console.log(domain));
}
