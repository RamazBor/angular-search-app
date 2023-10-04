import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  ngOnInit(): void {}
  constructor(){}

  searchText: string = '';

  y: number = 0;

  id:any = "prots";
  tabChange(ids:any){
    this.id = ids;
    console.log(this.id);
  }



    onParentClick(){
      this.y++;
      if(this.y > 0){
      alert("Protocol selected");
      this.y = 0;
      }
    }

    onChildClick(){
      alert("Postman selected");
      this.y--;
  }
  protocols = [
    {
       title: "გადამხდელის შესახებ საჯარო ინფორმაცია",
       postman: "",
       update: "განახლება: 02-თებ-2023"
    },
    {
      title: "ზედნადები [PDF]",
      postman: "postman",
      update: "განახლება: 28-ივლ-2016"
    },
    {
      title: "ანგარიშ-ფაქტურა [PDF]",
      postman: "postman",
      update: "განახლება: 16-ნოე-2022"
    },
    {
     title: "ნსაფ [PDF]",
     postman: "postman",
     update: "განახლება: 14-ივნ-2016"
    },
    {
      title: "ნსაფ ელექტრონული ჟურნალების სახელმძღვანელო",
      postman: "",
      update: "განახლება: 14-ივლ-2015"
    },
    {
      title: "საგადასახადო დოკუმენტი [PDF]",
      postman: "postman",
      update: "განახლება: 16-თებ-2021"
    },
    {
      title: "დაქირავებულ პირთა რეესტრი [PDF]",
      postman: "postman",
      update: "განახლება: 17-იან-2022"
    },
    {
      title: "Duty-Free",
      postman: "",
      update: "განახლება: 30-ნოე-2020"
    },
    {
      title: "Duty-Free სახელმძღვანელო",
      postman: "",
      update: "განახლება: 09-ოქტ-2015"
    },
    {
      title: "საფოსტო გზავნილები",
      postman: "",
      update: "განახლება: 17-იან-2017"
    },
    {
      title: "ტვირთების გადაზიდვა - Cargo",
      postman: "",
      update: "განახლება: 26-მარ-2015"
    },
    {
      title: "SAM მოდული",
      postman: "",
      update: "განახლება: 08-ოქტ-2020"
    },
    {
      title: "სალარო აპარატების დღის ჯამური ინფორმაცია",
      postman: "",
      update: "განახლება: 30-მარ-2017"
    },
    {
      title: "ერთობლივი შემოსავლის შესახებ ინფორმაცია",
      postman: "",
      update: "განახლება: 01-აპრ-2016"
    },
    {
      title: "ორბიჯიანი (SMS) ავტორიზაცია",
      postman: "",
      update: "განახლება: 16-დეკ-2016"
    },
    {
      title: "ღია ავტორიზაცია",
      postman: "",
      update: "განახლება: 05-ნოე-2018"
    },
    {
      title: "ფ/პ შემოსავლების შესახებ ინფორმაციის მიღების სერვისი",
      postman: "",
      update: "განახლება: 24-მარ-2022"
    }
  ];

  apps = [
    {
      title: "ნსაფ აპლიკაცია",
      update: "განახლება: 14-ივნ-2016"
    },
    {
      title: "ნსაფ ელექტრონული ჟურნალები",
      update: "განახლება: 14-ივლ-2015"
    },
    {
      title: "ღია ავტორიზაცია",
      update: "განახლება: 05-ნოე-2018"
    },
    {
      title: "Duty-Free",
      update: "განახლება: 30-ნოე-2020"
    },
    {
      title: "სალარო აპარატების დღის ჯამური ინფორმაცია",
      postman: "",
      update: "განახლება: 30-მარ-2017"
    },
    {
      title: "ერთობლივი შემოსავლის შესახებ ინფორმაცია",
      postman: "",
      update: "განახლება: 01-აპრ-2016"
    },
    {
      title: "ორბიჯიანი (SMS) ავტორიზაცია",
      postman: "",
      update: "განახლება: 16-დეკ-2016"
    }
  ];

}
