// Typing Effect
const typingEl = document.getElementById('typing');
const typingText = "Software Engineer | Web Developer | Tech Enthusiast";
let index = 0;

function type() {
    if (index < typingText.length) {
        typingEl.textContent += typingText.charAt(index);
        index++;
        setTimeout(type, 100);
    } else {
        // Once the text is fully typed, reset the index to 0 and clear the content to start again
        setTimeout(() => {
            index = 0;
            typingEl.textContent = '';
            type(); // Start typing again
        }, 3000); // Pause for 2 seconds before restarting the typing effect
    }
}

window.onload = () => {
    type();
    startCounter();
};

// Counter Animation
function startCounter() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = Math.ceil(target / 200);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

/// Skill Bar Animation on Scroll
function animateSkills() {
    const skillsSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.skill-fill');
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition - 100) {
        skillBars.forEach(bar => {
            const percentage = parseInt(bar.getAttribute('data-percent'));
            let width = 0;
            const percentText = bar.querySelector('.skill-percent');

            const fillInterval = setInterval(() => {
                if (width >= percentage) {
                    clearInterval(fillInterval);
                } else {
                    width++;
                    bar.style.width = width + '%';
                    percentText.textContent = width + '%';
                }
            }, 60);
        });

        window.removeEventListener('scroll', animateSkills);
    }
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
