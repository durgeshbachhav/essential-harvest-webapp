import { Client, Account, Databases, Storage } from "appwrite";

//set endpoint
const client = new Client();

client
  // .setEndpoint(import.meta.env.VITE_ENDPOINT)
  .setEndpoint(import.meta.env.VITE_APP_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID)
   // enter your appwrite project ID.

export const account = new Account(client);
export { ID } from 'appwrite';

//Database
export const databases = new Databases(client);

//storage
export const storage = new Storage(client);
