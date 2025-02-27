var form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let naziv = document.getElementById("naziv").value.trim();
  let ocjena = document.getElementById("ocjena").value.trim();
  if (!naziv || !ocjena || ocjena < 1 || ocjena > 10) {
    alert("Molimo unesite ispravan naziv i ocjenu (1-10).");
    return;
  }
  let now = new Date();
  let formattedDate = now.toLocaleString("hr-HR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  var ol = document.getElementsByTagName("ol")[0];
  var li = document.createElement("li");
  li.innerHTML = `${naziv} ${ocjena} <br> <small>Dodano: ${formattedDate}</small> `;
  var fav = document.createElement("button");
  fav.textContent = "⭐";
  fav.classList.add("fav");
  var rem = document.createElement("button");
  rem.textContent = "🗑️";
  rem.classList.add("rem");
  ol.appendChild(li);
  li.appendChild(fav);
  li.appendChild(rem);
  // Event za favorit
  fav.addEventListener("click", function () {
    li.classList.toggle("favorite");
  });

  // Event za brisanje
  rem.addEventListener("click", function () {
    li.remove();
  });

  // Reset forme
  form.reset();
});

// Event listeneri za već postojeće stavke
document.querySelectorAll(".fav").forEach((button) => {
  button.addEventListener("click", function () {
    button.parentElement.classList.toggle("favorite");
  });
});

document.querySelectorAll(".rem").forEach((button) => {
  button.addEventListener("click", function () {
    button.parentElement.remove();
  });
});
