## Servi Home

Efficiently connecting users to cleaners.

Servi Home addresses the inconvenience and friction traditionally faced by users when booking cleaning services. Traditionally, users have to manually contact businesses, wait for replies, discuss availability, and specify needs. We transition this multi-step, manual, and unpredictable booking method into a seamless, user-friendly, digital experience. Our platform allows cleaners to directly accept user requests, sending immediate email notifications upon confirmation.

## Getting Started

To set up the Servi Home project on your local machine:

Clone the repository

```bash
# Copy code
git clone [repository_link]
Navigate to the project directory and install dependencies
```

```bash
# Copy code
cd servi-home
npm install
#Setup the environment variables

#Ensure you have your own database URL.
#Set up your JWT secret for authentication.
#Configure your email settings for the nodemailer functionality.
#Run the development server
```

```bash
npm run dev
#For the server setup, refer to the Server Repository. If you're looking at the server repository, #refer back to the Client Repository.
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

Frontend: Next.js, React, TailwindCSS, Zustand
Backend: Prisma, PostgreSQL, Supabase, Nodemailer
Authentication: JWT, Bcrypt
Contributors: Javier Villamizar (myself) - Lead Developer