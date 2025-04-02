import { connectDB } from "./data-source";

async function startApp() {
  await connectDB();
  console.log("🚀 Aplicação iniciada!");
}

startApp();