
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };
  
  const validateName = (value) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(value);
  };
  
  export const steps = [
    {
      id: "Greet",
      message: "Hi, thanks for visiting Sweet Home",
      trigger: "Ask email"
    },
    {
      id: "Ask email",
      message: "Please enter your email",
      trigger: "validateEmail"
    },
    {
      id: "validateEmail",
      user: true,
      validator: (value) => {
        if (validateEmail(value)) {
          return true;
        } else {
          return "Please enter a valid email";
        }
      },
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "Please enter your name",
      trigger: "validateName"
    },
    {
      id: "validateName",
      user: true,
      validator: (value) => {
        if (validateName(value)) {
          return true;
        } else {
          return "Please enter a valid name";
        }
      },
      trigger: "Name"
    },
    {
      id: "Name",
      message: "Hi {previousValue}, How can I help you today?",
      trigger: "issues"
    },
    {
      id: "Name",
      message: "Hi {previousValue}, How can I help you today?",
      trigger: "issues"
    },
    {
      id: "issues",
      options: [
        { value: "Shop", label: "Shop", trigger: "Shop" },
        { value: "Reviews", label: "Reviews", trigger: "Reviews" },
        { value: "Shipping", label: "Shipping", trigger: "Shipping" },
        { value: "Payment", label: "Payment", trigger: "Payment" },
      ],
      validator: (value) => {
        if (value) {
          return true; // Validation passes if an option is selected
        } else {
          return "Please select an option"; // Validation fails if no option is selected
        }
      }
    },
    {
      id: "Shop",
      message: "Thanks for your answer, one of our executives will shortly get back to you to resolve your problem.",
      end: true
    },
    {
      id: "Reviews",
      message: "Thanks for your answer, one of our executives will shortly get back to you to resolve your problem.",
      end: true
    },
    {
      id: "Shipping",
      message: "Thanks for your answer, one of our executives will shortly get back to you to resolve your problem.",
      end: true
    },
    {
      id: "Payment",
      message: "Thanks or your answer, one of our executives will shortly get back to you to resolve your problem.",
      end: true
    },
    
  ];

  