# Open UV API Application

This project is a simple web application that uses the **OpenUV API** to fetch and display UV index data and maximum UV levels based on latitude and longitude provided by the user. The app is built using **Node.js**, **Express**, **Axios** and **EJS**, with basic HTML and CSS for the frontend.

---

## Installation and Setup

### Prerequisites
- Node.js and npm installed on your machine.
- An API key from [OpenUV](https://www.openuv.io/).

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Valy2255/Open-UV.git
   cd Open-UV
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```bash
   touch .env
   ```
   Add your OpenUV API key to the `.env` file:
   ```
   OPENUV_API_KEY=your_openuv_api_key
   ```

4. Start the server:
   ```bash
   node app.js
   ```
   The app will run on [http://localhost:3000](http://localhost:3000).


## Usage
1. Open the application in your browser at [http://localhost:3000](http://localhost:3000).
2. Enter latitude and longitude in the form fields.
3. Click **Get UV Index** to fetch data from the OpenUV API.
4. View the results including:
   - UV Index
   - Maximum UV Level

---

## Example Input and Output
### **Input**:
- Latitude: `37.7749`
- Longitude: `-122.4194`

### **Output**:
- **UV Index**: 3.2
- **UV Max**: 5.6


