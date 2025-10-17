import { wixClient } from '../wixClient';

export const getContactContent = async () => {
  try {
    const result = await wixClient.dataItems.queryDataItems({
      dataCollectionId: 'Contact',
    }).find();

    return result.items.map((item) => item.data);
  } catch (error) {
    console.error('Failed to fetch Contact data:', error);
    return [];
  }
};
