import {Component, OnInit, ViewChild} from '@angular/core';
import {Dish} from '../dto/Dish';
import {CustomComponent} from '../custom/custom.component';
import {DragScrollComponent} from 'ngx-drag-scroll';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
