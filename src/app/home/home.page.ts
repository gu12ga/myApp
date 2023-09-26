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
  imc!: number
  imcClass!: string;

  constructor(private toastController: ToastController) {}

  onCalculate(){

    this.imc = this.weigth/(this.heigth*this.heigth);

    if(this.imc<18.5){
      this.imcClass = "below-weight";
      this.showMessage("Você está abaixo do peso")
    }

    else if(this.imc>=18.5 && this.imc<25){
      this.imcClass = "healthy-weight";
      this.showMessage("Você está com peso saudável")
    }

    else if(this.imc>=25 && this.imc<30){
      this.imcClass = "overweight";
      this.showMessage("Você está sobrepeso")
    }

    else if(this.imc>=30 && this.imc<35){
      this.imcClass = "obesity-i";
      this.showMessage("Você está Obesidade Grau I (leve)")
    }

    else if(this.imc>=35 && this.imc<40){
      this.imcClass = "obesity-ii";
      this.showMessage("Você está Obesidade Grau II (moderada)")
    }

    else if(this.imc>=40){
      this.imcClass = "obesity-iii";
      this.showMessage("Você está Obesidade Grau III (grave)")
    }

  }

  async showMessage(msg: string){

    const previousToat = await this.toastController.getTop();

    if (previousToat){
      await this.toastController.dismiss();
    }

    const toast = await this.toastController.create(
      {
        message: msg,
        buttons:[
          {
            icon: 'close'
          }
        ]

      }
    );

    toast.present();
  }

}
