import {createReducer, on} from "@ngrx/store";
import {ProductsActions} from "../../store/actions";
import {query} from "@angular/animations";
import {Product} from "../../products/model/product";

export const productsFeatureKey = 'products';

export interface State {
  searchValue: string;
  products: Product[];
}

const initialState: State = {
  searchValue: '',
  products: []
};




export const reducer = createReducer(
  initialState,
  on(ProductsActions.search, (state,{ query }) => ({
    ...state,
    searchValue: query,
  })),
  on(ProductsActions.searchSuccess, (state, { products }) => ({
    ...state,
    products,
  }))
);
