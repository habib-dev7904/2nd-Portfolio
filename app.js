

// SECTION SWITCHING
const sections = document.querySelectorAll('.section');
const buttons = document.querySelectorAll('.control');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active-btn'));
        button.classList.add('active-btn');

        const id = button.dataset.id;

        sections.forEach(section => section.classList.remove('active'));

        document.getElementById(id).classList.add('active');
    });
});


// THEME TOGGLE
const themeBtn = document.querySelector('.theme-btn');

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
}


// FORM SUBMIT
const form = document.querySelector(".contact-form");
const btn = document.getElementById("sendBtn");

if (form) {
  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    btn.innerText = "Sending...";
    btn.disabled = true;

    const data = new FormData(form);

    await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    form.reset();

    btn.innerText = "Send Message";
    btn.disabled = false;

    alert("Message sent successfully ✅");
  });
}