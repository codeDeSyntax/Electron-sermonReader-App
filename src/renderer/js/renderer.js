import earlySermons from "../../../assets/sermons/1964-1969/firstset.js";

const appContainer = document.getElementById("content");
const sermonsContainer = document.getElementById("allsermons");
const asideContainer = document.getElementById("aside");
// const vidHold = document.getElementById("video");

function renderHomePage() {
  asideContainer.style.display = "none";
  appContainer.innerHTML = `
  <div style=''>
  <div style='background-color:#22272a; padding:10px 0px; text-align:center; color:#c8cfd3; font-family:monospace; font-size:1rem; position:fixed; width:100%;'>${earlySermons[0].date} <span>${earlySermons[0].title}</span></div>
  <p style='color:#d3dade; font-family:monospace; font-size:2rem;text-align:left; font-weight:500; letter-spacing: 0.025em; text-align:center; font-style:italic; margin-top:5rem;'>${earlySermons[0].title}<p/>
  <p style='color:#d3dade; font-family:monospace; font-size:1.5rem;text-align:left; font-weight:500; letter-spacing: 0.020rem; text-align:center; padding-bottom:2rem;'>${earlySermons[0].date}<p/>
  <p style ='color:#c8cfd3; font-family:monospace; padding:20px; font-size:5.5rem; text-align:center; font-weight:600; '>🔊${earlySermons[0].sermon}🔑</p
  <div/>
    `;
}

function renderAllSermons() {
  sermonsContainer.innerHTML = "";
  earlySermons.forEach((sermon) => {
    const sermonElement = document.createElement("li");
    sermonElement.classList.add("sermonDiv");
    // sermonElement.setAttribute('data_url', `${sermon.filename}`);
    if (sermon.id % 2 === 0) {
      sermonElement.style.background = "#3d4043";
    } else {
      sermonElement.style.background = "#303336";
    }

    sermonElement.innerHTML = `
    <div>
    <h3 style='color:#bfc5c9; font-family:monospace; font-size:.9rem'>${sermon.title}</h3>
    <p style='color:#5e9bc3; font-family:monospace; font-size:.7rem'> ${sermon.date}</p>
    </div>

    <div>
    <p style='color:#bfc5c9; font-family:monospace; font-size:.7rem'>Time:</p>
    <p style='color:#bfc5c9; font-family:monospace; font-size:.7rem'>Location:</p>
    </div>
  `;
    sermonsContainer.appendChild(sermonElement);

    sermonElement.addEventListener("click", () => {
      appContainer.innerHTML = `
      <div style=''>
      <div style='background-color:#22272a; padding:10px 0px; text-align:center; color:#c8cfd3; font-family:monospace; font-size:1rem; position:fixed; width:74%; margin:auto'>${sermon.date} <span>${sermon.title}</span></div>
      <p style='color:#d3dade; font-family:monospace; font-size:2rem;text-align:left; font-weight:500; letter-spacing: 0.025em; text-align:center; font-style:italic; margin-top:5rem;'>${sermon.title}<p/>
      <p style='color:#d3dade; font-family:monospace; font-size:1.5rem;text-align:left; font-weight:500; letter-spacing: 0.020rem; text-align:center; padding-bottom:2rem;'>${sermon.date}<p/>
      <p style='color:#c8cfd3; font-family:monospace; padding:20px; font-size:5.5rem; text-align:center; text-wrap:wrap; font-weight:600; line-height:6rem'>🔊${sermon.sermon}🔑</p
      <div/>
      
      `;
    });
  });
}
setTimeout;
renderAllSermons();
function renderNewSongPage() {
  appContainer.innerHTML = `
      <div class='py-14 text-[3rem] font-mono text-text1  text-center'>
      BROKEN FELLOWSHIP
      </div>
    `;
}
// Define route handling logic
function navigateTo(route) {
  switch (route) {
    case " ":
      renderHomePage();
      break;
    case "new-song":
      renderNewSongPage();
      break;
    default:
      renderHomePage();
  }
}
navigateTo(" ");
