import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ListeCVComponent } from './liste-cv/liste-cv.component';
import { ItemComponent } from './item/item.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { StyleComponent } from './directive/style/style.component';
import { DefaultImagePipe } from './cv/default-image.pipe';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ToastModule } from 'primeng/toast';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {MessageService} from "primeng/api";
import {ROUTING} from "./app.routing";
import {FormsModule} from "@angular/forms";
import {RainbowDirective} from "./directive/rainbow.directive";
import {ColorComponent} from "./color/color.component";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeCVComponent,
    ItemComponent,
    DetailCvComponent,
    StyleComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    ColorComponent,
    RainbowDirective,
    HeaderComponent
  ],
  imports: [BrowserModule,ROUTING,BrowserModule,
    FormsModule,ToastModule, BrowserAnimationsModule, ButtonModule, RippleModule],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
