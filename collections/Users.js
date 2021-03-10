/**
 * middleware that returns true for anonymous users or admins
 * @param user
 * @returns {boolean}
 */
function isGuest ({ req: { user } }) {
  return user.collection === 'admins' || !user;
}

/**
 * middleware that returns true for users making requests on their own collection item or admins
 * @param user
 * @returns {boolean}
 */
function isSelf ({ req: {user, id} }) {
  return user.collection === 'admins' || user.id === id
}


const Users = {
  slug: 'users',
  auth: {
    verify: true
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: isGuest,
    read: isSelf,
    update: isSelf,
    delete: () => false,
  },
  fields: [
    {
      name: "email",
      label: "Email",
      type: "email",
    },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
  ]
};

export default Users;
