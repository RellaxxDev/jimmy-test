# Jimmy-test
Contains configurations:
  - webpack
  - babel
  - ESLint
  - prettier
  - tsconfig

Includes typescript, redux, router, styled-components, redux-saga

Run npm i command to install packages.

Structure:
    
    - pages        - container wrappers
    - containers   - decorators with some logic, that are sending components to render
    - components   - components without redux connection
    - routes       - routing structure
    - redux        - redux store infrastructure
    - api          - api data request implementation
    - types        - project types
    
Assignment:

A web application with a list of vehicle manufacturers which I can click on to see them in detail.
The whole application is utilising publicly accessible data https://vpic.nhtsa.dot.gov/api/ .
The list of manufacturers is an infinity loading table with these columns: ID, common name and country. Besides that there's an additional column with a button which leads to the detail page.
The detail page shows me exactly the same data as in the list + there's a list of all the model names of all the makes of that one manufacturer.
Keep in mind the best practices for building web applications including performance.

Technical Requirements:
* TypeScript
* React v16+
* Redux
* Redux Saga
