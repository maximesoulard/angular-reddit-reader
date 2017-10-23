import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ms-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {

  @Input() url: string;
  @Input() isActive: boolean;
  @Output() onImageModalClosed = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.isActive = false;
    this.onImageModalClosed.emit();
  }

}