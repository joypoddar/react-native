export const baseURL = "http://192.168.0.104:3001/"; // json-server --watch db.json -d 2000 -p 3001 -H 192.168.0.104
// export const baseURL = "http://192.168.0.104:8000/"; // json-server --watch db.json -d 2000 -p 8000 -H 192.168.0.104

// https://stackoverflow.com/questions/47417766/calling-locally-hosted-server-from-expo-app
// import Constants from "expo-constants";

// const { manifest } = Constants;

// export const api = `http://${manifest.debuggerHost.split(":").shift()}:3001`; // output same as the value of baseURL
