const form = document.querySelector("#img-form");
const img = document.querySelector("#img");
const outputPath = document.querySelector("#output-path");
const filename = document.querySelector("#filename");
const heightInput = document.querySelector("#height");
const widthInput = document.querySelector("#width");

document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const slider = document.getElementById("slider");

  let slideIndex = 0;

  const showSlide = (index) => {
    const slides = document.querySelectorAll("#slider > div");
    if (index >= slides.length) {
      index = 0;
    } else if (index < 0) {
      index = slides.length - 1;
    }
    slider.style.transform = `translateX(-${index * 100}%)`;
    slideIndex = index;
  };

  prevBtn.addEventListener("click", () => {
    showSlide(slideIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    showSlide(slideIndex + 1);
  });
});

const appContainer = document.getElementById("content");

// Define page components
function renderHomePage() {
  appContainer.innerHTML = `
  <div class="w-full rounded-lg overflow-hidden pt-36">
            <div class="flex justify-between items-center">
              <img src='../../assets/Bob.jpg' class='h-[40vh] w-[90%] hover:border-2 border-blu m-auto rounded-lg'/>
            </div>
            <p
              class="text-center text-text2 font-bold font-mono tracking-widest py-4"
            >
              Shalom saint!! Welcome to His Voice
            </p>
            <hr class='bg-background2 w-[90%] m-auto my-2'/>
            <!-- dividers dividers -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div class="relative mb-12 px-3 lg:mb-0">
                <div class="mb-2 flex justify-center">
                  <span class="text-primary">
                    <img
                      src="../../assets/icons//books.png"
                      class="h-14 w-14 z-10"
                    />
                  </span>
                </div>
                <h6
                  class="mb-0 font-normal text-center text-text2 text-[.9rem]"
                >
                  New Brith
                </h6>
                <p class='text-blu absolute right-0 top-0 text-[3rem] '>⇢</p>
              </div>
              <div class="relative mb-12 px-3 lg:mb-0">
                <div class="mb-2 flex justify-center">
                  <span class="text-primary">
                    <img src="../../assets/icons/books.png" class="h-14 w-14 z-10" />
                  </span>
                </div>
                <h6
                  class="mb-0 font-normal text-center text-text2 text-[.9rem]"
                >
                  Outpouring
                </h6>
                <p class='text-blu absolute right-0 top-0 text-[3rem] '>⇢</p>
              </div>
              <div class="relative mb-12 px-3 lg:mb-0">
                <div class="mb-2 flex justify-center">
                  <span class="text-primary">
                    <img src="../../assets/icons/books.png" class="h-14 w-14" />
                  </span>
                </div>
                <h6
                  class="mb-0 text-center text-text2 font-normal text-[.9rem]"
                >
                  Change of Body
                </h6>
                <p class='text-blu absolute right-0 top-0 text-[3rem] '>⇢</p>
              </div>
              <div class="relative mb-12 px-3 lg:mb-0">
                <div class="mb-2 flex justify-center">
                  <span class="text-primary">
                    <img src="../../assets/icons/books.png" class="h-14 w-14" />
                  </span>
                </div>
                <h6
                  class="mb-0 text-center text-text2 font-normal text-[.9rem]"
                >
                  Back to Eden
                </h6>
              </div>
            </div>
           
          </div>
  `;
}

function renderNewSongPage() {
  appContainer.innerHTML = `
    <div class='py-14'>
    <h1>New Song Page</h1>
    <p>This is the new song page.</p>
    <button onclick="navigateTo('')">Go back to Home</button>
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
// Initial page rendering
navigateTo(" ");
