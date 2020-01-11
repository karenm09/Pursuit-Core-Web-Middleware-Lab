document.addEventListener("DOMContentLoaded", () => {
   animalBtn();
   numberBtn();
   peekBtn();
   enqueueBtn();
   dequeueBtn();
})

const animalBtn = () => {
   let btn = document.querySelector("button");
   btn.addEventListener("click", verifyAnimal)
}

const numberBtn = () => {
   let btn = document.querySelector("#random");
   btn.addEventListener("click", pickRandomNum)
}

const peekBtn = () => {
   let btn = document.querySelector("#peek");
   btn.addEventListener("click", actionPeek)
}

const enqueueBtn = () => {
   let btn = document.querySelector("#enqueue");
   btn.addEventListener("click", actionEnqueue)
}

const dequeueBtn = () => {
   let btn = document.querySelector("#dequeue");
   btn.addEventListener("click", actionDequeue)
}

const actionPeek = async () => {
   try {
      let res = await axios.get(`http://localhost:8000/queue/peek`);
      debugger
      let h3 = document.querySelector('h3');
      h3.innerHTML = "";

   } catch(err) {
      console.log(err)
   }
}

ç

const pickRandomNum = async () => {
   let minNum = document.querySelector("#minVal")
   let maxNum = document.querySelector("#maxVal")

   try {
      let res = await axios.get(`http:localhost:8000/random?floor=${minNum.value}&ceil=${maxNum.value}`)
      let h4 = document.querySelector('h4');
      h4.innerHTML = "";

      h4.innerText = res.data.randPick;
   } catch (err) {
      console.log(err)
   }
}