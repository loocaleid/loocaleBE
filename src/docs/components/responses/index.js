module.exports = {
  responses: {
    400: {
      description: "Bad request",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/error400",
          },
        },
      },
    },
  },
};
