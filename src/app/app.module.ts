import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import{ReactiveFormsModule,FormsModule} from'@angular/forms';
import{AdminService} from './services/admin.service';
import{HttpClientModule} from '@angular/common/http';
import {VoterService} from'./services/voter.service';

import { CandidateComponent } from './candidate/candidate.component';
import{ElectionService} from './services/election.service';
import { VoteComponent } from './voter-homepage/vote/vote.component';
import { ViewResultComponent } from './voter-homepage/view-result/view-result.component';
import { ViewElectionComponent } from './admin-page/view-election/view-election.component';
import { NewElectionComponent } from './admin-page/new-election/new-election.component';
import {VoterHomepageComponent} from './voter-homepage/voter-homepage.component';
import { LogoutComponent } from './voter-homepage/logout/logout.component';
import { AdminViewResultComponent } from './admin-page/admin-view-result/admin-view-result.component';
import { FreezeElectionComponent } from './admin-page/freeze-election/freeze-election.component';
import { AddCandidateComponent } from './admin-page/add-candidate/add-candidate.component';
import { AdminLogoutComponent } from './admin-page/admin-logout/admin-logout.component';
import { EndElectionComponent } from './admin-page/end-election/end-election.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    routingComponents,
    CandidateComponent,
    VoterHomepageComponent,
    VoteComponent,
    ViewResultComponent,
    ViewElectionComponent,
    NewElectionComponent,
    LogoutComponent,
    AdminViewResultComponent,
    FreezeElectionComponent,
    AddCandidateComponent,
    AdminLogoutComponent,
    EndElectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AdminService,VoterService,ElectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
