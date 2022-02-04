gsap.from('.logo', {duration: 1, y: '-100%' })
gsap.from('.logo', {duration: 1, opacity: 0 })

gsap.from('.logo-sub', { duration: 1, y: '100%', ease: 'slow', delay: 0.2 })
gsap.from('.logo-sub', { duration: 1, opacity: 0, ease: 'slow', delay: 0.2 })

gsap.from('.nav-link', { duration: 0.5, opacity: 0, ease: 'slow', stagger: .5 })