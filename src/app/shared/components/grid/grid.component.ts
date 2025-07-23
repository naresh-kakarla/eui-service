import {
  Component,
  Input,
  ContentChildren,
  ElementRef,
  QueryList,
  AfterContentInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements AfterContentInit {
  private _columns = 12;

  @Input()
  set columns(value: number) {
    this._columns = value >= 1 && value <= 12 ? value : 12;
  }

  get columns(): number {
    return this._columns;
  }

  @ContentChildren('gridItem', { descendants: true, read: ElementRef })
  items!: QueryList<ElementRef>;

  constructor(private readonly renderer: Renderer2) {}

  ngAfterContentInit(): void {
    const colSpan = 12 / this._columns;
    const colClass = `col-span-${colSpan}`;

    this.items.forEach((item) => {
      for (let i = 1; i <= 12; i++) {
        this.renderer.removeClass(item.nativeElement, `col-span-${i}`);
      }

      this.renderer.addClass(item.nativeElement, colClass);
      this.renderer.addClass(item.nativeElement, 'p-4');
    });
  }
}
