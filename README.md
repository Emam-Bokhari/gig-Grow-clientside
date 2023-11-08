## Website Name: gigGrow

## Website Live Link:("https://gig-grow.web.app/")

## Project Features

### 1. User Registration and Login 

- Users can create new accounts by providing their name, email, password, and an optional profile picture (photoURL). Registered users can then log in using their email and password.

### 2. Google Sign-In Option: 

- Users have the option to sign in using their Google accounts for a more convenient and faster login process.

### 3. Home Page with a Welcome Message:  

- The home page displays a welcoming message and encourages users to take specific actions, such as browsing available jobs or learning more about the platform.

### 4. Job Listing:

- Users can view a list of available jobs. Each job is displayed as a job card, showing essential details like job title, price range, deadline, and a brief description.

### 5. Job Details Page: 

- When users click on a job card, they are taken to the job details page, where they can find more information about the selected job, including a detailed description, price range, and deadline.

### 6. AddJob: 

- Allows users to add a new job posting.
- Collects details like email, job title, category, deadline, minimum price, and maximum price.
- Displays a success message using the "react-hot-toast" library upon successful job addition.
- Redirects users to the "My Posted Jobs" page after adding the job.

### 7. MyPostedJobs: 

- Displays jobs posted by the user.
- Retrieves user-specific job data from the server.
- Allows users to delete their posted jobs.

### 8. Update: 

- Allows users to update their posted jobs.
- Retrieves job details for editing.
- Displays a success message using "react-hot-toast" upon successful job update.
- Redirects users to the "My Posted Jobs" page after updating the job.

### 9. Ability to Place Bids on Jobs:

- Users can place bids on jobs they are interested in. To bid on a job, they need to provide their email, bidding email, bidding amount, and the bid deadline. Once submitted, their bid is recorded.

### 10. BidRequest: 

- Displays bid requests related to the user.
- Retrieves bid request data from the server.
- Provides an option to accept or reject bid requests.

### 11. My Bids:

- Users can view and manage the bids they have placed on various jobs. This page provides information about the jobs they have bid on and allows them to track their bids.

### 12. Integration with Backend API:  

- The frontend communicates with a backend API to fetch and display job listings, job details, and manage user data.

### 13. Responsive Design:

-  The application is designed to work well on a variety of screen sizes and devices, providing a consistent and user-friendly experience.
