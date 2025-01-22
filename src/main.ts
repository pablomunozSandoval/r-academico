import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app.component';


// Modificado app-component por IndexComponent 
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

