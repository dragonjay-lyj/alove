import { Client } from '@notionhq/client';

const notion = new Client({ auth: 'secret_kGRwJqy0xt5eYQNHpJ6BTlwS90FGxXzGG1eSmU6cSl6' });

export const getDatabase = async (databaseId) => {
  try {
    console.log(`Fetching database with ID: ${databaseId}`);
    const response = await notion.databases.query({ database_id: databaseId });
    console.log('Database fetched successfully', response);
    return response.results.map(page => ({
      testimonialId: page.properties.Id.title[0].text.content,
      handleName: page.properties.Name.rich_text[0].text.content,
      age: page.properties.Age.number,
      gender: page.properties.Gender.select.name,
      occupation: page.properties.Occupation.select.name,
      residence: page.properties.Residence.rich_text[0].text.content,
      title: page.properties.Title.rich_text[0].text.content,
      content: page.properties.Content.rich_text[0].text.content,
          }));
  } catch (error) {
    console.error('Error fetching database:', error);
    throw error;
  }
};
