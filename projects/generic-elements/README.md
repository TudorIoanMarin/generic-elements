# About

A generic component library for Angular 6 with Angular Material that introduces generic components that communicate via *inputs and outputs*.

# Getting started
Install through npm:
>npm install --save generic-elements

Then include the elements module in your app.module.ts:
>import { GenericElementsModule } from 'generic-elements';

# Content
Current elements:
* Generic Table

Future elements:
* Generic advanced search

# Examples
## Generic table

You can use the generic table either by passing the path to the API from where the component will get an array o items di display, or by passing the data yourseld. The api has three inputs:
* serviceApiPath
* inputData
* tableColumns

Example:
```
<generic-table
[serviceApiName]="'http://your-api/arrayOfObjects'"
[tableColumns]="['propOneOfObject', 'propTwoOfObject', 'propThreeOfObject']">
</generic-table>
```

# Licence
MIT


