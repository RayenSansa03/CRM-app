import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { A1Component } from './a1/a1.component';

import { A2Component } from './a2/a2.component';
import { IndexComponent } from './index/index.component';
import { TablesComponent } from './tables/tables.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CardsComponent } from './cards/cards.component';
import { IconsComponent } from './icons/icons.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { TypographyComponent } from './typography/typography.component';
import { ErrorComponent } from './error/error.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { AppbarComponent } from './appbar/appbar.component';
import { ExpbarComponent } from './expbar/expbar.component';
import { Expbar2Component } from './expbar2/expbar2.component';
import { AccountComponent } from './account/account.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ConnectionsComponent } from './connections/connections.component';
import { AuthRegisterBasicComponent } from './auth-register-basic/auth-register-basic.component';
import { AuthLoginBasicComponent } from './auth-login-basic/auth-login-basic.component';
import { AuthForgotPasswordBasicComponent } from './auth-forgot-password-basic/auth-forgot-password-basic.component';
import { TablesBasicComponent } from './tables-basic/tables-basic.component';
import { FormLayoutsVerticalComponent } from './form-layouts-vertical/form-layouts-vertical.component';
import { FormLayoutsHorizontalComponent } from './form-layouts-horizontal/form-layouts-horizontal.component';
import { CardsBasicComponent } from './cards-basic/cards-basic.component';
import { UiListGroupsComponent } from './ui-list-groups/ui-list-groups.component';
import { UiToastsComponent } from './ui-toasts/ui-toasts.component';
import { ExtendedUiTextDividerComponent } from './extended-ui-text-divider/extended-ui-text-divider.component';
import { FormsBasicInputsComponent } from './forms-basic-inputs/forms-basic-inputs.component';
import { FormsInputGroupsComponent } from './forms-input-groups/forms-input-groups.component';
import { ProduitrebutComponent } from './produitrebut/produitrebut.component';
import { PackComponent } from './pack/pack.component';
import { ProduitComponent } from './produit/produit.component';
import { CategorieComponent } from './categorie/categorie.component';
import { MarqueComponent } from './marque/marque.component';
import { UniteComponent } from './unite/unite.component';
import { AchatComponent } from './achat/achat.component';
import { PointDeVenteComponent } from './point-de-vente/point-de-vente.component';
import { CarteFideliteComponent } from './carte-fidelite/carte-fidelite.component';
import { VentesComponent } from './ventes/ventes.component';
import { CommandeComponent } from './commande/commande.component';
import { CategorieServiceComponent } from './categorie-service/categorie-service.component';
import { ServicesComponent } from './services/services.component';
import { MesConfigurationsComponent } from './mes-configurations/mes-configurations.component';
import { GestionAutorisationsComponent } from './gestion-autorisations/gestion-autorisations.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';
import { MesTypesComponent } from './mes-types/mes-types.component';
import { RapportComponent } from './rapport/rapport.component';
import { MesClientsComponent } from './mes-clients/mes-clients.component';
import { MesFournisseursComponent } from './mes-fournisseurs/mes-fournisseurs.component';
import { MesBanquesComponent } from './mes-banques/mes-banques.component';
import { RetenueSourceComponent } from './retenue-source/retenue-source.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MesCreditsComponent } from './mes-credits/mes-credits.component';
import { MesCaissesComponent } from './mes-caisses/mes-caisses.component';
import { MesDepensesComponent } from './mes-depenses/mes-depenses.component';
import { PlusValueComponent } from './plus-value/plus-value.component';
import { InventaireCaisseComponent } from './inventaire-caisse/inventaire-caisse.component';
import { InventaireComponent } from './inventaire/inventaire.component';
import { MesDepotsComponent } from './mes-depots/mes-depots.component';
import { MesMouvementsComponent } from './mes-mouvements/mes-mouvements.component';
import { MesVehiculesComponent } from './mes-vehicules/mes-vehicules.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { LivreurComponent } from './livreur/livreur.component';
import { TourneeComponent } from './tournee/tournee.component';
import { MesFacturesComponent } from './mes-factures/mes-factures.component';
import { MesDevisComponent } from './mes-devis/mes-devis.component';
import { BonDeSortieComponent } from './bon-de-sortie/bon-de-sortie.component';
import { BonDeLivraisonComponent } from './bon-de-livraison/bon-de-livraison.component';
import { GestionDesCaissesComponent } from './gestion-des-caisses/gestion-des-caisses.component';
import { CallbackComponent } from './callback.component';

const routes: Routes = [
  { path: 'A1', component: A1Component },
  { path: 'A2', component: A2Component },
  { path: 'appbar', component: AppbarComponent },
  { path: 'index', component: IndexComponent },
  { path: 'tables', component: TablesComponent },

  { path: 'account-settings', component: AccountSettingsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'connections', component: ConnectionsComponent },
  { path: 'callback', component: CallbackComponent } , // Ajoutez cette route

  { path: 'cards', component: CardsComponent },
  { path: 'form-layouts', component: FormLayoutsComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Navbar', component: NavbarComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'pages-misc-error', component: ErrorComponent },

  { path: 'typography', component: TypographyComponent },
  { path: 'expbar', component: ExpbarComponent },
  { path: 'expbar2', component: Expbar2Component },

  { path: 'auth-register-basic', component: AuthRegisterBasicComponent },
  {
    path: 'auth-forgot-password-basic',
    component: AuthForgotPasswordBasicComponent,
  },
  { path: 'auth-login-basic', component: AuthLoginBasicComponent },

  { path: 'tables-basic', component: TablesBasicComponent },
  { path: 'form-layouts-vertical', component: FormLayoutsVerticalComponent },
  {
    path: 'form-layouts-horizontal',
    component: FormLayoutsHorizontalComponent,
  },
  { path: 'forms-input-groups', component: FormsInputGroupsComponent },
  { path: 'forms-basic-inputs', component: FormsBasicInputsComponent },
  {
    path: 'extended-ui-text-divider',
    component: ExtendedUiTextDividerComponent,
  },
  { path: 'ui-toasts', component: UiToastsComponent },
  { path: 'ui-list-groups', component: UiListGroupsComponent },
  { path: 'cards-basic', component: CardsBasicComponent },

  //article
  { path: 'Produitrebut', component: ProduitrebutComponent },
  { path: 'Pack', component: PackComponent },
  { path: 'Produit', component: ProduitComponent },
  { path: 'Categorie', component: CategorieComponent },
  { path: 'Marque', component: MarqueComponent },
  { path: 'Unite', component: UniteComponent },

  //Services
  { path: 'Services', component: ServicesComponent },
  { path: 'Categorie_Service', component: CategorieServiceComponent },

  //Point_de_Vente
  { path: 'Commande', component: CommandeComponent },
  { path: 'Ventes', component: VentesComponent },
  { path: 'Carte_Fidelite', component: CarteFideliteComponent },
  { path: 'Point_de_Vente', component: PointDeVenteComponent },
  { path: 'Achat', component: AchatComponent },

  //caisse
  { path: 'Gestion_des_caisses', component: GestionDesCaissesComponent },
  { path: 'Inventaire_caisse', component: InventaireCaisseComponent },

  //document
  { path: 'Mes_Factures', component: MesFacturesComponent },
  { path: 'Mes_Devis', component: MesDevisComponent },
  { path: 'Bon_de_sortie', component: BonDeSortieComponent },
  { path: 'Bon_de_livraison', component: BonDeLivraisonComponent },

  //zone de livraison
  { path: 'Tournee', component: TourneeComponent },
  //Livraisons
  { path: 'Livraisons', component: LivraisonsComponent },
  { path: 'Livreur', component: LivreurComponent },
  { path: 'Mes_Vehicules', component: MesVehiculesComponent },

  //stock
  { path: 'Mes_depots', component: MesDepotsComponent },
  { path: 'Mes_mouvements', component: MesMouvementsComponent },
  { path: 'Inventaire', component: InventaireComponent },

  //Transactions
  { path: 'Transactions', component: TransactionsComponent },
  { path: 'Mes_credits', component: MesCreditsComponent },
  { path: 'Mes_caisses', component: MesCaissesComponent },
  { path: 'Mes_depenses', component: MesDepensesComponent },
  { path: 'Plus_value', component: PlusValueComponent },

  //Comptabilité
  { path: 'Retenue_source', component: RetenueSourceComponent },

  //Relation
  { path: 'Mes_clients', component: MesClientsComponent },
  { path: 'Mes_fournisseurs', component: MesFournisseursComponent },
  { path: 'Mes_banques', component: MesBanquesComponent },

  { path: 'Rapport', component: RapportComponent },
  //Paramétres
  { path: 'Mes_types', component: MesTypesComponent },
  { path: 'Gestion_utilisateurs', component: GestionUtilisateursComponent },
  { path: 'Gestion_autorisations', component: GestionAutorisationsComponent },
  { path: 'Mes_configurations', component: MesConfigurationsComponent },

  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
