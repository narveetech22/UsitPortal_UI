import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CreateVmsComponent } from './ATS/component/vms/create-vms/create-vms.component';
import { ListVmsComponent } from './ATS/component/vms/list-vms/list-vms.component';
import { EditVmsComponent } from './ATS/component/vms/edit-vms/edit-vms.component';
import { UserLoginComponent } from './ATS/component/loggin/user-login/user-login.component';
import { CreateTechComponent } from './ATS/component/technology/create-tech/create-tech.component';
import { ListTechComponent } from './ATS/component/technology/list-tech/list-tech.component';
import { EditTechComponent } from './ATS/component/technology/edit-tech/edit-tech.component';
import { CreateRequirementComponent } from './ATS/component/Recruitment/requirement/create-requirement/create-requirement.component';
import { EditRequirementComponent } from './ATS/component/Recruitment/requirement/edit-requirement/edit-requirement.component';
import { ListRequirementComponent } from './ATS/component/Recruitment/requirement/list-requirement/list-requirement.component';
import { RegisterEmployeeComponent } from './ATS/component/employee/register-employee/register-employee.component';
import { ListEmployeesComponent } from './ATS/component/employee/list-employees/list-employees.component';
import { ForgotpswComponent } from './ATS/component/forgotpsw/forgotpsw.component';
import { ResetPasswordComponent } from './ATS/component/reset-password/reset-password.component';
import { EditEmployeeComponent } from './ATS/component/employee/edit-employee/edit-employee.component';
import { RegisterConsultantComponent } from './ATS/component/sales/register-consultant/register-consultant.component';
import { ListConsultantComponent } from './ATS/component/sales/list-consultant/list-consultant.component';
import { EditConsultantComponent } from './ATS/component/sales/edit-consultant/edit-consultant.component';
import { RegisterSubmissionComponent } from './ATS/component/sales/submission/register-submission/register-submission.component';
import { ListSubmissionsComponent } from './ATS/component/sales/submission/list-submissions/list-submissions.component';
import { EditSubmissionComponent } from './ATS/component/sales/submission/edit-submission/edit-submission.component';
import { RegisterInterviewComponent } from './ATS/component/sales/interview/register-interview/register-interview.component';
import { ListInterviewComponent } from './ATS/component/sales/interview/list-interview/list-interview.component';
import { EditInterviewComponent } from './ATS/component/sales/interview/edit-interview/edit-interview.component';
import { RegisterTechspportComponent } from './ATS/component/technology/register-techspport/register-techspport.component';
import { ListTechsupportComponent } from './ATS/component/technology/list-techsupport/list-techsupport.component';
import { EditTechsupportComponent } from './ATS/component/technology/edit-techsupport/edit-techsupport.component';
import { NgxPaginationModule } from 'ngx-pagination';
 import {AutocompleteLibModule} from 'angular-ng-autocomplete';
 import { Ng2CompleterModule } from 'ng2-completer';
import { FileuploadComponent } from './ATS/component/excel/fileupload/fileupload.component';
import { MuluploadComponent } from './ATS/component/multipleupload/mulupload/mulupload.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    AlertsComponent,
    AccordionComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    ListGroupComponent,
    ModalComponent,
    TabsComponent,
    PaginationComponent,
    ProgressComponent,
    SpinnersComponent,
    TooltipsComponent,
    FormsElementsComponent,
    FormsLayoutsComponent,
    FormsEditorsComponent,
    TablesGeneralComponent,
    TablesDataComponent,
    ChartsChartjsComponent,
    ChartsApexchartsComponent,
    IconsBootstrapComponent,
    IconsRemixComponent,
    IconsBoxiconsComponent,
    UsersProfileComponent,
    PagesFaqComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    PagesBlankComponent,
    CreateVmsComponent,
    ListVmsComponent,
    EditVmsComponent,
    UserLoginComponent,
    CreateTechComponent,
    ListTechComponent,
    EditTechComponent,
    CreateRequirementComponent,
    EditRequirementComponent,
    ListRequirementComponent,
    RegisterEmployeeComponent,
    ListEmployeesComponent,
    ForgotpswComponent,
    ResetPasswordComponent,
    EditEmployeeComponent,
    RegisterConsultantComponent,
    ListConsultantComponent,
    EditConsultantComponent,
    RegisterSubmissionComponent,
    ListSubmissionsComponent,
    EditSubmissionComponent,
    RegisterInterviewComponent,
    ListInterviewComponent,
    EditInterviewComponent,
    RegisterTechspportComponent,
    ListTechsupportComponent,
    EditTechsupportComponent,
    FileuploadComponent,
    MuluploadComponent,
    // AutocompleteLibModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AutocompleteLibModule,
    Ng2CompleterModule,
    NgMultiSelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
