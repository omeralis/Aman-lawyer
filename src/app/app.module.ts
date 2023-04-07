import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { IconsModule } from './shared/icons/icons.module';
import { NgParticlesModule } from 'ng-particles';
import { HomeComponent } from './layouts/home/home.component';
import { AboutComponent } from './layouts/about/about.component';
import { LicensedComponent } from './layouts/licensed/licensed.component';
import { StoriesComponent } from './layouts/stories/stories.component';
import { ArticlesComponent } from './layouts/articles/articles.component';
import { ClientNumberComponent } from './layouts/client-number/client-number.component';
import { TeamComponent } from './layouts/team/team.component';
import { AwardsComponent } from './layouts/awards/awards.component';
import { TestimonialsComponent } from './layouts/testimonials/testimonials.component';
import { ClientComponent } from './layouts/client/client.component';
import { VideoListComponent } from './layouts/video-list/video-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    LicensedComponent,
    StoriesComponent,
    ArticlesComponent,
    ClientNumberComponent,
    TeamComponent,
    AwardsComponent,
    TestimonialsComponent,
    ClientComponent,
    VideoListComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModalModule,
    CarouselModule,
    IconsModule,
    NgParticlesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}