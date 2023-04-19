import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { CreateVmsComponent } from './ATS/component/vms/create-vms/create-vms.component';
import { ListVmsComponent } from './ATS/component/vms/list-vms/list-vms.component';
import { EditVmsComponent } from './ATS/component/vms/edit-vms/edit-vms.component';
import { UserLoginComponent } from './ATS/component/loggin/user-login/user-login.component';
import { CreateTechComponent } from './ATS/component/technology/create-tech/create-tech.component';
import { ListTechComponent } from './ATS/component/technology/list-tech/list-tech.component';
import { EditTechComponent } from './ATS/component/technology/edit-tech/edit-tech.component';
import { CreateRequirementComponent } from './ATS/component/Recruitment/requirement/create-requirement/create-requirement.component';
import { ListRequirementComponent } from './ATS/component/Recruitment/requirement/list-requirement/list-requirement.component';
import { EditRequirementComponent } from './ATS/component/Recruitment/requirement/edit-requirement/edit-requirement.component';
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
import { FileuploadComponent } from './ATS/component/excel/fileupload/fileupload.component';
import { MuluploadComponent } from './ATS/component/multipleupload/mulupload/mulupload.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'charts-apexcharts', component: ChartsApexchartsComponent },
  { path: 'charts-chartjs', component: ChartsChartjsComponent },
  { path: 'form-editors', component: FormsEditorsComponent },
  { path: 'form-elements', component: FormsElementsComponent },
  { path: 'form-layouts', component: FormsLayoutsComponent },
  { path: 'icons-bootstrap', component: IconsBootstrapComponent },
  { path: 'icons-boxicons', component: IconsBoxiconsComponent },
  { path: 'icons-remix', component: IconsRemixComponent },
  { path: 'list-group', component: ListGroupComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'spinners', component: SpinnersComponent },
  { path: 'tables-data', component: TablesDataComponent },
  { path: 'tables-general', component: TablesGeneralComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'pages-blank', component: PagesBlankComponent },
  { path: 'pages-contact', component: PagesContactComponent },
  { path: 'pages-error404', component: PagesError404Component },
  { path: 'pages-faq', component: PagesFaqComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
  // here is my nav
  { path: 'login', component: UserLoginComponent},

  // vms routing
  { path: 'register-vms', component: CreateVmsComponent},
  { path: 'list-vms', component: ListVmsComponent},
  { path: 'edit-vms/:id', component: EditVmsComponent},
 // {path:'', redirectTo:'login', pathMatch:'full'}

 // technology
 { path: 'register-technology', component: CreateTechComponent},
 { path: 'list-technology', component: ListTechComponent},
 { path: 'edit-technology/:id', component: EditTechComponent},

 //recruitment
 { path: 'register-requirement', component: CreateRequirementComponent},
 { path: 'list-requirement', component: ListRequirementComponent},
 { path: 'edit-requirement/:id', component: EditRequirementComponent},

 //employee
 { path: 'register-employee', component: RegisterEmployeeComponent},
 { path: 'list-employee', component: ListEmployeesComponent},
 { path: 'edit-employee/:id', component: EditEmployeeComponent},

//register consultant
 { path: 'register-consultant', component: RegisterConsultantComponent},
 { path: 'list-consultant', component: ListConsultantComponent},
 { path: 'edit-consultant/:id', component: EditConsultantComponent},

 //register submission
 { path: 'register-submissions', component: RegisterSubmissionComponent},
 { path: 'list-submissions', component: ListSubmissionsComponent},
 { path: 'edit-submissions/:id', component: EditSubmissionComponent},

 //register interview
 { path: 'register-interview', component: RegisterInterviewComponent},
 { path: 'list-interview', component: ListInterviewComponent},
 { path: 'edit-interview/:id', component: EditInterviewComponent},

  //register techAnd SU[pport]
  { path: 'register-techsupport', component: RegisterTechspportComponent},
  { path: 'list-techsupport', component: ListTechsupportComponent},
  { path: 'edit-techsupport/:id', component: EditTechsupportComponent},


 { path: 'forgot-password', component: ForgotpswComponent},
 { path: 'reset-password', component: ResetPasswordComponent},
 //{ path: '',   redirectTo: '/login', pathMatch: 'full' }

 { path: 'excel', component: FileuploadComponent},

 { path: 'mulupload', component: MuluploadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
