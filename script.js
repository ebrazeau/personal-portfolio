gsap.from('.logo', {duration: 1, y: '-100%' })
gsap.from('.logo', {duration: 1, opacity: 0 })

gsap.from('.logo-sub', { duration: 1, y: '100%', ease: 'slow', delay: 0.2 })
gsap.from('.logo-sub', { duration: 1, opacity: 0, ease: 'slow', delay: 0.2 })

gsap.from('.nav-link', { duration: 0.5, opacity: 0, ease: 'slow', stagger: .5 })

const project1 = document.getElementsByClassName('project1');
const project2 = document.getElementsByClassName('project2');
const project3 = document.getElementsByClassName('project3');
const project4 = document.getElementsByClassName('project4');

const project1URL = "https://meet-willow.netlify.app/"
const project2URL = "https://whatsinyourfridge.netlify.app"
const project3URL = "https://movie-finder-eb.netlify.app"
const project4URL = "https://livinggreenhomes.myshopify.com/"

const windowFeatures = "location=yes,height=1080,width=1920,scrollbars=yes,status=yes";

const onProjectClick = (project, projectURL) => {
    project[0].addEventListener('click', function() {
        window.open(projectURL, "_blank", windowFeatures);
    })
};

// ur cool n fun 
onProjectClick(project1, project1URL);
onProjectClick(project2, project2URL);
onProjectClick(project3, project3URL);
onProjectClick(project4, project4URL);


var granimInstance = new Granim({
    element: '#canvas-complex',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                [
                    { color: '#C4D3EE', pos: .2 },
                    { color: '#B0C8F3', pos: .8 },
                    { color: '#7EA2E6', pos: 1 }
                ], [
                    { color: '#4E97D2', pos: 0 },
                    { color: '#71A7D3', pos: .2 },
                    { color: '#A7BFD2', pos: .75 }
                ], [
                    { color: '#CC4F41', pos: 0 },
                    { color: '#E9857A', pos: .2 },
                    { color: '#E36152', pos: .75 }
                ],
            ]
        }
    }
});