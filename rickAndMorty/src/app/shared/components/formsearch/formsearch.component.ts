import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formsearch',
  templateUrl: './formsearch.component.html',
  styleUrls: ['./formsearch.component.scss'],
})
export class FormsearchComponent implements OnInit {
  
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch(value: string) {
    //console.log(value)
    if (value && value.length > 3) {
      this.router.navigate(['/character-list'], {
        queryParams: { q: value },
      });
    }
  }
}
