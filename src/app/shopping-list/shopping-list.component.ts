import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { LogginService } from '../loggin.service';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  private idChangeSub: Subscription;

  constructor(
    private logginService: LogginService,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.slService.getIngredients();
    // this.idChangeSub = this.slService.ingredientsChanged
    //   .subscribe(
    //     (ingredients: Ingredient[]) => {
    //       this.ingredients = ingredients;
    //     }
    //   );

      this.logginService.printLog('Hello from ShoppingListComponent ngOnInit');
  }

  onEditItem(index: number) {
   // this.slService.startedEditing.next(index);
   this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  ngOnDestroy() {
   // this.idChangeSub.unsubscribe();
  }

}
