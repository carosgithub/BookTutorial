import {Component, Input, OnInit} from '@angular/core';
import {LayoutActions} from "../../store/actions";
import {ProductsActions} from "../../store/actions";
import {Store} from "@ngrx/store";
import * as fromProducts from '../../store/reducers';
import {Product} from "../../model/product";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() searchValue;
  @Input() products: Product[];
  constructor(
    private store: Store<fromProducts.State>
  ) { }

  ngOnInit(): void {
  }


  searchFieldChanged(value: string) {

    this.store.dispatch(ProductsActions.search({ query:value }));
    console.log(value);
  }

}
