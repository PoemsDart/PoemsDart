/*<!---------------------------------------------------------------------- SEND_MAIL ---------------------------------------------------------------------->*/

function mailDefault(){
  var email = "rnttl90@gmail.com";
  window.open(`mailto:${email}`);
}

/*<!---------------------------------------------------------------------- SCROLL-ANIMATIONS ---------------------------------------------------------------------->*/


function reveal03() {
  var reveals = document.querySelectorAll(".reveal03");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal03);
window.addEventListener("DOMContentLoaded", reveal03);


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("DOMContentLoaded", reveal);


/*---------------------------------------------------------------------- NAV-BAR ----------------------------------------------------------------------*/


const divs = document.querySelectorAll('.square');
        const contentDivs = document.querySelectorAll('.content');
        const contentContainer = document.getElementById('contentContainer');
        const backButtons = document.querySelectorAll('#homeButton');

        divs.forEach((div, index) => {
            div.addEventListener('click', () => {
                divs.forEach(item => {
                    item.style.opacity = 0;
                });
                contentContainer.style.opacity = 0;

                setTimeout(() => {
                    divs.forEach(item => {
                        item.style.display = 'none';
                    });
                    contentContainer.style.display = 'none';

                    contentDivs.forEach(contentDiv => {
                        contentDiv.style.display = 'none';
                    });

                    contentDivs[index].style.display = 'block';
                    contentContainer.style.display = 'block';
                    scrollToTop()

                    setTimeout(() => {
                        contentDivs[index].style.opacity = 1;
                        contentContainer.style.opacity = 1;
                        backButtons[index].style.display = 'block';
                    }, 10);
                }, 500);
            });
        });

        backButtons.forEach(button => {
            button.addEventListener('click', () => {


                setTimeout(() => {

                contentDivs.forEach(item => {
                  item.style.display = 0;
                }, 10);

                    divs.forEach(item => {
                      item.style.opacity = 1;
                    }, 10);
                }, 500);

                setTimeout(() => {

                    contentDivs.forEach(item => {
                      item.style.display = 'none';
                  });

                    divs.forEach(item => {
                        item.style.display = 'block';
                        scrollToTop()
                    });
                }, 100);

            });
        });

/*---------------------------------------------------------------------- SCROLL_TO_TOP ----------------------------------------------------------------------*/

function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}


/*---------------------------------------------------------------------- SHARE-LINK-COPY ----------------------------------------------------------------------*/


/*// Function to handle the button click
function handleButtonClick(button) {
  // Get the link to be copied from the button's href attribute
  const linkToCopy = button.getAttribute('href');

  // Create a temporary input element to copy the link
  const tempInput = document.createElement('input');
  tempInput.value = linkToCopy;

  // Append the input element to the body and select its content
  document.body.appendChild(tempInput);
  tempInput.select();

  // Copy the link to the clipboard
  document.execCommand('copy');

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  // Change the button text to "Link Copied"
  button.textContent = 'Link Copied';

  // Set the custom property to change the pseudo-element content
  button.style.setProperty('--button-content', '"Link Copied"');

  // Disable the button (optional)
  button.disabled = true;

  // Revert the button text and pseudo-element content to defaults after 5 seconds
  setTimeout(function () {
      button.textContent = 'Share PoemsDart!';
      // Reset the custom property to default
      button.style.removeProperty('--button-content');
      // Enable the button (if disabled)
      button.disabled = false;
  }, 5000); // 5000 milliseconds = 5 seconds
}

// Add click event listeners to each button
const buttons = document.querySelectorAll('.download');
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
      handleButtonClick(button);
  });
});*/