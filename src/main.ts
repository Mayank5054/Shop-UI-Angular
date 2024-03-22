import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './routes/app-route';
import { productRoutes } from './routes/product-routes';
import { defaultRoute } from './routes/default';

bootstrapApplication(AppComponent,{
    providers:[
        provideRouter(appRoutes),
        provideRouter(productRoutes),
        provideRouter(defaultRoute)
    ]
}).catch((err) => console.error(err));
