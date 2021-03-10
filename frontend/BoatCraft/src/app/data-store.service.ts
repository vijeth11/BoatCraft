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
      this.cards =[
        {
        "id": "BC36",
        "name": "Sea Warrior",
        "price": "10,000",
        "length": "9.35 Mtrs",
        "title": "Sea Warrior",
        "baseImageUrl":"./assets/Boat-Images/BC 36/",
        "gridImages":[
          "BC 36 model.jpeg",
          "BC 36 Plan.jpeg",
          "BC 36 Image.jpeg",
          "BC 36 Image1.jpeg",
          "BC 36 Image2.jpeg",
        ],
        "description1":"Lorem ips dolor amet consec adipisci pellentesque mollis hend accumsan in euismod mo posuere nisi donec malesuada feugiat dapibus. Nunc congue praesent fringilla neque aliquam euismod sem est pellentes lorem dignissim in. Duislla. Ut ut placerat velit, ultricies pharetra ante fusce.",
        "description2":"Aliquam velit sed magna consectetur, at scelerisque elit lobortis. Sed lacus est, dictum eget auctor sit amet, gravida in ipsum. Mauris eget nibh lorem. In imperdiet nec ligula vel vulputate. Nam convallis, urna id lobortis facilisis, velit turpis facilisis eros, eget ultrices enim diam in quam ut est elit, rutrum ac",
        "specs" : [
          {"Length O.A": "9.35 Mtrs"},
          {"Length W.L": "7.40 Mtrs"},
          {"Breadth O.A" : "2.91 Mtrs"},
          {"Depth MID":"1.50 Mtrs"},
          {"Drought mean": "00.60 Mtrs"},
          {"Engine": "310 HP"},
          {"speed":"35 knots"},
          {"Passenger":"12 Nos"},
          {"Crew": "02 Nos"}
        ]
      },
      {
        "id": "BC20",
        "name": "BC 20",
        "price": "10,000",
        "length": "6.00 Mtrs",
        "title": "Base Model",
        "baseImageUrl":"./assets/Boat-Images/BC20/",
        "gridImages":[
          "BC 20 Model.jpeg",
          "BC 20 plan.jpeg",
          "BC 20 image.jpeg",
          "BC 20 image1.jpeg",
          "BC 20 image2.jpeg",
          "BC 20 image3.jpeg"
        ],
        "description1":"Lorem ips dolor amet consec adipisci pellentesque mollis hend accumsan in euismod mo posuere nisi donec malesuada feugiat dapibus. Nunc congue praesent fringilla neque aliquam euismod sem est pellentes lorem dignissim in. Duislla. Ut ut placerat velit, ultricies pharetra ante fusce.",
        "description2":"Aliquam velit sed magna consectetur, at scelerisque elit lobortis. Sed lacus est, dictum eget auctor sit amet, gravida in ipsum. Mauris eget nibh lorem. In imperdiet nec ligula vel vulputate. Nam convallis, urna id lobortis facilisis, velit turpis facilisis eros, eget ultrices enim diam in quam ut est elit, rutrum ac",
        "specs" : [
          {"Length": "6.00 Mtrs"},
          {"Breadth" : "2.35 Mtrs"},
          {"Draft Loaded":"0.40 Mtrs"},
          {"Free Board": "00.80 Mtrs"},
          {"Out Board Motor": "150 HP"},
          {"speed":"30 knots"},
          {"Passenger":"7 Nos"},
          {"Crew": "1 Nos"},
          {"GRT": "4 TONS"},
          {"NRT": "2 TONS"}
        ]
      },
      {
        "id": "BC16",
        "name": "BC 16",
        "price": "10,000",
        "length": "5.00 Mtrs",
        "title": "Base Model",
        "baseImageUrl":"./assets/Boat-Images/BC16/",
        "gridImages":[
          "BC 16 model.jpeg",
          "BC 16 plan.jpeg",
          "BC 16 image.jpeg",
          "BC 16 image1.jpeg"
        ],
        "description1":"Lorem ips dolor amet consec adipisci pellentesque mollis hend accumsan in euismod mo posuere nisi donec malesuada feugiat dapibus. Nunc congue praesent fringilla neque aliquam euismod sem est pellentes lorem dignissim in. Duislla. Ut ut placerat velit, ultricies pharetra ante fusce.",
        "description2":"Aliquam velit sed magna consectetur, at scelerisque elit lobortis. Sed lacus est, dictum eget auctor sit amet, gravida in ipsum. Mauris eget nibh lorem. In imperdiet nec ligula vel vulputate. Nam convallis, urna id lobortis facilisis, velit turpis facilisis eros, eget ultrices enim diam in quam ut est elit, rutrum ac",
        "specs" : [
          {"Length O.A": "5.00 Mtrs"},
          {"Length W.L": "4.37 Mtrs"},
          {"Breadth O.A" : "1.85 Mtrs"},
          {"Depth MID":"0.85 Mtrs"},
          {"Drought mean": "0.28 Mtrs"},
          {"Engine": "40 HP"},
          {"speed":"21 knots"},
          {"Passenger":"6 Nos"},
          {"Crew": "1 Nos"}
        ]
      },
      {
        "id": "BC30",
        "name": "BC30",
        "price": "10,000",
        "length": "11.44 Mtrs",
        "title": "BC 30",
        "baseImageUrl":"./assets/Boat-Images/BC30/",
        "gridImages":[
          "BC 30 model.jpeg",
          "BC 30 plan.jpeg",
          "BC 30 image.jpeg",
          "BC 30 image1.jpeg",
          "BC 30 image2.jpeg"
        ],
        "description1":"Lorem ips dolor amet consec adipisci pellentesque mollis hend accumsan in euismod mo posuere nisi donec malesuada feugiat dapibus. Nunc congue praesent fringilla neque aliquam euismod sem est pellentes lorem dignissim in. Duislla. Ut ut placerat velit, ultricies pharetra ante fusce.",
        "description2":"Aliquam velit sed magna consectetur, at scelerisque elit lobortis. Sed lacus est, dictum eget auctor sit amet, gravida in ipsum. Mauris eget nibh lorem. In imperdiet nec ligula vel vulputate. Nam convallis, urna id lobortis facilisis, velit turpis facilisis eros, eget ultrices enim diam in quam ut est elit, rutrum ac",
        "specs" : [          
          {"Length O.A": "11.44 Mtrs"},
          {"Length W.L": "8.45 Mtrs"},
          {"Breadth O.A" : "3.00 Mtrs"},
          {"Depth MID":"1.65 Mtrs"},
          {"Draft mean": "0.55 Mtrs"},
          {"Engine": "370 HP"},        
        ]
      },
      {
        "id": "BC30Parcil",
        "name": "PARASAIL",
        "price": "10,000",
        "length": "9.35 Mtrs",
        "title": "PARASAIL",
        "baseImageUrl":"./assets/Boat-Images/BC 30 Parcil/",
        "gridImages":[
          "BC 30 model.jpeg",
          "BC 30 plan.jpeg",
          "BC 30 image.jpeg",
          "BC 30 image1.jpeg"
        ],
        "description1":"Lorem ips dolor amet consec adipisci pellentesque mollis hend accumsan in euismod mo posuere nisi donec malesuada feugiat dapibus. Nunc congue praesent fringilla neque aliquam euismod sem est pellentes lorem dignissim in. Duislla. Ut ut placerat velit, ultricies pharetra ante fusce.",
        "description2":"Aliquam velit sed magna consectetur, at scelerisque elit lobortis. Sed lacus est, dictum eget auctor sit amet, gravida in ipsum. Mauris eget nibh lorem. In imperdiet nec ligula vel vulputate. Nam convallis, urna id lobortis facilisis, velit turpis facilisis eros, eget ultrices enim diam in quam ut est elit, rutrum ac",
        "specs" : [
          {"Length O.A": "9.35 Mtrs"},
          {"Length W.L": "7.40 Mtrs"},
          {"Breadth O.A" : "2.91 Mtrs"},
          {"Depth MID":"1.50 Mtrs"},
          {"Draft mean": "0.60 Mtrs"},
          {"Engine": "310 HP"},
          {"Speed": "35 knots"},
          {"Passengers": "12 Nos"},
          {"Crew":"2 No"},  
        ]
      },
      {
        "id": "BC42",
        "name": "BC 42",
        "price": "10,000",
        "length": "13.09 Mtrs",
        "title": "BC 42",
        "baseImageUrl":"./assets/Boat-Images/BC42/",
        "gridImages":[
          "Bc 42 Model.jpeg",
          "BC 42 plan.jpeg",
          "BC 42 image.jpeg",
          "BC 42 image1.jpeg"
        ],
        "description1":"Lorem ips dolor amet consec adipisci pellentesque mollis hend accumsan in euismod mo posuere nisi donec malesuada feugiat dapibus. Nunc congue praesent fringilla neque aliquam euismod sem est pellentes lorem dignissim in. Duislla. Ut ut placerat velit, ultricies pharetra ante fusce.",
        "description2":"Aliquam velit sed magna consectetur, at scelerisque elit lobortis. Sed lacus est, dictum eget auctor sit amet, gravida in ipsum. Mauris eget nibh lorem. In imperdiet nec ligula vel vulputate. Nam convallis, urna id lobortis facilisis, velit turpis facilisis eros, eget ultrices enim diam in quam ut est elit, rutrum ac",
        "specs" : [
          {"Length O.A": "13.09 Mtrs"},
          {"Length W.L": "12.80 Mtrs"},
          {"Breadth O.A" : "3.08 Mtrs"},
          {"Depth":"2.08 Mtrs"},
          {"Draft Loaded":"0.60 Mtrs"},
          {"Free Board": "1.40 Mtrs"},
          {"Engine": "330 HP"},
          {"Speed": "35 Knots"},
          {"Passenger":"6 Nos"},
          {"Crew": "1 Nos"}
        ]
      },
      {
        "id": "BC20Parcil",
        "name": "SEA Quest",
        "price": "10,000",
        "length": "6.00 Mtrs",
        "title": "BC 20",
        "baseImageUrl":"./assets/Boat-Images/BC 20 Parcil/",
        "gridImages":[
          "BC 30 model.jpeg",
          "BC 30 plan.jpeg",
          "BC 30 image.jpeg",
          "BC 30 image1.jpeg",
          "BC 30 image2.jpeg",
          "BC 30 image3.jpeg"
        ],
        "description1":"Lorem ips dolor amet consec adipisci pellentesque mollis hend accumsan in euismod mo posuere nisi donec malesuada feugiat dapibus. Nunc congue praesent fringilla neque aliquam euismod sem est pellentes lorem dignissim in. Duislla. Ut ut placerat velit, ultricies pharetra ante fusce.",
        "description2":"Aliquam velit sed magna consectetur, at scelerisque elit lobortis. Sed lacus est, dictum eget auctor sit amet, gravida in ipsum. Mauris eget nibh lorem. In imperdiet nec ligula vel vulputate. Nam convallis, urna id lobortis facilisis, velit turpis facilisis eros, eget ultrices enim diam in quam ut est elit, rutrum ac",
        "specs" : [
          {"Length": "6.00 Mtrs"},
          {"Breadth" : "2.35 Mtrs"},
          {"Depth":"1.20 Mtrs"},
          {"Draft Loaded":"0.40 Mtrs"},
          {"Free Board": "0.80 Mtrs"},
          {"Out Board Motor": "150 HP"},
          {"Speed": "30 Knots"},
          {"Passenger":"7 Nos"},
          {"Crew": "1 Nos"},
          {"GRT":"4 Tone"},
          {"NRT":"2 Tone"}
        ]
      },
      {
        "id": "CATAMARAN",
        "name": "CATAMARAN",
        "price": "10,000",
        "length": "15.00 Mtrs",
        "title": "CATAMARAN",
        "baseImageUrl":"./assets/Boat-Images/Cataraman/",
        "gridImages":[
          "cataraman model.jpeg",
          "cataraman plan.jpeg",
          "cataraman image.jpeg",
        ],
        "description1":"Lorem ips dolor amet consec adipisci pellentesque mollis hend accumsan in euismod mo posuere nisi donec malesuada feugiat dapibus. Nunc congue praesent fringilla neque aliquam euismod sem est pellentes lorem dignissim in. Duislla. Ut ut placerat velit, ultricies pharetra ante fusce.",
        "description2":"Aliquam velit sed magna consectetur, at scelerisque elit lobortis. Sed lacus est, dictum eget auctor sit amet, gravida in ipsum. Mauris eget nibh lorem. In imperdiet nec ligula vel vulputate. Nam convallis, urna id lobortis facilisis, velit turpis facilisis eros, eget ultrices enim diam in quam ut est elit, rutrum ac",
        "specs" : [
          {"Length O.A": "15.00 Mtrs"},
          {"Breadth" : "7.00 Mtrs"},
          {"Breadth Each Hull" : "1.75 Mtrs"},
          {"Gap Between Hull" : "3.50 Mtrs"},
          {"Depth":"1.80 Mtrs"},
          {"Draght Loaded mean":"0.50 Mtrs"},
          {"Speed": "10 Knots"},
          {"Passenger":"8 Nos"},
          {"Crew": "4 Nos"},
        ]
      },
      {
        "id": "BC 30",
        "name": "PARASAIL WINCH",
        "price": "10,000",
        "length": "9.35 Mtrs",
        "title": "PARASAIL WINCH",
        "baseImageUrl":"./assets/Boat-Images/BC30 Parcil Winch/",
        "gridImages":[
          "BC30 model.jpeg",
          "BC30 plan.jpeg",
          "BC30 image.jpeg",
          "BC30 image1.jpeg",
          "BC30 image2.jpeg",
          "BC30 image3.jpeg",
        ],
        "description1":"Lorem ips dolor amet consec adipisci pellentesque mollis hend accumsan in euismod mo posuere nisi donec malesuada feugiat dapibus. Nunc congue praesent fringilla neque aliquam euismod sem est pellentes lorem dignissim in. Duislla. Ut ut placerat velit, ultricies pharetra ante fusce.",
        "description2":"Aliquam velit sed magna consectetur, at scelerisque elit lobortis. Sed lacus est, dictum eget auctor sit amet, gravida in ipsum. Mauris eget nibh lorem. In imperdiet nec ligula vel vulputate. Nam convallis, urna id lobortis facilisis, velit turpis facilisis eros, eget ultrices enim diam in quam ut est elit, rutrum ac",
        "specs" : [
          {"Length O.A": "9.35 Mtrs"},
          {"LENGTH W.L": "7.40 Mtrs"},
          {"Breadth O.A" : "2.91 Mtrs"},
          {"DEPTH MID" : "1.50 Mtrs"},
          {"Draght mean":"0.60 Mtrs"},
          {"Engine":"310 Hp"},         
          {"Speed": "35 Knots"},
          {"Passenger":"12 Nos"},
          {"Crew": "2 Nos"},
        ]
      },
      {
        "id": "BC 36",
        "name": "SEA WARRIOR",
        "price": "10,000",
        "length": "15.00 Mtrs",
        "title": "SEA WARRIOR",
        "baseImageUrl":"./assets/Boat-Images/BC36/",
        "gridImages":[
          "BC36 model.jpeg",
          "BC36 plan.jpeg",
          "BC36 image.jpeg",
          "BC36 image1.jpeg",
        ],
        "description1":"Lorem ips dolor amet consec adipisci pellentesque mollis hend accumsan in euismod mo posuere nisi donec malesuada feugiat dapibus. Nunc congue praesent fringilla neque aliquam euismod sem est pellentes lorem dignissim in. Duislla. Ut ut placerat velit, ultricies pharetra ante fusce.",
        "description2":"Aliquam velit sed magna consectetur, at scelerisque elit lobortis. Sed lacus est, dictum eget auctor sit amet, gravida in ipsum. Mauris eget nibh lorem. In imperdiet nec ligula vel vulputate. Nam convallis, urna id lobortis facilisis, velit turpis facilisis eros, eget ultrices enim diam in quam ut est elit, rutrum ac",
        "specs" : [
          {"Length O.A": "15.00 Mtrs"},
          {"LENGTH W.L": "13.10 Mtrs"},
          {"Breadth" : "7.00 Mtrs"},
          {"Depth":"2.60 Mtrs"},
          {"Draght Loaded":"0.60 Mtrs"},
          {"Free Board":"1.80 Mtrs"},
          {"Engine": "200 HP"},
          {"Speed": "18 Knots"},
          {"Passenger":"8 Nos"},
          {"Crew": "2 Nos"},
        ]
      },
      {
        "id": "BC 65",
        "name": "BC65",
        "price": "10,000",
        "length": "19.72 Mtrs",
        "title": "BC 65",
        "baseImageUrl":"./assets/Boat-Images/BC65/",
        "gridImages":[
          "BC65 Model.jpeg",
          "BC65 Plan.jpeg",
          "BC65 image.jpeg",
          "BC65 image1.jpeg",
          "BC65 image2.jpeg"
        ],
        "description1":"Lorem ips dolor amet consec adipisci pellentesque mollis hend accumsan in euismod mo posuere nisi donec malesuada feugiat dapibus. Nunc congue praesent fringilla neque aliquam euismod sem est pellentes lorem dignissim in. Duislla. Ut ut placerat velit, ultricies pharetra ante fusce.",
        "description2":"Aliquam velit sed magna consectetur, at scelerisque elit lobortis. Sed lacus est, dictum eget auctor sit amet, gravida in ipsum. Mauris eget nibh lorem. In imperdiet nec ligula vel vulputate. Nam convallis, urna id lobortis facilisis, velit turpis facilisis eros, eget ultrices enim diam in quam ut est elit, rutrum ac",
        "specs" : [
          {"Length": "19.72 Mtrs"},
          {"LENGTH Of Hull": "19.72 Mtrs"},
          {"Beam" : "8.57 Mtrs"},
          {"Depth":"3.58 Mtrs"},
          {"Drought":"1.60 Mtrs"},
          {"Free Board":"2.48 Mtrs"},
          {"Engine": "600 HP"},
          {"Speed": "20 Knots"},
          {"Passenger":"12 Nos"},
          {"Crew": "2 Nos"},
        ]
      },
      {
        "id": "BC 16",
        "name": "Six Seater",
        "price": "10,000",
        "length": "5.00 Mtrs",
        "title": "Six Seaters",
        "baseImageUrl":"./assets/Boat-Images/BC16 Six Seater/",
        "gridImages":[
          "BC16 model.jpeg",
          "BC16 plan.jpeg",
          "BC16 image.jpeg",
          "BC16 image1.jpeg",
          "BC16 image2.jpeg"
        ],
        "description1":"Lorem ips dolor amet consec adipisci pellentesque mollis hend accumsan in euismod mo posuere nisi donec malesuada feugiat dapibus. Nunc congue praesent fringilla neque aliquam euismod sem est pellentes lorem dignissim in. Duislla. Ut ut placerat velit, ultricies pharetra ante fusce.",
        "description2":"Aliquam velit sed magna consectetur, at scelerisque elit lobortis. Sed lacus est, dictum eget auctor sit amet, gravida in ipsum. Mauris eget nibh lorem. In imperdiet nec ligula vel vulputate. Nam convallis, urna id lobortis facilisis, velit turpis facilisis eros, eget ultrices enim diam in quam ut est elit, rutrum ac",
        "specs" : [
          {"Length O.A": "5.00 Mtrs"},
          {"LENGTH W.L": "4.47 Mtrs"},
          {"Breadth O.A": "1.85 Mtrs"},
          {"Depth MLD":"0.85 Mtrs"},
          {"Draft mean":"0.28 Mtrs"},
          {"Engine": "40 HP"},
          {"Speed": "21 Knots"},
          {"Passenger":"6 Nos"},
          {"Crew": "1 Nos"},
        ]
      },
      {
        "id": "CATAMARAN2",
        "name": "CATAMARAN2",
        "price": "10,000",
        "length": "13.55 Mtrs",
        "title": "CATAMARAN2",
        "baseImageUrl":"./assets/Boat-Images/Catraman2/",
        "gridImages":[
          "Catraman model.jpeg",
          "Catraman plan.jpeg",
          "Catraman image.jpeg",
          "Catraman image1.jpeg",
          "Catraman image2.jpeg",
          "Catraman image3.jpeg"
        ],
        "description1":"Lorem ips dolor amet consec adipisci pellentesque mollis hend accumsan in euismod mo posuere nisi donec malesuada feugiat dapibus. Nunc congue praesent fringilla neque aliquam euismod sem est pellentes lorem dignissim in. Duislla. Ut ut placerat velit, ultricies pharetra ante fusce.",
        "description2":"Aliquam velit sed magna consectetur, at scelerisque elit lobortis. Sed lacus est, dictum eget auctor sit amet, gravida in ipsum. Mauris eget nibh lorem. In imperdiet nec ligula vel vulputate. Nam convallis, urna id lobortis facilisis, velit turpis facilisis eros, eget ultrices enim diam in quam ut est elit, rutrum ac",
        "specs" : [
          {"Length O.A": "13.55 Mtrs"},
          {"LENGTH W.L": "13.43 Mtrs"},
          {"Breadth O.A": "6.00 Mtrs"},
          {"Breadth Each Hull": "1.50 Mtrs"},
          {"Gap Between Hull": "2.00 Mtrs"},
          {"Depth":"1.62 Mtrs"},
          {"Draft loaded mean":"0.60 Mtrs"},
          {"Engine": "50 HP"},
          {"Passenger":"50 Nos"},
          {"Crew": "4 Nos"},
        ]
      }
    ]
    
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

  public getCardDetailById(id:string){
    let data = this.cards.find(e => e.id == id);
    return data != -1 ? data : null;
  }

  public getCardImages(item:any){
    let images = [];
    item["gridImages"].forEach(e => {
       images.push(item["baseImageUrl"]+e);
    });
    return images;
  }
}
