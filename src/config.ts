const serverPortEnv: string = process.env.SERVER_PORT || "";

// normalize data
const serverPort: number = parseInt(serverPortEnv, 10) || 3000;

export { serverPort };
