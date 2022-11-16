import "./App.css";

// import { Button, message, Upload, Form, Input, Checkbox } from "antd";
// import { UploadOutlined } from "@ant-design/icons";

const mainUrl = "https://54.165.164.131";

function App() {
  const handleChangeFile = (file) => {
    console.log(file);
  };

  const onSubmit = () => {};

  return (
    <div>
      <div>
        <h1>Market basket analysis</h1>

        <div>
          {/* <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            layout="vertical"
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item label="Minimum support" name="username">
              <Input />
            </Form.Item>

            <Form.Item label="something" name="password">
              <Input />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Upload onChange={(e) => handleChangeFile(e)}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form> */}
        </div>
      </div>
    </div>
  );
}

export default App;
