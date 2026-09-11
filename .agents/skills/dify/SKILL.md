```markdown
# dify Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches you the core development patterns, coding conventions, and workflows used in the `dify` repository. The codebase is primarily Python (no major framework detected), with a strong emphasis on backend service logic and a modern TypeScript/React UI. The repository uses conventional commits, clear file organization, and robust testing practices to ensure maintainability and collaboration.

## Coding Conventions

- **File Naming:**  
  Use `snake_case` for Python files and directories.
  ```python
  # Good
  user_service.py
  data_repository.py

  # Bad
  UserService.py
  dataRepository.py
  ```

- **Import Style:**  
  Use aliases for imports to clarify usage and avoid conflicts.
  ```python
  import numpy as np
  import pandas as pd
  ```

- **Export Style:**  
  Use default exports (the main class or function is exported by default).
  ```python
  # user_service.py
  class UserService:
      pass
  ```

- **Commit Messages:**  
  Follow [Conventional Commits](https://www.conventionalcommits.org/) with prefixes like `feat`, `fix`, `chore`.
  ```
  feat: add user authentication endpoint
  fix: correct typo in repository method
  chore: update dependencies
  ```

## Workflows

### Feature Development with Tests and Docs
**Trigger:** When adding a significant new feature or API service  
**Command:** `/new-feature`

1. **Implement backend logic:**  
   Add or modify code in core modules, services, controllers, tasks, entities, or repositories.
   ```python
   # api/services/user_service.py
   class UserService:
       def create_user(self, data):
           # implementation
           pass
   ```
2. **Add or update API endpoints:**  
   Update or create controller files to expose new functionality.
   ```python
   # api/controllers/user_controller.py
   from api.services.user_service import UserService

   def create_user_endpoint(request):
       service = UserService()
       return service.create_user(request.data)
   ```
3. **Create or update related tests:**  
   Add unit or integration tests to ensure correctness.
   ```python
   # api/tests/unit_tests/test_user_service.py
   def test_create_user():
       service = UserService()
       assert service.create_user({...}) is not None
   ```
4. **Update or add documentation/templates:**  
   Document the new feature for users and developers.
   ```
   # web/app/components/develop/template/new_feature.mdx
   ## New Feature
   Description and usage instructions...
   ```

**Files Involved:**
- `api/controllers/**/*.py`
- `api/core/**/*.py`
- `api/repositories/**/*.py`
- `api/services/**/*.py`
- `api/tasks/**/*.py`
- `api/tests/**/*.py`
- `web/app/components/develop/template/*.mdx`

---

### UI Component Enhancement with Tests
**Trigger:** When enhancing or adding a UI component  
**Command:** `/ui-enhancement`

1. **Modify or create UI component files:**  
   Implement new features or improvements in `.tsx` files.
   ```tsx
   // web/app/components/Button.tsx
   export default function Button({ label, onClick }) {
     return <button onClick={onClick}>{label}</button>;
   }
   ```
2. **Update or add corresponding test files:**  
   Ensure new or changed components are covered by tests.
   ```tsx
   // web/app/components/__tests__/Button.spec.tsx
   import { render, fireEvent } from '@testing-library/react';
   import Button from '../Button';

   test('calls onClick when clicked', () => {
     const onClick = jest.fn();
     const { getByText } = render(<Button label="Click" onClick={onClick} />);
     fireEvent.click(getByText('Click'));
     expect(onClick).toHaveBeenCalled();
   });
   ```

**Files Involved:**
- `web/app/components/**/*.tsx`
- `web/app/components/**/__tests__/*.spec.tsx`

## Testing Patterns

- **Framework:**  
  UI tests use [Jest](https://jestjs.io/) with the `.spec.tsx` pattern for test files.
- **Location:**  
  Tests are co-located with components in `__tests__` directories or under `api/tests/` for Python.
- **Example:**
  ```tsx
  // web/app/components/__tests__/Tooltip.spec.tsx
  import Tooltip from '../Tooltip';

  test('renders tooltip text', () => {
    // test implementation
  });
  ```

## Commands

| Command         | Purpose                                                  |
|-----------------|----------------------------------------------------------|
| /new-feature    | Start a new backend feature or API service workflow      |
| /ui-enhancement | Enhance or add a UI component with corresponding tests   |
```
