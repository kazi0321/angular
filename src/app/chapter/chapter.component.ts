import { Component, OnInit } from '@angular/core';
import { DetailComponent } from '../detail/detail.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  log: string;
  chapterLists=[]  

  constructor(
      public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.chapterLists=[
      new chapterList('１','説明'),
      new chapterList('２','説明'),
      new chapterList('３','説明')
    ]
  }

  openDetail(): void {
    const dialogRef = this.dialog.open(DetailComponent, {
      data: chapterList
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.log = result;
    });
  }

}
export class chapterList {
  constructor(
    public title:string,
    public detail:string){}
}
