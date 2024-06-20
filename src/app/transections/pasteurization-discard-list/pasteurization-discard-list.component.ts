import { Component } from '@angular/core';

@Component({
  selector: 'app-pasteurization-discard-list',
  templateUrl: './pasteurization-discard-list.component.html',
  styleUrls: ['./pasteurization-discard-list.component.css']
})
export class PasteurizationDiscardListComponent {
  data = [
    { id: 1,
      MilkCollectionDate: '06/14/2019',
      MilkDiscardDate: '12/04/19',
      DonarNo:'D001993',
      NameoftheDoner:'Satya',
      ReasonforDiscard:'Blood Transfusion',
      AmountodDicardMilk:'160ml',
      Pasturized_yesorno:'No'
   },
 
       { id: 2,
        MilkCollectionDate: '06/14/2019',
        MilkDiscardDate: '12/04/19',
        DonarNo:'D001995',
        NameoftheDoner:'Divya',
        ReasonforDiscard:'Blood Transfusion',
        AmountodDicardMilk:'150ml',
        Pasturized_yesorno:'No'
       },
 
       { id: 3,
        MilkCollectionDate: '06/14/2019',
        MilkDiscardDate: '12/04/19',
        DonarNo:'D001994',
        NameoftheDoner:'Poorna',
        ReasonforDiscard:'Blood Transfusion',
        AmountodDicardMilk:'50ml',
        Pasturized_yesorno:'No'
       },
 
       { id: 4,
        MilkCollectionDate: '06/15/2019',
        MilkDiscardDate: '12/04/19',
        DonarNo:'D001993',
        NameoftheDoner:'Latha',
        ReasonforDiscard:'Blood Transfusion',
        AmountodDicardMilk:'130ml',
        Pasturized_yesorno:'No'
       },
 
       { id: 5,
        MilkCollectionDate: '06/15/2019',
        MilkDiscardDate: '12/04/19',
        DonarNo:'D001994',
        NameoftheDoner:'Geetha',
        ReasonforDiscard:'Blood Transfusion',
        AmountodDicardMilk:'150ml',
        Pasturized_yesorno:'No'
       },
 
       { id: 6,
        MilkCollectionDate: '06/16/2019',
        MilkDiscardDate: '12/04/19',
        DonarNo:'D001995',
        NameoftheDoner:'Surya',
        ReasonforDiscard:'Blood Transfusion',
        AmountodDicardMilk:'150ml',
        Pasturized_yesorno:'No'
       }
   ];
   searchTerm: string = '';
   currentPage: number = 1;
   itemsPerPage: number = 5;
   addItem() {
   }

}
