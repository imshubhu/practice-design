// get all images as array
const targets = document.querySelectorAll('img');

const lazyload = target => {

    // create a intersection observer for the target
    const io = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            // isIntersecting = is in view
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-lazy');

                // replace the src attribute with the data-lazy one
                img.setAttribute('src', src);
                img.classList.add('fade');

                // remove the observer because the img is loaded now
                observer.disconnect();
            }
        });

    });

    // add the observer to the target
    io.observe(target);
}


// call the method for all images
targets.forEach(lazyload);