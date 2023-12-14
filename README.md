# Using EmailJS with React

This guide will help you integrate EmailJS into your React application to send emails using predefined templates.

## Prerequisites

- Node.js and npm installed on your machine.
- Basic knowledge of React and JavaScript.

## Steps

### 1. Create a React Application

Create a new React application using Create React App or navigate to your existing React project.

```bash
npx create-react-app my-email-app
cd my-email-app
```

### 2. Install EmailJS Package

```bash
npm install emailjs-com
```

### 3. Set Up Email.Js Account
- Sign up for an account on EmailJS and create a new EmailJS service.


### 4. Create `.env` File
Create a `.env` file at the root of your project and add your EmailJS service's credentials.

```text
REACT_APP_EMAIL_SERVICE_ID=your_email_service_id
REACT_APP_EMAIL_TEMPLATE_ID=your_email_template_id
REACT_APP_EMAIL_USER_ID=your_email_user_id
```
### 5. Use EmailJS in React Components
Import the `emailjs` package into your React components and use it to send emails.

#### Example
```JavaScript
import emailjs from 'emailjs-com';

//... your code

  const [email,setEmail] = useState("")
  //...

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: email,
      from_name:name,
      to_name:name, // It's for the auto-reply
      message: message,
    };

    emailJs
      .send(service, template, templateParams, publicKey)
      .then((res) => {
        setStatus(true)
        console.log(res.text);

      })
      .catch((error) => {
        setError(error.text)
        console.log(error.text);
      });
  };

    <form onSubmit={handleSubmit}>
    </form>


```
