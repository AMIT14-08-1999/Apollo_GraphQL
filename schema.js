const {gql} = require("apollo-server");

exports.typeDefs = gql`
    type Query{
        hello: String,
        products(filter: ProductsFilterInput): [Product!]!,
        product(id:ID!): Product
        categories:[Category!]!
        category(id:ID!):Category
    }
    type Mutation{
        addCategory(input:addCategoryInput!):Category!
        addProduct(input:addProductInput!):Product!
        addReview(input:addReviewInput!):Review!
        deleteCategory(id:ID!):Boolean!
        deleteProduct(id:ID!):Boolean!
        deleteReview(id:ID!):Boolean!
       updateCategory(id:ID!,input:updateCategoryInput!):Category
       updateProduct(id:ID!,input:updateproductInput!):Product
       updateReview(id:ID!,input:updateReviewInput!):Review
    }
    type Product{
        id:ID!
        name:String!
        description:String!
        image:String!
        quantity:Int!
        price:Float!
        onSale:Boolean!
        category: Category
        reviews:[Review!]!
    }
    type Category{
      id:ID!
      name:String!
      products(filter: ProductsFilterInput): [Product!]!
    }
    type Review{
        id:ID!
        date:String!
        title:String!
        comment:String!
        rating:Int!
        product:Product
    }
    input ProductsFilterInput{
        onSale:Boolean
        avgRating:Int
    }
    input addCategoryInput{
        name:String!
    }

    input updateCategoryInput{
        name:String!
    }
    
    input updateproductInput{
        name:String!
        description:String!
        image:String!
        quantity:Int!
        price:Float!
        onSale:Boolean!
    }

    input addProductInput{
        name:String!
        description:String!
        image:String!
        quantity:Int!
        price:Float!
        onSale:Boolean!
        categoryId:String
    }
    input addReviewInput{
        date:String!
        title:String!
        comment:String!
        rating:Int!
        productId:ID!
    }
    input updateReviewInput{
        date:String!
        title:String!
        comment:String!
        rating:Int!
        productId:ID!
    }
`;
