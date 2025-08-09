import { createClient, OAuthStrategy } from '@wix/sdk';
import { dataItems } from '@wix/data-items';

export const wixClient = createClient({
  modules: { dataItems },
  auth: OAuthStrategy({
    clientId: '017cde52-7952-46c6-a40d-4f77a394b6b9',
  }),
});
