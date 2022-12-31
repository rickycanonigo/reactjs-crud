var Users = [
    {
        id: 1,
        username:"johnsmith",
        name:{
            first:"John",
            middle:"Doe",
            last:"Smith",
        },
        contactNumber: [
            {
              id:1,
              type: "personal",
              number: "0203 544 1234"
            },
            {
              id:2,
              type: "home",
              number: "01962 001234"
            },
            {
              id:3,
              type: "work",
              number: "01962 001235"
            },
            {
              id:4,
              type: "office",
              number: "077 7700 1234"
            }
        ],
        email:[
            {
              id:1,
              type: "personal",
              address: "jo.smith@my-work.com"
            },
            {
              id:2,
              type: "home",
              address: "john@my-social.com"
            }
        ],
    },
    {
      id: 2,
      username:"janesmith",
      name:{
          first:"Jane",
          middle:"Hooper",
          last:"Smith",
      },
      contactNumber: [
          {
            id:1,
            type: "home",
            number: "1234 234 444"
          },
          {
            id:2,
            type: "office",
            number: "01962 001234"
          },
          {
            id:3,
            type: "mobile",
            number: "077 7700 1234"
          }
      ],
      email:[
          {
            id:1,
            type: "work",
            address: "ja.smith@my-work.com"
          },
          {
            id:2,
            type: "home",
            address: "jane@my-social.com"
          }
      ],
  },
  {
    id: 3,
    username:"junesmith",
    name:{
        first:"June",
        middle:"Hooper",
        last:"Smith",
    },
    contactNumber: [
        {
          id:1,
          type: "personal",
          number: "1234 234 444"
        },
        {
          id:2,
          type: "home",
          number: "01962 001234"
        },
        {
          id:3,
          type: "work",
          number: "01962 001235"
        },
        {
          id:4,
          type: "office",
          number: "077 7700 1234"
        }
    ],
    email:[
        {
          id:1,
          type: "personal",
          address: "ja.smith@my-work.com"
        },
        {
          id:2,
          type: "home",
          address: "jane@my-social.com"
        }
    ],
}
]
module.exports = Users;