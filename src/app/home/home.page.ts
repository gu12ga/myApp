import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  weigth!: number
  heigth!: number

  constructor(private toastController: ToastController) {}

  onCalculate(){

    const imc = this.weigth/(this.heigth*this.heigth);
    this.showMessage(`IMC: ${imc.toFixed(2)}`)

  }

  async showMessage(msg: string){

    const toast = await this.toastController.create(
      {
        message: msg,
        duration: 3000

      }
    );

    toast.present();
  }

}
