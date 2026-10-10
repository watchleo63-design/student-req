# IT Student Directory

This project is an Ionic + Angular mobile-style directory app for browsing students in an IT program. It lives in the workspace folder:

- /workspaces/codespaces-blank/student-directory

The app is a small front-end example that demonstrates common Angular template features, Ionic UI components, and a custom design system for a clean, minimal student-directory experience.

## What this app does

The app shows a list of student records with:

- searchable names and courses
- gender-based filtering
- a selectable highlight state for each student card
- empty-state messaging when no results match

The main implementation is centered in:

- `src/app/home/home.page.ts`
- `src/app/home/home.page.html`
- `src/app/home/home.page.scss`

## Where this project is located

This is an Ionic Angular project generated from the standard starter structure. The important pieces are:

```text
student-directory/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.routes.ts
│   │   └── home/
│   │       ├── home.page.ts
│   │       ├── home.page.html
│   │       └── home.page.scss
│   ├── global.scss
│   └── theme/
│       └── variables.scss
├── package.json
├── angular.json
├── capacitor.config.ts
└── README.md
```

## Stack and purpose

This app is built with:

- Angular 22
- Ionic Framework
- TypeScript
- Standalone Angular components
- SCSS styling

It is designed as a lightweight front-end sample to show how Angular and Ionic work together in a real UI.

## Ionic Components used

The simple student list uses Ionic elements such as:

- `ion-header`
- `ion-toolbar`
- `ion-content`
- `ion-title`
- `ion-searchbar`
- `ion-button`
- `ion-card`
- `ion-card-content`

Example from the template:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>IT Student List</ion-title>
  </ion-toolbar>
</ion-header>

<ion-searchbar
  placeholder="Search student..."
  (ionInput)="onSearchChange($event)">
</ion-searchbar>
```

This is a clear example of Ionic UI components being used inside an Angular page.

## Angular features demonstrated

### 1) Interpolation

Interpolation binds component data into the template using `{{ }}`.

```html
<h2>{{ student.name }}</h2>
<p>{{ student.course }}</p>
```

This outputs the actual student values from the TypeScript component into the UI.

### 2) Event binding

Event binding listens to DOM events and calls component methods.

```html
<ion-button
  fill="outline"
  size="small"
  (click)="toggleHighlight(student.id)">
  Select student
</ion-button>
```

```ts
onSearchChange(event: any) {
  this.searchTerm = event.detail.value || '';
}
```

This allows the screen to react immediately to click and input events.

### 3) Property binding

Property binding updates element properties with component values.

```html
<ion-card [class.selected]="highlightedId === student.id">
```

The card receives the `selected` CSS class when its student is selected. The filter buttons also use property binding to show which filter is active:

```html
<ion-button [class.active]="selectedGender === 'Male'">
  Male
</ion-button>
```

### 4) @for loop

Angular's `@for` block is used to render repeated data.

```html
@for (student of filteredStudents; track student.id) {
  <ion-card>{{ student.name }}</ion-card>
}
```

This replaces repeated template code and makes the list easier to maintain.

### 5) @if / @else conditional rendering

Angular also supports conditional blocks using `@if` and `@else` for showing or hiding content based on state.

```html
@if (filteredStudents.length > 0) {
  <p>Showing {{ filteredStudents.length }} student(s).</p>
} @else {
  <p>No students match your search.</p>
}
```

This is the same idea as the empty-state pattern used in the app, but with a more explicit conditional structure.

## Custom design and assets

This project uses small CSS design elements rather than external images. The styling is in:

- `src/app/home/home.page.scss`
- `src/theme/variables.scss`

The page has a green toolbar, rounded student cards, and a colored circle showing each student's first initial. Selected cards and active filter buttons have their own colors. The styles are beginner-friendly and live in:

```scss
ion-toolbar {
  --background: #315c46;
  --color: #fff;
}

ion-card {
  border: 1px solid #e0e6e1;
  border-radius: 12px;
  box-shadow: none;
}

.selected {
  border: 2px solid #588768;
  background: #f3f8f4;
}
```

This gives the app its own identity and keeps the experience consistent while staying lightweight and easy to edit.

## Summary

This app is a simple Ionic Angular student directory that demonstrates the core concepts of modern Angular templates in a practical UI. It is located in the `student-directory` project folder and shows:

- interpolation
- event binding
- property binding
- `@for` rendering
- `@if / @else` logic
- Ionic components
- custom, self-designed styling

It is a good example of how to build a clean, mobile-first interface with Angular and Ionic.
