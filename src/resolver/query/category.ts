const {QueryResolvers} = require('../../generated/graphql');
const Category = require('../../model/category');
const helloresolvers: typeof QueryResolvers = {
    
 Query: {
    categories: async() => {
        const categories = await Category.find();
        return categories
    }
 }
}
module.exports = helloresolvers;