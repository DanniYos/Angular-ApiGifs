import { Component, ElementRef, QueryList, ViewChild, ViewChildren, viewChildren } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { ListComponent } from '../../../gifs/components/card-list/card-list.component';

@Component({
  selector: 'share-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


  constructor(private gifsService: GifsService, ){
  }

  public tags(): string[]{
    return this.gifsService.tagHistory;
  }


  public searchTag(tag : string): void{
    this.gifsService.searchTag(tag)
  }

}
