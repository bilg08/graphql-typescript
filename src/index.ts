const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone')
const connectDB = require('./db');
const dotenv = require('dotenv');
const fs = require('fs');
const { resolve } = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const readfile = promisify(fs.readFile);
const stat = promisify(fs.stat);
const schemarootdir = process.cwd() + '/src/schema';
const resolvers = require('./resolver/query/category');
const categoryMutation = require('./resolver/mutation/category');
dotenv.config({
  path: '.env'
});

async function getFiles(dir: string) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(
    subdirs.map(async (subdir: any) => {
      const res = resolve(dir, subdir);
      return (await stat(res)).isDirectory()
        ? getFiles(res) : await readfile(`${__dirname}/schema/${subdir}`, 'utf-8')
    })
  );
  return files;
}


async function main() {
  await connectDB();
  const typeDefs = await getFiles(schemarootdir);
  const server = new ApolloServer({
    typeDefs,
    resolvers: [resolvers, categoryMutation],
  });
  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

  console.log(`🚀 Server listening at: ${url}`);
}
main()
// module.exports.handler = startServerAndCreateLambdaHandler(
//   server,
//   handlers.createAPIGatewayProxyEventV2RequestHandler(),
// );
