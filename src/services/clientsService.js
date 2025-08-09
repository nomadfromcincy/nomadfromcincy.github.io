import { wixClient } from '../wixClient';

export const getClientsContent = async () => {
  try {
    const result = await wixClient.dataItems.queryDataItems({
      dataCollectionId: 'Clients',
    }).find();

    return result.items.map((item) => item.data);
  } catch (error) {
    console.error('Failed to fetch Clients data:', error);
    return [];
  }
};
