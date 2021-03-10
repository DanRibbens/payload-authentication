const Admins = {
  slug: 'admins',
  auth: true,
  access: {
    admin: () => true,
  },
  admin: {
    useAsTitle: 'email',
  },
};

export default Admins;
