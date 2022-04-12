import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  

  Box1= [
    {
      pic: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-a12-1.jpg",
      name: "OPPO A12",
      color: "(black,32 GB)",
      price: "9,990",
      rating: 4.5,
      desc: [
        "6 GB RAM | 128 GB ROM",
        "16.23 cm (6.39 inch) Full HD+ Display",
        "48MP + 13MP + 8MP | 20MP Front Camera",
        "4000 mAh Li-polymer Battery",
        "Qualcomm Snapdragon 855 Processor"
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
