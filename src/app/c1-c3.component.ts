import {Component} from '@angular/core'


// Dynamically added components
@Component({
  selector: 'c1',
  template: `<h2>c1</h2>`
  
})
export class C1 {
  type = '';
}

@Component({
  selector: 'c2',
  template: `<h2>c2</h2>`
  
})
export class C2 {
}

@Component({
  selector: 'c3',
  template: `<h2>c3</h2>`
  
})
export class C3 {
}


@Component({
    selector: 'c4',
    template: `<h2>c4</h2>`
    
  })
  export class C4{
  }

  
@Component({
    selector: 'c5',
    template: `<h2>c5</h2>`
    
  })
  export class C5 {
  }