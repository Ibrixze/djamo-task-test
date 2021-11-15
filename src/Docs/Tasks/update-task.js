export const updateTask = {
    patch: {
        tags: ["Update"], // operation's tag
        description: "Update task", // short desc
        operationId: "updateTask", // unique operation id
        parameters: [
          // expected params
          {
            name: "id", // name of param
            in: "path", // location of param
            schema: {
              $ref: "#/components/schemas/id", // id model
            },
            required: true, // mandatory
            description: "Id of task to be updated", // short desc.
          },
        ],
        // expected responses
        responses: {
          // response code
          200: {
            description: "Task updated successfully", // response desc.
          },
          // response code
          404: {
            description: "Task not found", // response desc.
          },
          // response code
          500: {
            description: "Server error", // response desc.
          },
        },
    },
}