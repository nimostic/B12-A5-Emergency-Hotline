const callHistory = [];


// heart count

const heartCount = document.getElementById("heart-count");
const mobileheartCount = document.getElementById("heart-count-mobile");
const hearts = document.querySelectorAll(".fa-heart");
let count = 0;
document.addEventListener("click", function (event) {
  
  const heart = event.target.closest(".fa-heart");
  if (!heart) return;
  
  heart.classList.replace("fa-regular", "fa-solid");
  heart.classList.add("fa-solid", "text-red-500");
  count++;
  
  // if (heart.classList.contains("fa-regular")) {
  //   heart.classList.replace("fa-regular", "fa-solid");
  //   heart.classList.add("fa-solid", "text-red-500");
  //   count++;
  // } else {
  //   heart.classList.replace("fa-solid", "fa-regular");
  //   heart.classList.remove("text-red-500", "fa-solid");
  //   count--;
  // }
  heartCount.innerText = count;
  mobileheartCount.innerText = count;


});

// call button

console.log(parseInt(document.getElementById("total-coin").innerText));
let totalCoin = parseInt(document.getElementById("total-coin").innerText);
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".call-btn");
  if (!btn) return;
  const card = btn.closest(".card");
  const title = card.querySelector(".title").innerText;
  const number = card.querySelector(".number").innerText;
  const date = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  //store korsi
  callHistory.push({ title, number, date });

  // <i class="fa-solid fa-phone text-[#00a63e]"></i> call icon 
  console.log(title);
  if (btn) {
    if (totalCoin > 0) {
      totalCoin -= 20;
      document.getElementById("total-coin").innerText = totalCoin;
      document.getElementById("mobile-total-coin").innerText = totalCoin;
      alert(`📞 Calling ${title} at ${number}`);
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg my-2">
            <div>
              <p class="font-semibold">${title}</p>
              <p class="text-sm font-semibold">${number}</p>
            </div>
            
            <p class="text-sm font-semibold">${date}</p>
        </div>
      `;
      document.getElementById("history-list").prepend(div);
    } else {
      alert("You don't have sufficient coin");
    }
  }
});

// clear history

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("history-list").innerHTML = "";
});

// copy

let copyCount = 0;

document.addEventListener("click", function (e) {
  const btn = e.target.closest(".copy-btn");
  if (!btn) return;

  const card = btn.closest(".card");
  const textToCopy = card.querySelector(".number").innerText;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      copyCount++;
      document.querySelectorAll(".copy-count").forEach((el) => {
        el.innerText = copyCount;
      });
      alert(`Copied: ${textToCopy}`);
    })
    .catch((err) => {
      alert("Failed to copy to clipboard! Please try again.");
    });
});
