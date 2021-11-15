export const deleteTask = {
    delete: {
        tags: ["Delete"], // operation's tag
        description: "Deleting a task", // short desc
        operationId: "deleteTask", // unique operation id
        parameters: [
          // expected parameters
            {
                name: "tasks", // name of param
                in: "query", // location of param
                schema: {
                    $ref: "task=1", // id model
                },
                required: true, // mandatory
                description: "Deleting a done task", // param desc
            },
        ],
        // expected responses
        responses: {
            // response code
            200: {
                description: "Task deleted successfully", // response desc
            },
            // response code
            404: {
                description: "Task not found", // response desc
            },
            // response code
            500: {
                description: "Server error", // response desc
            },
        },
    },
}