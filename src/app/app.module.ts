import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProductsComponent } from './products/products.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'my-account', component: MyAccountComponent},
  // { path: 'products' ,
  //     children: [
  //       {
  //         path: 'notebooks',
  //         component: ProductsComponent,
  //       },{
  //         path: 'mobile',
  //         component: ProductsComponent,
  //       },{
  //         path: 'tv',
  //         component: ProductsComponent,
  //       }
  //   ]
  // }
  { path: 'products/:id', component: ProductsComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MyAccountComponent,
    ProductsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
