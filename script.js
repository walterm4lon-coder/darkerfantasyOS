function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");
    timeText.innerHTML = currentTime;
}
setInterval(updateTime, 1000);

// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));

// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
var welcomeScreen = document.querySelector("#welcome")
function closeWindow(element) {
  element.style.display = "none"
}
function openWindow(element) {
  element.style.display = "flex"
}

var welcomeScreenClose = document.querySelector("#welcomeclose")

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});
var welcomeScreenOpen = document.querySelector("#welcomeopen")
welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

var selectedIcon = undefined
function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
} 
function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined
}

var notesIcon = document.querySelector("#notesIcon");
notesIcon.addEventListener("click", () => handleIconTap(notesIcon, notesScreen));

function handleIconTap(element, windowElement) {
  if (element.classList.contains("selected")) {
    deselectIcon(element);
    openWindow(windowElement);
  } else {
    selectIcon(element);
  }
}
dragElement(document.querySelector("#notes"))

var notesScreen = document.querySelector("#notes")

var notesScreenClose = document.querySelector("#notesclose")

notesScreenClose.addEventListener("click", () => closeWindow(notesScreen));

var biggestIndex = 1;

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}

addWindowTapHandling(welcomeScreen);
addWindowTapHandling(notesScreen);

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
}

function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
}

var topBar = document.querySelector("#top")

function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon)
}

var content = [
  {
    title: "Wise Bob's Spell Book",
    date: "4 days after Mary the Witch died",
    content: `<p contenteditable="True">
          <span contenteditable="true">This is <strong>Wise Bob's Spell book</strong>
            </br>
            </br>
            <img src=""
              style="width: 96px; border-radius: 16px" />
            </br>
            </br>

            This is a place where I write down all my spells, that are typically found in doungeons, guts of beasts, ect. Some of them are weird tho. This book i found in guts of a 3-headed dragon loool
          </span>
          </br>
            </br>
        <span contenteditable="true">
          <strong>Spell n1:Prifikus Olympus</strong>
          </br>
            </br>
           This one makes me rise above a person i used it, and makes them go to their knees. I only used it once on a girl, she didnt like it tho. L-wizard-rizzzz
           <br>
           <br>
          <strong>Spell n2:Smokus Grasus</strong>
          <br>
          <br>
            This one for some reason makes me feel really good, but i start eating like crazy. Should use it less honestly, i feel dumber after some tries.
        </span>
        </p>`
  },
  {
    title: "More Spells - Dungeon of explosive grapes",
    date: "The day i broke my left leg",
    content: `<p contenteditable="True">
          <span contenteditable="true">More entries from <strong>Wise Bob's Spell book</strong>
            </br>
            </br>
            I keep finding these scribbled on the back pages. In that dungeon a rock fell and i broke my leg damn. Wow, some drunk ahh wizard must have wrote theese
          </span>
          </br>
            </br>
        <span contenteditable="true">
          <strong>Spell n3: Echofang Whisper</strong>
          </br>
            </br>
           Makes your voice sound like three people agreeing with you at once. Great for winning arguments, terrible for sneaking anywhere. Learned this the hard way in a library.
           <br>
           <br>
          <strong>Spell n4: Puddle Step</strong>
          <br>
          <br>
            Turns the ground under your feet into a shallow puddle for one second, just long enough to slip past a closing door or dodge a slow goblin. Does NOT work on stairs. Ask me how I know.
           <br>
           <br>
          <strong>Spell n5: Gravitus Reversicus (unfinished)</strong>
          <br>
          <br>
            Was supposed to make small objects float. Currently it just makes them extremely angry and loud. Still workshopping this one, do not attempt near glassware.
        </span>
        </p>`
  }
]

function setNotesContent(index) {

  var notesContent = document.querySelector("#notesContent")

  notesContent.innerHTML = content[index].content
}

setNotesContent(0)

function addToSideBar(index) {
  var sidebar = document.querySelector("#sidebar");
  var note = content[index];
  var newDiv = document.createElement("div");

  newDiv.innerHTML = `
    <p style="margin: 0px;">
      ${note.title}
    </p>
    <p style="font-size: 12px; margin: 0px;">
      ${note.date}
    </p>
  `;

  newDiv.addEventListener("click", function() {
    setNotesContent(index);
  });

  sidebar.appendChild(newDiv);
}

for (let i = 0; i < content.length; i++) {
  addToSideBar(i)
}

// --- WizardNews app ---

var newsIcon = document.querySelector("#newsIcon")
var newsScreen = document.querySelector("#news")

newsIcon.addEventListener("click", () => handleIconTap(newsIcon, newsScreen));

dragElement(newsScreen)

var newsScreenClose = document.querySelector("#newsclose")

newsScreenClose.addEventListener("click", () => closeWindow(newsScreen));

addWindowTapHandling(newsScreen);

var newsContent = [
  {
    image: "./news1.jpg",
    headline: "Robert-Wizard Found Dead After Botched Goblin Wallet Heist",
    body: "Robert-Wizard, a mid-tier enchanter mostly known for showing up to taverns uninvited, was found dead behind the Rusty Cauldron early this morning. Witnesses say he got heavily drunk on troll ale before attempting to pickpocket a goblin merchant's coin wallet. The goblin was faster."
  },
  {
    image: "./news2.png",
    headline: "East Well Turns Purple, Alchemist's Guild Blames 'Some Guy'",
    body: "The east well has run purple for three days straight. Officials suspect an alchemy experiment gone sideways, but no one has claimed responsibility. Residents have started calling it lucky water anyway."
  },
  {
    image: "./news3.jpg",
    headline: "Dragon Spotted Napping in Gold, Council Too Scared to Ask It to Leave",
    body: "A dragon estimated at roughly 40 feet has been asleep in the treasure room of the Wizard Town since Tuesday. The council has voted to simply get gold elsewhere until it wakes up on its own."
  },
  {
    image: "./news4.jpg",
    headline: "Apprentice Accidentally Duplicates Himself, Both Copies Insist They're the Real One",
    body: "A summoning mishap at the academy resulted in two identical apprentices, each equally convinced the other is the fake. Professors have asked them to sort it out amongst themselves by Friday."
  }
]

function addToNewsFeed(index) {
  var newsFeed = document.querySelector("#newsFeed")
  var story = newsContent[index]
  var newDiv = document.createElement("div")
  newDiv.style.backgroundColor = "#F9F9F9"
  newDiv.style.borderRadius = "12px"
  newDiv.style.padding = "12px"
  newDiv.style.marginBottom = "16px"

  newDiv.innerHTML = `
    <img src="${story.image}" style="width: content-fit; height: 500px; object-fit: cover; border-radius: 8px;">
    <p style="font-weight: bold; margin: 16px 0 4px 0;">${story.headline}</p>
    <p style="font-size: 24px; margin: 0px;">${story.body}</p>
  `;

  newsFeed.appendChild(newDiv)
}

for (let i = 0; i < newsContent.length; i++) {
  addToNewsFeed(i)
}