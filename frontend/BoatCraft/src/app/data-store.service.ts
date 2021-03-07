import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private slides = [
    { src: "./assets/home/boat-craft-bc-65-scaled.jpg" },
    { src: "./assets/home/boat-craft-2-bc-65-scaled.jpg" },
    { src: "./assets/home/boat-craft-3-bc-65-scaled.jpg" }
  ];
  private cards:any[] =[]
  constructor() { 
    for(let i = 0; i < 8; i++){
      this.cards.push({
        "id": i,
        "name": "Super",
        "price": "50,000",
        "berth": "20",
        "title": "Super-yatch",
        "description1":"Lorem ips dolor amet consec adipisci pellentesque mollis hend accumsan in euismod mo posuere nisi donec malesuada feugiat dapibus. Nunc congue praesent fringilla neque aliquam euismod sem est pellentes lorem dignissim in. Duislla. Ut ut placerat velit, ultricies pharetra ante fusce.",
        "description2":"Aliquam velit sed magna consectetur, at scelerisque elit lobortis. Sed lacus est, dictum eget auctor sit amet, gravida in ipsum. Mauris eget nibh lorem. In imperdiet nec ligula vel vulputate. Nam convallis, urna id lobortis facilisis, velit turpis facilisis eros, eget ultrices enim diam in quam ut est elit, rutrum ac",
        "specs" : [
          {"Length": "19.72 Mtrs"},
          {"Length Of Hull": "19.72 Mtrs"},
          {"Beam":"8.57 Mtrs"},
          {"Depth":"3.58 Mtrs"},
          {"Free Board": "2.48 Mtrs"},
          {"Drought": "1.60 Mtrs"},
          {"Engine": "600(441)HP"},
          {"speed":"20 knots"},
          {"Passenger":"12 Nos"},
          {"Crew": "62 Nos"}
        ]
      });
    }
    
  }

  public getCardsData(){
    return this.cards;
  }

  public getCardsforHome(){
    return this.cards.slice(0,4);
  }

  public getSlideImages(){
    return this.slides;
  }

  public getCardDetailById(id:number){
    let data = this.cards.find(e => Number(e.id) == id);
    return data != -1 ? data : null;
  }
}
