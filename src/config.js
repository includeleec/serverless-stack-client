export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_2WpGn3UVjGDIhhRh848THZ6R00yxgxYT3a",
  s3: {
    REGION: "us-east-2",
    BUCKET: "licheng-notes"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://2gxv79vhg0.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_fYxB3HoUQ",
    APP_CLIENT_ID: "44gsvp73f9nh750agncv47i5b0",
    IDENTITY_POOL_ID: "us-east-2:af763a61-cfe0-462d-a08a-5d8fec2cdb82"
  }
};
