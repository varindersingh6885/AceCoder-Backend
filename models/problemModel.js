import mongoose from 'mongoose'

const problemSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    searchTitle : {
        type : String,
        required : true,
        unique : true
    },
    difficulty : {
        type : String,
        required : true
    },
    description : {
        type : Object,
        required : true
    },
    editorial :{
        type : Object,
        required : true
    },
    testcases : [
        {
            input : {
                type : String,
                required : true,
                default : ''
            }        
        }
    ],
    defaultTemplate : [
        {
            language : {
                type : String,
                required : true,
                default : ''
            },
            code : {
                type : String,
                required : true,
            }
        }
    ],
    solution : [
        {
            language : {
                type : String,
                required : true,
                default : ''
            },
            code : {
                type : String,
                required : true,
                default : ''
            }
        }
    ],
})

const Problem = mongoose.model('problem',problemSchema);

export default Problem