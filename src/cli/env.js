const parseEnv = () => {
  console.log(
    Object.entries(process.env)
      .filter((env) => env[0].startsWith("RSS_"))
      .map((env) => `${env[0]}=${env[1]}`)
      .join("; ")
  );
};

parseEnv();