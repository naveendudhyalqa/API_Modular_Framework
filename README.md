# 🚀 Playwright API Automation Modular Framework

## 📌 Project Overview

This project is a **Professional Enterprise-Level API Automation Framework** built using:

* ⚡ Playwright
* 🔷 TypeScript
* 🟢 Node.js

The framework follows a **Modular & Scalable Architecture** designed for:

* Enterprise API Testing
* Real-world automation projects
* CI/CD integration
* Multi-environment execution
* Reusable automation design

This framework was developed step-by-step using industry best practices followed in real software companies.

---

# 🎯 Project Goals

The main objective of this framework is to provide:

✅ Reusable API automation architecture
✅ Scalable framework design
✅ Centralized configurations
✅ Dynamic payload handling
✅ Professional logging & reporting
✅ Multi-environment execution
✅ Enterprise-ready CI/CD support

---

# 🏗️ Framework Architecture

The framework follows a layered architecture:

```text id="jlwmy1"
Test Layer
    ↓
Validation Layer
    ↓
Service Layer
    ↓
Payload Layer
    ↓
API Client Layer
    ↓
ReqRes API
```

This architecture ensures:

* Clean code structure
* Easy maintenance
* Reusability
* Scalability
* Enterprise standards

---

# 📂 Professional Folder Structure

```text id="jlwmy2"
API_Modular_Framework/
│
├── src/
│   │
│   ├── client/
│   │   └── apiClient.ts
│   │
│   ├── config/
│   │   ├── config.ts
│   │   ├── env.ts
│   │   └── headers.ts
│   │
│   ├── constants/
│   │   ├── apiRoutes.ts
│   │   └── authRoutes.ts
│   │
│   ├── payloads/
│   │   ├── userPayload.ts
│   │   └── loginPayload.ts
│   │
│   ├── schemas/
│   │   └── userSchema.json
│   │
│   ├── services/
│   │   ├── baseService.ts
│   │   ├── userService.ts
│   │   └── authService.ts
│   │
│   ├── tests/
│   │   ├── auth/
│   │   └── users/
│   │
│   ├── utils/
│   │   ├── logger.ts
│   │   ├── randomData.ts
│   │   └── tokenManager.ts
│   │
│   ├── validators/
│   │   ├── responseValidator.ts
│   │   ├── schemaValidator.ts
│   │   └── statusCodeValidator.ts
│   │
│   ├── logs/
│   │   └── execution.log
│   │
│   └── reports/
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── .gitignore
├── .env.qa
├── .env.dev
└── .env.uat
```

---

# 🧩 Technologies Used

| Technology      | Purpose                |
| --------------- | ---------------------- |
| ⚡ Playwright    | API Automation         |
| 🔷 TypeScript   | Type Safety            |
| 🟢 Node.js      | Runtime Environment    |
| 🧪 AJV          | JSON Schema Validation |
| 📝 Winston      | Logging Framework      |
| 🎲 Faker        | Dynamic Test Data      |
| 🌐 ReqRes API   | API Testing Practice   |
| 🔄 Git & GitHub | Version Control        |
| ⚙️ Jenkins      | CI/CD Integration      |

---

# 📚 Implemented Phases

---

# ✅ PHASE 1 — Project Initialization

Implemented:

* Node.js project setup
* Playwright installation
* TypeScript configuration
* Initial framework structure

### Features

✔️ Professional TypeScript setup
✔️ Playwright configuration
✔️ Clean project initialization

---

# ✅ PHASE 2 — Folder Structure & Framework Design

Implemented:

* Modular architecture
* Enterprise folder structure
* Layered framework design

### Features

✔️ Scalable structure
✔️ Maintainable architecture
✔️ Separation of concerns

---

# ✅ PHASE 3 — API Client Layer

Implemented reusable HTTP methods:

* GET
* POST
* PUT
* DELETE

### Features

✔️ Centralized API handling
✔️ Reusable request methods
✔️ Base API client architecture

---

# ✅ PHASE 4 — Service Layer

Implemented reusable service classes:

* User Service
* Base Service

### Features

✔️ Business logic separation
✔️ Clean service architecture
✔️ Reusable API workflows

---

# ✅ PHASE 5 — Payload Management Layer

Implemented:

* Dynamic payload generation
* Random test data
* Payload builders

### Features

✔️ Dynamic user creation
✔️ Randomized test execution
✔️ Centralized payload management

---

# ✅ PHASE 6 — Validation Layer

Implemented:

* Status code validation
* Response validation
* JSON schema validation

### Features

✔️ Reusable validators
✔️ AJV schema validation
✔️ Enterprise-level assertions

---

# ✅ PHASE 7 — Configuration & Environment Management

Implemented:

* Multi-environment support
* Environment switching
* Centralized configurations

### Supported Environments

* DEV
* QA
* UAT

### Features

✔️ Environment-based execution
✔️ Centralized headers
✔️ Centralized routes
✔️ Professional config management

---

# ✅ PHASE 8 — Logging & Reporting Layer

Implemented:

* Request logging
* Response logging
* Error handling
* HTML reporting

### Features

✔️ Winston logger integration
✔️ Execution logs
✔️ Professional Playwright HTML reports
✔️ Enterprise debugging support

---

# ✅ PHASE 9 — Authentication & Token Management

Implemented:

* Login API automation
* Token generation
* Centralized token handling
* Bearer authentication

### Features

✔️ Dynamic token management
✔️ Secure authentication flow
✔️ Reusable auth architecture

---

# 🌍 Environment Execution

Execute tests in different environments:

### QA Environment

```bash id="jlwmy3"
TEST_ENV=qa npx playwright test
```

### DEV Environment

```bash id="jlwmy4"
TEST_ENV=dev npx playwright test
```

### UAT Environment

```bash id="jlwmy5"
TEST_ENV=uat npx playwright test
```

---

# 📊 Reporting & Logs

## 📄 HTML Reports

Generated at:

```text id="jlwmy6"
src/reports/html-report/
```

---

## 📝 Execution Logs

Generated at:

```text id="jlwmy7"
src/logs/execution.log
```

---

# 🔥 Key Framework Features

## ✅ Enterprise-Level Architecture

Designed using:

* modular structure
* layered architecture
* reusable components

---

## ✅ Reusable Components

Includes reusable:

* services
* validators
* payloads
* API methods
* configurations

---

## ✅ Dynamic Test Data

Implemented using:

* Faker library
* Random data generation

---

## ✅ Multi-Environment Support

Supports:

* DEV
* QA
* UAT

---

## ✅ Professional Logging

Integrated:

* request logging
* response logging
* error tracking

---

## ✅ Schema Validation

Implemented using:

* AJV JSON schema validation

---

## ✅ CI/CD Ready

Framework prepared for:

* Jenkins
* GitHub Actions
* Azure DevOps

---

# 🧪 Sample Test Coverage

Implemented API validations for:

| API         | Method |
| ----------- | ------ |
| Get User    | GET    |
| Create User | POST   |
| Update User | PUT    |
| Login API   | POST   |

---

# 🚀 Future Enhancements

Planned improvements:

* Jenkins CI/CD Integration
* Docker Integration
* API Contract Testing
* Parallel Execution
* Advanced Reporting
* Data-Driven Testing
* Retry Mechanism
* Database Validation
* Performance Testing Integration

---

# 📖 Learning Outcome

This project helped in understanding:

* Professional API Automation Framework Design
* Enterprise Automation Architecture
* TypeScript-based API Testing
* Playwright API Automation
* Logging & Reporting
* Environment Management
* Authentication Handling
* GitHub & CI/CD Concepts

---

# 🤝 Best Practices Followed

✔️ Clean Code Principles
✔️ Layered Architecture
✔️ Reusable Components
✔️ Separation of Concerns
✔️ Environment-Based Execution
✔️ Centralized Configurations
✔️ Enterprise Logging Standards

---

# 👨‍💻 Author

Developed as a professional learning project for mastering:

* Playwright API Automation
* TypeScript Framework Design
* Enterprise API Testing Architecture
* CI/CD Automation Concepts

---

# ⭐ Conclusion

This framework demonstrates how to build a **Professional Enterprise-Level API Automation Framework** using modern tools and best practices.

It is designed to be:

✅ Scalable
✅ Maintainable
✅ Reusable
✅ CI/CD Ready
✅ Enterprise Friendly
