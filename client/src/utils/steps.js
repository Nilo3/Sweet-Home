export const steps = [
    {
      id: "Greet",
      message: "Hi, thanks for visiting Sweet Home",
      trigger: "Ask email"
    },
    {
      id: "Ask email",
      message: "Please enter your email",
      trigger: "waiting1"
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "Please enter your name",
      trigger: "waiting2"
    },
    {
      id: "waiting2",
      user: true,
      trigger: "Name"
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
    },
    {
      id: "Shop",
      message: "Thanks for answer your issue, one of our executives will shortly get back to you to resolve the issue",
      end: true
    },
    {
      id: "Reviews",
      message: "Thanks for answer your issue, one of our executives will shortly get back to you to resolve the issue",
      end: true
    },
    {
      id: "Shipping",
      message: "Thanks for answer your issue, one of our executives will shortly get back to you to resolve the issue",
      end: true
    },
    {
      id: "Payment",
      message: "Thanks for answer your issue, one of our executives will shortly get back to you to resolve the issue",
      end: true
    },
    
  ];