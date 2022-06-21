// npm components
import {
  Button,
  Form,
  Input,
} from 'antd';

// utilities
import axiosInstance from 'assets/utilities/axiosInstance';

// styles
import styles from 'styles/pages/users/create.module.scss';

const FIELDS = ['Name', 'Username', 'Email', 'Company_Name'];

function CreateUser() {
  const handleSubmit = (values) => {
    axiosInstance.post('/users', values);
  };

  return (
    <div className={styles.container}>
      <Form
        layout="vertical"
        onFinish={handleSubmit}
      >
        {FIELDS.map((f) => (
          <Form.Item
            key={f}
            label={f.replaceAll('_', ' ')}
            name={f.toLowerCase()}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        ))}
        <Button
          data-testid="button-submit"
          htmlType="submit"
          type="primary"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateUser;
