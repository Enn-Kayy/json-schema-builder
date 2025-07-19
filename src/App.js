import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';

import { Button, Typography, Divider } from 'antd';
import FieldRow from './components/FieldRow';
import JsonPreview from './components/JsonPreview';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

function App() {
  const [fields, setFields] = useState([]);

  const handleFieldChange = (index, updatedField) => {
    const newFields = [...fields];
    newFields[index] = updatedField;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([
      ...fields,
      {
        key: '',
        type: 'String',
        children: [],
      },
    ]);
  };

  const handleDeleteField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>JSON Schema Builder by Naman Kapoor 🚀</p>
      </header>

      <div style={{ padding: 20, maxWidth: 800, margin: '0 auto' }}>
        <Title level={2}>🧱 JSON Schema Builder</Title>
        <Divider />
        {fields.map((field, index) => (
          <FieldRow
            key={index}
            field={field}
            onChange={(updatedField) => handleFieldChange(index, updatedField)}
            onDelete={() => handleDeleteField(index)}
          />
        ))}
        <Button
          type="dashed"
          onClick={handleAddField}
          icon={<PlusOutlined />}
          style={{ marginTop: 16 }}
        >
          Add Field
        </Button>
        <Divider />
        <JsonPreview fields={fields} />
      </div>
    </div>
  );
}

export default App;
