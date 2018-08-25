# NumberSystemConverter

Number System Converter is a project dedicated to convert numbers in between different number systems within the range of 2-32. 
This project consists of a library (number-system) containing a small class that will convert to and from decimal system, and a component that uses that class; and the main project, which can be built using Angular Elements in a way the element can be use in any html document without the need of installing angular at all.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Development server

Run `ng build number-system` to build the library.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build number-system` to build the library.
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
Run `ng build:elements` to bundle all the necessary files into a single javascript file

## Running unit tests

Run `ng test number-system` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Usage

This project can be used in several ways. If the library were to be deployed as an npm package, both the converter class and the Angular component could be used by other projects like so:

- `import { NumberSystem } from 'number-system';` To import the converter class into any kind of typescript or ES6 project.

- `import { NumberSystemComponent, NumberSystemModule } from 'number-system';` To use it in an Angular project.

- Copy the file `elements/number-system-converter.js` in any html project and use the element like so:
    ```
    <number-system-converter></number-system-converter>
    <script src="number-system-converter.js"></script>```



## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
