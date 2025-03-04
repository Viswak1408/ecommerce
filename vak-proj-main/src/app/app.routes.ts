import { Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'products', component: ListProductsComponent },
    { path: 'product/:id', component: ProductDetailComponent },
];
