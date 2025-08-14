const BASE_URL = "https://dev.to/api";

export const getArticles = async (tags: string, quantity: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/articles?tag=${tags}&per_page=${quantity}`
    );
    const data = await response.json();

    return {
      content: [
        {
          type: "text" as const,
          text: JSON.stringify(data, null, 2),
        },
      ],
    };
  } catch (error) {
    return {
      content: [
        {
          type: "text" as const,
          text: `Error fetching articles data: ${
            error instanceof Error ? error.message : "Unknown error"
          }`,
        },
      ],
    };
  }
};

export const getArticlesByUserName = async (userName: string) => {
  try {
    const response = await fetch(`${BASE_URL}/articles?username=${userName}`);
    const data = await response.json();

    return {
      content: [
        {
          type: "text" as const,
          text: JSON.stringify(data, null, 2),
        },
      ],
    };
  } catch (error) {
    return {
      content: [
        {
          type: "text" as const,
          text: `Error fetching articles data: ${
            error instanceof Error ? error.message : "Unknown error"
          }`,
        },
      ],
    };
  }
};
