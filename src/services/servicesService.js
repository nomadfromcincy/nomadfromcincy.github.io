import { wixClient } from '../wixClient';

export const getServicesContent = async () => {
  try {
    const result = await wixClient.dataItems.queryDataItems({
      dataCollectionId: 'Services',
    }).find();

    return result.items.map((item) => item.data);
  } catch (error) {
    console.error('Failed to fetch Services data:', error);
    return [];
  }
};
