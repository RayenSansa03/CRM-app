
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-nav-right',
  templateUrl: './side-nav-right.component.html',
  styleUrls: ['./side-nav-right.component.css']
})
export class SideNavRightComponent  {
  
    constructor(private router: Router) {}
  
    ngOnInit(): void {
      this.checkActivePage();
   
    }
    
    checkActivePage() {
      if (this.isPageActive('/Unite') || this.isPageActive('/Marque')  || this.isPageActive('/Categorie') || this.isPageActive('/Produit') || this.isPageActive('/Pack') || this.isPageActive('/Produitrebut')) {
        this.isArticleOpen = !this.isArticleOpen ;
      }
   
     else if (this.isPageActive('/account') || this.isPageActive('/notifications') || this.isPageActive('/connections')) {
        this.isAccountSettingsOpen = true;
      }
      else if (this.isPageActive('/Categorie_Service') || this.isPageActive('/Services')) {
        this.isServicesOpen = true;
      }
      else if (this.isPageActive('/Point_de_Vente') ) {
        this.isPoint_de_VenteOpen = true;
      }
      else if (this.isPageActive('/Inventaire_caisse')  || this.isPageActive('/Gestion_des_caisses') ) {
        this.isCaisseOpen = true;
      }
      else if (this.isPageActive('/Bon_de_livraison')  || this.isPageActive('/Bon_de_sortie') || this.isPageActive('/Mes_Devis') || this.isPageActive('/Mes_Factures')) {
        this.isDocumentOpen = true;
      }
      else if (this.isPageActive('/Tournee') ) {
        this.isZonelivraisonOpen = true;
      }
      else if (this.isPageActive('/Livraisons') || this.isPageActive('/Livreur') || this.isPageActive('/Mes_Vehicules') ) {
        this.isLivraisonsOpen = true;
      }
      else if (this.isPageActive('/Mes_depots')  || this.isPageActive('/Mes_mouvements') || this.isPageActive('/Inventaire')) {
        this.isStockOpen = true;
      }
      else if (this.isPageActive('/Transactions') || this.isPageActive('/Mes_credits') || this.isPageActive('/Mes_caisses') || this.isPageActive('/Mes_depenses') || this.isPageActive('/Plus_value') ) {
        this.isTransactionsOpen = true;
      }
      else if (this.isPageActive('/Retenue_source') ) {
        this.isComptabiliteOpen = true;
      }
      else if (this.isPageActive('/Mes_clients')  || this.isPageActive('/Mes_fournisseurs') || this.isPageActive('/Mes_banques')) {
        this.isRelationOpen = true;
      }
      else if (this.isPageActive('/Mes_types') || this.isPageActive('/Gestion_utilisateurs') || this.isPageActive('/Gestion_autorisations') || this.isPageActive('/Mes_configurations') ) {
        this.isParametresOpen = true;
      }
    }
  
  
    isLayoutsOpen = false;
  
    toggleLayouts() {
      this.isLayoutsOpen = !this.isLayoutsOpen;
    }
  
    isAccountSettingsOpen = false;
    isAuthenticationsOpen = false;
    isMiscOpen = false;
    isArticleOpen=false;
    isServicesOpen=false;
    isPoint_de_VenteOpen=false;
  
    isCaisseOpen=false;
    isDocumentOpen=false;
    isZonelivraisonOpen=false;
    isLivraisonsOpen=false;
    isStockOpen=false;
    isTransactionsOpen=false;
    isComptabiliteOpen=false;
    isRelationOpen=false;
    isParametresOpen=false;
  
  
    toggleCaisse() {
      this.isCaisseOpen = !this.isCaisseOpen;
      // Fermer les autres sous-menus
      this.isArticleOpen = false;
      this.isServicesOpen = false;
      this.isPoint_de_VenteOpen = false;
      this.isDocumentOpen = false;
      this.isZonelivraisonOpen = false;
      this.isLivraisonsOpen =false;
      this.isStockOpen = false;
      this.isTransactionsOpen = false;
      this.isComptabiliteOpen = false;
      this.isRelationOpen = false;
      this.isParametresOpen = false;
   
     
    }
    toggleDocument() {
      this.isDocumentOpen = !this.isDocumentOpen;
      // Fermer les autres sous-menus
      this.isArticleOpen = false;
      this.isServicesOpen = false;
      this.isPoint_de_VenteOpen = false;
      this.isCaisseOpen = false;
      this.isZonelivraisonOpen = false;
      this.isLivraisonsOpen =false;
      this.isStockOpen = false;
      this.isTransactionsOpen = false;
      this.isComptabiliteOpen = false;
      this.isRelationOpen = false;
      this.isParametresOpen = false;
    }
    toggleZonelivraison() {
      this.isZonelivraisonOpen = !this.isZonelivraisonOpen;
      // Fermer les autres sous-menus
      this.isArticleOpen = false;
      this.isServicesOpen = false;
      this.isPoint_de_VenteOpen = false;
      this.isCaisseOpen = false;
      this.isDocumentOpen = false;
      this.isLivraisonsOpen =false;
      this.isStockOpen = false;
      this.isTransactionsOpen = false;
      this.isComptabiliteOpen = false;
      this.isRelationOpen = false;
      this.isParametresOpen = false;
    }
    toggleLivraisons() {
      this.isLivraisonsOpen = !this.isLivraisonsOpen;
      // Fermer les autres sous-menus
      this.isArticleOpen = false;
      this.isServicesOpen = false;
      this.isPoint_de_VenteOpen = false;
      this.isCaisseOpen = false;
      this.isZonelivraisonOpen = false;
      this.isDocumentOpen =false;
      this.isStockOpen = false;
      this.isTransactionsOpen = false;
      this.isComptabiliteOpen = false;
      this.isRelationOpen = false;
      this.isParametresOpen = false;
    }
    toggleStock() {
      this.isStockOpen = !this.isStockOpen;
      // Fermer les autres sous-menus
      this.isArticleOpen = false;
      this.isServicesOpen = false;
      this.isPoint_de_VenteOpen = false;
      this.isCaisseOpen = false;
      this.isZonelivraisonOpen = false;
      this.isLivraisonsOpen =false;
      this.isDocumentOpen = false;
      this.isTransactionsOpen = false;
      this.isComptabiliteOpen = false;
      this.isRelationOpen = false;
      this.isParametresOpen = false;
    }
    toggleTransactions() {
      this.isTransactionsOpen = !this.isTransactionsOpen;
      // Fermer les autres sous-menus
      this.isArticleOpen = false;
      this.isServicesOpen = false;
      this.isPoint_de_VenteOpen = false;
      this.isCaisseOpen = false;
      this.isZonelivraisonOpen = false;
      this.isLivraisonsOpen =false;
      this.isStockOpen = false;
      this.isDocumentOpen = false;
      this.isComptabiliteOpen = false;
      this.isRelationOpen = false;
      this.isParametresOpen = false;
    }
    toggleComptabilite() {
      this.isComptabiliteOpen = !this.isComptabiliteOpen;
      // Fermer les autres sous-menus
      this.isArticleOpen = false;
      this.isServicesOpen = false;
      this.isPoint_de_VenteOpen = false;
      this.isCaisseOpen = false;
      this.isZonelivraisonOpen = false;
      this.isLivraisonsOpen =false;
      this.isStockOpen = false;
      this.isTransactionsOpen = false;
      this.isDocumentOpen = false;
      this.isRelationOpen = false;
      this.isParametresOpen = false;
    }
    toggleRelation() {
      this.isRelationOpen = !this.isRelationOpen;
      // Fermer les autres sous-menus
      this.isArticleOpen = false;
      this.isServicesOpen = false;
      this.isPoint_de_VenteOpen = false;
      this.isCaisseOpen = false;
      this.isZonelivraisonOpen = false;
      this.isLivraisonsOpen =false;
      this.isStockOpen = false;
      this.isTransactionsOpen = false;
      this.isComptabiliteOpen = false;
      this.isDocumentOpen = false;
      this.isParametresOpen = false;
    }
    toggleParametres() {
      this.isParametresOpen = !this.isParametresOpen;
      // Fermer les autres sous-menus
      this.isArticleOpen = false;
      this.isServicesOpen = false;
      this.isPoint_de_VenteOpen = false;
      this.isCaisseOpen = false;
      this.isZonelivraisonOpen = false;
      this.isLivraisonsOpen =false;
      this.isStockOpen = false;
      this.isTransactionsOpen = false;
      this.isComptabiliteOpen = false;
      this.isRelationOpen = false;
      this.isDocumentOpen = false;
    }
  
  
  
  
  
  
  
  
    toggleArticle() {
      this.isArticleOpen = !this.isArticleOpen;
      // Fermer les autres sous-menus
      this.isParametresOpen = false;
      this.isServicesOpen = false;
      this.isPoint_de_VenteOpen = false;
      this.isCaisseOpen = false;
      this.isZonelivraisonOpen = false;
      this.isLivraisonsOpen =false;
      this.isStockOpen = false;
      this.isTransactionsOpen = false;
      this.isComptabiliteOpen = false;
      this.isRelationOpen = false;
      this.isDocumentOpen = false;
    }
  
    toggleServices() {
      this.isServicesOpen = !this.isServicesOpen;
      // Fermer les autres sous-menus
      this.isArticleOpen = false;
      this.isParametresOpen = false;
      this.isPoint_de_VenteOpen = false;
      this.isCaisseOpen = false;
      this.isZonelivraisonOpen = false;
      this.isLivraisonsOpen =false;
      this.isStockOpen = false;
      this.isTransactionsOpen = false;
      this.isComptabiliteOpen = false;
      this.isRelationOpen = false;
      this.isDocumentOpen = false;
    }
    togglePoint_de_Vente() {
      this.isPoint_de_VenteOpen = !this.isPoint_de_VenteOpen;
      // Fermer les autres sous-menus
      this.isArticleOpen = false;
      this.isServicesOpen = false;
      this.isParametresOpen = false;
      this.isCaisseOpen = false;
      this.isZonelivraisonOpen = false;
      this.isLivraisonsOpen =false;
      this.isStockOpen = false;
      this.isTransactionsOpen = false;
      this.isComptabiliteOpen = false;
      this.isRelationOpen = false;
      this.isDocumentOpen = false;
    }
  
  
    toggleAccountSettings() {
      this.isAccountSettingsOpen = !this.isAccountSettingsOpen;
      // Fermer les autres sous-menus
      this.isAuthenticationsOpen = false;
      this.isMiscOpen = false;
      this.isArticleOpen = false;
    }
  
    toggleAuthentications() {
      this.isAuthenticationsOpen = !this.isAuthenticationsOpen;
      // Fermer les autres sous-menus
      this.isAccountSettingsOpen = false;
      this.isMiscOpen = false;
    }
  
    toggleMisc() {
      this.isMiscOpen = !this.isMiscOpen;
      // Fermer les autres sous-menus
      this.isAccountSettingsOpen = false;
      this.isAuthenticationsOpen = false;
    }
    
  
    isUserInterfaceOpen = false;
    isExtendedUiOpen = false;
  
    toggleUserInterface() {
      this.isUserInterfaceOpen = !this.isUserInterfaceOpen;
      // Fermer le sous-menu étendu si ouvert
      this.isExtendedUiOpen = false;
    }
  
    toggleExtendedUi() {
      this.isExtendedUiOpen = !this.isExtendedUiOpen;
      // Fermer le menu principal si le sous-menu étendu est ouvert
      if (this.isExtendedUiOpen) {
        this.isUserInterfaceOpen = false;
      }
    }
  
    isFormElementsOpen = false;
    isFormLayoutsOpen = false;
  
    toggleFormElements() {
      this.isFormElementsOpen = !this.isFormElementsOpen;
      if (this.isFormElementsOpen) {
        this.isFormLayoutsOpen = false; // Fermer le sous-menu des Form Layouts si ouvert
      }
    }
  
    toggleFormLayouts() {
      this.isFormLayoutsOpen = !this.isFormLayoutsOpen;
      if (this.isFormLayoutsOpen) {
        this.isFormElementsOpen = false; // Fermer le sous-menu des Form Elements si ouvert
      }
    }
    
  
    // Dans votre composant TypeScript
  toggleActiveClass(event: MouseEvent) {
  
    const target = event.target as HTMLElement;
    const liElement = target.closest('li.menu-item');
    if (liElement) {
      const isActive = liElement.classList.contains('active');
      if (!isActive) {
        const activeElement = document.querySelector('.menu-item.active');
        if (activeElement) {
          activeElement.classList.remove('active');
        }
        liElement.classList.add('active');
      }
    }
  }
  
  //////////////////////////////////////
  
  isLayoutsWithoutMenuActive: boolean = false;
  
  
  // Méthode pour vérifier si le lien 'layouts-without-menu' est actif
  isActive(link: string): boolean {
    if (link === 'layouts-without-menu') {
      return this.isLayoutsWithoutMenuActive;
    }
    // Ajoutez d'autres logiques ici pour d'autres liens si nécessaire
  
    return false;
  }
  
  ////////////////////////////////////////////////////
  
  
  
  isPageActive(pagePath: string): boolean {
   
    return window.location.pathname === pagePath;
  }
  
  }
  