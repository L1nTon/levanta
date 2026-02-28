const whyUsWrapper = document.querySelector('#why-us-list');
const whyUsItems = [
    {
        title: 'No Fluff',
        desc: 'Just real tools, real structure, and real progress.'
    },
    {
        title: 'Inner Strength First',
        desc: 'Before chasing results, we build clarity, control, and mindset.'
    },
    {
        title: 'Life Skills You Actually Need',
        desc: 'From focus to self-discipline — we train what matters.'
    },
    {
        title: 'Growth With a Tribe',
        desc: 'You don’t rise alone. You rise with others who get it.'
    }
]

window.addEventListener('DOMContentLoaded', () => {

    whyUsWrapper.innerHTML = whyUsItems.map((item, i) => `
        <li>
            <div class="img-content flex-centered">
                <img src="./assets/img/why_section/${i + 1}.svg" alt="${item.title} icon">
            </div>
            <div class="text-content flex-column">
                <h3 class="sky-blue">
                    ${item.title}
                </h3>
                <p class="main-text-color">
                    ${item.desc}
                </p>
            </div>
        </li>
    `).join('');
})
