const perform = (z, bundle) => {
  return z.legacyScripting.run(bundle, 'trigger', 'user');
};

module.exports = {
  display: {
    description: 'Triggers when a new user is created.',
    directions:
      'Log into your service and paste the below URL into the webhook setup field.',
    hidden: false,
    important: true,
    label: 'New User'
  },
  key: 'user',
  noun: 'User',
  operation: {
    canPaginate: false,
    outputFields: [
      { key: 'attributes__access', type: 'string' },
      { key: 'attributes__changed', type: 'string' },
      { key: 'attributes__created', type: 'string' },
      { key: 'attributes__default_langcode', type: 'boolean' },
      { key: 'attributes__drupal_internal__uid', type: 'integer' },
      { key: 'attributes__init', type: 'string' },
      { key: 'attributes__langcode', type: 'string' },
      { key: 'attributes__login', type: 'string' },
      { key: 'attributes__mail', type: 'string' },
      { key: 'attributes__name', type: 'string' },
      { key: 'attributes__preferred_admin_langcode', type: 'string' },
      { key: 'attributes__preferred_langcode', type: 'string' },
      { key: 'attributes__status', type: 'boolean' },
      { key: 'attributes__timezone', type: 'string' },
      { key: 'id', type: 'string' },
      { key: 'links__self__href', type: 'string' },
      { key: 'relationships__groups__data', type: 'string' },
      { key: 'relationships__groups__links__related__href', type: 'string' },
      { key: 'relationships__groups__links__self__href', type: 'string' },
      { key: 'relationships__groups_type_closed_group__data', type: 'string' },
      {
        key: 'relationships__groups_type_closed_group__links__related__href',
        type: 'string'
      },
      {
        key: 'relationships__groups_type_closed_group__links__self__href',
        type: 'string'
      },
      { key: 'relationships__groups_type_open_group__data', type: 'string' },
      {
        key: 'relationships__groups_type_open_group__links__related__href',
        type: 'string'
      },
      {
        key: 'relationships__groups_type_open_group__links__self__href',
        type: 'string'
      },
      { key: 'relationships__groups_type_public_group__data', type: 'string' },
      {
        key: 'relationships__groups_type_public_group__links__related__href',
        type: 'string'
      },
      {
        key: 'relationships__groups_type_public_group__links__self__href',
        type: 'string'
      },
      { key: 'relationships__roles__data', type: 'string' },
      { key: 'relationships__roles__links__self__href', type: 'string' },
      { key: 'type', type: 'string' }
    ],
    perform: perform,
    sample: {
      attributes: {
        access: '2019-01-23T14:27:14+00:00',
        changed: '2018-10-03T08:10:33+00:00',
        created: '2018-10-03T08:10:33+00:00',
        default_langcode: true,
        drupal_internal__uid: 1,
        init: 'admin@example.com',
        langcode: 'en',
        login: '2019-01-23T11:59:38+00:00',
        mail: 'admin@example.com',
        name: 'admin',
        preferred_langcode: 'en',
        status: true,
        timezone: 'UTC'
      },
      id: 'ec897984-c7c7-45dc-9718-3f97c6889f7e',
      links: {
        self: {
          href:
            'https://localhost/jsonapi/user/user/ec897984-c7c7-45dc-9718-3f97c6889f7e'
        }
      },
      relationships: {
        groups: {
          links: {
            related: {
              href:
                'https://localhost/jsonapi/user/user/ec897984-c7c7-45dc-9718-3f97c6889f7e/groups'
            },
            self: {
              href:
                'https://localhost/jsonapi/user/user/ec897984-c7c7-45dc-9718-3f97c6889f7e/relationships/groups'
            }
          }
        },
        groups_type_closed_group: {
          links: {
            related: {
              href:
                'https://localhost/jsonapi/user/user/ec897984-c7c7-45dc-9718-3f97c6889f7e/groups_type_closed_group'
            },
            self: {
              href:
                'https://localhost/jsonapi/user/user/ec897984-c7c7-45dc-9718-3f97c6889f7e/relationships/groups_type_closed_group'
            }
          }
        },
        groups_type_open_group: {
          links: {
            related: {
              href:
                'https://localhost/jsonapi/user/user/ec897984-c7c7-45dc-9718-3f97c6889f7e/groups_type_open_group'
            },
            self: {
              href:
                'https://localhost/jsonapi/user/user/ec897984-c7c7-45dc-9718-3f97c6889f7e/relationships/groups_type_open_group'
            }
          }
        },
        groups_type_public_group: {
          links: {
            related: {
              href:
                'https://localhost/jsonapi/user/user/ec897984-c7c7-45dc-9718-3f97c6889f7e/groups_type_public_group'
            },
            self: {
              href:
                'https://localhost/jsonapi/user/user/ec897984-c7c7-45dc-9718-3f97c6889f7e/relationships/groups_type_public_group'
            }
          }
        },
        roles: {
          data: [],
          links: {
            self: {
              href:
                'https://localhost/jsonapi/user/user/ec897984-c7c7-45dc-9718-3f97c6889f7e/relationships/roles'
            }
          }
        }
      },
      type: 'user--user'
    }
  }
};
