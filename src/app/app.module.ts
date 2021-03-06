import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { QuoteBoxComponent } from './quote-box/quote-box.component';
import { LikesComponent } from './likes/likes.component'

@NgModule({
  declarations: [
    AppComponent,
    QuoteBoxComponent,
    FormComponent,
    LikesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
