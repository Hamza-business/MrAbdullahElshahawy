const pageTitle = document.querySelector('#pageTitle');
function currentPage(current) {
    let elements = [...document.querySelectorAll(`[whtpg="${current}"]`)];
    for (i of elements) {
        i?.classList.add("active")
    }
}
currentPage(pageTitle?.textContent);



const navbar = document.querySelector("header")
const showPops = document.querySelectorAll("[showPop]");
showPops.forEach((ele) => {
    ele.addEventListener('click', () => {
        let popup = document.querySelector(`[popup="${ele.getAttribute("showPop")}"]`);
        popup.classList.toggle("active");
        navbar.classList.toggle("active")
    })
})

const navbarElements = document.getElementById("navbarElements")
function navshow(){
    navbarElements.classList.toggle('active')
}




function prettyNotiControl(){
    const prettyNoti = document.getElementById("prettyNoti");
    prettyNoti.style.display = "block";
    setTimeout(() => {
        prettyNoti.classList.add("active");
    }, 0);
    setTimeout(() => {
        prettyNoti.classList.remove("active");
        setTimeout(() => {
            prettyNoti.remove()
        }, 3000);
    }, 10000);

    const allNoties = document.querySelectorAll(".notiBox");
    allNoties.forEach(ele => {
        ele.querySelector(".close").addEventListener('click', ()=>{
            let notiesRest = document.querySelectorAll(".notiBox");
            if(notiesRest.length > 1){
                ele.remove();
            }else{
                ele.remove();
                prettyNoti.classList.remove("active");
                setTimeout(() => {
                    prettyNoti.remove()
                }, 3000);
            }
        })
    });

    prettyNoti.addEventListener('click', (e)=>{
        if(prettyNoti == e.target){
            prettyNoti.classList.remove("active");
            setTimeout(() => {
                prettyNoti.remove()
            }, 3000);
        }
    })
}
