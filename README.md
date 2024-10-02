# Lappeenranta City Purchasing Receipts Viewer

This project is a barebones **React front-end** with a **Python (FastAPI) back-end** and an **SQLite3 database**. The application reads Lappeenranta's purchasing receipts from Excel files, downloaded from **Avoin Data**, covering the years 2020 to 2023. The front end provides basic sorting functionalities for efficient data viewing.

## Features
- React front end to display Lappeenranta purchasing receipts.
- FastAPI back end to serve data to the front end.
- SQLite3 database to store and retrieve purchasing data.
- Basic sorting of receipts by various fields in the front end.

## Tech Stack
- **Front End**: React
- **Back End**: FastAPI (Python)
- **Database**: SQLite3
- **Data Source**: Excel files (Avoin Data)

## Installation

1. Clone the repository:
   

3. Install dependencies for both the front end and back end.

   - For the back end (FastAPI):

     pip install -r requirements.txt


   - For the front end (React):

     npm install


4. Run the development servers.

   - For the FastAPI back end:

     ```bash
     uvicorn main:app --reload
     ```

   - For the React front end:

     ```bash
     npm start
     ```
