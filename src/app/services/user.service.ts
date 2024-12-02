import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  public publicSimpleVar = 'PublicVar';
  private privateSimpleVar = 'PrivateVar'

  static staticMethod(a: number, b: number) {
    return a + b;
  }

  constructor() { }

  private initialize(): void {
    console.log('Initialize');
  }

  public getData(): any {
    return {
      name: 'Nikolay',
      role: 'admin'
    }
  }

  ngOnInit() {

  }
}
