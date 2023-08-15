

const listElement = document.getElementById("list");
const items = listElement.querySelectorAll(".card");

const w = window.innerWidth;

if (w > 500) {
    if (items.length > 3) {

        const firstItemPosition = items[0].getBoundingClientRect();
        const lastItemPosition = items[2].getBoundingClientRect()

        listElement.style.width = (lastItemPosition.right - firstItemPosition.left) + "px";
    }
}
else {
    if (items.length > 0) {


        listElement.style.width = items[0].clientWidth + "px";
    }
}

function scrollNext() {
    items.forEach((item, index) => {
        if (!isInViewport(item)) {
            item.scrollIntoView();
        }
    })
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


