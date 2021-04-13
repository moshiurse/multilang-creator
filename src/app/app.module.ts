import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from "@angular/material/expansion";

import { AppComponent } from './app.component';
import { ProjectContainerComponent } from './project-container/project-container.component';
import { ProjectFormComponent } from './project-container/project-form/project-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProjectContainerComponent,
    ProjectFormComponent
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
