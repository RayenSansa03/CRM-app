import { Component, AfterViewInit, ViewEncapsulation  } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imagesLoaded from 'imagesloaded';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class A1Component implements AfterViewInit {
    
  constructor() { }

  ngAfterViewInit(): void {
    this.setupAnimations();
  }













  private setupAnimations(): void {
    gsap.registerPlugin(ScrollTrigger);

    const contentElements = document.querySelectorAll<HTMLElement>('.content');
    contentElements.forEach((el, position) => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: 'top center',
                end: 'bottom center',
                scrub: false,
                markers: false
            }
        });

        timeline.from(el.querySelector('.content__img'), {
            duration: 1,
            opacity: 0,
            y: 50,
            ease: 'power2.inOut'
        }, 0)
            .from(el.querySelector('.content__title'), {
                duration: 0.5,
                opacity: 0,
                y: 30,
                ease: 'power2.out'
            }, '-=0.5')
            .from(el.querySelector('.content__text'), {
                duration: 0.5,
                opacity: 0,
                y: 30,
                ease: 'power2.out'
            }, '-=0.3');

        const isLast = position === contentElements.length - 1;
        gsap.to(el, {
            ease: 'none',
            startAt: { filter: 'brightness(100%) contrast(100%)' },
            filter: isLast ? 'none' : 'brightness(60%) contrast(135%)',
            yPercent: isLast ? 0 : -15
        });

        // Scroll-triggered animations
        gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: 'top top',
                end: '+=100%',
                scrub: true
            }
        })
            .to(el, {
                ease: 'none',
                startAt: { filter: 'brightness(100%) contrast(100%)' },
                filter: isLast ? 'none' : 'brightness(60%) contrast(135%)',
                yPercent: isLast ? 0 : -15
            }, 0)
            .to(el.querySelector('.content__img'), {
                ease: 'power1.in',
                yPercent: -40,
                rotation: -20
            }, 0);

        // Change la couleur de fond à un moment précis
        timeline.to(el, {
            backgroundColor: '#E0BAA4', // Changez cette valeur pour la couleur que vous souhaitez
            duration: 0.5, // Durée de l'animation
            delay: 2 // Délai avant que l'animation ne commence
        });
    });

    // Fonction d'initialisation
    const init = () => {
        // Votre logique d'initialisation ici
        console.log('Initialization completed.');
    };

    // Appel de la fonction d'initialisation une fois que les images sont préchargées
    preloadImages('.content__img').then(() => {
        // Une fois les images préchargées, supprimez l'indicateur/classe 'loading' du corps
        document.body.classList.remove('loading');
        init();
    });
}






}

// Fonction pour précharger les images
const preloadImages = (selector = 'img') => {
  return new Promise<void>((resolve) => {
      // Utilisation de la bibliothèque imagesLoaded pour garantir le chargement complet de toutes les images (y compris les arrière-plans).
      imagesLoaded(document.querySelectorAll(selector), { background: true }, () => {
        resolve();
      });
  });
};