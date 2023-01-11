import axios from "axios";


async function fetchGraphQL( operationsDoc , operationName , variables , token ) {
     const result = await axios.post( process.env.NEXT_PUBLIC_HASURA_ADMIN_URL , {
               query         : operationsDoc ,
               variables     : variables ,
               operationName : operationName ,
          } , {
               headers : {
                    // Authorization: `Bearer ${token}`,
                    "x-hasura-admin-secret" : process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET ,
                    "Content-type"          : "application/json" ,
               }
          }
     );
     
     return await result;
}

export async function fetchIndexProducts( count ) {
     const operationsDocIndexProducts = `
  query IndexProducts($count :Int!) {
      products_productsList(limit: $count) {
      name
      title
      slug
      img
      id
      description
      category
      vari {
        stock
        size
        product_id
        price
        pack
        id
        colorValue
        colorName
      }
    }
  }
`;
     
     const { errors , data : { data } } = await fetchGraphQL(
          operationsDocIndexProducts ,
          "IndexProducts" ,
          { count }
     );
     
     if ( errors ) {
          // handle those errors like a pro
          console.error( errors );
     }
     return data
}


export async function fetchProductContent( slug ) {
     const operationsDocProductContent = `
  query ProductContent($slug: String!) {
     products_productsList(where: {
      slug: {_eq: $slug}
    }) {
      category
      description
      id
      img
      name
      slug
      title
      vari {
        colorValue
        colorName
        id
        pack
        price
        product_id
        size
        stock
      }
    }
  }
`;
     
     
     const { errors , data : { data } } = await fetchGraphQL(
          operationsDocProductContent ,
          "ProductContent" ,
          { slug }
     );
     
     if ( errors ) {
          // handle those errors like a pro
          console.error( errors );
     }
     return data
}


export async function updateProductContent( id , stock ) {
     const operationsDocUpdateProductContent = `
  mutation updateProduct($id: String!,$stock :Int!) {
   update_products_vari(where: {id: {_eq: $id}}, _set: {stock: $stock}) {
      affected_rows
    }
  }
`;
     
     
     const { errors , data : { data } } = await fetchGraphQL(
          operationsDocUpdateProductContent ,
          "updateProduct" ,
          { id , stock }
     );
     
     if ( errors ) {
          // handle those errors like a pro
          console.error( errors );
     }
     return data
}


export async function InsertOrder( address , email , phone , receiver , status ) {
     const operationsDocInsertOrder = `
  mutation InsertOrder($status:Int!, $address: String!,$email: String!,$receiver: String!,$phone :numeric!) {
   insert_products_orders(objects: {address:$address, email:$email
   , phone: $phone, receiver: $receiver,status_id:$status}) {
      affected_rows
      returning { id }
    }
  }
`;
     
     
     const { errors , data : { data } } = await fetchGraphQL(
          operationsDocInsertOrder ,
          "InsertOrder" ,
          { email , address , phone , status , receiver }
     );
     
     if ( errors ) {
          // handle those errors like a pro
          console.error( errors );
     }
     return data
}

export async function UpdateOrderStatus( id , status ) {
     const operationsDocUpdateOrderStatus = `
  mutation updateOrderStatus($status:Int!,$id:Int!) {
   update_products_orders(where: {id: {_eq: $id}}, _set: {status_id: $status}) {
      affected_rows
    }
  }
`;
     
     
     const { errors , data : { data } } = await fetchGraphQL(
          operationsDocUpdateOrderStatus ,
          "updateOrderStatus" ,
          { id,status  }
     );
     
     if ( errors ) {
          // handle those errors like a pro
          console.error( errors );
     }
     return data
}



export async function InsertOrderItems( varId, quantity,productId,total,orderId ) {
     const operationsDocInsertOrderItems = `
  mutation InsertOderItems($varId:String!,$productId:Int!,$orderId:Int!,$quantity:numeric!,$total:numeric!) {
   insert_products_orderItems(objects: {vari_id:$varId, quantity:$quantity
   , price: $total, product_id: $productId,order_id:$orderId}) {
      affected_rows
    }
  }
`;
     
     
     const { errors , data : { data } } = await fetchGraphQL(
          operationsDocInsertOrderItems ,
          "InsertOderItems" ,
          { varId, quantity,productId,total,orderId }
     );
     
     if ( errors ) {
          // handle those errors like a pro
          console.error( errors );
     }
     return data
}








