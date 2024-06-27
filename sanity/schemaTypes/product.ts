
export const product = {
    name:"product",
    type:"document",
    title: "Product",
    fields: [
        {
            name:"name",
            type:"string",
            title:"Product Name"
        },
        {
            name:"slug",
            type:"slug",
            title:"Slug Name",
            options:{
                source:'name'
            }
        },
        {
            name:"images",
            type:"array",
            title:"Images",
            of:[{type:'image'}]
        },
        {
            name: 'description',
            type: 'text',
            title: 'Short Description',
        },
        {
            name:"price",
            type:"number",
            title:"Price"
        },
        {
            name:"price_id",
            type:"string",
            title:'Price Id'
        },
        {
            name:"category",
            type:"reference",
            title:"Product Category",
            to: [{type: 'category'}]
        }

    ]
}