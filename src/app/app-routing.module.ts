import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';
import { PayementComponent } from './payement/payement.component';

const routes: Routes = [
  {path: "qrgenerator" , component : QrGeneratorComponent},
  {path: "payer" , component : PayementComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
