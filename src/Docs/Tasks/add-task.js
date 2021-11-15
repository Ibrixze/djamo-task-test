 export const addTask = {
        post: {
        tags: ["Post"], // operation's tag
        description: "Add task", // short desc
        operationId: "AddTask", // unique operation id
        parameters: [], // expected params
        requestBody: {
        // expected request body
            content: {
                // content-type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/TaskInput", // todo input data model
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            201: {
                description: "Task created successfully", // response desc
            },
            // response code
            500: {
                description: "Server error", // response desc
            },
        },
    }
}