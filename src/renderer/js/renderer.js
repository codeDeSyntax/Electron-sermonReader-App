import earlySermons from "../../../assets/sermons/1964-1969/firstset.js";
import secondSet from "../../../assets/sermons/1970/1970.js";
import thirdSet from "../../../assets/sermons/1971/1971.js";
import fourthSet from "../../../assets/sermons/1972/1972.js";
import lastSet from "../../../assets/sermons/1973/1973.js";

let allMessages = earlySermons
  .concat(secondSet)
  .concat(thirdSet)
  .concat(fourthSet)
  .concat(lastSet);
let activeTabs = [];

const appContainer = document.getElementById("content");
const sermonsContainer = document.getElementById("allsermons");
const asideContainer = document.getElementById("aside");
const sidebar = document.getElementById("sidebar");
const homeBtn = document.getElementById("homeBtn");
const sermonBtn = document.getElementById("sermonBtn");
const allSongBtn = document.getElementById("allSongBtn");
const vidBtn = document.getElementById("vidBtn");
// const sortMessages = document.getElementById("alphaSort");
// const searchBar = document.getElementById("searchBar");
// let searchKey = document.getElementById("titleOrYear");
let vidHold = document.getElementById("video");
const tabContainer = document.getElementById("#tabContainer");
const searchKeys = document.querySelectorAll("#titleOrYear");

function renderHomePage() {
  asideContainer.style.display = "none";
  sidebar.style.display = "none";
  appContainer.innerHTML = `
      <div class='home ' >
      <div class="stars"></div>

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
  allMessages.forEach((sermon) => {
    const sermonElement = document.createElement("li");
    sermonElement.classList.add("sermonDiv");
    // sermonElement.setAttribute('data_url', `${sermon.filename}`);
    if (sermon.id % 2 === 0) {
      sermonElement.style.background = "#3d4043";
    } else {
      sermonElement.style.background = "#303336";
    }

    //  activeTabs.push(sermon);
    // activeTabs.forEach((sermon) => {
    //   let tab = document.createElement('div')
    //   tab.classList.add('tab')
    //   tab.innerHTML= `<button style="background: none; border: none; color: #007bff; font-size: 16px; cursor: pointer;">${sermon.title}</button>`

    //   tabContainer.appendChild(tab)
    // });

    sermonElement.innerHTML = `
    <div>
    <h3 style='color:#bfc5c9; font-family:monospace; font-size:.9rem'>${sermon.title.slice(
      0,
      30
    )}..</h3>
    <p style='color:#5e9bc3; font-family:monospace; font-size:.7rem'> ${
      sermon.date
    }</p>
    </div>

    <div>
    <p style='color:#bfc5c9; font-family:monospace; font-size:.7rem'>Time:</p>
    <p style='color:#bfc5c9; font-family:monospace; font-size:.7rem'>Location:</p>
    </div>
  `;
    sermonsContainer.appendChild(sermonElement);

    sermonElement.addEventListener("click", () => {
      document.getElementById("aside").style.display = "none";
      document.getElementById("sidebar").style.display = "block";
      appContainer.innerHTML = `
      <div style=' width:100%' class='sermonBackground' id='sermonBackground'>
      <div style='background-color:#22272a; display:flex; align-items:center; justify-content:center; padding:10px 0px;  color:#c8cfd3; font-family:monospace; font-size:1rem; position:fixed; width:100%;'>${sermon.date} <span>${sermon.title}</span></div>
      <p style='color:#d3dade; font-family:monospace; font-size:2rem;text-align:left; font-weight:500; letter-spacing: 0.025em; text-align:center; font-style:italic; margin-top:5rem;'>${sermon.title}<p/>
      <p style='color:#d3dade; font-family:monospace; font-size:1.5rem;text-align:left; font-weight:500; letter-spacing: 0.020rem; text-align:center; padding-bottom:2rem;'>${sermon.date}<p/>
      <p style='color:#c8cfd3; font-family:monospace; padding:20px; font-size:5.5rem; text-align:center; text-wrap:wrap; font-weight:600; class='sermonText' id='sermonText'>🔊${sermon.sermon}🔑</p

      <div style="display: flex; flex-direction: column; min-height: 100vh;" id='tabHold'>
    <div id='tabContainer' style="position: fixed; bottom: 0; width: 100%; background-color: #f8f8f8; box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); display: flex; justify-content: space-around; padding: 10px 0;">
      
       <div style="flex: 1; text-align: center; padding: 10px;">
        
      </div>
    </div>
  </div>
      
      <div/>
      
      `;
    });
  });
}

searchKeys.forEach((searchKey) => {
  searchKey.addEventListener("click", (e) => {
    let value = e.target.innerHTML;
    document.getElementById("aside").style.display = "block";
    document.getElementById("sidebar").style.display = "none";

    let filteredSermons = allMessages.filter((sermon) => {
      return (
        sermon.title.toLowerCase().charAt(0).includes(value.toLowerCase()) ||
        sermon.year === value
      );
    });

    sermonsContainer.innerHTML = "";
    filteredSermons.forEach((sermon) => {
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
    <h3 style='color:#bfc5c9; font-family:monospace; font-size:.9rem'>${sermon.title.slice(
      0,
      30
    )}..</h3>
    <p style='color:#5e9bc3; font-family:monospace; font-size:.7rem'> ${
      sermon.date
    }</p>
    </div>

    <div>
    <p style='color:#bfc5c9; font-family:monospace; font-size:.7rem'>Time:</p>
    <p style='color:#bfc5c9; font-family:monospace; font-size:.7rem'>Location:</p>
    </div>
  `;

      sermonsContainer.appendChild(sermonElement);

      sermonElement.addEventListener("click", () => {
        document.getElementById("aside").style.display = "none";
        document.getElementById("sidebar").style.display = "block";
        appContainer.innerHTML = `
      <div style=' width:100%' class='sermonBackground'>
      <div style='background-color:#22272a; display:flex; align-items:center; justify-content:center; padding:10px 0px;  color:#c8cfd3; font-family:monospace; font-size:1rem; position:fixed; width:100%;'>${sermon.date} <span>${sermon.title}</span></div>
      <p style='color:#d3dade; font-family:monospace; font-size:2rem;text-align:left; font-weight:500; letter-spacing: 0.025em; text-align:center; font-style:italic; margin-top:5rem;'>${sermon.title}<p/>
      <p style='color:#d3dade; font-family:monospace; font-size:1.5rem;text-align:left; font-weight:500; letter-spacing: 0.020rem; text-align:center; padding-bottom:2rem;'>${sermon.date}<p/>
      <p style='color:#c8cfd3; font-family:monospace; padding:20px; font-size:5.5rem; text-align:center; text-wrap:wrap; font-weight:600;  class='sermonText' id='sermonText'>🔊${sermon.sermon}🔑</p
      
      <div/>
      
      `;
      });
    });
  });
});

function goToSermons() {
  const randomIndex = Math.floor(Math.random() * allMessages.length);
  const randomSermon = allMessages[randomIndex];

  appContainer.innerHTML = "";
  appContainer.innerHTML = `
  <div class="stars"></div>
 <div style='width:100%' class='sermonBackground' >
<div style='background-color:#22272a; padding:10px 0px; text-align:center; color:#c8cfd3; font-family:monospace; font-size:1rem; position:fixed; width:100%; ' id:"sermonhead">${randomSermon.date} <span>${randomSermon.title}</span></div>
<p style='color:#d3dade; font-family:monospace; font-size:2rem;text-align:left; font-weight:500; letter-spacing: 0.025em; text-align:center; font-style:italic; margin-top:5rem;'>${randomSermon.title}<p/>
<p style='color:#d3dade; font-family:monospace; font-size:1.5rem;text-align:left; font-weight:500; le-tter-spacing: 0.020rem; text-align:center; padding-bottom:2rem;'>${randomSermon.date}<p/>
<p style ='font-family:monospace; padding:20px; font-size:2rem; text-align:center; font-weight:600;' class='sermonText' id='sermonText'>🔊${randomSermon.sermon}🔑</p
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

vidBtn.addEventListener("click", () => {
  document.getElementById("sidebar").style.display = "none";
  appContainer.innerHTML = `
  <div class="video-grid">
        <div class="video-container">
            <video controls autoplay loop>
                <source src="../../assets/vids/smoketree.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="video-container">
            <video controls autoplay loop>
                <source src="../../assets/vids/treeturn.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="video-container">
            <video controls autoplay loop>
                <source src="../../assets/vids/harddrop.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="video-container">
            <video controls autoplay loop>
                <source src="../../assets/vids/treeturn.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  
  `;
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
