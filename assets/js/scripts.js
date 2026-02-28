const whyUsWrapper = document.getElementById('why-us-list');
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

const resWrapper = document.getElementById('results-wrapper');
const resultsItems = [
    {
        title: 'Take the Wheel of Life Test',
        desc: 'Discover what area of life matters most right now.'
    },
    {
        title: 'Build Your Skills Tree',
        desc: 'Get a custom roadmap to grow in the areas you choose.'
    },
    {
        title: 'Train Daily with Guidance',
        desc: 'Watch short lessons. Get tasks. Apply and grow.'
    },
    {
        title: 'Join Your Tribe',
        desc: 'Connect with people growing in the same skills and areas.'
    }
]

const pricingWrapper = document.getElementById('pricing-wrapper');
const pricingItems = [
    {
        title: 'essence',
        yes: [
            'Monthly Theme (video + PDF)',
            'Weekly Growth Challenges',
            'Digital Habit Tracker'
        ],
        no: [
            'Private Community Access',
            'Audio Mindset Sessions',
            'Creator Bonus Content',
            'Monthly Live Session (Zoom on Replay)',
            'Member Recognition / Badge System',
            'Personal Coaching Drop or Q&A Clip',
            'Elite Badge'
        ]
    },{
        title: 'core',
        yes: [
            'Monthly Theme (video + PDF)',
            'Weekly Growth Challenges',
            'Digital Habit Tracker',
            'Private Community Access'
        ],
        no: [
            'Audio Mindset Sessions',
            'Creator Bonus Content',
            'Monthly Live Session (Zoom on Replay)',
            'Member Recognition / Badge System',
            'Personal Coaching Drop or Q&A Clip',
            'Elite Badge'
        ]
    },{
        title: 'rise',
        yes: [
            'Monthly Theme (video + PDF)',
            'Weekly Growth Challenges',
            'Digital Habit Tracker',
            'Private Community Access',
            'Audio Mindset Sessions',
            'Creator Bonus Content',
            'Monthly Live Session (Zoom on Replay)',
            'Member Recognition / Badge System'
        ],
        no: [
            'Personal Coaching Drop or Q&A Clip',
            'Elite Badge'
        ]
    },{
        title: 'elite',
        yes: [
            'Monthly Theme (video + PDF)',
            'Weekly Growth Challenges',
            'Digital Habit Tracker',
            'Private Community Access',
            'Audio Mindset Sessions',
            'Creator Bonus Content',
            'Monthly Live Session (Zoom on Replay)',
            'Member Recognition / Badge System',
            'Personal Coaching Drop or Q&A Clip',
            'Elite Badge'
        ],
        no: []
    },
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

    resWrapper.innerHTML = resultsItems.map((item, i) => `
        <li class="flex-centered">
            <article class="flex-centered" data-step="${i+1}">
                <div class="img-content flex-centered neon-light">
                    <img src="./assets/img/results/${i+1}.svg" alt="${item.title} icon">
                </div>
                <div class="text-content flex-column">
                    <span class="secondary-text-color">STEP ${i+1}</span>
                    <div class="flex-column">
                        <h3 class="sky-blue">
                            ${item.title}
                        </h3>
                        <p class="main-text-color">
                            ${item.desc}
                        </p>
                    </div>
                </div>
            </article>
            <div class="arrow">
                <img src="./assets/img/results/${i%2 === 0 ? 'arrow_left' : 'arrow_right'}.svg" alt="arrow icon">
            </div>
        </li>
    `).join('');


    pricingWrapper.innerHTML = pricingItems.map((item, i) => `
        <article class="price-card flex-column">
            <div class="card-header">
                <h3 class="sky-blue">${item.title}</h3>
                <span class="secondary-text-color">level ${i+1}</span>
            </div>
            <ul class="card-content main-text-color">
                ${[...item.yes.map(feature => `<li type="yes">${feature}</li>`), ...item.no.map(feature => `<li type="no">${feature}</li>`)].join('')}
            </ul>
            <span class="coming-soon secondary-text-color">
                Coming soon...
            </span>
        </article>
    `).join('');
})
