import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';


const routes: Routes = [
  { path: '', pathMatch: "full", component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
