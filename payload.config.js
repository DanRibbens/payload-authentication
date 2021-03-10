import { buildConfig } from 'payload/config';
import Users from './collections/Users';
import Admins from "./collections/Admins";

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Admins.slug,
  },
  collections: [
    Admins,
    Users,
  ],
});
