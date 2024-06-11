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
        <div/>
        
        `;
      });
    });
  }