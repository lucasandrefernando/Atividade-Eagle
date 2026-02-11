function iniciarEmpresa() {

    document.body.classList.add("empresa-page");

    const tabs = document.querySelectorAll(".tab-item");
    const sections = document.querySelectorAll(".empresa-section");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {

            const index = this.getAttribute("data-index");

            tabs.forEach(t => t.classList.remove("active"));
            sections.forEach(s => s.classList.remove("active"));

            this.classList.add("active");
            sections[index].classList.add("active");

        });
    });

}
