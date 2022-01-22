export default {
    name: 'cats',
    title: 'Cats',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'title',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'breed',
            title: 'Breed',
            type: 'string',
            options: {
                list: []
            }
        }
    ]
}