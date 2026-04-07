const sections = document.querySelectorAll('.section');
const buttons = document.querySelectorAll('.control');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        // remove active button
        buttons.forEach(btn => btn.classList.remove('active-btn'));
        button.classList.add('active-btn');

        // get section id
        const id = button.dataset.id;

        // hide all sections
        sections.forEach(section => section.classList.remove('active'));

        // show selected section
        const element = document.getElementById(id);
        element.classList.add('active');
    });
    // toggle theme
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
});
}

)
const form = document.querySelector(".contact-form");
const btn = document.getElementById("sendBtn");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    btn.innerText = "Sending...";   // show loading
    btn.disabled = true;

    const data = new FormData(form);

    await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    form.reset(); // clear inputs

    btn.innerText = "Send Message"; // reset text
    btn.disabled = false; // enable button again

    alert("Message sent successfully ✅");
});


