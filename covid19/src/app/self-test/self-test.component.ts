import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-test',
  templateUrl: './self-test.component.html',
  styleUrls: ['./self-test.component.css'],
})
export class SelfTestComponent implements OnInit {
  constructor() {}

  // result;
  // result1 = '';
  // result2 = '';
  // result3 = '';
  // result4 = '';
  // selected1 = [];
  // selected2 = [];
  // selected3 = [];
  // selected4 = [];

  // pollution = [
  //   { checked: false, name: 'Dry Cough', value: 'pollution' },
  //   { checked: false, name: 'Sneeze', value: 'pollution' },
  // ];
  // cold = [
  //   { checked: false, name: 'Cough', value: 'cold' },
  //   { checked: false, name: 'Mucus', value: 'cold' },
  //   { checked: false, name: 'Sneeze', value: 'cold' },
  //   { checked: false, name: 'Runny nose', value: 'cold' },
  // ];
  // flu = [
  //   { checked: false, name: 'Cough', value: 'flu' },
  //   { checked: false, name: 'Mucus', value: 'flu' },
  //   { checked: false, name: 'Sneeze', value: 'flu' },
  //   { checked: false, name: 'Runny nose', value: 'flu' },
  //   { checked: false, name: 'Body ache', value: 'flu' },
  //   { checked: false, name: 'Weakness', value: 'flu' },
  //   { checked: false, name: 'Light fever', value: 'flu' },
  // ];
  // corona = [
  //   { checked: false, name: 'Dry cough', value: 'corona' },
  //   { checked: false, name: 'Sneeze', value: 'corona' },
  //   { checked: false, name: 'Body pain', value: 'corona' },
  //   { checked: false, name: 'Weakness', value: 'corona' },
  //   { checked: false, name: 'High fever', value: 'corona' },
  //   { checked: false, name: 'Difficulty breathing', value: 'corona' },
  // ];

  // diseases = [
  //   'Dry Cough',
  //   'Sneeze',
  //   'Cough',
  //   'Mucus',
  //   'Runny Nose',
  //   'Body Ache',
  //   'Weakness',
  //   'Light Fever',
  //   'Body Pain',
  //   'High Fever',
  //   'Difficulty Breathing',
  // ];

  // ngOnInit(): void {}

  // check() {
  //   var r1 = this.pollution.filter((opt) => opt.checked).map((opt) => opt);
  //   this.selected1 = r1;

  //   var r2 = this.cold.filter((opt) => opt.checked).map((opt) => opt);
  //   this.selected2 = r2;

  //   var r3 = this.flu.filter((opt) => opt.checked).map((opt) => opt);
  //   this.selected3 = r3;

  //   var r4 = this.corona.filter((opt) => opt.checked).map((opt) => opt);
  //   this.selected4 = r4;

  //   if (JSON.stringify(this.selected1) === JSON.stringify(this.pollution)) {
  //     this.result1 = '= Air Pollution';
  //   }

  //   if (JSON.stringify(this.selected2) === JSON.stringify(this.cold)) {
  //     this.result2 = '= Common Cold';
  //   }

  //   if (JSON.stringify(this.selected3) === JSON.stringify(this.flu)) {
  //     this.result3 = '= Flu';
  //   }

  //   if (JSON.stringify(this.selected4) === JSON.stringify(this.corona)) {
  //     this.result4 = '= Coronavirus';
  //   }
  // }

  // checkedValue = '';
  // onChange(chk) {
  //   this.result1 = '';
  //   this.result2 = '';
  //   this.result3 = '';
  //   this.result4 = '';
  //   this.checkedValue = chk.value;
  //   for (let p of this.pollution) {
  //     if (p.value == this.checkedValue) {
  //       this.cold = this.cold.map((obj) => {
  //         if (obj.checked === true) {
  //           obj.checked = false;
  //         }
  //         return obj;
  //       });
  //       this.flu = this.flu.map((obj) => {
  //         if (obj.checked === true) {
  //           obj.checked = false;
  //         }
  //         return obj;
  //       });
  //       this.corona = this.corona.map((obj) => {
  //         if (obj.checked === true) {
  //           obj.checked = false;
  //         }
  //         return obj;
  //       });
  //     }
  //   }
  //   for (let f of this.flu) {
  //     if (f.value == this.checkedValue) {
  //       this.cold = this.cold.map((obj) => {
  //         if (obj.checked === true) {
  //           obj.checked = false;
  //         }
  //         return obj;
  //       });
  //       this.pollution = this.pollution.map((obj) => {
  //         if (obj.checked === true) {
  //           obj.checked = false;
  //         }
  //         return obj;
  //       });
  //       this.corona = this.corona.map((obj) => {
  //         if (obj.checked === true) {
  //           obj.checked = false;
  //         }
  //         return obj;
  //       });
  //     }
  //   }
  //   for (let c of this.cold) {
  //     if (c.value == this.checkedValue) {
  //       this.flu = this.flu.map((obj) => {
  //         if (obj.checked === true) {
  //           obj.checked = false;
  //         }
  //         return obj;
  //       });
  //       this.pollution = this.pollution.map((obj) => {
  //         if (obj.checked === true) {
  //           obj.checked = false;
  //         }
  //         return obj;
  //       });
  //       this.corona = this.corona.map((obj) => {
  //         if (obj.checked === true) {
  //           obj.checked = false;
  //         }
  //         return obj;
  //       });
  //     }
  //   }
  //   for (let cr of this.corona) {
  //     if (cr.value == this.checkedValue) {
  //       this.flu = this.flu.map((obj) => {
  //         if (obj.checked === true) {
  //           obj.checked = false;
  //         }
  //         return obj;
  //       });
  //       this.pollution = this.pollution.map((obj) => {
  //         if (obj.checked === true) {
  //           obj.checked = false;
  //         }
  //         return obj;
  //       });
  //       this.cold = this.cold.map((obj) => {
  //         if (obj.checked === true) {
  //           obj.checked = false;
  //         }
  //         return obj;
  //       });
  //     }
  //   }
  // }

  diseases = [
    { checked: false, name:"Dry Cough"},
    { checked: false, name:"Sneeze"},
    { checked: false, name:"Cough"},
    { checked: false, name:"Mucus"},
    { checked: false, name:"Runny Nose"},
    { checked: false, name:"Body Ache"},
    { checked: false, name:"Weakness"},
    { checked: false, name:"Light Fever"},
    { checked: false, name:"Body Pain"},
    { checked: false, name:"High Fever"},
    { checked: false, name:"Difficulty Breathing"},
  ];
  d1 = [{ checked: true, name:"Dry Cough"},
  { checked: true, name:"Sneeze"}];

  d2 = [
    { checked: true, name:"Sneeze"},
     { checked: true, name:"Cough"},
        { checked: true, name:"Mucus"},
  { checked: true, name:"Runny Nose"}
     ];

d3 = [     { checked: true, name:"Sneeze"},
     { checked: true, name:"Cough"},
        { checked: true, name:"Mucus"},
  { checked: true, name:"Runny Nose"},
  { checked: true, name:"Body Ache"},
    { checked: true, name:"Weakness"},
{ checked: true, name:"Light Fever"},
];

  d4 = [    { checked: true, name:"Dry Cough"},
    { checked: true, name:"Sneeze"},
        { checked: true, name:"Weakness"},
            { checked: true, name:"Body Pain"},
    { checked: true, name:"High Fever"},
  { checked: true, name:"Difficulty Breathing"}]

ngOnInit() {
}
selected1 = [{ checked: true, name:"Dry Cough"},
{ checked: true, name:"Sneeze"}];
selected2 = [];
selected3 = [];
selected4 = [];
diseaseName="";

checkDisease(){
  this.diseaseName="";
  var r1 = this.diseases.filter(opt => opt.checked).map(opt => opt);
  console.log(r1);
  this.selected1 = r1;

  var r2 = this.diseases.filter(opt => opt.checked).map(opt => opt);
  this.selected2 = r2;

  var r3 = this.diseases.filter(opt => opt.checked).map(opt => opt);
  this.selected3 = r3;

  var r4 = this.diseases.filter(opt => opt.checked).map(opt => opt);
  this.selected4 = r4;

    if (JSON.stringify(this.selected1) === JSON.stringify(this.d1)){
      this.diseaseName="Air pollution";
        }
    else if (JSON.stringify(this.selected2) === JSON.stringify(this.d2)){
     this.diseaseName="Common cold";
  }
   else if  (JSON.stringify(this.selected3) === JSON.stringify(this.d3)){
    this.diseaseName="Common Flu";
  }
    else if  (JSON.stringify(this.selected3) === JSON.stringify(this.d4)){
     this.diseaseName="You are likely to be infected with Coronavirus - please consult with doctor soon";
  }
   else{
      this.diseaseName="Its better that you please consult the doctor for safety";
   }

}
}
