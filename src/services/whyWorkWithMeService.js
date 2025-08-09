import { wixClient } from '../wixClient';

export const getWhyWorkWithMeContent = async () => {
  try {
    const result = await wixClient.dataItems.queryDataItems({
      dataCollectionId: 'WhyWorkWithMe',
    }).find();

    return result.items.map((item) => item.data);
  } catch (error) {
    console.error('Failed to fetch WhyWorkWithMe data:', error);
    return [];
  }
};
