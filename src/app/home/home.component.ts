import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
    // console.log('script ran from home');

    // $('#toggle').on('change', function(){
    //   const val = $(this).is(':checked') ? 'checked' : 'unchecked';
    //   alert(val);
    // });

    // $('.')
    // $('.navbar-collapse a').click(function(){
    //   $(".navbar-collapse").collapse('hide');
    // });
    //
    // $('.menubar>li>a').on('click', function(){
    //   document.getElementById('#toggle').checked = false;
    // });
  }

}
