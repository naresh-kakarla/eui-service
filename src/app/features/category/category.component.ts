import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/core/services/inventory.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: string[] = [];
 subCategories: string[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.getCategories().subscribe((response) => {
      this.categories = response.categories;
    });
  }
   onHoverCategory(category: string) {
    this.inventoryService.getSubCategories(category).subscribe((res) => {
      this.subCategories = res.subCategories;
    });
  }
}
