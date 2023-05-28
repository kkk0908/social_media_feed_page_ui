import { APIS } from "../utils/constant";
import { currentTime, generateCustomerId } from "../utils/helperFunction";
import mock from "./mock";

let data = {
  customerList: [
    {
      id: 1,
      firstname: "Amit",
      lastname: "Kumar",
      designation: "Software Engineer",
    },
    {
      id: 2,
      firstname: "John",
      lastname: "Doe",
      designation: "Product Manager",
    },
    {
      id: 3,
      firstname: "Jane",
      lastname: "Smith",
      designation: "UI/UX Designer",
    },
    {
      id: 4,
      firstname: "Michael",
      lastname: "Johnson",
      designation: "Data Analyst",
    },
    {
      id: 5,
      firstname: "Emily",
      lastname: "Brown",
      designation: "Marketing Specialist",
    },
    {
      id: 6,
      firstname: "David",
      lastname: "Lee",
      designation: "Sales Manager",
    },
    {
      id: 7,
      firstname: "Sarah",
      lastname: "Taylor",
      designation: "HR Coordinator",
    },
    {
      id: 8,
      firstname: "Robert",
      lastname: "Miller",
      designation: "Accountant",
    },
    {
      id: 9,
      firstname: "Jessica",
      lastname: "Wilson",
      designation: "Project Manager",
    },
    {
      id: 10,
      firstname: "Daniel",
      lastname: "Clark",
      designation: "Business Analyst",
    },
    {
      id: 11,
      firstname: "Sophia",
      lastname: "Anderson",
      designation: "Graphic Designer",
    },
    {
      id: 12,
      firstname: "Matthew",
      lastname: "Harris",
      designation: "Software Developer",
    },
    {
      id: 13,
      firstname: "Olivia",
      lastname: "Martinez",
      designation: "Content Writer",
    },
    {
      id: 14,
      firstname: "James",
      lastname: "Moore",
      designation: "Operations Manager",
    },
    {
      id: 15,
      firstname: "Isabella",
      lastname: "Taylor",
      designation: "Marketing Manager",
    },
    {
      id: 16,
      firstname: "Andrew",
      lastname: "Anderson",
      designation: "Frontend Developer",
    },
    {
      id: 17,
      firstname: "Emma",
      lastname: "Wilson",
      designation: "UI Designer",
    },
    {
      id: 18,
      firstname: "Joseph",
      lastname: "Martin",
      designation: "Account Manager",
    },
    {
      id: 19,
      firstname: "Mia",
      lastname: "White",
      designation: "Product Owner",
    },
    {
      id: 20,
      firstname: "William",
      lastname: "Jones",
      designation: "Quality Assurance Analyst",
    },
  ],
};

mock.onGet(APIS.CUSTOMERS).reply(() => {
  return [200, data.customerList];
});

mock.onPost(APIS.CUSTOMERS).reply((config) => {
  const customerData = JSON.parse(config.data);
  const newCustomerId = generateCustomerId();

  const newCustomer = {
    id: newCustomerId,
    ...customerData,
    createdAt: currentTime,
    updatedAt: currentTime,
  };

  // Save the new customer to the mock database
  data.customerList.push(newCustomer);

  return [200, newCustomer]; // Return a response with the saved customer data
});

// Mock handler for updating customer data
mock.onPut(/\/api\/customers\/\d+/).reply((config) => {
  const customerId = Number(config.url?.split("/").pop()); // Extract the customer ID from the URL
  const customerData = JSON.parse(config.data); // Parse the customer data

  // Find the customer in the mock database by ID
  const customerIndex = data.customerList.findIndex(
    (customer) => customer.id === customerId
  );

  if (customerIndex !== -1) {
    // Update the customer data in the mock database
    data.customerList[customerIndex] = {
      ...data.customerList[customerIndex],
      ...customerData,
      updatedAt: currentTime,
    };

    return [200, data.customerList[customerIndex]]; // Return a response with the updated customer data
  } else {
    return [404]; // Return a response with 404 status code if the customer is not found
  }
});

// Mock handler for deleting customer data
mock.onDelete(/\/api\/customers\/\d+/).reply((config) => {
  const customerId = Number(config.url?.split("/").pop()); // Extract the customer ID from the URL

  // Find the customer in the mock database by ID
  const customerIndex = data.customerList.findIndex(
    (customer) => customer.id === customerId
  );

  if (customerIndex !== -1) {
    // Remove the customer from the mock database
    const deletedCustomer = data.customerList.splice(customerIndex, 1);

    return [200, deletedCustomer[0]]; // Return a response with the deleted customer data
  } else {
    return [404]; // Return a response with 404 status code if the customer is not found
  }
});

mock.onAny().passThrough();
