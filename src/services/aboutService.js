import { wixClient } from '../wixClient';

export const getAboutContent = async () => {
  try {
    const result = await wixClient.dataItems.queryDataItems({
      dataCollectionId: 'About',
    }).find();

    return result.items.map((item) => item.data);
  } catch (error) {
    console.error('Failed to fetch About data:', error);
    return [];
  }
};
