# 🧩 JSON Schema Builder

A dynamic React-based UI tool that allows users to visually build JSON Schemas by adding, editing, and nesting fields. Built with Ant Design for a clean user experience and real-time schema preview.

---

## ✨ Features

- 🔧 **Dynamic Field Management**
  - Add, edit, and delete fields
  - Supported types: `String`, `Number`, `Float`, `Boolean`, `Character`, `Nested`
- 🔁 **Recursive Nesting**
  - Build deeply nested schemas with ease using the "Nested" type
- 🧠 **Real-Time JSON Preview**
  - Instantly see the structured schema as you build it
- ⚡ **Responsive UI**
  - Built with [Ant Design](https://ant.design/) for clean and modern components

---

## 🚀 Getting Started
### 🧩 Create React App
```bash
npx create-react-app json-schema-builder
cd json-schema-builder
```
### 📦 Install Dependencies

```bash
npm install
```

### 🪄 Install Ant Design (or ShadCN)
```bash
npm install antd
npm install @ant-design/icons
```
### Import CSS in App.js File: import 'antd/dist/reset.css'; // For Ant Design v5+

### Add a Folder in src folder - Name: Components
### Now in Components folder: Create to files FieldRow.jsx and JsonPreview.jsx
### Now write the code according to you what you have to add in it.

### Run the Project
```bash
npm start
...
