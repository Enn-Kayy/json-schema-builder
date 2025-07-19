import React from 'react';
import { Card } from 'antd';
const generateJson = (fields) => {
  const result = {};

  fields.forEach((field) => {
    if (field.children && field.children.length > 0) {
      // Recursive call for nested fields
      result[field.key] = generateJson(field.children);
    } else {
      switch (field.type) {
        case 'String':
          result[field.key] = 'string';
          break;
        case 'Number':
          result[field.key] = 'number';
          break;
        case 'Boolean':
          result[field.key] = 'boolean';
          break;
        case 'Float':
          result[field.key] = 'float';
          break;
        case 'Character':
          result[field.key] = 'character';
          break;
        default:
          result[field.key] = 'string';
      }
    }
  });

  return result;
};



const JsonPreview = ({ fields }) => {
  return (
    <Card title="Live JSON Preview" size="small">
      <pre>{JSON.stringify(generateJson(fields), null, 2)}</pre>
    </Card>
  );
};

export default JsonPreview;
