import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {PokemonService} from "./services/pokemon.service";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    AppComponent,
    PokemonSearchComponent,
    PokemonDetailsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
