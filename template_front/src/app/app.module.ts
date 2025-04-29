import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Add ReactiveFormsModule
import { HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthService } from './service/auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

// Components
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TablesComponent } from './tables/tables.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CardsComponent } from './cards/cards.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { AppbarComponent } from './appbar/appbar.component';
import { ExpbarComponent } from './expbar/expbar.component';
import { Expbar2Component } from './expbar2/expbar2.component';
import { AccountComponent } from './account/account.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ConnectionsComponent } from './connections/connections.component';
import { AuthRegisterBasicComponent } from './auth-register-basic/auth-register-basic.component';
import { AuthForgotPasswordBasicComponent } from './auth-forgot-password-basic/auth-forgot-password-basic.component';
import { AuthLoginBasicComponent } from './auth-login-basic/auth-login-basic.component';
import { CardsBasicComponent } from './cards-basic/cards-basic.component';
import { UiListGroupsComponent } from './ui-list-groups/ui-list-groups.component';
import { UiToastsComponent } from './ui-toasts/ui-toasts.component';
import { ExtendedUiTextDividerComponent } from './extended-ui-text-divider/extended-ui-text-divider.component';
import { FormsBasicInputsComponent } from './forms-basic-inputs/forms-basic-inputs.component';
import { FormsInputGroupsComponent } from './forms-input-groups/forms-input-groups.component';
import { FormLayoutsHorizontalComponent } from './form-layouts-horizontal/form-layouts-horizontal.component';
import { FormLayoutsVerticalComponent } from './form-layouts-vertical/form-layouts-vertical.component';
import { TablesBasicComponent } from './tables-basic/tables-basic.component';
import { ProduitrebutComponent } from './produitrebut/produitrebut.component';
import { PackComponent } from './pack/pack.component';
import { ProduitComponent } from './produit/produit.component';
import { CategorieComponent } from './categorie/categorie.component';
import { MarqueComponent } from './marque/marque.component';
import { UniteComponent } from './unite/unite.component';
import { ServicesComponent } from './services/services.component';
import { CategorieServiceComponent } from './categorie-service/categorie-service.component';
import { CommandeComponent } from './commande/commande.component';
import { VentesComponent } from './ventes/ventes.component';
import { CarteFideliteComponent } from './carte-fidelite/carte-fidelite.component';
import { PointDeVenteComponent } from './point-de-vente/point-de-vente.component';
import { AchatComponent } from './achat/achat.component';
import { GestionDesCaissesComponent } from './gestion-des-caisses/gestion-des-caisses.component';
import { InventaireCaisseComponent } from './inventaire-caisse/inventaire-caisse.component';
import { MesFacturesComponent } from './mes-factures/mes-factures.component';
import { MesDevisComponent } from './mes-devis/mes-devis.component';
import { BonDeSortieComponent } from './bon-de-sortie/bon-de-sortie.component';
import { BonDeLivraisonComponent } from './bon-de-livraison/bon-de-livraison.component';
import { TourneeComponent } from './tournee/tournee.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { MesVehiculesComponent } from './mes-vehicules/mes-vehicules.component';
import { LivreurComponent } from './livreur/livreur.component';
import { MesDepotsComponent } from './mes-depots/mes-depots.component';
import { MesMouvementsComponent } from './mes-mouvements/mes-mouvements.component';
import { InventaireComponent } from './inventaire/inventaire.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MesCreditsComponent } from './mes-credits/mes-credits.component';
import { MesCaissesComponent } from './mes-caisses/mes-caisses.component';
import { MesDepensesComponent } from './mes-depenses/mes-depenses.component';
import { PlusValueComponent } from './plus-value/plus-value.component';
import { RetenueSourceComponent } from './retenue-source/retenue-source.component';
import { MesClientsComponent } from './mes-clients/mes-clients.component';
import { MesFournisseursComponent } from './mes-fournisseurs/mes-fournisseurs.component';
import { MesBanquesComponent } from './mes-banques/mes-banques.component';
import { RapportComponent } from './rapport/rapport.component';
import { MesTypesComponent } from './mes-types/mes-types.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';
import { GestionAutorisationsComponent } from './gestion-autorisations/gestion-autorisations.component';
import { MesConfigurationsComponent } from './mes-configurations/mes-configurations.component';
import { SideNavRightComponent } from './side-nav-right/side-nav-right.component';
import { ProjectService } from './service/project.service';
import { TaskService } from './service/task.service';
import { TeamService } from './service/team.service';
import { SalleService } from './service/salle.service';
import { MatCardModule } from '@angular/material/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { ChipsModule } from 'primeng/chips';
import { CalendarModule } from 'primeng/calendar';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TableModule } from 'primeng/table'; // Importez le module Table
import { PipelineComponent } from './pipeline/pipeline.component';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';

import { ServiceService } from './service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';
// Make sure the file 'team-management.component.ts' exists in the correct location

// Factory function for ngx-translate
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    RapportComponent, // Assurez-vous que le composant est déclaré ici

    AppComponent,
    A1Component,
    A2Component,
    IndexComponent,
    PipelineComponent,
    NavbarComponent,
    TablesComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    AccountSettingsComponent,
    CardsComponent,
    FormLayoutsComponent,
    IconsComponent,
    TypographyComponent,
    AppbarComponent,
    ExpbarComponent,
    Expbar2Component,
    AccountComponent,
    NotificationsComponent,
    ConnectionsComponent,
    AuthRegisterBasicComponent,
    AuthForgotPasswordBasicComponent,
    AuthLoginBasicComponent,
    CardsBasicComponent,
    UiListGroupsComponent,
    UiToastsComponent,
    ExtendedUiTextDividerComponent,
    FormsBasicInputsComponent,
    FormsInputGroupsComponent,
    FormLayoutsHorizontalComponent,
    FormLayoutsVerticalComponent,
    TablesBasicComponent,
    ProduitrebutComponent,
    PackComponent,
    ProduitComponent,
    CategorieComponent,
    MarqueComponent,
    UniteComponent,
    ServicesComponent,
    CategorieServiceComponent,
    CommandeComponent,
    VentesComponent,
    CarteFideliteComponent,
    PointDeVenteComponent,

    AchatComponent,
    GestionDesCaissesComponent,
    InventaireCaisseComponent,
    MesFacturesComponent,
    MesDevisComponent,
    BonDeSortieComponent,
    BonDeLivraisonComponent,
    TourneeComponent,
    LivraisonsComponent,
    MesVehiculesComponent,
    LivreurComponent,
    MesDepotsComponent,
    MesMouvementsComponent,
    InventaireComponent,
    TransactionsComponent,
    MesCreditsComponent,
    MesCaissesComponent,
    MesDepensesComponent,
    PlusValueComponent,
    RetenueSourceComponent,
    MesClientsComponent,
    MesFournisseursComponent,
    MesBanquesComponent,
    RapportComponent,
    MesTypesComponent,
    GestionUtilisateursComponent,
    GestionAutorisationsComponent,
    MesConfigurationsComponent,
    SideNavRightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    FileUploadModule,
    MultiSelectModule,
    ChipsModule,
    CalendarModule,
    AutoCompleteModule,
    FullCalendarModule,
    TableModule,
    CardModule, // <-- Add this
    BadgeModule,  // Ajoutez ce module ici

    StepsModule,
    ButtonModule,
    DragDropModule,
    AgGridModule, // withComponents([]) can be used if you have custom cell renderers
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }), BrowserAnimationsModule,
  ],
  providers: [ServiceService,SalleService,AuthService,TeamService,ProjectService,TaskService,    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }