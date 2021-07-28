import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {VoterModuleComponent} from './voter-module/voter-module.component';
import {VoterLoginComponent} from './voter-login/voter-login.component';
import {VoterHomepageComponent} from './voter-homepage/voter-homepage.component';
import {VoterRegisterComponent} from './voter-register/voter-register.component';
import { ViewElectionComponent } from './admin-page/view-election/view-election.component';
import { NewElectionComponent } from './admin-page/new-election/new-election.component';
import {CandidateComponent} from './candidate/candidate.component';
import { ViewResultComponent } from './voter-homepage/view-result/view-result.component';
import{VoteComponent} from './voter-homepage/vote/vote.component';
import { LogoutComponent } from './voter-homepage/logout/logout.component';
import { AdminViewResultComponent } from './admin-page/admin-view-result/admin-view-result.component';
import { FreezeElectionComponent } from './admin-page/freeze-election/freeze-election.component';
import { AddCandidateComponent } from './admin-page/add-candidate/add-candidate.component';
import{AdminLogoutComponent} from './admin-page/admin-logout/admin-logout.component';
import { EndElectionComponent } from './admin-page/end-election/end-election.component';
const routes: Routes = [
  {path:'admin',component:AdminLoginComponent},
  {path:'adminPage',component:AdminPageComponent,
    children:[
      {path: 'viewElection',component:ViewElectionComponent},
      {path: 'newElection',component:NewElectionComponent},
      {path:'viewResult',component:AdminViewResultComponent},
      {path:'freezing',component:FreezeElectionComponent},
      {path:'addCandidate',component:AddCandidateComponent},
      {path:'adminLogout',component:AdminLogoutComponent},
      {path:'end',component:EndElectionComponent}
    ]
  },
  {path:'voter',component:VoterModuleComponent},
  {path:'login',component:VoterLoginComponent},
  {path: 'register',component:VoterRegisterComponent},
  {path:'HomePage',component:VoterHomepageComponent,
    children:[
      {path:'viewResult',component:ViewResultComponent},
      {path:'vote',component:VoteComponent},
      {path:'logout',component:LogoutComponent}
    ]
  },

  
  {path: 'candidate',component:CandidateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminLoginComponent,AdminPageComponent,VoterModuleComponent,
  VoterLoginComponent,VoterRegisterComponent,VoterHomepageComponent,NewElectionComponent,ViewElectionComponent,LogoutComponent];
