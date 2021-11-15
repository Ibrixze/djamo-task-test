export const getTask =  {
    get: {
        tags: ["Get a task"], // operation's tag.
        description: "Get a task", // operation's desc.
        operationId: "getTask", // unique operation id
        parameters: [
            // expected params.
            {
                name: "id", // name of the param
                in: "path", // location of the param
                schema: {
                    $ref: "#/components/schemas/id", // data model of the param
                },
                required: true, // Mandatory param
                description: "A single task id", // param desc.
            },
        ],
        // expected responses
        responses: {
            // response code
            200: {
                description: "Task is obtained", // response desc.
                content: {
                    // content-type
                    "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Task", // task data model
                    },
                    },
                },
            },
            // response code
            404: {
                description: "task is not found", // response desc.
                content: {
                    // content-type
                    "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Error", // error data model
                    },
                    },
                },
            },
        },
    }
}