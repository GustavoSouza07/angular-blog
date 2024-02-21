import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComponentsModuleModule} from './components/components-module.module';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { CardInformationComponent } from './components-content/card-information/card-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    CardInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
