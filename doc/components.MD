# Reusable Angular Tailwind Components

This document explains how to use the reusable UI components built with Angular and styled with Tailwind CSS.

## Shared Module

All reusable components are declared and exported from the `SharedModule` located at:



## Table Of Contents

- [Grid](#grid)

---

## Grid

**Selector:** `<app-grid>`

**Inputs:**

| Name    | Type   | Description                     | Default |
| ------- | ------ | ------------------------------- | ------- |
| columns | number | Number of grid columns (1 to 12) |        |

**Usage:**

```html
<app-grid [columns]="6">
  <div #gridItem class="bg-blue-200">Item 1</div>
  <div #gridItem class="bg-blue-300">Item 2</div>
  <div #gridItem class="bg-blue-400">Item 3</div>
  <div #gridItem class="bg-blue-500">Item 4</div>
  <div #gridItem class="bg-blue-200">Item 1</div>
  <div #gridItem class="bg-blue-300">Item 2</div>
</app-grid>



