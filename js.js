const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const navOverlay = document.getElementById("navOverlay");

menuToggle.addEventListener("click", function(){
    mobileMenu.classList.toggle("active");
    navOverlay.classList.toggle("show");

    if(mobileMenu.classList.contains("active")){
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }else{
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

navOverlay.addEventListener("click", function(){
    mobileMenu.classList.remove("active");
    navOverlay.classList.remove("show");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
});



const whatsappAction = document.getElementById("sendWhatsapp");
const emailAction = document.getElementById("sendEmail");

function collectClientData(){
    const clientName = document.getElementById("clientName").value;
    const clientPhone = document.getElementById("clientPhone").value;
    const clientService = document.getElementById("clientService").value;
    const clientNotes = document.getElementById("clientNotes").value;

    return {
        clientName,
        clientPhone,
        clientService,
        clientNotes
    };
}

whatsappAction.addEventListener("click", function(){

    const formData = collectClientData();

    const textMessage =
`مرحباً، أود طلب عرض سعر.

الاسم: ${formData.clientName}
رقم الجوال: ${formData.clientPhone}
الخدمة المطلوبة: ${formData.clientService}
تفاصيل إضافية: ${formData.clientNotes}`;

    const companyWhatsapp = "+966559275329";
    const whatsappURL = `https://wa.me/${companyWhatsapp}?text=${encodeURIComponent(textMessage)}`;

    window.open(whatsappURL, "_blank");
});

emailAction.addEventListener("click", function(){

    const formData = collectClientData();

    const subjectMail = "طلب عرض سعر جديد";
    const bodyMail =
`الاسم: ${formData.clientName}
رقم الجوال: ${formData.clientPhone}
الخدمة المطلوبة: ${formData.clientService}
تفاصيل إضافية: ${formData.clientNotes}`;

    window.location.href = `mailto:yourmail@example.com?subject=${encodeURIComponent(subjectMail)}&body=${encodeURIComponent(bodyMail)}`;
});


const filterButtons = document.querySelectorAll(".filter-btn");
const allProjects = document.querySelectorAll(".project-unit");

filterButtons.forEach(btn=>{
    btn.addEventListener("click", function(){

        filterButtons.forEach(item=>item.classList.remove("active"));
        this.classList.add("active");

        const filterValue = this.dataset.filter;

        allProjects.forEach(card=>{
            card.style.display = "none";
            card.classList.add("hide");
        });

        setTimeout(()=>{
            allProjects.forEach(card=>{
                if(filterValue === "all" || card.classList.contains(filterValue)){
                    card.style.display = "block";

                    setTimeout(()=>{
                        card.classList.remove("hide");
                    },50);
                }
            });
        },250);
    });
});
