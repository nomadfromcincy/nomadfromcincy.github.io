import { wixClient } from '../wixClient';

export const getHomeContent = async () => {
  try {
    const result = await wixClient.dataItems.queryDataItems({
      dataCollectionId: 'HomePage',
    }).find();

    return result.items.map((item) => item.data);
  } catch (error) {
    console.error('Failed to fetch Home data:', error);
    return [];
  }
};
