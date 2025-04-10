const about = document.getElementById('about-me');
const toggle = document.getElementById('language-toggle');

function updateLanguage() {
    if (toggle.checked) {
        about.innerHTML = "<p>I am a technology enthusiast with experience in networks, algorithms, and programming. I have a continuous interest in exploring innovative solutions and enhancing my knowledge.</p>";
    } else {
        about.innerHTML = "<p>Sou um entusiasta de tecnologia, com experiência em redes, algoritmos e programação. Tenho um interesse contínuo em explorar soluções inovadoras e aprimorar meus conhecimentos.</p>";
    }
}

toggle.addEventListener('change', updateLanguage);

updateLanguage();
