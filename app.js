const heading = document.querySelectorAll('.heading');
const response = document.querySelectorAll('.faq-response');
const openIcon = document.querySelectorAll('.open');
const closeIcon = document.querySelectorAll('.close');

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
    })
}
