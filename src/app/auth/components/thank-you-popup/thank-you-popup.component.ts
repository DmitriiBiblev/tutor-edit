import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-thank-you-popup',
  templateUrl: './thank-you-popup.component.html',
  styleUrls: ['./thank-you-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThankYouPopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
