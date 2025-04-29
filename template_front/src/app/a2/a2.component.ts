import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';


import Swiper from 'swiper';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';

import * as AOS from 'aos';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css'],
  
  
})
export class A2Component implements OnInit, AfterViewInit {

  constructor() {}

 
  faqItems = [
    {
      question: "Comment fonctionne le processus de personnalisation sur votre site ?",
      answer: "Notre processus de personnalisation est simple et intuitif. Vous pouvez commencer par sélectionner le produit que vous souhaitez personnaliser, puis choisir parmi une variété d'options telles que les tissus, les couleurs et les détails de conception. Une fois que vous avez terminé, ajoutez simplement votre création au panier et suivez les instructions pour finaliser votre commande.",
      expanded: false
    },
    {
      question: "Quels sont les délais de livraison pour les commandes personnalisées ? ",
      answer: "Les délais de livraison pour les commandes personnalisées varient en fonction de la complexité de la personnalisation et de la disponibilité des matériaux. En général, vous pouvez vous attendre à recevoir votre commande dans un délai de [indiquez ici le délai estimé], mais veuillez noter que des retards peuvent survenir en fonction de la demande et des circonstances imprévues.      ",
      expanded: false
    },
    {
      question: "Quels sont les modes de paiement acceptés sur votre site ?",
      answer: "Nous acceptons une variété de modes de paiement sécurisés, y compris les cartes de crédit, les cartes de débit et les paiements par PayPal. Vous pouvez choisir l'option qui vous convient le mieux au moment de passer votre commande.  ",
      expanded: false
    },
    
    {
      question: "Puis-je retourner ou échanger un article personnalisé si je ne suis pas satisfait ?",
      answer: "                Nous nous efforçons de garantir votre satisfaction à chaque commande. Si vous n'êtes pas entièrement satisfait de votre article personnalisé, veuillez nous contacter dans les [indiquez ici le délai pour les retours] jours suivant la réception de votre commande pour discuter des options de retour ou d'échange.      ",
      expanded: false
    },
    {
      question: "Proposez-vous des services de retouches ou d'ajustements après réception de ma commande ?",
      answer: "                Oui, nous offrons des services de retouches et d'ajustements pour garantir que votre article personnalisé s'adapte parfaitement à vos besoins. Veuillez nous contacter pour discuter des détails et des options disponibles après réception de votre commande.      ",
      expanded: false
    },
    {
      question: "Offrez-vous des remises ou des offres spéciales pour les commandes en gros ou les événements professionnels ? ",
      answer: "Oui, nous proposons des remises spéciales pour les commandes en gros et les événements professionnels. Veuillez nous contacter pour obtenir un devis personnalisé et discuter de vos besoins spécifiques.       ",
      expanded: false
    }
    ];

  toggleCollapse(index: number) {
    this.faqItems[index].expanded = !this.faqItems[index].expanded;
  }
  

  ngOnInit(): void {
    this.initNavbarLinks();
    this.initBackToTop();
    this.initMobileNavToggle();
    this.initMobileNavDropdowns();
    this.initScrollToLinks();
    this.initScrollToHashLinks();
    this.initClientsSlider();
    //// this.initPortfolioLightbox();
    this.initPortfolioDetailsSlider();
    this.initTestimonialsSlider();
    //this.initAOS();
    //this.initPureCounter();
  }

  ngAfterViewInit(): void {
    this.initClientsSlider();
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash) as HTMLElement | null;
      if (element) {
        this.scrollTo(element);
      }
    }
  }
  

  private initNavbarLinks(): void {
    const navbarlinks = document.querySelectorAll('#navbar .scrollto');
    const navbarlinksActive = () => {
      const position = window.scrollY + 200;
      navbarlinks.forEach(navbarlink => {
        if (!(navbarlink instanceof HTMLAnchorElement) || !navbarlink.hash) return;
        const section = document.querySelector(navbarlink.hash);
        if (!(section instanceof HTMLElement)) return;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    };
    window.addEventListener('load', navbarlinksActive);
    window.addEventListener('scroll', navbarlinksActive);
  }

  private initBackToTop(): void {
    const backtotop = document.querySelector('.back-to-top');
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop?.classList.add('active');
      } else {
        backtotop?.classList.remove('active');
      }
    };
    window.addEventListener('load', toggleBacktotop);
    window.addEventListener('scroll', toggleBacktotop);
  }

  private initMobileNavToggle(): void {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    mobileNavToggle?.addEventListener('click', () => {
        const navbar = document.querySelector('#navbar');
        navbar?.classList.toggle('navbar-mobile');
        // Since this is an arrow function, 'this' refers to the instance of the class a2Component
        mobileNavToggle?.classList.toggle('bi-list');
        mobileNavToggle?.classList.toggle('bi-x');
    });
}


private initMobileNavDropdowns(): void {
  const mobileNavDropdowns = document.querySelectorAll('.navbar .dropdown > a');
  mobileNavDropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', (event) => {
          const navbar = document.querySelector('#navbar');
          if (navbar?.classList.contains('navbar-mobile')) {
              event.preventDefault();
              dropdown.nextElementSibling?.classList.toggle('dropdown-active');
          }
      });
  });
}


private initScrollToLinks(): void {
  const scrollToLinks = document.querySelectorAll('.scrollto');
  scrollToLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          if (!(link instanceof HTMLAnchorElement) || !link.hash) return;
          event.preventDefault();
          const navbar = document.querySelector('#navbar');
          if (navbar?.classList.contains('navbar-mobile')) {
              navbar.classList.remove('navbar-mobile');
              const navbarToggle = document.querySelector('.mobile-nav-toggle');
              navbarToggle?.classList.toggle('bi-list');
              navbarToggle?.classList.toggle('bi-x');
          }
          const header = document.querySelector('#header') as HTMLElement | null;
          let offset = header?.offsetHeight || 0;
          if (!(header?.classList.contains('header-scrolled'))) {
              offset -= 16;
          }
          const element = document.querySelector(link.hash);
          const elementPos = element instanceof HTMLElement ? element.offsetTop : 0;
          window.scrollTo({
              top: elementPos - offset,
              behavior: 'smooth'
          });
      });
  });
}



private initScrollToHashLinks(): void {
  window.addEventListener('load', () => {
      if (window.location.hash) {
          const element = document.querySelector(window.location.hash) as HTMLElement | null;
          if (element) {
              this.scrollTo(element);
          }
      }
  });
}


private scrollTo(element: HTMLElement): void {
  const header = document.querySelector('#header') as HTMLElement | null;
  let offset = header?.offsetHeight || 0;
  if (!(header?.classList.contains('header-scrolled'))) {
      offset -= 16;
  }
  const elementPos = element.offsetTop;
  window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
  });
}
    /**
   * Clients Slider
   */
    private initClientsSlider(): void {
      new Swiper('.clients-slider', {
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 60
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 80
          },
          992: {
            slidesPerView: 6,
            spaceBetween: 120
          }
        }
      });
    }

  private initPortfolioIsotopeAndFilter(): void {
    window.addEventListener('load', () => {
        const portfolioContainer = document.querySelector('.portfolio-container') as HTMLElement | null;
        if (portfolioContainer) {
            const portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            });
            const portfolioFilters = document.querySelectorAll('#portfolio-flters li');
            portfolioFilters.forEach(filter => {
                filter.addEventListener('click', (event) => {
                    event.preventDefault();
                    portfolioFilters.forEach(el => {
                        el.classList.remove('filter-active');
                    });
                    (filter as HTMLElement).classList.add('filter-active');
                    const filterValue = (filter as HTMLElement).getAttribute('data-filter');
                    portfolioIsotope.arrange({
                        filter: filterValue !== null ? filterValue : undefined
                    });
                });
            });

            // Listen for the transitionend event to detect when the arrangement is complete
            portfolioContainer.addEventListener('transitionend', (event) => {
                if (event.propertyName === 'height') {
                    // This is where you can perform actions after the arrangement is complete
                    // For example, refreshing AOS
                    AOS.refresh();
                }
            });
        }
    });
}






  private initPortfolioLightbox(): void {
    const portfolioLightbox = GLightbox({
      selector: '.portfolio-lightbox'
    });
  }

  
private initPortfolioDetailsSlider(): void {
    new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }

  private initTestimonialsSlider(): void {
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
  }

  private initAOS(): void {
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    });
  }

  /*private initPureCounter(): void {
    new PureCounter();
  }*/
}
