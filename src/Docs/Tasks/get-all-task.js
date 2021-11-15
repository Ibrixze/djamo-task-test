export const getAllTasks = {
    get: {
        tags: ["Get All"], // operation's tag.
        description: "Get task", // operation's desc.
        operationId: "getAllTasks", // unique operation id.
        parameters: [], // expected params.
        // expected responses
        responses: {
            // response code
            200: {
                description: "Task were obtained", // response desc.
                content: {
                    // content-type
                    "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Task", // task model
                    },
                    },
                },
            },
        },
    },
}