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
    
    - pages        - _container wrappers_
    - containers   - _decorators with some logic, that are sending components to render_
    - components   - _components without redux connection_
    - routes       - _routing structure_
    - redux        - _redux store infrastructure_
    - api          - _api data request implementation_
    - types        - _project types_
    - fetch-helper - _incapsulate fetch logic_
    
TODO:
  - implement fetch-helper integration
  - implement detail view button column
  - make request and normalization of details
  - create detail view
