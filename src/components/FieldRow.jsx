import React from 'react';
import { Input, Select, Button, Space, Card } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const FieldRow = ({ field, onChange, onAdd, onDelete }) => {
  const handleFieldChange = (key, value) => {
    onChange({ ...field, [key]: value });
  };

  const handleNestedChange = (index, updatedField) => {
    const updatedChildren = [...field.children];
    updatedChildren[index] = updatedField;
    handleFieldChange('children', updatedChildren);
  };

  const handleAddNested = () => {
    handleFieldChange('children', [
      ...(field.children || []),
      { key: '', type: 'String', children: [] },
    ]);
  };

  const handleDeleteNested = (index) => {
    const updatedChildren = field.children.filter((_, i) => i !== index);
    handleFieldChange('children', updatedChildren);
  };

  return (
    <Card size="small" style={{ marginBottom: 8 }}>
      <Space align="start">
        <Input
          placeholder="Field Name"
          value={field.key}
          onChange={(e) => handleFieldChange('key', e.target.value)}
        />
       <Select
  value={field.type}
  onChange={(value) => handleFieldChange('type', value)}
  style={{ width: 130 }}
>
  <Option value="String">String</Option>
  <Option value="Number">Number</Option>
  <Option value="Float">Float</Option>
  <Option value="Character">Character</Option>
  <Option value="Boolean">Boolean</Option>
  <Option value="Nested">Nested</Option>
</Select>
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={onDelete}
        />
        {field.type === 'Nested' && (
          <Button
            type="dashed"
            onClick={handleAddNested}
            icon={<PlusOutlined />}
          >
            Add Nested
          </Button>
        )}
      </Space>

      {field.type === 'Nested' &&
        field.children?.map((child, index) => (
          <div style={{ paddingLeft: 20, marginTop: 8 }} key={index}>
            <FieldRow
              field={child}
              onChange={(updatedField) => handleNestedChange(index, updatedField)}
              onAdd={handleAddNested}
              onDelete={() => handleDeleteNested(index)}
            />
          </div>
        ))}
    </Card>
  );
};

export default FieldRow;
