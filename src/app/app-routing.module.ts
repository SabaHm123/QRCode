import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';

const routes: Routes = [
  {path: "qrgenerator" , component : QrGeneratorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
