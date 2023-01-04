# Formula 1 Season Search Web Application

This Formula 1 season search web application is a tool that allows users to search throw every season of Formula 1. Users can also see information
about every race from selected season. The application uses TypeScript as the programming language which is more complex JavaScript language and
Angular framework for the Front End of the application. I chose to use the API from Ergast Developer API because the proposed API from Rapid API,
although he could fulfill a varied range of requirements, the number of requests was limited at 100 per day which is very restrain for a web application.

## Used Programming Language, Frameworks, Libraries and API

### [TypeScript](https://www.typescriptlang.org/)
TypeScript is a programming language that is a strict syntactical superset of JavaScript. It is a typed, object-oriented language that is compiled
to plain <em><strong>JavaScript</strong></em>, making it easy to write and maintain large-scale applications. TypeScript adds optional static typing to JavaScript, which can
help catch errors early in the development process and make it easier to maintain and refactor code. It also includes features such as classes,
interfaces, and modules, which are not available in plain JavaScript. TypeScript is often used in the development of large, complex applications,
and it can be used with a variety of frameworks, such as Angular and React. It can be compiled to run in a web browser or on a server using Node.js.

### [Ergast API](http://ergast.com/mrd/)
The Ergast Developer API is an API that provides a historical record of motor racing data for non-commercial purposes. It was created to allow 
developers to access and retrieve data from the Formula 1 database. The API provides data for all Formula 1 races that have taken place since the 
1950 season. It includes information on drivers, teams, circuits, and results for each race. The API uses REST principles and returns data in JSON 
format. It is free to use, but it requires an API key to access the data. The API is maintained by a group of volunteers, and it is updated regularly 
with new data as it becomes available.


### [Angular](https://angular.io/)
Angular is a front-end JavaScript framework that is used for building web applications. It is maintained by Google and a community of individual 
developers and corporations. Angular is a complete rewrite of the popular AngularJS framework. Angular is designed to be modular, with various 
components that can be combined to build web applications. It uses a component-based architecture and a declarative syntax, which makes it easy 
to build and maintain complex applications. Angular is written in TypeScript and uses a syntax that is similar to HTML. It also includes features 
such as data binding, dependency injection, and a router module, which make it easy to build single-page applications.

### [HTML](https://en.wikipedia.org/wiki/HTML)
HTML stands for HyperText Markup Language. It is a standard markup language used to create web pages. HTML is used to structure and format web 
content, as well as to create interactive features that are used in web applications. HTML consists of a series of elements that are represented
by tags, which are used to define the content and structure of the web page. The tags are surrounded by angle brackets, and most tags come in 
pairs, with an opening tag and a closing tag. The content of the web page is placed between the opening and closing tags. HTML can be written 
using a simple text editor, and it is usually saved with a .html or .htm file extension.

### [SASS](https://sass-lang.com/)

SCSS (Sassy CSS) is a style sheet language that is an extension of CSS (Cascading Style Sheets). It is an interpreted, object-oriented language that 
is compiled into regular CSS. SCSS is a superset of CSS, which means that any valid CSS code is also valid SCSS code. SCSS introduces additional 
features that are not available in CSS, such as variables, nested rules, and mixins, which can make it easier to write and maintain complex stylesheets. 
SCSS uses the same syntax as CSS, with a few additional features, such as the ability to use variables, nested rules, and mixins. SCSS files are typically 
saved with a .scss file extension, and they can be compiled into regular CSS files using a preprocessor.


## Technical aspects
### API
All API queries require a GET request using a URL of the form: `http[s]://ergast.com/api/<series>/<season>/<round>/...` where:
- **`<series>`**: should be set to `f1`
- **`<season>`**: is a 4 digit integer
- **`<round>`**: is a 1 or 2 digit integer

The type of information returned by a query is determined by the remainder of the URL. The following options are available:
[Season List](http://ergast.com/mrd/methods/seasons/),
[Qualifying Results](http://ergast.com/mrd/methods/qualifying/),
[Constructor Information](http://ergast.com/mrd/methods/constructors),
[Lap Times](http://ergast.com/mrd/methods/laps/),
[Race Schedule](http://ergast.com/mrd/methods/schedule/),
[Standings](http://ergast.com/mrd/methods/standings/),
[Circuit Information](http://ergast.com/mrd/methods/circuits/),
[Pit Stops](http://ergast.com/mrd/methods/pitstops/),
[Race Results](http://ergast.com/mrd/methods/results/),
[Driver Information](http://ergast.com/mrd/methods/drivers/),
[Finishing Status](http://ergast.com/mrd/methods/status/).

The API supports `XML`, `JSON` and `JSONP` response formats. `XML` is returned by default or when ".xml" is appended to URLs. `JSON` is obtained by appending ".json" 
to URLs. `JSONP` is obtained by appending ".json" and a query parameter named "callback" which must specify a valid Javascript function name or object property 
function reference

### Models

In Angular, models can be either classes or interfaces depending on what suits you better. If you want to have different methods to modify the attributes then it is 
beneficial to use a class if you just want to have a date type then it is better to use a model. In this case I used models which can be seen [here](https://github.com/IbidemGaming/Proiect3/tree/master/src/app/models).

#### [MRdata](src/app/models/mrdata.model.ts)
```typescript
export interface IMRDataModel {
  RaceTable: {season?: string, Races: IRace[]},
  limit: string,
  offset: string,
  series: string,
  total: string,
  url: string,
  xmlns: string,
}
```
#### [Race](src/app/models/race.model.ts)
```typescript
export interface IRace {
  Circuit: ICircuitModel,
  Qualifying: LapTimeModel,
  FirstPractice: LapTimeModel,
  SecondPractice: LapTimeModel,
  ThirdPractice: LapTimeModel

  date: string,
  time: string,
  raceName: string,
  round: string,
  season: string,
  url: string,
}
```
#### [Circuit](src/app/models/circuit.model.ts)
```typescript
export interface ICircuitModel {
  Location: ILocationModel,
  circuitId: string,
  circuitName: string,
  url: string,
}
```
#### [Location](src/app/models/location.model.ts)
```typescript
export interface ILocationModel {
  country: string,
  locality: string,
  lat: string,
  long: string,
}
```
#### [LapTime](src/app/models/lapTime.model.ts)
```typescript
export interface LapTimeModel {
  date: string,
  time: string
}
```
#### [Season](src/app/models/season.model.ts)
```typescript
export interface SeasonModel {
  id: string,
  name: string
}
```
## Setup and run the application
1. First, make sure you have the Node.js install on your machine. If you don't, you can download it from the [Node.js website](https://nodejs.org/en/), 
be sure you have at least a grated version then v16.
2. To install the Angular CLI, open a terminal window and run the following command: 
  ```shell 
  npm install -g @angular/cli
  ```
3. Clone the Django project from GitHub/GitLab to your local machine by running one of the following commands in your terminal:
  ```shell
  git clone git@github.com:IbidemGaming/Proiect3
  ```
  ```shell
  git clone git@gitlab.com:IbidemGaming/Proiect3
  ```
4. Navigate to the project directory in your terminal and run the following command to install the necessary dependencies:
  ```shell
  npm install
  ```
5. Run the Angular development server by typing the following command in the terminal:
  ```shell
  ng serve
  ```
Navigate to `http://localhost:4200/` to use the application. The application will automatically reload if you change any of the source files.
