# SeSimplsubmenu

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.9.

## How to use

1. npm i se-simpl-submenu
2. place the **\<se-simpl-submenu\>** place your submenus here **\</se-simpl-submenu\>** component inside the tag that you wish it to be relative to
3. select position: relative for this tag
4. add **seSimplSubmenuItem** directive to the submenus
5. use local variable to access the submenu interface. Available operations are
- `showSubmenu()` - shows the submenus
- `hideSubmenu()` - hide the submenus
- `toggleSubmenu()` - toggle submenus between opened and closed

### Example code

```HTML
<div class="menu">
    some item is here
    <span (click)="subMenu.showSubmenu()">open</span>
    |||
    <span (click)="subMenu.hideSubmenu()">close</span>
    |||
    <span (click)="subMenu.toggleSubmenu()">toggle</span>
    <se-simpl-submenu #subMenu
      [options]="subOptions">
      <div class="menu-item" seSimplSubmenuItem>menu 1</div>
      <div class="menu-item" seSimplSubmenuItem>menu 2</div>
    </se-simpl-submenu>
  </div>
  ```

## Options
 > Add the options here

## Code scaffolding

Run `ng generate component component-name --project se-simpl-submenu` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project se-simpl-submenu`.
> Note: Don't forget to add `--project se-simpl-submenu` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build se-simpl-submenu` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build se-simpl-submenu`, go to the dist folder `cd dist/se-simpl-submenu` and run `npm publish`.

## Running unit tests

Run `ng test se-simpl-submenu` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
