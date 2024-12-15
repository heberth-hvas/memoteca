# Memoteca

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Personal Notes

npm install -g @angular/cli -> uses the localhost:4200

ng new projectsName

ng g c componentsName OR ng g c foldersName/componentsName

Property Binding: é quando se usa [] nas tags HTML -> [value]=""

Property Binding: usando {{}} é chamado de interpolação

Event Binding: ocorre do template para o componente (click)=""

Two-Way Data Binding: usa [(ngModel)]="", para passar informações de ambos lados

Para configurar as rotas da aplicação é usado o arquivo -> app-routing.module.ts, usando {path:'', component: componentsName}, em Routes[]

Router Link: é para navegação, na tag button no HTML usar -> routerLink="/component", o nome do componente da pra pegar em app-routing.module.ts

@Input(): é utilizado no componente pai para que um componente filho consiga acessar/receber essa informação/atributo

Conexão com o backend: na service -> pensamento.service.ts -> private readonly API = 'http://localhost:3000/pensamentos';

Criar -> Create -> método POST
Listar -> Read -> método GET
Alterar -> Update -> método PUT
Excluir -> Delete -> método DELETE

Para fazer as rotas deve-se usar o ROUTER, dentro do cancelar, por exemplo, a utilização seria -> this.router.navigate(['listarPensamento']), entre aspas simples a rota desejada
