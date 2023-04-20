export {}
const Category = require('../../model/category');
const { GraphQLError } =  require('graphql');


const addCategory= {
 Mutation: {
    async addCategory(_: any, args: any) {
        try {
            const category = await Category.create({
                name: args.name
            });
            return category
        } catch (error: any) {
            throw new GraphQLError('Бүртгэлтэй категори байна', {
                extensions: {
                  code: 'FORBIDDEN',
                },
              });
        }
        
    }
 }
}
module.exports = addCategory
