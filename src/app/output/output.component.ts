import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

export interface Test {
  name: string;
}

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.add;
    this.remove;
    // this.drag();
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tests: Test[] = [
    { name: 'test' },
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our test
    if ((value || '').trim()) {
      this.tests.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(test: Test): void {
    const index = this.tests.indexOf(test);

    if (index >= 0) {
      this.tests.splice(index, 1);
    }
  }

  drag() {

    let dragSrcEl = null;

    function handleDragStart(e) {

      this.style.opacity = '0.5';  // this / e.target is the source node.

      dragSrcEl = this;

      e.dataTransfer.effectAllowed = 'move';

      e.dataTransfer.setData('text/html', this.innerHTML);

    }



    function handleDragOver(e) {

      if (e.preventDefault) {

        e.preventDefault(); // Necessary. Allows us to drop.

      }

      e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

      return false;

    }



    function handleDragEnter(e) {

      // this / e.target is the current hover target.

      this.classList.add('over');

    }



    function handleDragLeave(e) {

      this.classList.remove('over');  // this / e.target is previous target element.

    }

    function handleDrop(e) {

      // this / e.target is current target element.

      if (e.stopPropagation) {

        e.stopPropagation(); // stops the browser from redirecting.

      }

      if (dragSrcEl !== this) {

        // Set the source column's HTML to the HTML of the columnwe dropped on.

        dragSrcEl.innerHTML = this.innerHTML;

        this.innerHTML = e.dataTransfer.getData('text/html');

      }



      return false;

    }



    function handleDragEnd(e) {

      // this/e.target is the source node.

      this.style.opacity = '1.0';

      [].forEach.call(cols, function (col) {

        col.classList.remove('over');

      });

    }


    let cols = null;
    cols = document.querySelectorAll('.test');

    [].forEach.call(cols, function (col) {

      col.addEventListener('dragstart', handleDragStart, false);

      col.addEventListener('dragenter', handleDragEnter, false);

      col.addEventListener('dragover', handleDragOver, false);

      col.addEventListener('dragleave', handleDragLeave, false);

      col.addEventListener('drop', handleDrop, false);

      col.addEventListener('dragend', handleDragEnd, false);

    });

  }
}


