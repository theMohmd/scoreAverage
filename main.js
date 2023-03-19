let count = 1;
let nameCard = true;

function showName(toggle=true) {
  if(toggle){nameCard = !nameCard;      document.getElementsByClassName('ol-caveat-f')[0].classList.toggle('ol-caveat-o');
}
  const scoreList = document.getElementById("scoreContainer").children;
  for (let index = 0; index < scoreList.length; index++) {
    if (nameCard) {
      scoreList[index].children[0].children[0].classList.remove("hidden");
    } else {
     
      scoreList[index].children[0].children[0].classList.add("hidden");
    }
  }
}

function addScore() {
  const content = `<div
  class="h-auto w-full flex flex-col items-end bg-[#EA5455] rounded-2xl"
>
  <div class="mt-4 pr-4 pl-4 w-full flex flex-row-reverse">
    <p class="text-[#f5d1d1] text-2xl select-none">نام</p>
    <input
      type="text"
      class="mr-4 text-[#0E5E6F] text-2xl bg-[#F2DEBA] w-full rounded-2xl text-center outline-none h-10"
    />
  </div>
  <div
    class="row-start-2 row-end-3 col-start-1 col-end-2 p-4 flex items-center justify-evenly gap-4 flex-row-reverse w-full"
  >
    <label
      for="check${count}"
      onclick="calc()"
      class="flex group justify-center items-center"
    >
      <input
        type="checkbox"
        name="valid"
        id="check${count}"
        checked
        class="peer hidden"
      />

      <i
        class="ol-confirm-o hidden group-hover:block hover:cursor-pointer text-3xl text-[#8a3232] peer-checked:text-[#0E5E6F] select-none place-self-center top-0 relative"
      ></i>
      <i
        class="ol-confirm-f group-hover:hidden hover:cursor-pointer text-3xl text-[#8a3232] peer-checked:text-[#0E5E6F] select-none place-self-center top-0 relative"
      ></i>
    </label>

    <p class="text-[#f5d1d1] text-2xl select-none">نمره</p>
    <input
      oninput="calc()"
      type="text"
      name="score"
      placeholder="0"
      class="text-[#0E5E6F] text-2xl bg-[#F2DEBA] w-1/3 rounded-2xl text-center outline-none h-10"
    />
    <p class="text-[#f5d1d1] text-2xl select-none">واحد</p>
    <input
      oninput="calc()"
      type="text"
      name="weight"
      value="1"
      class="appearance-none text-[#0E5E6F] text-2xl bg-[#F2DEBA] w-1/3 rounded-2xl text-center outline-none h-10"
    />
    <div
      class="group flex hover:cursor-pointer"
      onclick="deleteScore(${count}); calc()"
    >
      <i
        class="ol-delete-o group-hover:hidden text-[#f5d1d1] text-2xl select-none rounded-full"
      ></i
      ><i
        class="ol-delete-f hidden group-hover:block text-[#f5d1d1] text-2xl select-none rounded-full"
      ></i>
    </div>
  </div>
</div>`;

  const node = document.createElement("div");
  node.setAttribute("id", "scoreDiv" + count);
  node.innerHTML = content;
  document.querySelector("#scoreContainer").prepend(node);
  count++;
}

function deleteScore(a) {
  document.getElementById("scoreDiv" + a).remove();
}

function calc() {
  let totalWeight = Number(0);
  let totalScore = 0;

  const scoreList = document.getElementById("scoreContainer").children;
  for (let index = 0; index < scoreList.length; index++) {
    if (isNaN(scoreList[index].children[0].children[1].children[2].value)) {
      scoreList[index].children[0].children[1].children[2].style.color = "red";
    } else {
      scoreList[index].children[0].children[1].children[2].style.color =
        "#0e5e6f";
      if (isNaN(scoreList[index].children[0].children[1].children[4].value)) {
        scoreList[index].children[0].children[1].children[4].style.color =
          "red";
      } else {
        scoreList[index].children[0].children[1].children[4].style.color =
          "#0e5e6f";
        if (scoreList[index].children[0].children[1].children[0].children[0].checked) {
          totalWeight += Number(
            scoreList[index].children[0].children[1].children[4].value
          );
          totalScore +=
            Number(scoreList[index].children[0].children[1].children[4].value) *
            Number(scoreList[index].children[0].children[1].children[2].value);
        }
      }
    }
    
  }
  document.getElementById("resultScore").innerText = (
    totalScore / totalWeight
  ).toFixed(2);
  document.getElementById("resultWeight").innerText = totalWeight;
  console.log(totalScore);
}

function reset() {
  count = 0;
  document.getElementById("scoreContainer").innerHTML = "";
  addScore();
  document.getElementById("resultScore").innerText = "0.00";
  document.getElementById("resultWeight").innerText = "1";
}
