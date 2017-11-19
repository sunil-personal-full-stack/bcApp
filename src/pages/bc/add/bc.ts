import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-bc',
  templateUrl: 'bc.html',
})
export class BcPage {
  public selectOptions = {
    title: 'Select Month'
  };
  public selectOptions2 = {
    title: 'Select Year'
  };
  public month =  new Date().getMonth();
  public year = new Date().getFullYear();
  public startDate = new Date().getFullYear() +'-'+ new Date().getMonth() +'-'+  new Date().getDate();
  public DueDate = new Date().getFullYear() +'-'+ new Date().getMonth() +'-'+  new Date().getDate();
  public months = [
    { id : 1, text: '1'},
    { id : 2, text: '2'},
    { id : 3, text: '3'},
    { id : 4, text: '4'},
    { id : 5, text: '5'},
    { id : 6, text: '6'},
    { id : 7, text: '7'},
    { id : 8, text: '8'},
    { id : 9, text: '9'},
    { id : 10, text: '10'},
    { id : 11, text: '11'},
    { id : 12, text: '12'}
  ]
  public years = [

  ]
  public memberList : any[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
    let currYear = this.year;
    for (let i = 0; i < 20; i++) {
      this.years.push({
        id: currYear,
        text: currYear
      })
      currYear = currYear + 1;
    }
  }
  addMember(val){
    if(val.name && val.contact){
      this.memberList.push(val)
    }
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad BcPage');
  // }
  saveBC(formVal){
    formVal['member'] = this.memberList;
    console.log(formVal);
  }
  deleteMember(index){
    let confirm = this.alertCtrl.create({
      title: 'Delete Member',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'cancel',
          handler: () => {
           
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.memberList.splice(index, 1);
          }
        }
      ]
    });
    confirm.present();
  }
}
