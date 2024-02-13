import path from 'path';
import url from 'url';

import { loadFiles } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resolversArray = await loadFiles(path.join(__dirname, './resolvers'), {
    // ignores test file extensions in the same directory
    ignoreExtensions: ['test'],
    // ignores children directories and only grabs top level files
    recursive: false,
    ignoreIndex: true,
    requireMethod: async (path) => {
        return await import(url.pathToFileURL(path));
    },
});

const resolvers = mergeResolvers(resolversArray);

export default resolvers;