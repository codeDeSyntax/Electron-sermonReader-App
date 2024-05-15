import earlySermons from "../../../assets/sermons/1964-1969/firstset.js";

const appContainer = document.getElementById("content");
const sermonsContainer = document.getElementById("allsermons");
const asideContainer = document.getElementById("aside");
const sidebar = document.getElementById("sidebar");
const homeBtn = document.getElementById("homeBtn");
const sermonBtn = document.getElementById("sermonBtn");
const allSongBtn = document.getElementById("allSongBtn");
// const vidHold = document.getElementById("video");

function renderHomePage() {
  asideContainer.style.display = "none";
  sidebar.style.display = "none";
  appContainer.innerHTML = `
      <div class='home' >
      <p style='color:#d3dade; font-family:monospace; font-size:2rem;text-align:left; font-weight:500; letter-spacing: 0.025em; text-align:center; font-style:italic; margin-top:5rem; font-weight:bold;'>The son of man recordings</p>

      <p style='color:#40aae2; font-family:monospace; font-size:2rem;text-align:left; font-weight:500; letter-spacing: .em; text-align:center; font-style:italic;'>1964 - 1973</p>

      <div class="info">
        <div class="divtext">
          <p class="" style='color:#d3dade; font-family:monospace; font-size:1rem;text-align:left; font-weight:500; font-weight:bold; text-align:center'>

            And I saw another mighty angel come down from heaven, clothed with a
            cloud: and a rainbow was upon his head, and his face was as it were
            the sun, and his feet as pillars of fire: <br /><br />

            And he had in his hand a little book open: and he set his rightfoot
            upon the sea, and his left foot on the earth,<br /><br />

            And cried with a loud voice, as when a lion roareth: and when he had
            cried, seven thunders uttered their voices. <br><br><br>
            <p class="load" style='color:#40aae2; font-family:monospace; font-size:2rem;text-align:left; font-weight:500; font-weight:bold; text-align:center'>  Rev 10:1-3
            </p>
           
            <hr>
          </p>
        </div>
      </div>
      </div>
    `;
}

{
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
      <div style=' width:100%' class='sermonBackground'>
      <div style='background-color:#22272a; display:flex; align-items:center; justify-content:center; padding:10px 0px;  color:#c8cfd3; font-family:monospace; font-size:1rem; position:fixed; width:100%;'>${sermon.date} <span>${sermon.title}</span></div>
      <p style='color:#d3dade; font-family:monospace; font-size:2rem;text-align:left; font-weight:500; letter-spacing: 0.025em; text-align:center; font-style:italic; margin-top:5rem;'>${sermon.title}<p/>
      <p style='color:#d3dade; font-family:monospace; font-size:1.5rem;text-align:left; font-weight:500; letter-spacing: 0.020rem; text-align:center; padding-bottom:2rem;'>${sermon.date}<p/>
      <p style='color:#c8cfd3; font-family:monospace; padding:20px; font-size:5.5rem; text-align:left; text-wrap:wrap; font-weight:600; line-height:6rem' class='sermonText'>🔊${sermon.sermon}🔑</p
      <div/>
      
      `;
    });
  });
}

function goToSermons() {
  appContainer.innerHTML = "";
  appContainer.innerHTML = `
 <div style='width:100%' class=''>
<div style='background-color:#22272a; padding:10px 0px; text-align:center; color:#c8cfd3; font-family:monospace; font-size:1rem; position:fixed; width:100%; ' id:"sermonhead">${earlySermons[0].date} <span>${earlySermons[0].title}</span></div>
<p style='color:#d3dade; font-family:monospace; font-size:2rem;text-align:left; font-weight:500; letter-spacing: 0.025em; text-align:center; font-style:italic; margin-top:5rem;'>${earlySermons[0].title}<p/>
<p style='color:#d3dade; font-family:monospace; font-size:1.5rem;text-align:left; font-weight:500; letter-spacing: 0.020rem; text-align:center; padding-bottom:2rem;'>${earlySermons[0].date}<p/>
<p style ='color:#c8cfd3; font-family:monospace; padding:20px; font-size:5.5rem; text-align:center; font-weight:600;' class='sermonText'>🔊${earlySermons[0].sermon}🔑</p
<div/> 
`;
}
function renderNewSongPage() {
  appContainer.innerHTML = `
     
    `;
}

homeBtn.addEventListener("click", () => {
  renderHomePage();
});

sermonBtn.addEventListener("click", () => {
  renderAllSermons();
  document.getElementById("sidebar").style.display = "block";
  navigateTo("goToSermons");
});
allSongBtn.addEventListener("click", () => {
  navigateTo("allSongs");
});
// Define route handling logic
function navigateTo(route) {
  switch (route) {
    case " ":
      renderHomePage();
      break;
    case "goToSermons":
      goToSermons();
      break;
    case "new-song":
      renderNewSongPage();
      break;
    default:
      renderHomePage();
  }
}
navigateTo(" ");
