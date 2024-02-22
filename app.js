const heading = document.querySelectorAll(".heading");
const response = document.querySelectorAll(".faq-response");
const openIcon = document.querySelectorAll(".open");
const closeIcon = document.querySelectorAll(".close");
const toggleIcons = document.querySelector(".icons");

// const toggleMenu = function () {
//   for (let i = 0; i < heading.length; i++) {
//     heading[i].addEventListener("click", function (e) {
//       e.preventDefault();

//       response.forEach(function (resp) {
//         resp.classList.add("hide-response");
//       });

//       if (response[i].classList.contains("hide-response")) {
//         response[i].classList.remove("hide-response");

//         closeIcon[i].classList.add("hide-icon");
//         openIcon[i].classList.remove("hide-icon");
//       } else {
//         response[i].classList.add("hide-response");

//         closeIcon[i].classList.remove("hide-icon");
//         openIcon[i].classList.add("hide-icon");
//       }
//     });
//   }
// };

// heading.forEach((heading) => heading.addEventListener("click", toggleMenu));

/*
for (let i = 0; i < heading.length; i++) {
    heading[i].addEventListener('click', function () {
        //Show Response
        if (response[i].classList.contains('hide-response')) {
            response[i].classList.remove('hide-response')

            //Show Open icon
            if (closeIcon[i].classList.contains('hide-icon')) {
                closeIcon[i].classList.remove('hide-icon')
                openIcon[i].classList.add('hide-icon')
            }
            //Hide Response
        } else {
            response[i].classList.add('hide-response')
            //Hide open icon
            if (!closeIcon[i].classList.contains('hide-icon')) {
                closeIcon[i].classList.add('hide-icon')
                openIcon[i].classList.remove('hide-icon')
            }


        }
        for (let j = 0; j < heading.length; j++) {
            if (j !== i && !response[j].classList.contains('hide-response')) {
                response[j].classList.add('hide-response')
                openIcon[j].classList.add('hide-icon')
            } else {
                closeIcon[j].classList.add('hide-icon')
                openIcon[j].classList.remove('hide-icon')
            }
        }

    })
}

//Open icon
for (let i = 0; i < openIcon.length; i++) {
    openIcon[i].addEventListener('click', function () {
        if (!openIcon[i].classList.contains('hide-icon')) {
            openIcon[i].classList.add('hide-icon')
            closeIcon[i].classList.remove('hide-icon')

            if (response[i].classList.contains('hide-response')) {
                response[i].classList.remove('hide-response')
            }
        }
    })
}

//close Icon
for (let i = 0; i < closeIcon.length; i++) {
    closeIcon[i].addEventListener('click', function () {
        if (!closeIcon[i].classList.contains('hide-icon')) {
            closeIcon[i].classList.add('hide-icon')
            openIcon[i].classList.remove('hide-icon')

            if (!response[i].classList.contains('hide-response')) {
                response[i].classList.add('hide-response')
            }
        }
    })
}
*/

//REFACTORED CODE

function toggleFaq(i) {
    // Show response
    response[i].classList.toggle("hide-response");

    // Show/hide icons
    if (response[i].classList.contains("hide-response")) {
        openIcon[i].classList.remove("hide-icon");
        closeIcon[i].classList.add("hide-icon");
    } else {
        openIcon[i].classList.add("hide-icon");
        closeIcon[i].classList.remove("hide-icon");

        // Close all other open FAQs
        for (let j = 0; j < heading.length; j++) {
            if (j !== i && !response[j].classList.contains("hide-response")) {
                response[j].classList.add("hide-response");
                openIcon[j].classList.remove("hide-icon");
                closeIcon[j].classList.add("hide-icon");
            }
        }
    }
}

// Click event listeners
for (let i = 0; i < heading.length; i++) {
    heading[i].addEventListener("click", () => toggleFaq(i));
}

for (let i = 0; i < openIcon.length; i++) {
    openIcon[i].addEventListener("click", () => toggleFaq(i));
}

for (let i = 0; i < closeIcon.length; i++) {
    closeIcon[i].addEventListener("click", () => toggleFaq(i));
}
