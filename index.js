const heartCount = document.getElementById("heart-count");
const heartBtns = document.querySelectorAll(".heart-btn-id");
const callBtn = document.querySelectorAll(".call-btn");
const Token = document.getElementById("token");
const CallHistoryContainer = document.getElementById("call-history-container");
const clearBtn = document.getElementById("clear-btn");
// Heart Count
let count = 0;
let token = 100;
heartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    count++;
    heartCount.innerHTML = count;
    console.log(`Heart Button is clicked`);
  });
});

// Showing Alert when calling
callBtn.forEach((call) => {
  call.addEventListener("click", () => {
    const card = call.closest(".card");
    const callAlert = card.querySelector(".call-allert");
    const contact = card.querySelector(".contact");
    const callTitle = card.querySelector(".call-history");
    const CALL = callTitle.textContent;

    const data = callAlert.textContent;
    const contactNmbr = contact.textContent;
    console.log(data);

    if (token > 0) {
      token = token - 20;
      Token.innerHTML = token;
      alert("calling " + data + " at " + contactNmbr + "...");
      console.log(token);

      // New Date
      const currentTime = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      // Call History Details is being pushed from here
      const callHistoryDetails = document.createElement("div");
      callHistoryDetails.innerHTML = `
    <div class="flex justify-between mt-4">
    <div class="grid">
                <span>${CALL}</span>
                <span>${contactNmbr}</span>
              </div>
              <div class="mr-5 mt-2">${currentTime}</div>
              </div>

    `;
      CallHistoryContainer.appendChild(callHistoryDetails);
      console.log(CALL);
    } else if (token <= 0) {
      alert("আপনার পর্যাপ্ত কয়েন নেই! কল করলে কমপক্ষে ২০ কয়েন লাগবে।");
    }
  });
});

clearBtn.addEventListener("click", () => {
  CallHistoryContainer.innerHTML = "";
});