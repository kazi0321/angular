import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.drag();
  }

  drag() {

    let dragSrcEl = null;

    function handleDragStart(e) {


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

        // dragSrcEl.innerHTML = this.innerHTML;
        let textarea = null;
        textarea = document.getElementById('textarea');
        textarea.innerHTML = textarea.innerHTML + e.dataTransfer.getData('text/html');

      }



      return false;

    }



    function handleDragEnd(e) {

      // this/e.target is the source node.


      [].forEach.call(cols, function (col) {

        col.classList.remove('over');

      });

    }


    let cols = null;
    cols = document.querySelectorAll('#textarea');

    [].forEach.call(cols, function (col) {

      col.addEventListener('dragstart', handleDragStart, false);

      col.addEventListener('dragenter', handleDragEnter, false);

      col.addEventListener('dragover', handleDragOver, false);

      col.addEventListener('dragleave', handleDragLeave, false);

      col.addEventListener('drop', handleDrop, false);

      col.addEventListener('dragend', handleDragEnd, false);

    });

  }

  keypress(event) {
    let a = null;
    a = event.target.value;
    a = 'aaa';
    console.log(a);
  }
 myCtrl ($scope) {
    let data = null ;
    data = $scope.data ;
    console.log(data);
}

}
