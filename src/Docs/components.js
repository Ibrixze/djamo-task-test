export default {
    components: {
        schemas: {
            // id model
            id: {
                type: "number", // data type
                description: "An id of a task", // desc
                example: 17, // example of an id
            },
            // Task model
            Task: {
                type: "object", // data type
                properties: {
                    id: {
                        type: "number", // data-type
                        description: "Task identification number", // desc
                        example: 17, // example of an id
                    },
                    task: {
                        type: "string", // data-type
                        description: "Task's title", // desc
                        example: "Coding in JavaScript", // example of a title
                    },
                    description: {
                        type: "string", // data type
                        description: "Some description of the task", // desc
                        example: "My first task", // example of a completed value
                    },
                },
            },
          // Task input model
            TaskInput: {
                type: "object", // data type
                properties: {
                    task: {
                        type: "string", // data type
                        description: "Task's title", // desc
                        example: "Coding in JavaScript", // example of a title
                    },
                    description: {
                        type: "string", // data type
                        description: "Some description of the task", // desc
                        example: "My first task", // example of a completed value
                    },
                },
            },
          // error model
            Error: {
                type: "object", //data type
                properties: {
                    message: {
                        type: "string", // data type
                        description: "Error message", // desc
                        example: "Not found", // example of an error message
                    },
                    internal_code: {
                        type: "string", // data type
                        description: "Error internal code", // desc
                        example: "Invalid parameters", // example of an error internal code
                    },
                },
            },
        },
    }
}