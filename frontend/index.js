document.addEventListener("DOMContentLoaded", () => {
   animalBtn();
   numberBtn();
   peekBtn();
   enqueueBtn();
   dequeueBtn();
})

let url = "http://localhost:8000/queue"

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

const verifyAnimal = async () => {
   let input = document.querySelector('input');
   try {
      let res = await axios.get(`http://localhost:8000/animal/${input.value.toLowerCase()}`)
      input.value = ""
      let h2 = document.querySelector('#verify');
      if(h2) {
         h2.innerHTML = "";
      } else {
         h2 = document.createElement('h2');
         document.body.appendChild(h2);
      }
      if(res.data.message){
         h2.innerText = "Animal is found"
      } else {
         h2.innerText = "Animal is not found"
      }
   } catch(err) {
      console.log(err)
   }
}

const pickRandomNum = async () => {
   let minNum = document.querySelector("#minVal")
   let maxNum = document.querySelector("#maxVal")

   try {
      let res = await axios.get(`http:localhost:8000/random?floor=${minNum.value}&ceil=${maxNum.value}`)
      let h2 = document.querySelector('#randNum');
      h2.innerHTML = "";

      h2.innerText = res.data.randPick;
   } catch (err) {
      console.log(err)
   }
}

const actionPeek = async () => {
   try {
      let res = await axios.get(`${url}/peek`);
      let h2 = document.querySelector('#action');
      h2.innerHTML = "";

      h2.innerText = res.data.data
   } catch(err) {
      console.log(err)
   }
}

const actionEnqueue = async () => {
   let input = document.querySelector("#name")
   try {
      let res = await axios.get(`${url}/enqueue?name=${input.value}`);
      let h2 = document.querySelector('#action');
      h2.innerHTML = "";

      h2.innerText = res.data.enqueued
   } catch(err) {
      console.log(err)
   }
}

const actionDequeue = async () => {
   try {
      let res = await axios.get(`${url}/dequeue`);
      let h3 = document.querySelector('h3');
      h3.innerHTML = "";

      h3.innerText = res.data.dequeued
   } catch(err) {
      console.log(err)
   }
}